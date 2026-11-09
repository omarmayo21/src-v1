# SRFEC Stones & Granite — Multi-Page Corporate Website

Bilingual (Arabic RTL default `/ar` + English LTR `/en`) multi-page corporate website for **SRFEC Stones & Granite (مصنع سيرفك للحجر والجرانيت)**, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 1. Site Map & Multi-Page Architecture

All routes are statically generated for both Arabic (`/ar/...`, RTL default) and English (`/en/...`, LTR) via `generateStaticParams`. Visiting `/` automatically redirects to `/ar` via `src/proxy.ts` and `next.config.mjs`. Switching languages in the header preserves the current page route (e.g., `/ar/about` ↔ `/en/about`).

| Route | Page | Source File | Content & Data Source |
|---|---|---|---|
| `/[lang]` | **Home** | [`src/app/[lang]/page.tsx`](./src/app/[lang]/page.tsx) | Hero, stats strip, Story teaser, 3 Why SRFEC highlights, Factory teaser, 3 featured projects, Clients strip, CTA band, JSON-LD `Organization` |
| `/[lang]/about` | **About SRFEC** | [`src/app/[lang]/about/page.tsx`](./src/app/[lang]/about/page.tsx) | Page banner, sticky in-page sub-nav, Our Story (`01`–`04`), CEO Message, Vision (`01`–`03`), Mission (`01`–`02`), Values (`01`–`04`), CTA band |
| `/[lang]/factory` | **Our Factory** | [`src/app/[lang]/factory/page.tsx`](./src/app/[lang]/factory/page.tsx) | Page banner, intro heading + 3 factory paragraphs, mosaic gallery, 2 capability blocks (*Cutting & Processing*, *Carving & Shaping*), CTA band |
| `/[lang]/why-srfec` | **Why SRFEC** | [`src/app/[lang]/why-srfec/page.tsx`](./src/app/[lang]/why-srfec/page.tsx) | Page banner, intro, 6 differentiator cards (`01`–`06`), animated Stats band (`+40` years, `+1,000` projects), CTA band |
| `/[lang]/projects` | **Projects Listing** | [`src/app/[lang]/projects/page.tsx`](./src/app/[lang]/projects/page.tsx) | Page banner, intro heading & paragraph, category filter chips, project cards linking to `/[lang]/projects/[slug]`, CTA band |
| `/[lang]/projects/[slug]` | **Project Detail** | [`src/app/[lang]/projects/[slug]/page.tsx`](./src/app/[lang]/projects/[slug]/page.tsx) | Driven by [`src/data/projects.ts`](./src/data/projects.ts): banner, hero image, specifications sidebar, overview, interactive lightbox gallery, Previous/Next project links, CTA band |
| `/[lang]/clients` | **Our Clients** | [`src/app/[lang]/clients/page.tsx`](./src/app/[lang]/clients/page.tsx) | Driven by [`src/data/clients.ts`](./src/data/clients.ts): page banner, intro, grayscale-to-color partner logo grid (6–20+ logos), CTA band |
| `/[lang]/contact` | **Contact Us** | [`src/app/[lang]/contact/page.tsx`](./src/app/[lang]/contact/page.tsx) | Page banner, contact info from [`src/data/site-config.ts`](./src/data/site-config.ts), validated front-end inquiry form, embedded map placeholder |
| `/[lang]/stones` | **Our Stones** *(Optional)* | [`src/app/[lang]/stones/page.tsx`](./src/app/[lang]/stones/page.tsx) | Marble, Granite, Travertine, Onyx, Limestone cards (toggle via `showOptionalStonesSection` in `site-config.ts`) |
| `/[lang]/not-found` | **Branded 404** | [`src/app/[lang]/not-found.tsx`](./src/app/[lang]/not-found.tsx) | Granite Navy 404 page with white symbol, fading brand pattern, and link back to `/[lang]` |
| `/sitemap.xml` | **Sitemap** | [`src/app/sitemap.ts`](./src/app/sitemap.ts) | Lists all static pages and all project slugs across both `/ar` and `/en` with `hreflang` alternates |
| `/robots.txt` | **Robots** | [`src/app/robots.ts`](./src/app/robots.ts) | References `${SITE_URL}/sitemap.xml` |

---

## 2. How to Run Locally & Build

Requires **Node.js 20+** (configured in `package.json` `"engines"`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser (redirects automatically to `/ar`).

### Lint & Production Build

```bash
npm run lint
npm run build
npm run start
```

---

## 3. Deploy to Vercel (Zero-Config)

This repository uses the standard Next.js App Router build and requires **no `vercel.json`** or custom build overrides:

1. **Push to GitHub:** Commit the repository (including `package-lock.json`) and push it to a GitHub repository.
2. **Import in Vercel:** Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repository. Vercel automatically detects **Next.js** and configures the build.
3. **Add Environment Variables:** In the Vercel project setup under **Environment Variables**, add the variables from [`.env.example`](./.env.example):
   - `NEXT_PUBLIC_SITE_URL` = `https://www.srfec.com` (used for `metadataBase`, canonical URLs, `hreflang` alternates, Open Graph, `robots.txt`, and `sitemap.xml`).
   - `NEXT_PUBLIC_CONTACT_API_URL` = *(optional)* leave empty for front-end confirmation mode, or set to `/api/contact` / your Formspree or Resend endpoint when ready.
4. **Deploy:** Click **Deploy**.
5. **Connect Custom Domain:** In your Vercel project dashboard, go to **Settings → Domains** and add your custom domain.

---

## 4. Where to Edit Content & Assets

- **Arabic Copy & Page Metadata:** [`src/data/ar.ts`](./src/data/ar.ts)
- **English Copy & Page Metadata:** [`src/data/en.ts`](./src/data/en.ts)
- **Projects Portfolio & Slugs:** [`src/data/projects.ts`](./src/data/projects.ts)
- **Client Logos List:** [`src/data/clients.ts`](./src/data/clients.ts)
- **Contact Details, Social Links & Feature Flags:** [`src/data/site-config.ts`](./src/data/site-config.ts)
- **Official Brand Logos & Patterns:** Located in `/public/brand/` (`srfec-logo-primary.svg`, `srfec-logo-horizontal.svg`, `srfec-symbol.svg`, `srfec-monogram.svg`, `-white.svg`, `-mono.svg`, `pattern.svg`, `pattern-light.svg`, `pattern-white.svg`, `organic-veins.svg`, `favicon.ico`, `icon.png`, `apple-icon.png`, `og-image.png`).
- **Photography & Stone Assets:** Located in organized subfolders in `/public/images/` (`hero/`, `factory/`, `projects/`, `stones/`, `clients/`, `ceo/`, `misc/`). See [`/public/images/manifest.json`](./public/images/manifest.json) for asset metadata and [`/public/images/IMAGE-PROMPTS.md`](./public/images/IMAGE-PROMPTS.md) for generation prompts.
