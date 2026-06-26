# Phase 1 Official Problem Statement: Next-Gen AI Platform Speed Run

## 1. Executive Summary & Core Objective

- **The Task:** Build a premium, high-converting, fully responsive SaaS landing page for an advanced AI-driven data automation platform.
- **Core Focus:** This sprint strictly evaluates engineering speed, architectural design integrity, native motion choreography, and clean SEO hygiene under a 4-hour countdown window.
- **Workflow Architecture:** Standard React + Vite SPA (TypeScript) utilizing Tailwind CSS v4. All custom styling properties, typography configurations, and predefined system variables must be loaded natively.

---

## 2. Core Feature Requirements

### Feature 1: Matrix-Driven Pricing & Performance-Isolated Currency Switcher

- **The Blueprint:** A pricing tier component displaying three tiers that fluidly switch between Monthly and Annual billing cycles across three exact currencies: INR (₹), USD ($), and EUR (€).
- **The Data Logic:** Final pricing tiers must NOT be hardcoded. You must calculate all calculations dynamically using a multi-dimensional configuration matrix/object. This data matrix must natively factor in:
  - Base Tier Rate
  - Flat 20% Annual Discount Multiplier
  - Regional Tariff Variables
- **The Performance Constraint:** State changes from the billing cycle toggle or currency dropdown must be isolated entirely to the specific DOM text nodes displaying the price strings. No parent re-renders, layout-wide state reflows, or block component flashes are permitted under Chrome DevTools.

### Feature 2: Bento-to-Accordion Wrapper with State Persistence

- **The Blueprint:** Display core technical features inside a high-end Bento-Grid layout on desktop screens. On mobile devices, this component must refactor fluidly into a touch-optimized Accordion list.
- **The Context Lock Constraint:** If a user is interacting with or hovering over a specific grid element on desktop and resizes the browser past the mobile breakpoint, the active index context must programmatically persist. The corresponding panel on the mobile Accordion view must smoothly remain open upon layout transition.
- **Zero-Dependency Rule:** You are strictly prohibited from using third-party component layers or libraries for this feature. The entire layout wrapper, state sync, and accordion logic must be written from scratch.

---

## 3. Engineering & Layout Standards

### System Style Parameters

- **Typography Matrix:**
  - `JetBrains Mono`: Enforced strictly for Headers, Landing Page Titles, Code Blocks, and specialized technical labels.
  - `Inter`: Enforced for Body Text, Paragraph descriptions, FAQs, and pricing matrices.
- **Color Hex Palette Tokens:** Inject these exact theme tokens into `src/index.css`:
  - Arctic Powder: `#F1F6F4`
  - Forsythia: `#FFC801`
  - Nocturnal Expedition: `#114C5A`
  - Mystic Mint: `#D9E8E2`
  - Deep saffron: `#FF9932`
  - Oceanic Noir: `#172836`

### Entrance, Performance, & Motion Constraints

- **Zero Runtime CSS-in-JS Animation Engines:** All animations and visual transitions must utilize native CSS transitions/animations or the Web Animations API (WAAPI).
- **Timing & Easing Slates:**
  - _Micro-interactions (Hovers/Toggles):_ 150ms - 200ms utilizing an `ease-out` curve.
  - _Structural Layout Reflows:_ 300ms - 400ms utilizing an `ease-in-out` curve.
- **Performance Cap:** The initial application loader and entrance sequence must execute completely within **500ms**. It must not cause layout thrashing, block semantic HTML indexing, or delay Time to Interactive (TTI).
