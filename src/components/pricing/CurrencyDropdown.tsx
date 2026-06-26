import React, { useState, useEffect, useRef } from 'react';
import { pricingStore, REGIONAL_TARIFFS, CurrencyCode } from './PricingStore';

interface CurrencyDropdownProps {
  theme: 'light' | 'dark';
}

export const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateLabel = (currency: CurrencyCode) => {
      if (labelRef.current) {
        labelRef.current.textContent = REGIONAL_TARIFFS[currency].label;
      }
    };

    // Initialize label
    updateLabel(pricingStore.getState().currency);

    // Subscribe directly to store updates to change label ref in DOM (isolated updates)
    const unsubscribe = pricingStore.subscribe((state) => {
      updateLabel(state.currency);
    });

    // Close on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (code: CurrencyCode) => {
    pricingStore.setState({ currency: code });
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`appearance-none font-mono text-xs border-2 rounded-lg px-3 py-2 pr-8 cursor-pointer focus:outline-none transition-colors duration-200 select-none flex items-center gap-1 ${
          theme === 'light'
            ? 'bg-white border-[#172836] text-[#172836] hover:bg-[#172836]/5'
            : 'bg-white/[0.02] border-white/15 text-white hover:border-white/30'
        }`}
        aria-label="Select pricing currency"
      >
        <span ref={labelRef}>USD ($)</span>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src="/assets/SVGs/chevron-down.svg"
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
              theme === 'light' ? '' : 'invert'
            }`}
            alt=""
          />
        </div>
      </button>

      {/* Custom Dropdown Options Capsule */}
      <div
        data-open={isOpen}
        className={`absolute right-0 mt-2 w-32 border-2 rounded-xl overflow-hidden transition-all duration-150 ease-out transform scale-95 opacity-0 pointer-events-none data-[open=true]:scale-100 data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto flex flex-col ${
          theme === 'light'
            ? 'bg-white border-[#172836] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)]'
            : 'bg-[#142330] border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]'
        }`}
      >
        {(Object.keys(REGIONAL_TARIFFS) as CurrencyCode[]).map((code) => {
          const tariff = REGIONAL_TARIFFS[code];
          return (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`w-full text-left font-mono text-xs px-3 py-2.5 hover:bg-forsythia hover:text-[#172836] transition-colors focus:outline-none cursor-pointer ${
                theme === 'light' ? 'text-[#172836]' : 'text-white'
              }`}
            >
              {tariff.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
