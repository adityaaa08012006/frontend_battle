import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  theme: 'light' | 'dark';
}

export const FAQAccordion: React.FC<FAQAccordionProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Is there a free trial?",
      answer: "Yes, absolutely! We provide a complete 14-day fully featured Enterprise sandboxed environment. You can spin up isolated data orchestration clusters, connect active webhooks, and map production pipelines with zero credit card commitments."
    },
    {
      question: "Is my data secure?",
      answer: "Absolute security is wired into our architecture. All operational transactions utilize AES-256 field-level data encryption coupled with isolated TLS 1.3 transit networks, zero-trust infrastructure paradigms, and continuous SOC2 Type II compliance verification."
    },
    {
      question: "Can I integrate existing tools?",
      answer: "Yes, natively. Aegis.AI exports a high-performance REST API matrix and automated webhook engine, supporting direct, low-latency integrations across more than 300+ standard data systems, cloud storage nodes, and custom webhook streams."
    },
    {
      question: "Does it scale effectively?",
      answer: "Engineered specifically for high-throughput enterprise performance. Our containerized micro-state layer isolates background worker thread loops on demand, smoothly auto-scaling from lightweight developer staging spaces to million-message enterprise pipelines without performance drops."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start pt-6 w-full">
      {faqData.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={index}
            onClick={() => handleToggle(index)}
            className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
              isOpen
                ? 'cursor-pointer bg-[#FFC801] border-2 border-[#172836] rounded-2xl p-5 relative shadow-[6px_6px_0px_0px_rgba(23,40,54,1)] text-slate-900 transform scale-[1.01]'
                : 'cursor-pointer bg-white border-2 border-[#172836] rounded-2xl p-5 relative hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(23,40,54,1)] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] text-[#172836] flex flex-col justify-between'
            }`}
          >
            <div>
              <h3 className="font-mono font-bold text-base tracking-tight text-slate-900 mb-2 leading-snug">
                {item.question}
              </h3>
              
              <div
                className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                  isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <p className="font-sans text-sm font-medium text-slate-900 tracking-normal normal-case leading-relaxed mt-2 pt-2 border-t border-[#172836]/10">
                  {item.answer}
                </p>
              </div>
            </div>

            {/* Speech Bubble Tail */}
            <div 
              className={`absolute bottom-[-9px] left-8 w-4 h-4 rotate-45 border-r-2 border-b-2 border-[#172836] transition-colors duration-300 ${
                isOpen ? 'bg-[#FFC801]' : 'bg-white'
              }`}
              aria-hidden="true"
            />
          </article>
        );
      })}
    </div>
  );
};
