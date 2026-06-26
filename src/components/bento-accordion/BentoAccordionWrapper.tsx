import React, { useState, useEffect } from 'react';

interface FeatureItem {
  title: string;
  label: string;
  icon: string;
  description: string;
  metric: string;
  detail: string;
}

export const BentoAccordionWrapper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Resize listener to track window layout updates and lock activeIndex context
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features: FeatureItem[] = [
    {
      title: 'Distributed Consensus',
      label: 'SECURE_ENCLAVE',
      icon: '/assets/SVGs/cube-16-solid.svg',
      description: 'Fault-tolerant transactional state synchronization across global clusters.',
      metric: '99.999% SLA',
      detail: 'Uses hardware-level cryptographic key signatures to confirm atomic multi-node database writes.'
    },
    {
      title: 'Neural Indexing',
      label: 'SEARCH_OPTIMIZATION',
      icon: '/assets/SVGs/search.svg',
      description: 'Speculative query routing and parallel indexing pipelines.',
      metric: '1.2ms QUERY',
      detail: 'Leverages isolated custom tokenizers to pre-sort inbound data streams prior to ledger mutation.'
    },
    {
      title: 'Anycast Linkage',
      label: 'ROUTING_NETWORK',
      icon: '/assets/SVGs/link.svg',
      description: 'Distributed low-latency query redirection across multi-region edge nodes.',
      metric: '0.08ms LINK',
      detail: 'Bypasses standard public DNS latency bottlenecks via physical dark-fiber direct pipelines.'
    },
    {
      title: 'Automated Pipelines',
      label: 'AUTONOMOUS_FLOW',
      icon: '/assets/SVGs/cog-8-tooth.svg',
      description: 'Dynamic schema matching and trigger-driven ingestion agents.',
      metric: '1.2B TPS',
      detail: 'Executes isolated Javascript compiler threads in sandboxed execution enclaves.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* ----------------------------------------------------
         1. Desktop Layout (Bento Grid: col-span adjustments)
         ---------------------------------------------------- */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const isActive = activeIndex === index;
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? 'col-span-2' : 'col-span-1';

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`bg-white border border-oceanic-noir/10 rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px] ${colSpan}`}
            >
              <div>
                <div className="flex items-center justify-end mb-6">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors duration-180 ${
                    isActive 
                      ? 'bg-forsythia border-oceanic-noir text-oceanic-noir' 
                      : 'bg-oceanic-noir/[0.03] border-oceanic-noir/10 text-oceanic-noir/60'
                  }`}>
                    <img src={item.icon} className="w-4 h-4" alt="" />
                  </div>
                </div>

                {/* Enforcing JetBrains Mono for Title Headers */}
                <h3 className="font-mono font-bold text-base text-oceanic-noir mb-2">
                  {item.title}
                </h3>
                {/* Enforcing Inter font-sans for Descriptions */}
                <p className="font-sans text-xs text-oceanic-noir/65 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-oceanic-noir/5 mt-4">
                <span className="font-mono text-[10px] font-bold text-deep-saffron">
                  {item.metric}
                </span>
                <span className="font-sans text-[10px] text-oceanic-noir/40 max-w-xs text-right truncate">
                  {item.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------------------------
         2. Mobile Layout (Accordion View: 44px touch targets)
         ---------------------------------------------------- */}
      <div className="block md:hidden space-y-3">
        {features.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 border border-oceanic-noir/10"
            >
              {/* Expandable row header - guaranteed 44px+ height footprint */}
              <button
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className="w-full min-h-[48px] px-5 py-3.5 flex items-center justify-between bg-transparent hover:bg-oceanic-noir/[0.02] cursor-pointer text-left focus:outline-none"
                aria-expanded={isOpen}
                aria-label={`Toggle details for ${item.title}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border transition-colors duration-180 ${
                    isOpen ? 'bg-forsythia border-oceanic-noir' : 'bg-oceanic-noir/[0.03] border-oceanic-noir/10'
                  }`}>
                    <img src={item.icon} className="w-3.5 h-3.5" alt="" />
                  </div>
                  {/* Enforcing JetBrains Mono for Title Headers */}
                  <span className="font-mono font-bold text-xs text-oceanic-noir tracking-wider">
                    {item.title}
                  </span>
                </div>
                <img
                  src="/assets/SVGs/chevron-down.svg"
                  className={`w-3 h-3 transition-transform duration-200 text-oceanic-noir/60 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  alt=""
                />
              </button>

              {/* Accordion panel content */}
              <div
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? 'max-h-[200px] border-t border-oceanic-noir/5' : 'max-h-0'
                } overflow-hidden`}
              >
                <div className="p-5 bg-oceanic-noir/[0.01]">
                  {/* Enforcing Inter font-sans for descriptions */}
                  <p className="font-sans text-xs text-oceanic-noir/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-oceanic-noir/5">
                    <span className="font-mono text-[9px] font-bold text-deep-saffron">
                      METRIC: {item.metric}
                    </span>
                    <span className="font-sans text-[9px] text-oceanic-noir/50">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
