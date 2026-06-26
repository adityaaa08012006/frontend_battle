# Aegis.AI — Next-Gen AI Data Orchestration & Automation

Aegis.AI is a high-performance landing page and interactive system dashboard designed for secure, lightning-fast data pipeline automation. This platform is engineered with a gorgeous, high-contrast **Neo-Brutalist** visual system.

## 🚀 Key Features

- **Interactive Pipeline Node Engine**: A hardware-inspired interactive sandbox console panel allowing users to test pipelines. It prints simulated network, compiler, and cluster logs natively with a smooth typewriter character typing effect and blinking terminal cursor.
- **Real-Time Telemetry Analytics**: A hardware-accelerated dynamic SVG cubic bezier curve mapping live system query latency with zero-delay updates.
- **Dynamic Pricing Matrix**: Auto-calculating subscription tiers spanning regional currencies (USD, INR, EUR) and toggleable cycles (Monthly vs Annual with 20% discount) featuring interactive click highlights.
- **Features Showcase Bento Accordion**: Responsive, compact Bento grid layout highlighting features and metrics using custom active/inactive card offsets.
- **Premium User Interactions**: Custom in-page toast notification system replacing native popups, and visual capsule hover navigation states.
- **Strict SEO & Accessibility Compliance**: Validated semantic HTML5 elements, canonical tagging, and JSON-LD structured schema metadata for Google search Rich Snippets.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (TypeScript)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Visual Assets**: Standard, high-quality SVG iconography

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
2. Install the package dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the local development server with hot-module replacement:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Type Verification

To run TypeScript compiler checks and diagnostics:
```bash
npx tsc --noEmit
```

### Production Build

To compile and bundle assets for high-performance hosting:
```bash
npm run build
```
Outputs are compiled into the `dist/` directory.

---

## 📂 Code Structure

- `src/App.tsx`: Main application entry point containing header layouts, hero landing, and sitemap footer.
- `src/components/how-it-works/PipelineTerminal.tsx`: Isolated component managing the interactive terminal layout, typing animation timers, and statistics row.
- `src/components/pricing/PricingMatrix.tsx`: Pricing calculator matrix, currency selector, and click selection states.
- `src/components/bento-accordion/BentoAccordionWrapper.tsx`: Bento grid and interactive showcase layout.
- `src/components/faq/FAQAccordion.tsx`: Clean, native summary disclosure accordion components.
