const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.srfec.com";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  siteUrl: SITE_URL,
  contactApiUrl: process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() || "",
  companyName: {
    en: "SRFEC Stones & Granite",
    ar: "سيرفك للحجر والجرانيت",
    shortEn: "SRFEC",
    shortAr: "سيرفك",
    taglineEn: "Stones & Granite",
    taglineAr: "للحجر والجرانيت",
  },
  /**
   * Set `brandAssetsReady: true` once the official SVG logo files are placed in `/public/brand/`:
   * - srfec-logo-primary.svg / srfec-logo-primary-white.svg / srfec-logo-primary-mono.svg
   * - srfec-logo-horizontal.svg / srfec-logo-horizontal-white.svg / srfec-logo-horizontal-mono.svg
   * - srfec-symbol.svg / srfec-symbol-white.svg / srfec-symbol-mono.svg
   * - srfec-monogram.svg / srfec-monogram-white.svg / srfec-monogram-mono.svg
   */
  brandAssetsReady: true,
  /**
   * Toggle the optional "Our Stones / أحجارنا" section on or off.
   */
  showOptionalStonesSection: true,
  contact: {
    phone: "+966 12 345 6789",
    phoneHref: "tel:+966123456789",
    whatsapp: "+966 50 000 0000",
    whatsappHref: "https://wa.me/966500000000",
    email: "info@srfec.com",
    emailHref: "mailto:info@srfec.com",
    website: "www.srfec.com",
    address: {
      ar: "المملكة العربية السعودية — المنطقة الصناعية [العنوان التفصيلي يُضاف من قِبل العميل]",
      en: "Kingdom of Saudi Arabia — Industrial Zone [Detailed address to be provided by client]",
    },
    workingHours: {
      ar: "الأحد – الخميس: 8:00 صباحاً – 5:00 مساءً",
      en: "Sunday – Thursday: 8:00 AM – 5:00 PM",
    },
    mapCoordinatesLabel: {
      ar: "موقع المصنع والإدارة — المملكة العربية السعودية (عنصر نائب للخريطة)",
      en: "Factory & Headquarters Location — Saudi Arabia (Map Placeholder)",
    },
  },
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      id: "x",
      label: "X",
      href: "https://x.com",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com",
    },
  ],
  images: {
    hero: "/images/hero/hero-architectural-stone.webp",
    ogCover: "/brand/og-image.png",
    ceoPortrait: "/images/ceo/placeholder-ceo-portrait.svg",
    factorySawing: "/images/factory/factory-carving-shaping.webp",
    factoryCarving: "/images/factory/factory-polishing-line.webp",
    factorySlabs: "/images/factory/factory-quality-inspection.webp",
    story: "/images/misc/story-quarry-blocks.webp",
    vision: "/images/misc/vision-architectural-detail.webp",
  },
} as const;
