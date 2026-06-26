import React, { useEffect, useRef, useState } from 'react';
import { pricingStore, PRICING_TIERS, BillingCycle } from './PricingStore';
import { PriceDisplay } from './PriceDisplay';
import { CurrencyDropdown } from './CurrencyDropdown';

interface PricingMatrixProps {
  theme: 'light' | 'dark';
}

export const PricingMatrix: React.FC<PricingMatrixProps> = ({ theme }) => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  // Toggle button DOM references
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef = useRef<HTMLButtonElement>(null);

  // Sliding capsule background elements
  const billingHighlightRef = useRef<HTMLDivElement>(null);

  // Maintain current theme in a ref to prevent stale closures in store subscriptions
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const updateButtonsDOM = (cycle: BillingCycle) => {
    const currentTheme = themeRef.current;
    
    // Update Billing Switcher
    const activeCycleBtn = cycle === 'monthly' ? monthlyBtnRef.current : annualBtnRef.current;
    const inactiveCycleBtn = cycle === 'monthly' ? annualBtnRef.current : monthlyBtnRef.current;

    if (activeCycleBtn && inactiveCycleBtn && billingHighlightRef.current) {
      if (currentTheme === 'light') {
        activeCycleBtn.className = "relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none text-[#172836] font-bold";
        inactiveCycleBtn.className = "relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none text-[#172836]/50 hover:text-[#172836]/80 transition-colors";
      } else {
        // Dark theme: Active must be text-[#172836] to ensure contrast on the bright Forsythia background
        activeCycleBtn.className = "relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none text-[#172836] font-bold";
        inactiveCycleBtn.className = "relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none text-white/40 hover:text-white/80 transition-colors";
      }

      // Slide and resize highlight capsule
      billingHighlightRef.current.style.left = `${activeCycleBtn.offsetLeft}px`;
      billingHighlightRef.current.style.top = `${activeCycleBtn.offsetTop}px`;
      billingHighlightRef.current.style.width = `${activeCycleBtn.offsetWidth}px`;
      billingHighlightRef.current.style.height = `${activeCycleBtn.offsetHeight}px`;
    }
  };

  useEffect(() => {
    // Initial capsule positioning
    const initial = pricingStore.getState();
    const timer = setTimeout(() => {
      updateButtonsDOM(initial.billingCycle);
    }, 50);

    // Subscribe to store events (updating highlights in the DOM, bypass React re-render)
    const unsubscribe = pricingStore.subscribe((state) => {
      updateButtonsDOM(state.billingCycle);
    });

    // Recalculate offsets on window resize
    const handleResize = () => {
      const state = pricingStore.getState();
      updateButtonsDOM(state.billingCycle);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update capsule styles immediately on theme toggle
  useEffect(() => {
    const state = pricingStore.getState();
    updateButtonsDOM(state.billingCycle);
  }, [theme]);

  const unselectedBtnClass = theme === 'light'
    ? 'text-[#172836]/50 hover:text-[#172836]/80 transition-colors font-bold'
    : 'text-white/40 hover:text-white/80 transition-colors font-bold';

  return (
    <div className="w-full flex flex-col items-center">
      {/* 44px+ Touch-optimized slider controls - Neo-Brutalist Border Styling */}
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-2.5 mb-4 border-2 w-full max-w-2xl shadow-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        theme === 'light' 
          ? 'bg-white border-[#172836] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)]' 
          : 'bg-[#172836]/40 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]'
      }`}>
        
        {/* Billing cycle slider container */}
        <div className={`relative overflow-hidden p-1 border rounded-lg inline-flex items-center w-full sm:w-auto transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          theme === 'light'
            ? 'bg-oceanic-noir/[0.03] border-[#172836]/10'
            : 'bg-white/[0.03] border-white/10'
        }`}>
          {/* Kinetic sliding capsule */}
          <div
            ref={billingHighlightRef}
            className="absolute bg-forsythia rounded-md shadow-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
            style={{ left: 4, top: 4, width: 0, height: 0 }}
          />
          <button
            ref={monthlyBtnRef}
            onClick={() => pricingStore.setState({ billingCycle: 'monthly' })}
            className={`relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none ${unselectedBtnClass}`}
            aria-label="Select monthly billing"
          >
            MONTHLY
          </button>
          <button
            ref={annualBtnRef}
            onClick={() => pricingStore.setState({ billingCycle: 'annual' })}
            className={`relative z-10 flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider cursor-pointer focus:outline-none ${unselectedBtnClass}`}
            aria-label="Select annual billing"
          >
            ANNUAL -20%
          </button>
        </div>

        {/* Currency selection custom dropdown container */}
        <div className="relative">
          <CurrencyDropdown theme={theme} />
        </div>
      </div>

      {/* Uniform Layout Grid Framework (Not asymmetric sizing) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full max-w-6xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {PRICING_TIERS.map((tier) => {
          const isSelected = selectedTier === tier.id;

          // Dynamic class resolution depending on selection and theme
          const cardTitleStyle = isSelected
            ? (theme === 'light' ? 'text-white font-mono tracking-tight font-bold' : 'text-[#172836] font-mono tracking-tight font-bold')
            : (theme === 'light' ? 'text-slate-900 font-mono tracking-tight font-bold' : 'text-white font-mono tracking-tight font-bold');

          const cardDescStyle = isSelected
            ? (theme === 'light' ? 'text-white/70 font-sans text-sm font-medium tracking-normal normal-case' : 'text-[#172836]/80 font-sans text-sm font-medium tracking-normal normal-case')
            : (theme === 'light' ? 'text-slate-900 font-sans text-sm font-medium tracking-normal normal-case' : 'text-white/70 font-sans text-sm font-medium tracking-normal normal-case');

          const cardDividerStyle = isSelected
            ? (theme === 'light' ? 'border-white/20' : 'border-[#172836]/20')
            : (theme === 'light' ? 'border-[#172836]/15' : 'border-white/15');

          const cardBulletSpanStyle = isSelected
            ? (theme === 'light' ? 'bg-[#FFC801]' : 'bg-[#172836]')
            : (theme === 'light' ? 'bg-[#172836]/30' : 'bg-forsythia');

          const cardFeatureListStyle = isSelected
            ? (theme === 'light' ? 'text-[#FFC801] font-sans text-sm font-medium tracking-normal normal-case' : 'text-[#172836] font-sans text-sm font-medium tracking-normal normal-case')
            : (theme === 'light' ? 'text-slate-900 font-sans text-sm font-medium tracking-normal normal-case' : 'text-white/70 font-sans text-sm font-medium tracking-normal normal-case');

          const cardButtonStyle = isSelected
            ? (theme === 'light' 
                ? 'bg-[#FFC801] text-[#172836] border-2 border-[#FFC801] hover:bg-[#FFC801]/90 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] font-mono font-extrabold uppercase tracking-tight' 
                : 'bg-[#172836] text-white border-2 border-[#172836] hover:bg-[#172836]/90 shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)] font-mono font-extrabold uppercase tracking-tight')
            : (theme === 'light'
                ? 'bg-white text-[#172836] border-2 border-[#172836] hover:bg-[#172836] hover:text-white shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)] font-mono font-extrabold uppercase tracking-tight'
                : 'bg-white/[0.04] border-2 border-white/20 text-white hover:bg-white/[0.08] hover:border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] font-mono font-extrabold uppercase tracking-tight');

          const cardContent = (
            <>
              <div>
                {/* Header Section */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg tracking-wider flex items-center gap-2 ${cardTitleStyle}`}>
                    {tier.name}
                  </h3>
                  {tier.id === 'pro' && (
                    <span className={`text-[10px] font-mono tracking-widest uppercase font-extrabold px-2 py-0.5 rounded border ${
                      isSelected 
                        ? (theme === 'light' ? 'text-forsythia bg-white/10 border-white/20' : 'text-[#172836] bg-[#172836]/10 border-[#172836]/20')
                        : 'text-forsythia bg-oceanic-noir border-forsythia/35'
                    }`}>
                      RECOMMENDED
                    </span>
                  )}
                </div>

                {/* Subtitle description */}
                <p className={`text-xs leading-relaxed mb-4 ${cardDescStyle}`}>
                  {tier.description}
                </p>

                {/* Isolated Pricing values */}
                <div className={`py-4 border-y mb-5 ${cardDividerStyle}`}>
                  <PriceDisplay tierName={tier.name} />
                </div>

                {/* Feature list with individual hover states */}
                <ul className="flex flex-col gap-3 text-xs">
                  {tier.id === 'starter' && (
                    <>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        AI Automation
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Analytics
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        API Access
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        5,000 queries/month
                      </li>
                    </>
                  )}
                  {tier.id === 'pro' && (
                    <>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Everything in Starter
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Unlimited Workflows
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Priority Support
                      </li>
                    </>
                  )}
                  {tier.id === 'enterprise' && (
                    <>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Everything in Pro
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Dedicated Engineering Partner
                      </li>
                      <li className={`group/item flex items-center gap-2 transition-colors duration-200 ${cardFeatureListStyle}`}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${cardBulletSpanStyle}`} />
                        Dedicated Uptime SLA
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Action Button: flips color selection states */}
              <button
                className={`w-full mt-6 rounded-lg transition-all duration-300 cursor-pointer py-3.5 ${cardButtonStyle}`}
                aria-label={`Acquire ${tier.name} Tier`}
              >
                ACQUIRE TIER
              </button>
            </>
          );

          // Render active or unselected cards with selections inversion parameters
          if (isSelected) {
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`rounded-xl p-1 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[380px] cursor-pointer ${
                  theme === 'light'
                    ? 'bg-[#172836] text-white border-2 border-[#172836] shadow-[6px_6px_0px_0px_rgba(255,200,1,1)] scale-[1.01]'
                    : 'bg-[#FFC801] text-[#172836] border-2 border-[#FFC801] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] scale-[1.01]'
                } z-10`}
              >
                {/* Double-hairline outer & inner borders */}
                <div className={`flex-1 flex flex-col justify-between p-4 border-2 rounded-[10px] ${
                  theme === 'light' ? 'border-white/20' : 'border-[#172836]/20'
                }`}>
                  {cardContent}
                </div>
              </div>
            );
          }

          // Unselected card structure
          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[380px] cursor-pointer border-2 ${
                theme === 'light'
                  ? 'bg-white border-[#172836] text-slate-900 shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(23,40,54,1)]'
                  : 'bg-white/[0.02] backdrop-blur-md border-white/20 text-white hover:border-white hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]'
              }`}
            >
              <div className="flex-1 flex flex-col justify-between">
                {cardContent}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
