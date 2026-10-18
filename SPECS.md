# 🏛️ Lumina Beauty Parlour & Aesthetics Studio — Technical Specifications (SPECS)

> **Document Version:** 1.0.0  
> **Author & Lead Architect:** Sain Bux (Hadi Seelro)  
> **Repository:** [https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour.git](https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour.git)  
> **Status:** Production-Ready  

---

## 1. Executive Summary

**Lumina Beauty Parlour & Aesthetics** is a high-end luxury wellness and aesthetic web platform engineered with a boutique editorial aesthetic, micro-animations, and an intelligent **24/7 Live AI Beauty Concierge Agent**. The application caters to discerning clients seeking bespoke facials, couture bridal styling, restorative hair therapies, and body treatments.

---

## 2. Technical Stack & Dependencies

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.0.0` | UI component tree, fast rendering, concurrent capabilities |
| **Language** | TypeScript | `~5.8.2` | Strict type safety, clean data modeling |
| **Build Tool** | Vite | `^6.2.0` | Lightning-fast HMR and optimized tree-shaken builds |
| **Styling** | Tailwind CSS v4 | `^4.1.14` | Modern CSS `@theme` tokens, glassmorphism, responsive utilities |
| **Animations** | Motion (`motion/react`) | `^12.23.24` | Fluid page transitions, entrance reveals, floating badges |
| **Icons** | Lucide React | `^0.546.0` | High-precision vector UI iconography |
| **Routing** | React Router DOM | `^7.14.1` | Client-side routing, route-based scroll restoration, query params |
| **AI Integration** | Google Gemini API / Local NLU | `@google/genai` / REST | 24/7 intelligent concierge, dual-fallback conversational engine |

---

## 3. System Architecture & Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                           App.tsx                           │
│  (Router, ScrollToTop, Global Layout, Selection Theming)    │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       ┌───────┴───────┐               ┌───────┴────────┐
       │   Navbar.tsx  │               │ LuminaChatbot  │
       │ (Glass Nav,   │               │ (24/7 Live AI  │
       │  Mobile Menu) │               │  Concierge)    │
       └───────┬───────┘               └────────────────┘
               │
  ┌────────────┴───────────────────────────────────────────┐
  │ Routes & Pages                                         │
  ├───────────────────┬───────────────────┬────────────────┤
  │ Home.tsx          │ ServicesPage.tsx  │ AboutPage.tsx  │
  │ • Hero Banner     │ • Category Filter │ • Brand Story  │
  │ • Feature Rituals │ • Service Grid    │ • Core Values  │
  │ • Masterpieces    │ • Luxury Packages │ • Specialists  │
  │ • Testimonials    │ • FAQ Accordion   │ • Mission/Vis. │
  ├───────────────────┴───────────────────┴────────────────┤
  │ GalleryPage.tsx   │ ContactPage.tsx                    │
  │ • Lookbook Grid   │ • Smart Pre-select Form            │
  │ • Masonry View    │ • Slot Selector & Instant State    │
  │ • Transformation  │ • Hours, Phone & Location Info     │
  └───────────────────┴────────────────────────────────────┘
               │
       ┌───────┴───────┐
       │   Footer.tsx  │
       │ (Branding,    │
       │  Author Info) │
       └───────────────┘
```

---

## 4. 24/7 AI Beauty Concierge Agent Specifications

### 4.1 Architecture & Resilience
The chatbot is designed with a **Dual-Engine Architecture** ensuring zero downtime:
1. **Cloud LLM Engine (Google Gemini 1.5 Flash):**  
   - Activates when `GEMINI_API_KEY` or `VITE_GEMINI_API_KEY` is present.
   - Grounded strictly on Lumina's service catalog, packages, and salon policies.
2. **Deterministic Local NLU Engine (Fallback & 100% Offline/Client-side):**  
   - Natural Language Understanding classifier trained on beauty keywords, prices, slots, packages, and locations.
   - Works immediately out-of-the-box without requiring third-party API tokens.
   - Eliminates rate-limit errors and guarantees uninterrupted customer support.

### 4.2 Multilingual Capability
- **English**: Fluent, high-fashion vocabulary tailored to luxury hospitality.
- **Urdu & Roman Urdu**: Understands inquiries such as:
  - *"Bridal makeup package kitne ka hai?"*
  - *"Glowing skin ke liye kaunsa facial behtar hai?"*
  - *"Salon ki timing aur location bataen"*
  - *"Appointment kaise book karein?"*

### 4.3 Interactive Action Handlers
- **Embedded Recommendation Cards:** When rituals are suggested, cards render directly in chat with duration, price, and a direct `Book` button.
- **Deep Linking:** Clicking `Book` pre-fills the `ContactPage` reservation form with that service title via URL query parameters (`/contact?service=...`).
- **Web Audio Chimes:** Synthesizer feedback using native Web Audio API oscillators for incoming/outgoing interactions (muteable).

---

## 5. Data Models & Schemas

### 5.1 Service Schema (`src/constants.ts`)
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'Facial' | 'Hair' | 'Makeup' | 'Nails' | 'Body';
  highlight?: boolean;
}
```

### 5.2 Luxury Package Schema
```typescript
export interface BeautyPackage {
  id: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  savings: string;
  includes: string[];
  recommendedFor: string;
}
```

### 5.3 Salon Information Schema
```typescript
export interface SalonInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    holidays: string;
  };
  socials: Record<string, string>;
}
```

---

## 6. Design System & UI Specifications

### 6.1 Color Palette
- **Primary Background:** `#0c0c0c` (Obsidian Jet)
- **Secondary Background:** `#141416` (Smoky Onyx)
- **Brand Accent:** `#c5a059` (Champagne Gold)
- **Accent Muted:** `rgba(197, 160, 89, 0.15)`
- **Text Color:** `#e5e5e5` (Pearl White)
- **Text Muted:** `rgba(255, 255, 255, 0.60)`

### 6.2 Typography Hierarchy
- **Editorial Headings:** `Cormorant Garamond, serif` (weights: 300, 400, 600, 700)
- **Body & UI Elements:** `Inter, sans-serif` (weights: 300, 400, 500, 600, 700)

### 6.3 Glassmorphism Tokens
- Class `.glass`: `backdrop-blur-xl bg-white/[0.03] border border-white/[0.08]`
- Class `.glass-dark`: `backdrop-blur-xl bg-black/40 border border-white/5`
- Text Glow: `text-shadow: 0 0 15px rgba(197, 160, 89, 0.4)`

---

## 7. Performance & SEO Optimizations

- **Dynamic Bundling:** Vite code-splitting and asset compression.
- **Font Preconnection:** Google Fonts preconnected in `<head>`.
- **Image Optimization:** Unsplash auto-format URLs with explicit `width`, `quality=80`, and lazy evaluation.
- **Scroll Restoration:** Automatic scroll-to-top handler on route changes (`ScrollToTop`).
- **Lighthouse Goals:** 95+ Score across Performance, Accessibility, Best Practices, and SEO.

---

## 8. Deployment & Environment Setup

### Environment Variables
Create a `.env` file in the root directory:
```env
# Optional: Provide Google Gemini API Key for dynamic LLM responses
GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Build Commands
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run TypeScript lint check
npm run lint

# Production build
npm run build
```

---

*Authored by **Sain Bux (Hadi Seelro)** — Designed for high-impact portfolio presentation.*
