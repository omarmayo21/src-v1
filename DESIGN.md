---
name: SRFEC Stones & Granite
description: Every stone tells a story — precision stone engineering and natural geological beauty.
colors:
  granite-navy: "#192D4C"
  navy-light: "#223B61"
  navy-deep: "#13233C"
  champagne-gold: "#C9A96A"
  gold-light: "#DFC692"
  warm-cream: "#F5F0E6"
  stone-gray: "#E9EAEE"
  stone-light: "#F3F4F6"
  pure-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "3.65rem"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "1.65rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, IBM Plex Sans Arabic, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Poppins, IBM Plex Sans Arabic, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  md: "12px"
  lg: "20px"
  card: "24px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.granite-navy}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.navy-light}"
  button-secondary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.granite-navy}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-surface:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.granite-navy}"
    rounded: "{rounded.card}"
    padding: "32px"
---

# Design System: SRFEC Stones & Granite

## Overview

**Creative North Star: "Measured Frame & Flowing Vein"**

The SRFEC visual system embodies the tension and harmony between rigid industrial engineering (the square frame of measurement, calibration, sawing, and architectural tolerances) and organic geological beauty (the flowing white and gold veins inside natural stone). Surfaces are spacious, calm, and editorial, alternating between Pure White, Warm Cream, and full Granite Navy bands so the craftsmanship and stone imagery carry the authority.

The system strictly rejects construction-sector hype, neon or dark-mode clichés, and pure black (`#000000`). Every dark surface, text hierarchy, gradient overlay, and elevation shadow is anchored in Granite Navy (`#192D4C`), paired with restrained Soft Champagne Gold (`#C9A96A`) structural accents.

**Key Characteristics:**
- Zero-black material palette anchored in Granite Navy (`#192D4C`), Soft Champagne Gold (`#C9A96A`), and Warm Cream (`#F5F0E6`).
- Bilingual typographic parity pairing Playfair Display + Poppins (LTR) with Amiri + IBM Plex Sans Arabic (RTL).
- Signature `120px` (`3px` high) Champagne Gold underline beneath every section heading.
- Generous `24px` (`rounded-[24px]`) architectural card geometry with navy-tinted elevation shadows.
- Horizontally fading `<BrandPattern />` texture at `6.5%–7%` opacity paired with slow-drifting organic stone-vein contours.

## Colors

The palette pairs one dominant architectural navy with one warm metallic accent and three stone-inspired neutrals.

### Primary
- **Granite Navy** (`#192D4C`): Dominant brand color used for all primary typography, primary CTA buttons, dark editorial sections (CEO Message, Vision, Stats, Footer), numbered milestone badges, and navy-tinted photo overlays.
- **Soft Champagne Gold** (`#C9A96A`): Accent color reserved for `120px` section underlines, focus rings, fine-line icons on navy badges, large serif counters, and primary CTA buttons on dark navy sections (with Granite Navy text).

### Neutral
- **Pure White** (`#FFFFFF`): Primary light section background and card surface on cream sections.
- **Warm Cream** (`#F5F0E6`): Alternating section background (Hero, Vision & Mission, Factory, Projects, Contact) and subtle card tint on white sections.
- **Stone Gray** (`#E9EAEE`): Hairline card borders, section dividers, and subtle pattern strokes.

### Named Rules
**The Zero-Black Rule.** Never use `#000000`, `rgb(0,0,0)`, or pure black anywhere in text, borders, icons, or box-shadows. Wherever a dark value is required, use Granite Navy (`#192D4C`).
**The Gold Contrast Rule.** Because Champagne Gold (`#C9A96A`) has low contrast against white, never use small gold body text on white or cream backgrounds. Use gold on light backgrounds only for decorative lines (`120px` underline) or inside Granite Navy containers (`bg-navy text-gold`).

## Typography

**Display Font:** Playfair Display (Latin) / Amiri (Arabic)
**Body Font:** Poppins (Latin) / IBM Plex Sans Arabic (Arabic)

**Character:** Authoritative, classic serif headlines with tight leading paired with clean, geometric sans-serif body copy for technical clarity across both Arabic (RTL) and English (LTR).

### Hierarchy
- **Display** (`700`, `3.65rem`, `1.14` line-height): Hero headline only.
- **Headline** (`700`, `2.75rem`, `1.18` line-height): Section titles (`<h2>`), always followed by the `120px` Champagne Gold underline.
- **Title** (`700`, `1.65rem`, `1.3` line-height): Card titles, milestone headings, and department titles (`<h3>`).
- **Body** (`400`, `1.05rem`, `1.65` line-height): Narrative paragraphs and descriptions, constrained to `58ch–68ch` for optimal reading measure.
- **Label** (`500`, `0.75rem`, `0.14em` tracking): Project codes, bilingual secondary titles, and form field labels.

