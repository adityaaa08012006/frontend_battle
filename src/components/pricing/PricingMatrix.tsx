import React, { useEffect, useRef } from 'react';
import { pricingStore, PRICING_TIERS, CurrencyCode, BillingCycle } from './PricingStore';
import { PriceDisplay } from './PriceDisplay';

export const PricingMatrix: React.FC = () => {
  // Button references to allow direct DOM styling updates (performance isolation)
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef = useRef<HTMLButtonElement>(null);
  const usdBtnRef = useRef<HTMLButtonElement>(null);
  const eurBtnRef = useRef<HTMLButtonElement>(null);
  const inrBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateButtonsDOM = (currency: CurrencyCode, cycle: BillingCycle) => {
      // 1. Update Billing Toggles (Selected snaps into Forsythia box with 2px deep border, no layout shift)
      if (cycle === 'monthly') {
        monthlyBtnRef.current?.classList.add('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
        monthlyBtnRef.current?.classList.remove('text-oceanic-noir/40', 'border-transparent');
        
        annualBtnRef.current?.classList.remove('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
        annualBtnRef.current?.classList.add('text-oceanic-noir/40', 'border-transparent');
      } else {
        annualBtnRef.current?.classList.add('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
        annualBtnRef.current?.classList.remove('text-oceanic-noir/40', 'border-transparent');
        
        monthlyBtnRef.current?.classList.remove('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
        monthlyBtnRef.current?.classList.add('text-oceanic-noir/40', 'border-transparent');
      }

      // 2. Update Currency selectors
      const currencyRefs = {
        USD: usdBtnRef.current,
        EUR: eurBtnRef.current,
        INR: inrBtnRef.current,
      };

      (Object.keys(currencyRefs) as CurrencyCode[]).forEach((code) => {
        const btn = currencyRefs[code];
        if (!btn) return;
        if (currency === code) {
          btn.classList.add('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
          btn.classList.remove('text-oceanic-noir/40', 'border-transparent');
        } else {
          btn.classList.remove('bg-forsythia', 'text-oceanic-noir', 'font-bold', 'border-oceanic-noir');
          btn.classList.add('text-oceanic-noir/40', 'border-transparent');
        }
      });
    };

    // Initial state alignment
    const initial = pricingStore.getState();
    updateButtonsDOM(initial.currency, initial.billingCycle);

    // Subscribe to store events
    const unsubscribe = pricingStore.subscribe((state) => {
      updateButtonsDOM(state.currency, state.billingCycle);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-3 mb-16 bg-white border border-oceanic-noir/15 rounded-xl w-full max-w-2xl shadow-none">
        {/* Billing cycle controls */}
        <div className="flex items-center gap-1 w-full sm:w-auto bg-oceanic-noir/[0.03] border border-oceanic-noir/10 p-1 rounded-xl">
          <button
            ref={monthlyBtnRef}
            onClick={() => pricingStore.setState({ billingCycle: 'monthly' })}
            className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 border-2 border-transparent rounded-lg text-xs font-mono tracking-wider transition-all duration-180 cursor-pointer"
            aria-label="Select monthly billing"
          >
            MONTHLY
          </button>
          <button
            ref={annualBtnRef}
            onClick={() => pricingStore.setState({ billingCycle: 'annual' })}
            className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 border-2 border-transparent rounded-lg text-xs font-mono tracking-wider transition-all duration-180 cursor-pointer"
            aria-label="Select annual billing"
          >
            ANNUAL -20%
          </button>
        </div>

        {/* Currency selection tabs */}
        <div className="flex items-center gap-1 w-full sm:w-auto bg-oceanic-noir/[0.03] border border-oceanic-noir/10 p-1 rounded-xl">
          <button
            ref={usdBtnRef}
            onClick={() => pricingStore.setState({ currency: 'USD' })}
            className="flex-1 sm:flex-initial min-h-[44px] min-w-[44px] px-4 py-2.5 border-2 border-transparent rounded-lg text-xs font-mono transition-all duration-180 cursor-pointer"
            aria-label="Use USD pricing"
          >
            USD ($)
          </button>
          <button
            ref={eurBtnRef}
            onClick={() => pricingStore.setState({ currency: 'EUR' })}
            className="flex-1 sm:flex-initial min-h-[44px] min-w-[44px] px-4 py-2.5 border-2 border-transparent rounded-lg text-xs font-mono transition-all duration-180 cursor-pointer"
            aria-label="Use EUR pricing"
          >
            EUR (€)
          </button>
          <button
            ref={inrBtnRef}
            onClick={() => pricingStore.setState({ currency: 'INR' })}
            className="flex-1 sm:flex-initial min-h-[44px] min-w-[44px] px-4 py-2.5 border-2 border-transparent rounded-lg text-xs font-mono transition-all duration-180 cursor-pointer"
            aria-label="Use INR pricing"
          >
            INR (₹)
          </button>
        </div>
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        {PRICING_TIERS.map((tier) => {
          const isRecommended = tier.id === 'pro';

          return (
            <div
              key={tier.id}
              className={`bg-white text-oceanic-noir rounded-xl p-8 flex flex-col justify-between transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer min-h-[480px] shadow-none relative ${
                isRecommended
                  ? 'border border-deep-saffron'
                  : 'border border-oceanic-noir/15'
              }`}
            >
              <div>
                {/* Header Section */}
                <div className="flex items-center justify-between mb-4">
                  {/* Enforce JetBrains Mono font-mono for Pricing Plan Headers */}
                  <h3 className="font-mono font-bold text-xl tracking-wider uppercase">
                    {tier.name}
                  </h3>
                  {isRecommended && (
                    <span className="text-[10px] font-mono tracking-widest text-deep-saffron uppercase font-bold">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                {/* Subtitle description */}
                <p className="font-sans text-xs text-oceanic-noir/60 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Isolated Pricing values */}
                <div className="py-6 border-y border-oceanic-noir/5 mb-8">
                  <PriceDisplay tierName={tier.name} />
                </div>

                {/* Structural feature list */}
                <ul className="flex flex-col gap-4 font-sans text-xs text-oceanic-noir/75">
                  {tier.id === 'starter' && (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        5,000 queries/month
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        1 autonomous agent active
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Standard latency execution
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Community support access
                      </li>
                    </>
                  )}
                  {tier.id === 'pro' && (
                    <>
                      <li className="flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-saffron" />
                        50,000 queries/month
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-saffron" />
                        5 autonomous agents active
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-saffron" />
                        Priority execution latency
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-saffron" />
                        24/7 premium support
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-saffron" />
                        API gateway access
                      </li>
                    </>
                  )}
                  {tier.id === 'enterprise' && (
                    <>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Unlimited queries/month
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Unlimited active agents
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Ultra-low latency SLA
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        Dedicated engineering partner
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nocturnal-expedition" />
                        SSO & Advanced Security
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full mt-8 py-3.5 rounded-lg font-mono text-xs font-bold tracking-widest transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  isRecommended
                    ? 'bg-deep-saffron text-white hover:bg-deep-saffron/90'
                    : 'bg-oceanic-noir text-white hover:bg-oceanic-noir/90'
                }`}
                aria-label={`Acquire ${tier.name} Tier`}
              >
                ACQUIRE TIER
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
