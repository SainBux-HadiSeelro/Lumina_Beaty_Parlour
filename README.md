<div align="center">

# ✨ Lumina | Luxury Beauty Parlour & Aesthetics Studio

### *Where Timeless Elegance Meets Bespoke Aesthetic Artistry*

[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-AI_Concierge-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-F59E0B?style=for-the-badge)](./LICENSE)

<br />

[Explore Features](#-key-features) • [24/7 AI Concierge](#-247-live-ai-concierge-agent) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Specifications](./SPECS.md) • [Author](#-portfolio--author)

<br />

<img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200" alt="Lumina Luxury Beauty Parlour" width="100%" style="border-radius: 16px; border: 1px solid rgba(197, 160, 89, 0.3); box-shadow: 0 20px 40px rgba(0,0,0,0.8);" />

</div>

---

## 💎 Overview

**Lumina Beauty Parlour** is an ultra-premium aesthetic salon and spa web platform engineered with editorial elegance, fluid micro-interactions, and a native **24/7 Live AI Beauty Concierge Agent**.

Designed specifically as a showcase flagship project for high-end web development, this platform merges **high-fashion UI design** (Obsidian Jet & Champagne Gold, glassmorphism, Cormorant Garamond typography) with **state-of-the-art engineering** (React 19, Tailwind CSS v4, Motion, TypeScript).

---

## 🌟 Key Features

### 🤖 24/7 Live AI Concierge Agent
- **Always Active**: Operates around the clock with complete live knowledge of all services, pricing, bridal packages, and salon policies.
- **Dual-Engine Resilience**: Powered by **Google Gemini 1.5 Flash** with an instant, offline deterministic **Local NLU Expert Engine** as fallback — ensuring zero downtime.
- **Multilingual Understanding**: Seamlessly understands and converses in **English**, **Urdu**, and **Roman Urdu** (*"Bridal makeup kitne ki hai?"*, *"Facials ki price list"*).
- **Embedded Interactive Service Cards**: Recommends rituals within chat with direct **"Book"** actions that pre-fill the reservation form.
- **Micro-Delights**: Subtle synthesizer audio chimes (Web Audio API), unread message indicator, and quick-prompt pills.

### ✨ Bespoke Rituals & Curated Packages
- **Dynamic Category Filtering**: Browse between *Facial, Hair, Makeup, Nails, and Body Care*.
- **Signature Curations**: Pre-bundled luxury experiences including *The Royal Bridal Sanctuary*, *Weekend Glow Retreat*, and *Express Glam Makeover*.
- **Interactive FAQ Accordion**: Immediate answers to appointments, policies, and consultation queries.

### 📅 Smart Reservation Desk
- **Deep-Linked Pre-Selection**: Selecting a service anywhere on the site or via chatbot automatically populates the booking dropdown via URL query parameters (`/contact?service=...`).
- **Interactive Feedback**: Real-time reservation confirmation suite displaying selected rituals, date slots, and guest details.

### 🎨 Editorial Lookbook Gallery
- Masonry-styled showcase of hair transformations, bridal glow aesthetics, and bespoke nail artistry.
- One-click **"Book This Look"** call-to-actions.

### ⚡ Cutting-Edge Architecture
- Built on **React 19** and compiled with **Vite 6** for blazing fast load times.
- Styled using the next-generation **Tailwind CSS v4** engine with custom CSS variables and glassmorphism utilities.
- Smooth entrance choreography powered by **Motion (`motion/react`)**.

---

## 🛠️ Tech Stack

```
Frontend:       React 19 | TypeScript | Vite 6 | React Router DOM v7
Styling:        Tailwind CSS v4 | CSS Variables | Glassmorphism
Animations:     Motion (motion/react) | Hardware Accelerated
Icons:          Lucide React
AI Integration: Google Gemini 1.5 Flash (@google/genai) + Custom Local NLU Fallback
Audio Feedback: Web Audio API (Native Browser Synthesizer)
```

---

## 📂 Project Structure

```
Lumina_Beaty_Parlour/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable modular UI components
│   │   ├── LuminaChatbot.tsx  # 24/7 Live AI Beauty Concierge Agent
│   │   ├── Navbar.tsx         # Responsive glassmorphism navigation
│   │   ├── Footer.tsx         # Footer with quick links & author credit
│   │   ├── Hero.tsx           # Luxury hero section with floating cards
│   │   ├── ServicesSection.tsx# Featured services preview
│   │   ├── AboutSummary.tsx   # Philosophy & testimonials section
│   │   └── UI.tsx             # GlassCard, Section, SectionTitle primitives
│   ├── pages/              # Routed page views
│   │   ├── Home.tsx           # Flagship homepage
│   │   ├── ServicesPage.tsx   # Categorized services, packages & FAQs
│   │   ├── AboutPage.tsx      # Brand story, philosophy & master artisans
│   │   ├── GalleryPage.tsx    # Lookbook transformations & visual journal
│   │   └── ContactPage.tsx    # Smart reservation form & sanctuary info
│   ├── lib/
│   │   └── utils.ts           # Utility helpers (clsx, twMerge)
│   ├── constants.ts        # Single source of truth for services, packages & FAQs
│   ├── index.css           # Tailwind v4 theme, fonts, custom glass utilities
│   ├── App.tsx             # Main router & app wrapper with 24/7 Concierge
│   └── main.tsx            # Application DOM entrypoint
├── index.html              # Luxury SEO metadata, OpenGraph & favicon
├── package.json            # Dependencies and build scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build & bundler configuration
├── SPECS.md                # Full technical specifications document
└── README.md               # Portfolio showcase documentation
```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour.git
cd Lumina_Beaty_Parlour
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
The 24/7 AI Concierge works **out-of-the-box** using its intelligent built-in knowledge base! To optionally enable live Google Gemini LLM responses:
```bash
cp .env.example .env
```
Add your key inside `.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 📋 Technical Specifications

For in-depth architectural blueprints, component contracts, AI system prompts, and design token specifications, consult the [**SPECS.md**](./SPECS.md) document.

---

## 👨‍💻 Portfolio & Author

Developed and architected with passion by:

**Sain Bux (Hadi Seelro)**  
- 🐙 **GitHub:** [@SainBux-HadiSeelro](https://github.com/SainBux-HadiSeelro)  
- 💼 **Project Repo:** [Lumina_Beaty_Parlour](https://github.com/SainBux-HadiSeelro/Lumina_Beaty_Parlour.git)  

*If you found this project inspiring, please give it a ⭐ on GitHub!*
