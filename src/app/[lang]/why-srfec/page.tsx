import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { WhySrfec } from "../../../components/WhySrfec";
import { Stats } from "../../../components/Stats";
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
    routePath: "/why-srfec",
    title: dict.pagesMeta.whySrfec.title,
    description: dict.pagesMeta.whySrfec.description,
  });
}

export default async function WhySrfecPage({
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
        title={dict.whySrfec.title}
        subtitle={dict.whySrfec.intro}
        breadcrumbs={[{ label: dict.nav.whySrfec }]}
      />
      <WhySrfec />
      <Stats />
      <CtaBand />
    </>
  );
}