### Named Rules
**The Unkicked Heading Rule.** Section headings never carry a small uppercase eyebrow or kicker above them; the serif `<h2>` leads directly and is anchored below by the `120px` gold rule.

## Layout

The layout uses a `1280px` (`max-w-7xl`) centered container with `16px` (`px-4`) mobile, `24px` (`sm:px-6`) tablet, and `32px` (`lg:px-8`) desktop horizontal padding. Sections alternate rhythmically between White, Warm Cream (`#F5F0E6`), and Granite Navy (`#192D4C`) with `80px–112px` (`py-20 sm:py-28`) vertical padding. All directional spacing, borders, and alignments use logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`, `border-s`) so Arabic RTL and English LTR mirror seamlessly.

## Elevation & Depth

Depth is achieved through tonal surface alternation (White vs. Warm Cream vs. Granite Navy), `1px` Stone Gray or Gold-tinted borders, and three navy-tinted ambient shadows.

### Shadow Vocabulary
- **Navy Subtle** (`box-shadow: 0 8px 24px -6px rgba(25, 45, 76, 0.08)`): Resting state for cards and sticky header.
- **Navy Medium** (`box-shadow: 0 16px 38px -10px rgba(25, 45, 76, 0.14)`): Hover elevation for interactive cards and primary CTA buttons.
- **Navy Large** (`box-shadow: 0 24px 56px -12px rgba(25, 45, 76, 0.24)`): Hero stone slab frame, CEO portrait frame, and Vision showcase block.

## Shapes

Cards and image frames use a generous `24px` (`rounded-[24px]`) architectural corner radius, while inner badges and numbered milestone squares use `12px–16px` (`rounded-xl` / `rounded-2xl`). Action buttons and language toggles use full pill geometry (`9999px`). Featured stone and portrait frames are accented by an offset outer wireframe border (`-inset-3 rounded-[28px] border border-gold/45`).

## Components

### Buttons
- **Shape:** Full pill (`9999px`)
- **Primary:** Granite Navy background (`#192D4C`) with Pure White text (`#FFFFFF`) and a Champagne Gold directional arrow icon (`rtl:rotate-180`), `16px 28px` padding. On dark navy sections, primary buttons invert to Champagne Gold background (`#C9A96A`) with Granite Navy text (`#192D4C`).
- **Hover / Focus:** Lifts `-2px` (`hover:-translate-y-0.5`) with `#223B61` background shift and `2px solid #C9A96A` focus ring.
- **Secondary:** `2px` Granite Navy outline (`border-navy`) over white/cream with Granite Navy text.

### Cards / Containers
- **Corner Style:** `24px` radius (`rounded-[24px]`)
- **Background:** Warm Cream tint (`bg-cream/40`) on white sections, Pure White (`bg-white`) on cream sections, or Light Navy (`#223B61`) on dark navy sections.
- **Shadow Strategy:** `shadow-navy-sm` at rest, lifting `-4px` to `shadow-navy-md` with `border-gold/60` on hover.
- **Border:** `1px solid #E9EAEE` on light sections; `1px solid rgba(201, 169, 106, 0.3)` on navy sections.
- **Internal Padding:** `28px–40px` (`p-7 sm:p-10`).

### Inputs / Fields
- **Style:** `12px` radius (`rounded-xl`), `1px solid rgba(25, 45, 76, 0.2)` stroke, soft cream background (`bg-cream/30`), `14px 16px` padding.
- **Focus:** Shifts to Pure White background (`bg-white`), Granite Navy border (`#192D4C`), and `2px solid #C9A96A` focus outline.
- **Error:** High-contrast Granite Navy text inside a Champagne Gold tinted badge (`bg-gold/25 text-navy`).

### Navigation
- **Style:** Sticky header (`bg-white/95 backdrop-blur-md`), horizontal `<Logo />` on the start side, logical nav links in the center with animated `2px` Champagne Gold underline (`gold-link-underline`), `AR | EN` pill switcher, and primary CTA pill on the end side.

## Do's and Don'ts

### Do:
- **Do** use Granite Navy (`#192D4C`) for all dark text, dark backgrounds, image overlays, and shadow tints.
- **Do** place the `120px` Champagne Gold underline (`3px` height) directly beneath every section `<h2>` heading.
- **Do** use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`) and `rtl:rotate-180` on directional arrows.

### Don't:
- **Don't** use `#000000` or pure black anywhere in CSS, SVGs, or shadows.
- **Don't** render small Champagne Gold text directly on white or cream backgrounds.
- **Don't** redraw or alter the official SRFEC brand symbol or use exclamation marks and sales superlatives in copy.

