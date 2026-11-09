import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { Clients } from "../../../components/Clients";
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
    routePath: "/clients",
    title: dict.pagesMeta.clients.title,
    description: dict.pagesMeta.clients.description,
  });
}

export default async function ClientsPage({
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
        title={dict.clients.title}
        subtitle={dict.clients.subtitle}
        breadcrumbs={[{ label: dict.nav.clients }]}
      />
      <Clients />
      <CtaBand />
    </>
  );
}

