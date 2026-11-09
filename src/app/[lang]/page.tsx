import React from "react";
import type { Metadata } from "next";
import { Hero } from "../../components/Hero";
import { HomeTeasers } from "../../components/HomeTeasers";
import { CtaBand } from "../../components/CtaBand";
import { SITE_URL, siteConfig } from "../../data/site-config";
import {
  resolveLocale,
  getDictionary,
  buildPageMetadata,
} from "../../lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  return buildPageMetadata({
    lang: locale,
    routePath: "",
    title: dict.pagesMeta.home.title,
    description: dict.pagesMeta.home.description,
  });
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName[locale],
    alternateName:
      locale === "ar" ? siteConfig.companyName.en : siteConfig.companyName.ar,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/brand/srfec-symbol.svg`,
    description: dict.pagesMeta.home.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <HomeTeasers />
      <CtaBand />
    </>
  );
}

