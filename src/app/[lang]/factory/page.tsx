import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { Factory } from "../../../components/Factory";
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
    routePath: "/factory",
    title: dict.pagesMeta.factory.title,
    description: dict.pagesMeta.factory.description,
  });
}

export default async function FactoryPage({
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
        title={dict.factory.title}
        subtitle={dict.factory.heading}
        breadcrumbs={[{ label: dict.nav.factory }]}
      />
      <Factory />
      <CtaBand />
    </>
  );
}

