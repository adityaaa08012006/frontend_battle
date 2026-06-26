import React, { useEffect, useRef } from 'react';
import { pricingStore, calculatePrice, PRICING_TIERS, CurrencyCode, BillingCycle } from './PricingStore';

interface PriceDisplayProps {
  tierName: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ tierName }) => {
  const priceRef = useRef<HTMLSpanElement>(null);
  const billingLabelRef = useRef<HTMLSpanElement>(null);

  // Resolve base rates from the dynamic config matrix
  const tier = PRICING_TIERS.find(
    (t) => t.name.toLowerCase() === tierName.toLowerCase() || t.id.toLowerCase() === tierName.toLowerCase()
  );
  const baseMonthlyRate = tier ? tier.baseMonthlyRate : 0;

  useEffect(() => {
    const updateDOM = (currency: CurrencyCode, cycle: BillingCycle) => {
      const { formatted, billedLabel } = calculatePrice(baseMonthlyRate, currency, cycle);
      
      if (priceRef.current) {
        priceRef.current.textContent = formatted;
      }
      if (billingLabelRef.current) {
        billingLabelRef.current.textContent = billedLabel;
      }
    };

    // Initial load sync
    const initialState = pricingStore.getState();
    updateDOM(initialState.currency, initialState.billingCycle);

    // Subscribe directly to the vanilla state publisher with 100% state isolation
    const unsubscribe = pricingStore.subscribe((state) => {
      updateDOM(state.currency, state.billingCycle);
    });

    return unsubscribe;
  }, [baseMonthlyRate]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1">
        {/* Isolated numeric text node */}
        <span ref={priceRef} className="text-4xl font-extrabold font-mono text-current">
          -
        </span>
        <span className="text-sm font-mono opacity-50">/mo</span>
      </div>
      {/* Isolated billing period text node */}
      <span ref={billingLabelRef} className="text-[10px] font-mono opacity-40 uppercase tracking-wider min-h-[14px]">
        -
      </span>
    </div>
  );
};
