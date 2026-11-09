import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { Contact } from "../../../components/Contact";
import {
  resolveLocale,
  getDictionary,
  buildPageMetadata,
} from "../../../lib/i18n";

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
    routePath: "/contact",
    title: dict.pagesMeta.contact.title,
    description: dict.pagesMeta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  return (
    <>
      <PageBanner
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        breadcrumbs={[{ label: dict.nav.contact }]}
      />
      <Contact />
    </>
  );
}

