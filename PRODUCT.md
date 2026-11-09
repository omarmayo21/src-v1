# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Next.js (App Router, static-export friendly) + TypeScript + Tailwind CSS + Framer Motion (explicitly required by brief).

## Users
B2B construction developers, architectural firms, engineering consultants, and project owners in Saudi Arabia evaluating stone and granite manufacturing partners for architectural and construction projects.

## Product Purpose
Corporate bilingual (Arabic RTL default + English LTR) web presence for SRFEC Stones & Granite (مصنع سيرفك للحجر والجرانيت), presenting the factory's 40+ years of contracting heritage, specialized sawing and carving capabilities, quality standards, project portfolio, and direct inquiry channel.

## Positioning
Backed by over 40 years of contracting heritage (originating from Saud Rashid Al-Faqih Contracting Est.) and more than 1,000 completed projects, SRFEC combines industrial stone sawing and processing machinery with a dedicated master-craftsman stone carving and shaping department.

## Operating Context
Evaluated by architects, contractors, and procurement leads across desktop and mobile viewports in both Arabic (RTL) and English (LTR) during vendor qualification and specification phases.

## Capabilities and Constraints
- Bilingual single-page corporate architecture with smooth-scrolling anchored sections, sticky header, language switcher (`ar` default RTL, `en` LTR), and mobile navigation drawer.
- Front-end only static-export compatible architecture; contact form includes full client-side validation and confirmation state with a clearly marked `TODO` for future API integration.
- All copy strictly sourced from `ar.ts` and `en.ts` dictionary files with zero hard-coded UI strings.
- Strict adherence to official Arabic copy and calm, faithful English translations without superlatives, exclamation marks, or unverified claims.

## Brand Commitments
- **Brand Idea:** "Every stone tells a story." Contrast between rigid engineering geometry (square frame: measurement, cutting, engineering) and organic geological flow (white stone veins).
- **Voice:** Master craftsman speaking to a valued client — Confident, Clear, Calm. No hype, no exclamation marks, no "best/cheapest/biggest" claims.
- **Color System (Strict Zero-Black Policy):**
  - Granite Navy `#192D4C` (RGB 25, 45, 76) — dominant structural and text color. Never use `#000000` or pure black anywhere in text, borders, or shadows (all shadows must be navy-tinted).
  - Soft Champagne Gold `#C9A96A` (RGB 201, 169, 106) — accent only (large text, icons, 120px signature section underlines, thin dividers, and gold CTA buttons with navy text). Never use small gold text on white.
  - Warm Cream `#F5F0E6` — soft alternating section background.
  - Stone Gray `#E9EAEE` / `#F3F4F6` — pattern texture and subtle borders.
  - Pure White `#FFFFFF` — primary light surface.
- **Typography:**
  - Latin Display: `Playfair Display` (400/700/800/900)
  - Latin Body/UI: `Poppins` (400/500/600)
  - Arabic Display: `Amiri` (400/700)
  - Arabic Body/UI: `IBM Plex Sans Arabic` (400/500/600/700)
- **Logo & Pattern Rules:**
  - Reusable `<Logo />` component supporting `primary | horizontal | symbol | monogram` and `color | mono | white`, referencing `/public/brand/` SVGs with an architectural typographic fallback until client SVG files are dropped in, preserving 1/6 symbol width clear space and 70px minimum width.
  - Reusable `<BrandPattern />` component with horizontal linear-gradient mask fade at 6–10% opacity, paired with subtle organic flowing-vein SVG motifs.

## Evidence on Hand
- Complete official Arabic copy for Hero, Our Story (4 milestones), Vision (main statement + 3 pillars), Mission (2 pillars), Values (4 values), Factory (3 paragraphs + 2 department chips), Why SRFEC (intro + 6 differentiators), Stats (+40 years, +1,000 projects), and Projects intro.
- Explicit placeholders required for: CEO portrait & message (`[CEO name]`, `[CEO message - to be provided by client]`), `/public/brand/` logo files, `/public/images/` photography slots, `projects.ts` portfolio entries, `clients.ts` partner logos, and `site-config.ts` contact details.

## Product Principles
1. **Craftsman Authority Over Hype:** Let precision layout, calm factual language, and material texture convey quality without sales clichés or exclamation marks.
2. **True Bilingual Parity:** Treat Arabic RTL and English LTR as equal first-class experiences using logical CSS properties, tailored serif/sans pairings, and mirrored directional affordances.
3. **Zero-Black Material Honesty:** Anchor every shadow, text hierarchy, border, and overlay in Granite Navy (`#192D4C`), Warm Cream (`#F5F0E6`), and Champagne Gold (`#C9A96A`).
4. **Drop-In Asset Readiness:** Structure all brand logos, stone/factory imagery, projects, clients, and contact metadata cleanly so the client team can swap placeholders without touching component logic.

## Accessibility & Inclusion
WCAG AA contrast compliance (navy text on gold buttons, never small gold text on white), full keyboard navigation and visible gold/navy focus rings, semantic HTML landmarks, `prefers-reduced-motion` compliance, and screen-reader-friendly bilingual attributes (`lang`, `dir`).

