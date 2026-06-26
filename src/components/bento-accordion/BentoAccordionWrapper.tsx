import React, { useState } from 'react';

interface FeatureItem {
  title: string;
  label: string;
  icon: string;
  description: string;
  metric: string;
  detail: string;
}

interface BentoAccordionWrapperProps {
  theme: 'light' | 'dark';
}

export const BentoAccordionWrapper: React.FC<BentoAccordionWrapperProps> = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features: FeatureItem[] = [
    {
      title: 'AI Workflow Builder',
      label: 'AUTONOMOUS_FLOW',
      icon: '/assets/SVGs/cube-16-solid.svg',
      description: 'Visually construct multi-agent automated pipelines.',
      metric: '100% VISUAL',
      detail: 'Drag-and-drop orchestration interface'
    },
    {
      title: 'Live Analytics',
      label: 'TELEMETRY_STREAM',
      icon: '/assets/SVGs/chart-pie.svg',
      description: 'Real-time telemetry and execution monitoring.',
      metric: '0.08ms SIGMA',
      detail: 'Stream stats directly to client enclaves'
    },
    {
      title: 'Smart Predictions',
      label: 'SEARCH_OPTIMIZATION',
      icon: '/assets/SVGs/search.svg',
      description: 'Forecast execution trends and node availability.',
      metric: '99.2% ACCURACY',
      detail: 'Powered by custom speculative engines'
    },
    {
      title: 'Enterprise Security',
      label: 'SECURE_ENCLAVE',
      icon: '/assets/SVGs/link-solid.svg',
      description: 'Cryptographically isolated sandboxes and audit logging.',
      metric: 'SOC2 TYPE II',
      detail: 'Hardware-enforced encryption keys'
    },
    {
      title: 'Intelligent API Engine',
      label: 'API_GATEWAY',
      icon: '/assets/SVGs/link.svg',
      description: 'Connect with REST, GraphQL, and webhooks instantly.',
      metric: '300+ INTEGRATIONS',
      detail: 'Automatic schema transformation'
    },
    {
      title: 'Collaboration',
      label: 'TEAMS_WORKSPACE',
      icon: '/assets/SVGs/cog-8-tooth.svg',
      description: 'Work together across teams with role-based access control.',
      metric: 'MULTI-USER',
      detail: 'Shared workspaces and version history'
    }
  ];

  const cardStyle = `transition-all duration-300 ${
    theme === 'light'
      ? 'bg-white border-2 border-[#172836] text-slate-900 shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(23,40,54,1)] hover:-translate-y-1'
      : 'bg-white/[0.02] backdrop-blur-md border-2 border-white/20 text-white hover:border-white hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] hover:-translate-y-1'
  }`;

  const titleStyle = 'font-mono tracking-tight text-slate-900 dark:text-white';
  const descStyle = 'font-sans text-sm font-medium text-slate-900 dark:text-white/70 tracking-normal normal-case';
  const detailStyle = 'font-sans text-xs font-medium text-slate-700 dark:text-white/60 tracking-normal normal-case';
  const borderStyle = theme === 'light' ? 'border-[#172836]' : 'border-white/10';
  const iconContainerStyle = (isActive: boolean) => {
    if (isActive) {
      return theme === 'light'
        ? 'bg-forsythia border-2 border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]'
        : 'bg-forsythia border-2 border-white text-oceanic-noir shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]';
    } else {
      return theme === 'light'
        ? 'bg-oceanic-noir/[0.03] border-2 border-[#172836]/20 text-[#172836]/60'
        : 'bg-white/[0.05] border-2 border-white/10 text-white/60';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* ----------------------------------------------------
         1. Desktop Layout (Bento Grid: col-span adjustments)
         ---------------------------------------------------- */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const isActive = activeIndex === index;
          // Alternating row spans for 6 items:
          // Row 1: index 0 (spans 2), index 1 (spans 1)
          // Row 2: index 2 (spans 1), index 3 (spans 2)
          // Row 3: index 4 (spans 2), index 5 (spans 1)
          const isLarge = index === 0 || index === 3 || index === 4;
          const colSpan = isLarge ? 'md:col-span-2' : 'md:col-span-1';

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`${cardStyle} p-4 md:p-5 cursor-pointer flex flex-col justify-between min-h-[150px] ${colSpan}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  {/* Enforcing JetBrains Mono for Title Headers */}
                  <h3 className={`font-mono font-bold text-base ${titleStyle}`}>
                    {item.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 transition-colors duration-180 flex-shrink-0 ${
                    iconContainerStyle(isActive)
                  }`}>
                    <img src={item.icon} className={`w-4 h-4 ${theme === 'light' || isActive ? '' : 'invert'}`} alt="" />
                  </div>
                </div>

                {/* Enforcing Inter font-sans for Descriptions */}
                <p className={`font-sans text-xs leading-relaxed max-w-md ${descStyle}`}>
                  {item.description}
                </p>
              </div>

              <div className={`flex items-center justify-between pt-3 border-t-2 mt-3 ${borderStyle}`}>
                <span className="font-mono text-[10px] font-bold uppercase tracking-tight text-deep-saffron">
                  {item.metric}
                </span>
                <span className={`font-sans text-[10px] max-w-xs text-right truncate ${detailStyle}`}>
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
              className={`rounded-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-2 ${
                theme === 'light'
                  ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]'
                  : 'bg-white/[0.02] border-white/20 text-white'
              }`}
            >
              {/* Expandable row header - guaranteed 44px+ height footprint */}
              <button
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className="w-full min-h-[48px] px-5 py-3.5 flex items-center justify-between bg-transparent hover:bg-current/[0.02] cursor-pointer text-left focus:outline-none"
                aria-expanded={isOpen}
                aria-label={`Toggle details for ${item.title}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center border-2 transition-colors duration-180 ${
                    iconContainerStyle(isOpen)
                  }`}>
                    <img src={item.icon} className={`w-3.5 h-3.5 ${theme === 'light' || isOpen ? '' : 'invert'}`} alt="" />
                  </div>
                  {/* Enforcing JetBrains Mono for Title Headers */}
                  <span className="font-mono font-bold text-xs tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </span>
                </div>
                <img
                  src="/assets/SVGs/chevron-down.svg"
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  } ${theme === 'light' ? 'opacity-60' : 'opacity-60 invert'}`}
                  alt=""
                />
              </button>

              {/* Accordion panel content */}
              <div
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? 'max-h-[200px] border-t-2' : 'max-h-0'
                } overflow-hidden ${borderStyle}`}
              >
                <div className={theme === 'light' ? 'p-5 bg-oceanic-noir/[0.01]' : 'p-5 bg-white/[0.01]'}>
                  {/* Enforcing Inter font-sans for descriptions */}
                  <p className={`font-sans text-xs leading-relaxed mb-4 ${descStyle}`}>
                    {item.description}
                  </p>
                  <div className={`flex items-center justify-between pt-3 border-t-2 ${borderStyle}`}>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-tight text-deep-saffron">
                      METRIC: {item.metric}
                    </span>
                    <span className={`font-sans text-[9px] ${detailStyle}`}>
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
