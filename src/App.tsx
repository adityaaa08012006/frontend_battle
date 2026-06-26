import React, { useState, useEffect } from 'react';
import { PricingMatrix } from './components/pricing/PricingMatrix';
import { BentoAccordionWrapper } from './components/bento-accordion/BentoAccordionWrapper';
import { CurrencyDropdown } from './components/pricing/CurrencyDropdown';
import { FAQAccordion } from './components/faq/FAQAccordion';
import { PipelineTerminal } from './components/how-it-works/PipelineTerminal';

interface ReviewItem {
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  headline: string;
  body: React.ReactNode;
}

const REVIEWS: ReviewItem[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    initials: "SJ",
    avatarBg: "#FFD1D1",
    headline: "Revolutionized our data pipelines",
    body: (
      <>
        Aegis.AI&apos;s automated agents were an absolute game-changer for our infrastructure layout. We saw a <span className="bg-[#FFC801] px-1 font-bold">70% operational workload reduction</span> within the first week of deployment. The telemetry tracking runs flawlessly 24/7.
      </>
    )
  },
  {
    name: "Marcus Vance",
    role: "Lead Architect",
    initials: "MV",
    avatarBg: "#D1E8FF",
    headline: "Saved 40+ engineering hours weekly",
    body: (
      <>
        This platform saved our team <span className="bg-[#FFC801] px-1 font-bold">over 40 hours in a month alone</span>. Messy cloud data mapping schemas used to drag on for days, but the intelligent pipeline engines cleaned up our stack entirely.
      </>
    )
  },
  {
    name: "Elena Rostova",
    role: "VP of Devops",
    initials: "ER",
    avatarBg: "#D1FFE3",
    headline: "The easiest adoptable automation engine",
    body: (
      <>
        I&apos;ve never seen data orchestration scale at this velocity with zero performance drop. We seamlessly integrated <span className="bg-[#FFC801] px-1 font-bold">300+ staging services</span> effortlessly. It saved us thousands of engineering hours down the line.
      </>
    )
  },
  {
    name: "David Kim",
    role: "Tech Lead",
    initials: "DK",
    avatarBg: "#FFEBD1",
    headline: "Flawless security and isolation",
    body: (
      <>
        With strictly enforced SOC2 isolation, we safely migrated <span className="bg-[#FFC801] px-1 font-bold">our entire financial telemetry</span> without exposing a single sensitive payload. Absolute peace of mind.
      </>
    )
  },
  {
    name: "Aria Chen",
    role: "Engineering Director",
    initials: "AC",
    avatarBg: "#E8D1FF",
    headline: "Zero render delay at scale",
    body: (
      <>
        Our live telemetry dashboards stream analytics at sub-millisecond rates. Our users experienced a <span className="bg-[#FFC801] px-1 font-bold">10x boost in visual refresh times</span>. Incredible performance engineering.
      </>
    )
  },
  {
    name: "Liam O'Connor",
    role: "Senior Developer",
    initials: "LO",
    avatarBg: "#D1FFF7",
    headline: "API integrations in minutes",
    body: (
      <>
        Building custom webhooks used to take days of schema adjustments. Aegis.AI transformed this into a <span className="bg-[#FFC801] px-1 font-bold">5-minute drag-and-drop task</span>. Simple, clean, and highly robust.
      </>
    )
  },
  {
    name: "Sofia Rossi",
    role: "Operations Manager",
    initials: "SR",
    avatarBg: "#FFF7D1",
    headline: "Cut server costs in half",
    body: (
      <>
        By automating speculative node allocation, Aegis.AI optimized our idle compute capacity, leading to a <span className="bg-[#FFC801] px-1 font-bold">45% reduction in cloud spend</span>. A must-have for modern SaaS.
      </>
    )
  },
  {
    name: "Alex Mercer",
    role: "Infrastructure Architect",
    initials: "AM",
    avatarBg: "#FFD1E8",
    headline: "Resilient micro-state enclaves",
    body: (
      <>
        We tested Aegis with high-density simulated failovers. The isolated micro-state engines handled <span className="bg-[#FFC801] px-1 font-bold">10M+ concurrent queries</span> with absolutely zero memory leaks.
      </>
    )
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Product",
    initials: "YT",
    avatarBg: "#E3FFD1",
    headline: "Exceptional developer experience",
    body: (
      <>
        The team transition was completed in under two days. The design aesthetic is gorgeous and the <span className="bg-[#FFC801] px-1 font-bold">real-time telemetry is incredibly intuitive</span>. Love the branding!
      </>
    )
  },
  {
    name: "James Peterson",
    role: "Lead Security Engineer",
    initials: "JP",
    avatarBg: "#D1E3FF",
    headline: "Bulletproof access control",
    body: (
      <>
        Aegis role-based workflows made auditing our compliance pipeline extremely straightforward. We locked down <span className="bg-[#FFC801] px-1 font-bold">all staging enclaves</span> in under an hour.
      </>
    )
  }
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => {
        setShowComingSoon(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  // Set the body background and grid pattern dynamically based on the active theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.style.background = '#0d2a3a';
      document.body.style.backgroundImage = 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(135deg, #0d2a3a 0%, #142330 50%, #172836 100%)';
      document.body.style.backgroundSize = '24px 24px, 24px 24px, 100% 100%';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.classList.remove('dark');
      document.body.style.background = '#FFFFFF';
      document.body.style.backgroundImage = 'radial-gradient(rgba(23, 40, 54, 0.08) 1.2px, transparent 1.2px)';
      document.body.style.backgroundSize = '24px 24px';
    }
  }, [theme]);

  const navLinkStyle = 'font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-white/80 px-4 py-2 rounded-xl transition-all duration-150 hover:bg-[#FFC801] hover:text-[#172836] dark:hover:text-[#172836] cursor-pointer';
  const headingStyle = 'font-mono tracking-tight text-slate-900 dark:text-white';
  const bodyTextStyle = 'font-sans text-sm font-medium text-slate-900 dark:text-white/70 tracking-normal normal-case';
  const subTextStyle = 'font-mono text-sm md:text-base font-bold tracking-wider text-slate-900 dark:text-white/80 mb-4 block';
  const borderStyle = theme === 'light' ? 'border-2 border-[#172836]' : 'border-2 border-white/10';

  // Tactile Rounded Theme Capsule Switch
  const renderThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`relative w-14 h-8 bg-oceanic-noir/5 dark:bg-white/10 border border-oceanic-noir/10 dark:border-white/10 rounded-full p-1 cursor-pointer flex items-center justify-between transition-colors duration-300 focus:outline-none`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Moving slider knob */}
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-forsythia rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform z-0 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      {/* Sun Icon Vector */}
      <svg
        className={`w-3.5 h-3.5 z-10 ml-1 transition-colors duration-300 pointer-events-none ${
          theme === 'light' ? 'text-oceanic-noir' : 'text-white/40'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      {/* Moon Icon Vector */}
      <svg
        className={`w-3.5 h-3.5 z-10 mr-1 transition-colors duration-300 pointer-events-none ${
          theme === 'light' ? 'text-oceanic-noir/30' : 'text-[#172836]'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans relative overflow-x-hidden selection:bg-forsythia selection:text-[#172836] ${
      theme === 'light' ? 'bg-white text-[#172836]' : 'bg-gradient-to-br from-[#0d2a3a] via-[#142330] to-[#172836] text-white'
    }`}>
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#0d2a3a]/90 backdrop-blur-md border-b-2 border-slate-900/10 dark:border-white/10 px-6 py-3.5 flex items-center justify-between relative">
        <nav className="w-full flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/SVGs/cube-16-solid.svg" className={`w-6 h-6 ${theme === 'light' ? '' : 'invert'}`} alt="AEGIS Brand Mark" />
            <a href="/" className={`font-mono font-bold text-lg tracking-wider transition-colors hover:text-forsythia ${headingStyle}`}>
              AEGIS.AI
            </a>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 font-mono text-xs">
            <li>
              <a href="#features" className={navLinkStyle}>
                FEATURES
              </a>
            </li>
            <li>
              <a href="#analytics" className={navLinkStyle}>
                PERFORMANCE
              </a>
            </li>
            <li>
              <a href="#bento" className={navLinkStyle}>
                SHOWCASE
              </a>
            </li>
            <li>
              <a href="#pricing" className={navLinkStyle}>
                PRICING
              </a>
            </li>
            <li>
              <a href="#testimonials" className={navLinkStyle}>
                REVIEWS
              </a>
            </li>
            <li>
              <a href="#faq" className={navLinkStyle}>
                FAQ
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Tactile Theme Switcher */}
            {renderThemeToggle()}

            {/* Log In Button */}
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-white hover:bg-[#FFC801] dark:bg-[#172836] dark:hover:bg-[#FFC801] text-slate-900 dark:text-white hover:text-[#172836] dark:hover:text-[#172836] font-mono font-bold uppercase tracking-wider text-xs px-4 py-2.5 rounded-xl border-2 border-slate-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(23,40,54,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 text-center cursor-pointer"
            >
              LOG IN
            </button>

            {/* Sign In Button */}
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-[#FFC801] text-[#172836] hover:bg-[#FFC801]/90 font-mono font-bold uppercase tracking-wider text-xs px-4 py-2.5 rounded-xl border-2 border-slate-900 dark:border-white shadow-[3px_3px_0px_0px_rgba(23,40,54,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 text-center cursor-pointer"
            >
              SIGN IN
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-3">
            {/* Tactile Rounded Theme switch (Mobile) */}
            {renderThemeToggle()}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border-2 cursor-pointer ${
                theme === 'light' ? 'border-[#172836] bg-white' : 'border-white/15 bg-white/[0.02]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <img src={mobileMenuOpen ? "/assets/SVGs/x-mark.svg" : "/assets/SVGs/cube-16-solid.svg"} className={`w-5 h-5 ${theme === 'light' ? '' : 'invert'}`} alt="" />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`absolute top-full left-0 w-full md:hidden border-b-2 px-6 py-6 flex flex-col gap-6 shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-colors duration-500 z-50 ${
            theme === 'light' ? 'bg-white border-[#172836]' : 'bg-[#142330] border-white/10'
          }`}>
            <ul className="flex flex-col gap-4 font-mono text-base">
              <li>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#analytics" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  PERFORMANCE
                </a>
              </li>
              <li>
                <a href="#bento" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  SHOWCASE
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  PRICING
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  REVIEWS
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className={`block py-2 ${theme === 'light' ? 'text-[#172836]/80 hover:text-[#172836]' : 'text-white/80 hover:text-white'} cursor-pointer`}>
                  FAQ
                </a>
              </li>
            </ul>

            <div className={`flex flex-col gap-4 pt-4 border-t-2 ${theme === 'light' ? 'border-[#172836]' : 'border-white/10'}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs opacity-50">THEME MODE</span>
                {renderThemeToggle()}
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowComingSoon(true);
                }}
                className="block w-full text-center font-mono text-sm py-3 mb-3 bg-white hover:bg-slate-50 text-[#172836] font-bold rounded-lg border-2 border-[#172836] shadow-[3px_3px_0px_0px_rgba(23,40,54,1)] cursor-pointer transition-all duration-150"
              >
                LOG IN
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowComingSoon(true);
                }}
                className="block w-full text-center font-mono text-sm py-3 bg-[#FFC801] text-[#172836] font-bold rounded-lg border-2 border-[#172836] shadow-[3px_3px_0px_0px_rgba(23,40,54,1)] cursor-pointer transition-all duration-150"
              >
                SIGN IN
              </button>
            </div>
          </div>
        )}

      </header>

      <main>
        {/* HERO SECTION - Rebalanced padding for premium rhythm */}
        <section className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center justify-center" aria-labelledby="hero-heading">
          {/* Main Title - Marblism's signature badges */}
          <h1 id="hero-heading" className={`text-4xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight max-w-5xl mx-auto leading-[1.2] mb-4 ${headingStyle}`}>
            Automate Data Orchestration at <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]">Next-Gen Speed</span>
          </h1>

          {/* Description */}
          <p className={`text-xs sm:text-sm font-sans max-w-3xl mx-auto leading-relaxed mb-6 ${bodyTextStyle}`}>
            Transform messy workflows into intelligent automated pipelines using cutting-edge AI, real-time analytics, and enterprise-grade security.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto font-mono text-xs px-6 py-3.5 bg-forsythia text-[#172836] font-bold rounded-xl border-2 border-[#172836] transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]"
            >
              Start Free
              <img src="/assets/SVGs/arrow-trending-up.svg" className="w-4 h-4 text-oceanic-noir" alt="" />
            </a>
            <a
              href="#analytics"
              className={`w-full sm:w-auto font-mono text-xs px-6 py-3.5 border-2 font-bold rounded-xl transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)] dark:border-white/20 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)] ${
                theme === 'light'
                  ? 'bg-white border-[#172836] text-[#172836] hover:bg-[#172836]/5'
                  : 'bg-white/[0.02] border-white/20 text-white hover:bg-white/[0.05]'
              }`}
            >
              Book Demo
            </a>
          </div>
        </section>

        {/* TRUSTED BY MARQUEE */}
        <section className="w-full pt-1 pb-6 relative flex flex-col items-center gap-3" aria-label="Trusted Enterprise Partners">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-white">
            Trusted by industry leaders
          </span>
          <div className="w-full max-w-7xl mx-auto border-y-2 border-slate-900 dark:border-white/20 py-5 flex items-center justify-between gap-6 px-4">
            <div className="w-full overflow-hidden">
              <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
                <div className="flex justify-around w-1/2 min-w-max gap-16 px-8">
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>MICROSOFT</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>GOOGLE</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>AMAZON</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>SPOTIFY</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>NETFLIX</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>ADOBE</span>
                </div>
                <div className="flex justify-around w-1/2 min-w-max gap-16 px-8" aria-hidden="true">
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>MICROSOFT</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>GOOGLE</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>AMAZON</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>SPOTIFY</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>NETFLIX</span>
                  <span className={`tracking-widest text-xs font-extrabold transition-colors cursor-default opacity-50 hover:opacity-100 uppercase ${headingStyle}`}>ADOBE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6-CARD FEATURE GRID (Why Choose Us) - Desktop padding py-16 lg:py-20 w-full relative */}
        <section id="features" className={`py-16 lg:py-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b-2 flex flex-col gap-6 ${
          theme === 'light' ? 'border-[#172836]' : 'border-white/10'
        }`} aria-labelledby="features-heading">
          <div className="text-center">
            <h2 id="features-heading" className={`text-2xl sm:text-3xl font-bold tracking-wide mb-3 uppercase ${headingStyle}`}>
              ENGINEERED FOR <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]">POWER</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${bodyTextStyle}`}>
              Our core infrastructure delivers sub-millisecond data routing layers backed by cryptographically secure isolated micro-state engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] md:col-span-2 ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/cube-16-solid.svg" className={`w-5 h-5 transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>AI Automation</h3>
                <p className={bodyTextStyle}>
                  Automate repetitive workflows using intelligent AI agents.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/chart-pie.svg" className={`w-5 h-5 transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>Predictive Analytics</h3>
                <p className={bodyTextStyle}>
                  Forecast trends before they happen using machine learning.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/link-solid.svg" className={`w-5 h-5 transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>Secure Infrastructure</h3>
                <p className={bodyTextStyle}>
                  Enterprise-grade encryption with SOC2 compliant architecture.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/arrow-path.svg" className={`w-5 h-5 animate-[spin_10s_linear_infinite] transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>Lightning Performance</h3>
                <p className={bodyTextStyle}>
                  Real-time execution optimized for scale.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/link.svg" className={`w-5 h-5 transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>API First</h3>
                <p className={bodyTextStyle}>
                  Integrate seamlessly with over 300+ services.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className={`group border-2 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] cursor-pointer flex flex-col justify-between min-h-[160px] md:col-span-2 ${
              theme === 'light' 
                ? 'bg-white border-[#172836] text-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,0.15)]' 
                : 'bg-white/[0.02] border-white/20 text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:border-white'
            }`}>
              <div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-180 border-2 ${
                  theme === 'light' 
                    ? 'bg-[#172836]/[0.03] border-[#172836] group-hover:bg-forsythia group-hover:border-[#172836]' 
                    : 'bg-white/[0.05] border-white/20 group-hover:bg-forsythia group-hover:border-forsythia'
                }`}>
                  <img src="/assets/SVGs/cog-8-tooth.svg" className={`w-5 h-5 transition-all duration-180 ${theme === 'light' ? 'group-hover:brightness-0' : 'invert group-hover:invert-0 group-hover:brightness-0'}`} alt="" />
                </div>
                <h3 className={`font-mono font-bold text-sm mb-1.5 ${headingStyle}`}>Global Availability</h3>
                <p className={bodyTextStyle}>
                  Deploy workflows worldwide with minimal latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL-TIME PERFORMANCE ANALYTICS DASHBOARD - Spacing Rebalanced */}
        <section id="analytics" className="py-16 lg:py-20 w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 flex flex-col gap-6" aria-labelledby="analytics-heading">
          <div className={`border-2 rounded-xl p-6 sm:p-8 relative overflow-hidden transition-colors duration-500 ${
            theme === 'light' 
              ? 'bg-white border-[#172836] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)]' 
              : 'bg-white/[0.02] border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]'
          }`}>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <img src="/assets/SVGs/chart-pie.svg" className={`w-4 h-4 ${theme === 'light' ? '' : 'invert'}`} alt="" />
                  <span className={`tracking-wider uppercase font-mono text-[10px] ${theme === 'light' ? 'text-[#172836]/70' : 'text-white/70'}`}>TELEMETRY METRICS</span>
                </div>
                <h2 id="analytics-heading" className={`text-2xl sm:text-3xl font-bold tracking-tight mb-4 uppercase ${headingStyle}`}>
                  REAL-TIME SYSTEM <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]">LATENCY</span>
                </h2>
                <p className={`mb-6 ${bodyTextStyle}`}>
                  Watch live query executions scale across our isolated micro-networks. Verify speeds, database lock thresholds, and schema mapping matrices directly in the client dashboard.
                </p>

                {/* Metrics */}
                <div className={`grid grid-cols-3 gap-6 p-5 rounded-xl mt-6 bg-[#172836]/5 dark:bg-white/[0.02] ${borderStyle}`}>
                  <div>
                    <div className={`font-extrabold text-xl sm:text-2xl ${headingStyle}`}>12ms</div>
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase mt-0.5 text-slate-900 dark:text-white opacity-60">Avg Latency</div>
                  </div>
                  <div>
                    <div className="font-mono text-xl sm:text-2xl font-extrabold text-deep-saffron">10x</div>
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase mt-0.5 text-slate-900 dark:text-white opacity-60">Data Speed</div>
                  </div>
                  <div>
                    <div className={`font-extrabold text-xl sm:text-2xl ${headingStyle}`}>99.9%</div>
                    <div className="font-mono text-[9px] sm:text-[10px] uppercase mt-0.5 text-slate-900 dark:text-white opacity-60">SLA Uptime</div>
                  </div>
                </div>
              </div>

              {/* Graphic Telemetry Panel */}
              <div className={`w-full lg:w-[460px] border-2 rounded-xl p-5 relative transition-colors ${
                theme === 'light' ? 'bg-white border-[#172836]' : 'bg-[#142330] border-white/20'
              }`}>
                <div className={`flex items-center justify-between mb-4 pb-3 border-b-2 ${borderStyle}`}>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-[10px] uppercase tracking-tight text-slate-900 dark:text-white`}>REGION: US-EAST-1</span>
                  </div>
                </div>

                {/* Simulated Telemetry Wave */}
                <div className="relative py-2">
                  <svg viewBox="0 0 500 100" className="w-full h-full text-nocturnal-expedition" fill="none">
                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="25" x2="500" y2="25" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    <line x1="0" y1="50" x2="500" y2="50" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    
                    {/* Vertical Grid lines */}
                    <line x1="100" y1="0" x2="100" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
                    <line x1="400" y1="0" x2="400" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />

                    {/* Smooth glowing trace path (Cubic Bezier Curve) */}
                    <path
                      d="M 0,70 C 50,75 70,30 110,45 C 160,65 190,85 240,60 C 290,30 320,10 360,40 C 410,80 430,90 500,20"
                      stroke="#FFC801"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Glow fill underneath */}
                    <path
                      d="M 0,70 C 50,75 70,30 110,45 C 160,65 190,85 240,60 C 290,30 320,10 360,40 C 410,80 430,90 500,20 L 500,100 L 0,100 Z"
                      fill="url(#latency-glow)"
                      opacity="0.1"
                    />

                    <defs>
                      <linearGradient id="latency-glow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFC801" />
                        <stop offset="100%" stopColor="#FFC801" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID SHOWCASE (FEATURES EXPLORER) - Rebalanced padding for premium rhythm */}
        <section
          id="bento"
          className={`scroll-mt-20 transition-colors duration-500 w-full py-8 lg:py-10 relative flex flex-col gap-4 ${
            theme === 'light'
              ? 'bg-forsythia text-oceanic-noir border-y-4 border-[#172836]'
              : 'bg-[#172836]/40 border-y-2 border-white/10 text-white'
          }`}
          aria-labelledby="bento-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <h2 id="bento-heading" className={`text-2xl sm:text-3xl font-bold tracking-wide mb-3 uppercase ${headingStyle}`}>
                FEATURES <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-oceanic-noir shadow-[2px_2px_0px_0px_rgba(23,40,54,1)] dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">EXPLORER</span>
              </h2>
              <p className={`max-w-2xl mx-auto ${bodyTextStyle}`}>
                Explore the core features engineered to construct, monitor, and secure your automated data orchestration pipelines.
              </p>
            </div>

            {/* Feature 2: Bento-to-Accordion Wrapper Component */}
            <BentoAccordionWrapper theme={theme} />
          </div>
        </section>

        {/* HOW IT WORKS SECTION (Interactive Pipeline Node Engine Terminal) - py-16 lg:py-20 w-full relative */}
        <section id="process" className={`py-16 lg:py-20 w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b-2 flex flex-col gap-6 ${
          theme === 'light' ? 'border-[#172836]' : 'border-white/10'
        }`} aria-labelledby="process-heading">
          <div className="text-center">
            <h2 id="process-heading" className={`text-2xl sm:text-3xl font-bold tracking-wide mb-3 uppercase ${headingStyle}`}>
              HOW IT <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]">WORKS</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${bodyTextStyle}`}>
              Three simple phases to transition from manual operations to fully automated, secure pipelines.
            </p>
          </div>

          <PipelineTerminal theme={theme} />
        </section>

        {/* PRICING PLANS SECTION - Spacing Rebalanced */}
        <section id="pricing" className="py-16 lg:py-20 w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 flex flex-col gap-6" aria-labelledby="pricing-heading">
          <div className="text-center">
            <h2 id="pricing-heading" className={`text-2xl sm:text-3xl font-bold tracking-wide mb-3 uppercase ${headingStyle}`}>
              HIERARCHICAL <span className="inline-block bg-forsythia text-oceanic-noir px-3 py-1 font-mono uppercase tracking-wider border-2 border-oceanic-noir shadow-[2px_2px_0px_0px_rgba(23,40,54,1)] dark:border-white dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">PLANS</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${bodyTextStyle}`}>
              Select standard subscriptions calculated dynamically based on regional variables. Fully isolated performance guarantees zero render delays.
            </p>
          </div>

          {/* Feature 1: Pricing Component */}
          <PricingMatrix theme={theme} />
        </section>

        {/* TESTIMONIALS SECTION (Marblism-style Neo-Brutalist Band with Auto Scroll) - Spacing Rebalanced */}
        <section
          id="testimonials"
          className="w-full bg-[#FFC801] text-slate-900 py-16 lg:py-20 px-4 border-y-4 border-slate-900 overflow-hidden relative font-sans scroll-mt-20 flex flex-col gap-6"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2
              id="testimonials-heading"
              className="text-center text-4xl md:text-5xl font-mono font-black tracking-tighter text-slate-900 mb-6"
            >
              AUTOMATED WORKFLOWS. ELITE EFFICIENCY.
            </h2>

            {/* Product Trust Metric Badges Tier */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {/* Badge 1 (Product Hunt Style) */}
              <div className="bg-white border-2 border-slate-900 rounded-lg px-3 py-1 flex items-center gap-2 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                <span>#1 Automation Platform</span>
              </div>

              {/* Badge 2 (Trust Score Style) */}
              <div className="bg-white border-2 border-slate-900 rounded-lg px-3 py-1 flex items-center gap-2 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                <span className="flex gap-0.5">⭐ ⭐ ⭐ ⭐ ⭐</span>
              </div>
            </div>
          </div>

          {/* Multi-Card Neo-Brutalist Layout Track (Auto-Scrolling Marquee) */}
          <div className="w-full overflow-hidden relative">
            <div className="flex w-max gap-6 animate-marquee-reviews hover:[animation-play-state:paused] py-4">
              {/* Track 1: First 10 items */}
              <div className="flex gap-6">
                {REVIEWS.map((review, index) => (
                  <article
                    key={`review-1-${index}`}
                    className="min-w-[320px] max-w-[350px] bg-white border-2 border-slate-900 rounded-2xl p-6 flex-shrink-0 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-slate-900"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          style={{ backgroundColor: review.avatarBg }}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-sm text-slate-900 select-none"
                        >
                          {review.initials}
                        </div>
                        <div>
                          <div className="font-mono font-bold text-xs uppercase tracking-tight text-slate-900">
                            {review.name}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-tight text-slate-900 font-semibold">
                            {review.role}
                          </div>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            <span className="flex gap-0.5 text-[10px]">⭐ ⭐ ⭐ ⭐ ⭐</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-mono font-bold text-base uppercase tracking-tight text-slate-900 leading-tight mb-2">
                        {review.headline}
                      </h3>
                      <p className="font-sans text-sm font-medium text-slate-900 tracking-normal normal-case leading-relaxed">
                        {review.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Track 2: Duplicate of the 10 items for infinite looping */}
              <div className="flex gap-6" aria-hidden="true">
                {REVIEWS.map((review, index) => (
                  <article
                    key={`review-2-${index}`}
                    className="min-w-[320px] max-w-[350px] bg-white border-2 border-slate-900 rounded-2xl p-6 flex-shrink-0 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] text-slate-900"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          style={{ backgroundColor: review.avatarBg }}
                          className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-sm text-slate-900 select-none"
                        >
                          {review.initials}
                        </div>
                        <div>
                          <div className="font-mono font-bold text-xs uppercase tracking-tight text-slate-900">
                            {review.name}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-tight text-slate-900 font-semibold">
                            {review.role}
                          </div>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            <span className="flex gap-0.5 text-[10px]">⭐ ⭐ ⭐ ⭐ ⭐</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-mono font-bold text-base uppercase tracking-tight text-slate-900 leading-tight mb-2">
                        {review.headline}
                      </h3>
                      <p className="font-sans text-sm font-medium text-slate-900 tracking-normal normal-case leading-relaxed">
                        {review.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (4-Row Native Details FAQ Accordion) - Spacing Rebalanced */}
        <section id="faq" className={`py-16 lg:py-20 w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b-2 flex flex-col gap-6 ${
          theme === 'light' ? 'border-[#172836]' : 'border-white/10'
        }`} aria-labelledby="faq-heading">
          <div className="text-center mb-8">
            <h2 id="faq-heading" className={`text-2xl sm:text-3xl font-bold tracking-wide mb-3 uppercase ${headingStyle}`}>
              GOT <span className="inline-block bg-forsythia text-[#172836] px-3 py-1 font-mono uppercase tracking-wider border-2 border-[#172836] shadow-[2px_2px_0px_0px_rgba(23,40,54,1)]">QUESTIONS?</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${bodyTextStyle}`}>
              Everything you need to know about setting up enclaves, pipelines, and workspace billing plans.
            </p>
          </div>

          <FAQAccordion theme={theme} />
        </section>

        {/* FINAL CALL-TO-ACTION SECTION - Spacing Rebalanced */}
        <section id="cta" className="py-16 lg:py-20 w-full relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20 flex flex-col gap-6 text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className={`text-2xl sm:text-3xl font-bold tracking-tight leading-relaxed uppercase ${headingStyle}`}>
            Ready to redefine productivity? Experience enterprise-grade AI automation with zero complexity.
          </h2>
          <div className="flex justify-center pt-2">
            <a
              href="#pricing"
              className="w-full sm:w-auto font-mono text-xs px-8 py-4 bg-forsythia text-[#172836] font-bold rounded-xl border-2 border-[#172836] transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_0px_rgba(23,40,54,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]"
            >
              Start Free
              <img src="/assets/SVGs/arrow-trending-up.svg" className="w-4 h-4 text-oceanic-noir" alt="" />
            </a>
          </div>
        </section>
      </main>

      {/* SITEMAP FOOTER */}
      <footer className={`transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-t-2 pt-8 pb-6 px-4 sm:px-6 lg:px-8 relative ${
        theme === 'light' ? 'bg-white border-[#172836]' : 'bg-white/[0.01] border-white/10'
      }`} aria-label="Footer Navigation">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/SVGs/cube-16-solid.svg" className={`w-5 h-5 ${theme === 'light' ? '' : 'invert'}`} alt="" />
              <span className={`font-mono font-bold text-base tracking-wider ${headingStyle}`}>AEGIS.AI</span>
            </div>
            <p className={`font-sans text-xs leading-relaxed max-w-xs ${theme === 'light' ? 'text-[#172836]/60' : 'text-white/80'}`}>
              Secure, lightning-fast data pipeline automation orchestrator. Engineered for maximum transaction throughput and absolute state resilience.
            </p>
          </div>

          {/* Column 2: Product Sitemap */}
          <div>
            <h4 className={`font-mono text-xs font-bold tracking-wider uppercase mb-3 ${theme === 'light' ? 'text-[#172836]/50' : 'text-white/50'}`}>PRODUCT</h4>
            <ul className={`flex flex-col gap-2 text-xs font-sans ${theme === 'light' ? 'text-[#172836]/65' : 'text-white/80'}`}>
              <li><a href="#features" className="hover:text-forsythia transition-colors font-bold">Core Features</a></li>
              <li><a href="#analytics" className="hover:text-forsythia transition-colors font-bold">Analytics Engine</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors font-bold">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-forsythia transition-colors font-bold">FAQ</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">API References</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div>
            <h4 className={`font-mono text-xs font-bold tracking-wider uppercase mb-3 ${theme === 'light' ? 'text-[#172836]/50' : 'text-white/50'}`}>RESOURCES</h4>
            <ul className={`flex flex-col gap-2 text-xs font-sans ${theme === 'light' ? 'text-[#172836]/65' : 'text-white/80'}`}>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Documentation</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Security Audits</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Telemetry Nodes</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Service Status</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div>
            <h4 className={`font-mono text-xs font-bold tracking-wider uppercase mb-3 ${theme === 'light' ? 'text-[#172836]/50' : 'text-white/50'}`}>COMPLIANCE</h4>
            <ul className={`flex flex-col gap-2 text-xs font-sans ${theme === 'light' ? 'text-[#172836]/65' : 'text-white/80'}`}>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Terms of Operations</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">Privacy Crypts</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">SLA Metrics</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors font-bold">ISO 27001 Certification</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className={`max-w-7xl mx-auto pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          theme === 'light' ? 'border-[#172836]/30' : 'border-white/10'
        }`}>
          <span className={`font-mono text-[9px] ${theme === 'light' ? 'text-[#172836]/40' : 'text-white/40'}`}>
            © {new Date().getFullYear()} AEGIS AUTOMATIONS INC. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
      {/* Premium Toast Notification */}
      {showComingSoon && (
        <div className="fixed bottom-6 right-6 z-[100] transition-all duration-300 transform translate-y-0">
          <div className="bg-[#FFC801] text-[#172836] font-mono font-bold text-xs uppercase tracking-wider px-5 py-3 border-2 border-[#172836] shadow-[4px_4px_0px_0px_rgba(23,40,54,1)] rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 bg-[#172836] rounded-full animate-ping" />
            Coming soon!
          </div>
        </div>
      )}
    </div>
  );
}
