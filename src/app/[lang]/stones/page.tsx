import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { Stones } from "../../../components/Stones";
import { CtaBand } from "../../../components/CtaBand";
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
    routePath: "/stones",
    title: dict.pagesMeta.stones.title,
    description: dict.pagesMeta.stones.description,
  });
}

export default async function StonesPage({
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
        title={dict.stones.title}
        subtitle={dict.stones.subtitle}
        breadcrumbs={[{ label: dict.nav.stones }]}
      />
      <Stones />
      <CtaBand />
    </>
  );
}

