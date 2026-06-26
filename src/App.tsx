import React, { useState, useEffect, useRef } from 'react';
import { PricingMatrix } from './components/pricing/PricingMatrix';
import { BentoAccordionWrapper } from './components/bento-accordion/BentoAccordionWrapper';
import { pricingStore, CurrencyCode } from './components/pricing/PricingStore';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const desktopSelectRef = useRef<HTMLSelectElement>(null);
  const mobileSelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const unsubscribe = pricingStore.subscribe((state) => {
      if (desktopSelectRef.current) {
        desktopSelectRef.current.value = state.currency;
      }
      if (mobileSelectRef.current) {
        mobileSelectRef.current.value = state.currency;
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-oceanic-noir font-sans relative overflow-x-hidden selection:bg-forsythia selection:text-oceanic-noir">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-oceanic-noir/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/SVGs/cube-16-solid.svg" className="w-6 h-6 text-oceanic-noir" alt="AEGIS Brand Mark" />
            <a href="/" className="font-mono font-bold text-lg tracking-wider text-oceanic-noir transition-colors hover:text-forsythia">
              AEGIS.AI
            </a>
          </div>

          {/* Desktop Nav Links (Clean Navigation) */}
          <ul className="hidden md:flex items-center gap-8 font-mono text-xs">
            <li>
              <a href="#features" className="text-oceanic-noir/70 hover:text-oceanic-noir transition-colors cursor-pointer py-2">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#analytics" className="text-oceanic-noir/70 hover:text-oceanic-noir transition-colors cursor-pointer py-2">
                PERFORMANCE
              </a>
            </li>
            <li>
              <a href="#bento" className="text-oceanic-noir/70 hover:text-oceanic-noir transition-colors cursor-pointer py-2">
                SHOWCASE
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-oceanic-noir/70 hover:text-oceanic-noir transition-colors cursor-pointer py-2">
                PRICING
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-lg border border-oceanic-noir/15 hover:border-oceanic-noir/30 bg-white hover:bg-oceanic-noir/[0.03] transition-all duration-180 ease-out hover:scale-[1.05] active:scale-[0.95] cursor-pointer"
              aria-label="Search Platform"
            >
              <img src="/assets/SVGs/search.svg" className="w-4 h-4 text-oceanic-noir" alt="" />
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <select 
                ref={desktopSelectRef}
                onChange={(e) => pricingStore.setState({ currency: e.target.value as CurrencyCode })}
                className="appearance-none font-mono text-xs bg-white border border-oceanic-noir/15 rounded-lg px-3 py-2 pr-8 text-oceanic-noir cursor-pointer hover:border-oceanic-noir/30 focus:outline-none transition-colors"
                aria-label="Select pricing currency"
              >
                <option value="USD" className="bg-white text-oceanic-noir">USD ($)</option>
                <option value="EUR" className="bg-white text-oceanic-noir">EUR (€)</option>
                <option value="INR" className="bg-white text-oceanic-noir">INR (₹)</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <img src="/assets/SVGs/chevron-down.svg" className="w-3 h-3 opacity-60" alt="" />
              </div>
            </div>

            {/* Launch Console Button */}
            <a
              href="#pricing"
              className="font-mono text-xs px-5 py-2.5 bg-forsythia text-oceanic-noir font-bold rounded-lg border-2 border-oceanic-noir transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer"
            >
              LAUNCH CONSOLE
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg border border-oceanic-noir/15 bg-white cursor-pointer"
              aria-label="Search site"
            >
              <img src="/assets/SVGs/search.svg" className="w-4 h-4 text-oceanic-noir" alt="" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-oceanic-noir/15 bg-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <img src={mobileMenuOpen ? "/assets/SVGs/x-mark.svg" : "/assets/SVGs/cube-16-solid.svg"} className="w-5 h-5 text-oceanic-noir" alt="" />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-oceanic-noir/10 bg-white px-4 py-6 flex flex-col gap-6">
            <ul className="flex flex-col gap-4 font-mono text-base">
              <li>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-oceanic-noir/80 hover:text-oceanic-noir cursor-pointer">
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#analytics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-oceanic-noir/80 hover:text-oceanic-noir cursor-pointer">
                  PERFORMANCE
                </a>
              </li>
              <li>
                <a href="#bento" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-oceanic-noir/80 hover:text-oceanic-noir cursor-pointer">
                  SHOWCASE
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-oceanic-noir/80 hover:text-oceanic-noir cursor-pointer">
                  PRICING
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-4 pt-4 border-t border-oceanic-noir/10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-oceanic-noir/50">CURRENCY</span>
                <select 
                  ref={mobileSelectRef}
                  onChange={(e) => pricingStore.setState({ currency: e.target.value as CurrencyCode })}
                  className="bg-white border border-oceanic-noir/15 rounded-md px-3 py-1 text-xs font-mono text-oceanic-noir cursor-pointer focus:outline-none"
                  aria-label="Select currency"
                >
                  <option value="USD" className="bg-white text-oceanic-noir">USD ($)</option>
                  <option value="EUR" className="bg-white text-oceanic-noir">EUR (€)</option>
                  <option value="INR" className="bg-white text-oceanic-noir">INR (₹)</option>
                </select>
              </div>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center font-mono text-sm py-3 bg-forsythia text-oceanic-noir font-bold rounded-lg border-2 border-oceanic-noir cursor-pointer"
              >
                LAUNCH CONSOLE
              </a>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="border-t border-oceanic-noir/10 bg-white px-4 py-4 max-w-7xl mx-auto flex items-center gap-3">
            <img src="/assets/SVGs/search.svg" className="w-5 h-5 text-oceanic-noir/60" alt="" />
            <input
              type="text"
              placeholder="Search platform documentation, features, integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-oceanic-noir placeholder:text-oceanic-noir/30 focus:outline-none font-mono text-sm"
              autoFocus
            />
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="p-1 hover:bg-oceanic-noir/5 rounded cursor-pointer"
              aria-label="Close search"
            >
              <img src="/assets/SVGs/x-mark.svg" className="w-4 h-4 text-oceanic-noir/60" alt="" />
            </button>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-oceanic-noir/10" aria-labelledby="hero-heading">
          {/* Main Title - Monospace Header */}
          <h1 id="hero-heading" className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-oceanic-noir max-w-5xl mx-auto leading-[1.1] mb-6">
            Automate Data Orchestration at <span className="text-transparent bg-clip-text bg-gradient-to-r from-oceanic-noir via-nocturnal-expedition to-deep-saffron">Next-Gen Speed</span>
          </h1>

          {/* Description - Sans Body */}
          <p className="text-sm sm:text-lg text-oceanic-noir/75 font-sans max-w-3xl mx-auto leading-relaxed mb-10">
            A premium, high-converting data automation framework. Connect, synthesize, and run multi-agent workflows with hardware-accelerated latency profiles and real-time visual telemetry.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto font-mono text-sm px-8 py-4 bg-forsythia text-oceanic-noir font-bold rounded-xl border-2 border-oceanic-noir transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              GET STARTED NOW
              <img src="/assets/SVGs/arrow-trending-up.svg" className="w-4 h-4 text-oceanic-noir" alt="" />
            </a>
            <a
              href="#analytics"
              className="w-full sm:w-auto font-mono text-sm px-8 py-4 bg-white border border-oceanic-noir/15 hover:border-oceanic-noir/30 text-oceanic-noir font-semibold rounded-xl transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer"
            >
              VIEW LIVE METRICS
            </a>
          </div>
        </section>

        {/* LOGO LOOPING MARQUEE (Clean Partner Names) */}
        <section className="w-full overflow-hidden py-8 bg-white/30 border-b border-oceanic-noir/10 relative" aria-label="Trusted Enterprise Partners">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-arctic-powder to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-arctic-powder to-transparent z-10 pointer-events-none" />
          <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
            <div className="flex justify-around w-1/2 min-w-max gap-16 px-8">
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">CHRONOS OS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">APEX INTEGRATIONS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">KINETIC FLOW</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">MATRIX LABS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">NEXUS NET</span>
            </div>
            <div className="flex justify-around w-1/2 min-w-max gap-16 px-8" aria-hidden="true">
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">CHRONOS OS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">APEX INTEGRATIONS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">KINETIC FLOW</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">MATRIX LABS</span>
              <span className="font-mono text-sm tracking-widest text-oceanic-noir/40 font-bold hover:text-oceanic-noir/80 transition-colors cursor-default">NEXUS NET</span>
            </div>
          </div>
        </section>

        {/* 4-CARD FEATURE GRID */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b border-oceanic-noir/10" aria-labelledby="features-heading">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-2xl sm:text-4xl font-mono font-bold tracking-wide text-oceanic-noir mb-4">
              ENGINEERED FOR POWER
            </h2>
            <p className="text-sm sm:text-base text-oceanic-noir/60 font-sans max-w-2xl mx-auto">
              Our core infrastructure delivers sub-millisecond data routing layers backed by cryptographically secure isolated micro-state engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-white border border-oceanic-noir/15 hover:border-forsythia/60 rounded-xl p-6 transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between min-h-[180px] shadow-none">
              <div>
                <div className="w-12 h-12 rounded-lg bg-oceanic-noir/[0.03] border border-oceanic-noir/10 flex items-center justify-center mb-6 group-hover:bg-forsythia/10 group-hover:border-forsythia/40 transition-all duration-180">
                  <img src="/assets/SVGs/cube-16-solid.svg" className="w-6 h-6 text-oceanic-noir group-hover:text-forsythia transition-colors" alt="" />
                </div>
                <h3 className="font-mono font-bold text-base text-oceanic-noir mb-2">Distributed Consensus</h3>
                <p className="font-sans text-xs text-oceanic-noir/65 leading-relaxed">
                  Fault-tolerant transactional state synchronization across global clusters.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white border border-oceanic-noir/15 hover:border-forsythia/60 rounded-xl p-6 transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between min-h-[180px] shadow-none">
              <div>
                <div className="w-12 h-12 rounded-lg bg-oceanic-noir/[0.03] border border-oceanic-noir/10 flex items-center justify-center mb-6 group-hover:bg-forsythia/10 group-hover:border-forsythia/40 transition-all duration-180">
                  <img src="/assets/SVGs/chart-pie.svg" className="w-6 h-6 text-oceanic-noir group-hover:text-forsythia transition-colors" alt="" />
                </div>
                <h3 className="font-mono font-bold text-base text-oceanic-noir mb-2">Predictive Analytics</h3>
                <p className="font-sans text-xs text-oceanic-noir/65 leading-relaxed">
                  Dynamic machine learning pipelines executing speculative queries in parallel.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white border border-oceanic-noir/15 hover:border-forsythia/60 rounded-xl p-6 transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between min-h-[180px] shadow-none">
              <div>
                <div className="w-12 h-12 rounded-lg bg-oceanic-noir/[0.03] border border-oceanic-noir/10 flex items-center justify-center mb-6 group-hover:bg-forsythia/10 group-hover:border-forsythia/40 transition-all duration-180">
                  <img src="/assets/SVGs/arrow-path.svg" className="w-6 h-6 text-oceanic-noir group-hover:text-forsythia transition-colors animate-[spin_10s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite]" alt="" />
                </div>
                <h3 className="font-mono font-bold text-base text-oceanic-noir mb-2">Iterative Sync</h3>
                <p className="font-sans text-xs text-oceanic-noir/65 leading-relaxed">
                  Sub-millisecond data mutation layers providing real-time local updates.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white border border-oceanic-noir/15 hover:border-forsythia/60 rounded-xl p-6 transition-all duration-180 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between min-h-[180px] shadow-none">
              <div>
                <div className="w-12 h-12 rounded-lg bg-oceanic-noir/[0.03] border border-oceanic-noir/10 flex items-center justify-center mb-6 group-hover:bg-forsythia/10 group-hover:border-forsythia/40 transition-all duration-180">
                  <img src="/assets/SVGs/cog-8-tooth.svg" className="w-6 h-6 text-oceanic-noir group-hover:text-forsythia transition-colors" alt="" />
                </div>
                <h3 className="font-mono font-bold text-base text-oceanic-noir mb-2">Automated Pipeline</h3>
                <p className="font-sans text-xs text-oceanic-noir/65 leading-relaxed">
                  Trigger-driven ingestion agents with automated structural schema checks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL-TIME PERFORMANCE ANALYTICS DASHBOARD */}
        <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b border-oceanic-noir/10" aria-labelledby="analytics-heading">
          <div className="bg-white border border-oceanic-noir/15 rounded-xl p-6 sm:p-10 relative overflow-hidden shadow-none">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/assets/SVGs/chart-pie.svg" className="w-5 h-5 text-oceanic-noir" alt="" />
                  <span className="font-mono text-xs text-oceanic-noir/70 tracking-wider uppercase">TELEMETRY METRICS</span>
                </div>
                <h2 id="analytics-heading" className="text-2xl sm:text-4xl font-mono font-bold tracking-tight text-oceanic-noir mb-6">
                  REAL-TIME SYSTEM LATENCY
                </h2>
                <p className="font-sans text-sm sm:text-base text-oceanic-noir/70 leading-relaxed mb-8">
                  Watch live query executions scale across our isolated micro-networks. Verify speeds, database lock thresholds, and schema mapping matrices directly in the client dashboard.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-oceanic-noir/10">
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-oceanic-noir">12ms</div>
                    <div className="font-sans text-[10px] sm:text-xs text-oceanic-noir/50 uppercase mt-1">Avg Latency</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-deep-saffron">10x</div>
                    <div className="font-sans text-[10px] sm:text-xs text-oceanic-noir/50 uppercase mt-1">Data Speed</div>
                  </div>
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-oceanic-noir/80">99.9%</div>
                    <div className="font-sans text-[10px] sm:text-xs text-oceanic-noir/50 uppercase mt-1">SLA Uptime</div>
                  </div>
                </div>
              </div>

              {/* Graphic Telemetry Panel */}
              <div className="w-full lg:w-[500px] bg-white border border-oceanic-noir/15 rounded-xl p-6 shadow-none relative">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-oceanic-noir/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-oceanic-noir/70">REGION: US-EAST-1</span>
                  </div>
                </div>

                {/* Simulated Telemetry Wave */}
                <div className="relative py-4">
                  <svg viewBox="0 0 500 150" className="w-full h-32 text-nocturnal-expedition" fill="none">
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(23,40,54,0.05)" strokeWidth="1" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(23,40,54,0.05)" strokeWidth="1" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(23,40,54,0.05)" strokeWidth="1" />
                    
                    {/* Gradient Area - Jagged */}
                    <path
                      d="M 0,110 L 25,100 L 50,115 L 75,70 L 100,85 L 125,75 L 150,105 L 175,50 L 200,60 L 225,45 L 250,95 L 275,110 L 300,85 L 325,120 L 350,95 L 375,55 L 400,65 L 425,40 L 450,75 L 475,50 L 500,60 L 500,150 L 0,150 Z"
                      fill="url(#wave-gradient)"
                      opacity="0.08"
                    />

                    {/* Wave Path - Jagged */}
                    <path
                      d="M 0,110 L 25,100 L 50,115 L 75,70 L 100,85 L 125,75 L 150,105 L 175,50 L 200,60 L 225,45 L 250,95 L 275,110 L 300,85 L 325,120 L 350,95 L 375,55 L 400,65 L 425,40 L 450,75 L 475,50 L 500,60"
                      stroke="var(--color-nocturnal-expedition)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <defs>
                      <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-nocturnal-expedition)" />
                        <stop offset="100%" stopColor="var(--color-arctic-powder)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Intersecting metric dot overlay */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 bg-forsythia rounded-full border-2 border-oceanic-noir" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID SHOWCASE */}
        <section id="bento" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b border-oceanic-noir/10" aria-labelledby="bento-heading">
          <div className="text-center mb-16">
            <h2 id="bento-heading" className="text-2xl sm:text-4xl font-mono font-bold tracking-wide text-oceanic-noir mb-4">
              FEATURES EXPLORER
            </h2>
            <p className="text-sm sm:text-base text-oceanic-noir/60 font-sans max-w-2xl mx-auto">
              Hover over cards on desktop or expand panels on mobile. Your active focus index transfers seamlessly between layout breaklines.
            </p>
          </div>

          {/* Feature 2: Bento-to-Accordion Wrapper Component */}
          <BentoAccordionWrapper />
        </section>

        {/* PRICING PLANS SECTION */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-b border-oceanic-noir/10" aria-labelledby="pricing-heading">
          <div className="text-center mb-16">
            <h2 id="pricing-heading" className="text-2xl sm:text-4xl font-mono font-bold tracking-wide text-oceanic-noir mb-4">
              HIERARCHICAL PLANS
            </h2>
            <p className="text-sm sm:text-base text-oceanic-noir/60 font-sans max-w-2xl mx-auto">
              Select standard subscriptions calculated dynamically based on regional variables. Fully isolated performance guarantees zero render delays.
            </p>
          </div>

          {/* Feature 1: Pricing Component */}
          <PricingMatrix />
        </section>
      </main>

      {/* SITEMAP FOOTER */}
      <footer className="border-t border-oceanic-noir/10 bg-white/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative" aria-label="Footer Navigation">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/SVGs/cube-16-solid.svg" className="w-5 h-5 text-oceanic-noir" alt="" />
              <span className="font-mono font-bold text-base tracking-wider text-oceanic-noir">AEGIS.AI</span>
            </div>
            <p className="font-sans text-xs text-oceanic-noir/60 leading-relaxed max-w-xs">
              Secure, lightning-fast data pipeline automation orchestrator. Engineered for maximum transaction throughput and absolute state resilience.
            </p>
          </div>

          {/* Column 2: Product Sitemap */}
          <div>
            <h4 className="font-mono text-xs font-bold text-oceanic-noir/50 tracking-wider uppercase mb-4">PRODUCT</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans text-oceanic-noir/65">
              <li><a href="#features" className="hover:text-forsythia transition-colors">Core Features</a></li>
              <li><a href="#analytics" className="hover:text-forsythia transition-colors">Analytics Engine</a></li>
              <li><a href="#pricing" className="hover:text-forsythia transition-colors">Pricing Plans</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">API References</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div>
            <h4 className="font-mono text-xs font-bold text-oceanic-noir/50 tracking-wider uppercase mb-4">RESOURCES</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans text-oceanic-noir/65">
              <li><a href="/" className="hover:text-forsythia transition-colors">Documentation</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">Security Audits</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">Telemetry Nodes</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">Service Status</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div>
            <h4 className="font-mono text-xs font-bold text-oceanic-noir/50 tracking-wider uppercase mb-4">COMPLIANCE</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans text-oceanic-noir/65">
              <li><a href="/" className="hover:text-forsythia transition-colors">Terms of Operations</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">Privacy Crypts</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">SLA Metrics</a></li>
              <li><a href="/" className="hover:text-forsythia transition-colors">ISO 27001 Certification</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-oceanic-noir/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-oceanic-noir/40">
            &copy; {new Date().getFullYear()} AEGIS AUTOMATIONS INC. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </div>
  );
}
