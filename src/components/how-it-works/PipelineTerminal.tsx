import React, { useState, useEffect } from 'react';

interface PipelineTerminalProps {
  theme: 'light' | 'dark';
}

interface PhaseConfig {
  title: string;
  subtext: string;
  log: string;
}

export function PipelineTerminal({ theme }: PipelineTerminalProps) {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>('');

  const phases: PhaseConfig[] = [
    {
      title: "1. CONNECT",
      subtext: "Integrate your existing staging tools.",
      log: "NETWORK: Initializing REST matrix protocols...\n> [OK] Connected to 300+ endpoint services.\n> [OK] Webhook pipelines verified [TLS 1.3 Active]."
    },
    {
      title: "2. BUILD",
      subtext: "Create AI-powered workflows visually.",
      log: "COMPILER: Transforming visual canvas model...\n> [PROCESSING] Thread loop optimization verified.\n> [OK] AI execution agent matrix compiled (0.00ms latency profile)."
    },
    {
      title: "3. SCALE",
      subtext: "Deploy automation across your organization.",
      log: "ORCHESTRATION: Cluster scale deployment init...\n> [LIVE] Spawning isolated micro-state pods.\n> [OK] Metrics synchronized: Uptime tracking at 99.99% nominal throughput."
    }
  ];

  useEffect(() => {
    let active = true;
    const fullText = phases[activePhase].log;
    setDisplayText('');
    
    let currentText = '';
    let index = 0;
    
    function type() {
      if (!active) return;
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayText(currentText);
        index++;
        setTimeout(type, 12);
      }
    }
    
    type();

    return () => {
      active = false;
    };
  }, [activePhase]);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* High-Density Layout Partition Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl w-full mx-auto px-4 py-8">
        
        {/* Col-Span 5: Interactive Controller Stack */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {phases.map((phase, idx) => {
            const isActive = activePhase === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={
                  isActive
                    ? "cursor-pointer w-full bg-[#FFC801] border-2 border-[#172836] rounded-xl p-4 transition-all duration-200 text-[#172836] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] transform scale-[1.01] text-left focus:outline-none"
                    : "cursor-pointer w-full bg-white dark:bg-white/[0.02] border-2 border-[#172836] dark:border-white/20 rounded-xl p-4 transition-all duration-200 text-slate-700 dark:text-white/80 shadow-[3px_3px_0px_0px_rgba(23,40,54,1)] text-left focus:outline-none"
                }
              >
                <div className="font-mono text-sm font-bold uppercase tracking-tight mb-1">
                  {phase.title}
                </div>
                <div className="font-sans text-xs font-medium tracking-normal normal-case leading-normal opacity-90">
                  {phase.subtext}
                </div>
              </button>
            );
          })}
        </div>

        {/* Col-Span 7: Real-Time Operations Terminal Panel */}
        <div className="lg:col-span-7 w-full">
          <div className="w-full bg-[#172836] text-white border-2 border-[#172836] dark:border-white rounded-xl shadow-[6px_6px_0px_0px_rgba(255,200,1,1)] dark:shadow-none p-5 font-mono text-xs leading-relaxed overflow-hidden relative min-h-[260px] flex flex-col justify-between">
            
            {/* Top Bar Window Rails */}
            <div>
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                </div>
                <span className="text-[10px] text-white/50 lowercase tracking-normal">
                  root@aegis-engine:~# status_log.sh
                </span>
              </div>

              {/* Terminal Logs Output */}
              <div className="text-left font-mono min-h-[120px]">
                <pre className="whitespace-pre-wrap leading-relaxed select-text font-mono">
                  {displayText}
                  <span className="inline-block w-1.5 h-3.5 bg-[#FFC801] ml-1 animate-pulse align-middle" />
                </pre>
              </div>
            </div>

            {/* Bottom Panel Status Indicator */}
            <div className="text-[9px] text-white/30 text-right mt-4 select-none uppercase tracking-wider font-bold">
              pipeline-engine-v4.0.0-active
            </div>

          </div>
        </div>
      </div>

      {/* Integrated Compact Telemetry Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full px-4 mt-6">
        <div className={`border rounded-xl p-4 font-mono text-center transition-all duration-300 ${
          theme === 'light'
            ? 'border-[#172836] bg-white text-[#172836]'
            : 'border-white/20 bg-white/[0.01] text-white'
        }`}>
          <div className="text-2xl lg:text-3xl font-extrabold text-[#FFC801] mb-1">98%</div>
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-85">Customer satisfaction</div>
        </div>
        <div className={`border rounded-xl p-4 font-mono text-center transition-all duration-300 ${
          theme === 'light'
            ? 'border-[#172836] bg-white text-[#172836]'
            : 'border-white/20 bg-white/[0.01] text-white'
        }`}>
          <div className="text-2xl lg:text-3xl font-extrabold text-[#FFC801] mb-1">10M+</div>
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-85">Tasks automated daily</div>
        </div>
        <div className={`border rounded-xl p-4 font-mono text-center transition-all duration-300 ${
          theme === 'light'
            ? 'border-[#172836] bg-white text-[#172836]'
            : 'border-white/20 bg-white/[0.01] text-white'
        }`}>
          <div className="text-2xl lg:text-3xl font-extrabold text-[#FFC801] mb-1">150+</div>
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-85">Countries</div>
        </div>
        <div className={`border rounded-xl p-4 font-mono text-center transition-all duration-300 ${
          theme === 'light'
            ? 'border-[#172836] bg-white text-[#172836]'
            : 'border-white/20 bg-white/[0.01] text-white'
        }`}>
          <div className="text-2xl lg:text-3xl font-extrabold text-[#FFC801] mb-1">99.99%</div>
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-85">Uptime</div>
        </div>
      </div>
    </div>
  );
}
