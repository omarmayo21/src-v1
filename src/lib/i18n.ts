import type { Metadata } from "next";
import { ar } from "../data/ar";
import { en } from "../data/en";
import { SITE_URL, siteConfig } from "../data/site-config";
import type { Dictionary, Locale } from "../data/types";

export const SUPPORTED_LOCALES: readonly Locale[] = ["ar", "en"] as const;
export const DEFAULT_LOCALE: Locale = "ar";

export function isValidLocale(lang: string): lang is Locale {
  return lang === "ar" || lang === "en";
}

export function resolveLocale(lang?: string): Locale {
  return lang && isValidLocale(lang) ? lang : DEFAULT_LOCALE;
}

export function getDictionary(lang: Locale): Dictionary {
  return lang === "en" ? en : ar;
}

interface BuildPageMetadataArgs {
  lang: Locale;
  /**
   * Path after `/[lang]`, e.g. `""` for home, `"/about"`, `"/projects/commercial-administrative-complex"`
   */
  routePath: string;
  title: string;
  description: string;
}

export function buildPageMetadata({
  lang,
  routePath,
  title,
  description,
}: BuildPageMetadataArgs): Metadata {
  const cleanRoute = routePath === "/" ? "" : routePath;
  const canonicalUrl = `${SITE_URL}/${lang}${cleanRoute}`;
  const arUrl = `${SITE_URL}/ar${cleanRoute}`;
  const enUrl = `${SITE_URL}/en${cleanRoute}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "ar-SA": arUrl,
        "en-US": enUrl,
        "x-default": arUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: lang === "ar" ? "ar_SA" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_SA",
      siteName: "SRFEC Stones & Granite",
      images: [
        {
          url: siteConfig.images.ogCover,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.images.ogCover],
    },
  };
}

