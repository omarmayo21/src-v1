import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { AboutSubNav } from "../../../components/AboutSubNav";
import { Story } from "../../../components/Story";
import { CeoMessage } from "../../../components/CeoMessage";
import { VisionMission } from "../../../components/VisionMission";
import { Values } from "../../../components/Values";
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
    routePath: "/about",
    title: dict.pagesMeta.about.title,
    description: dict.pagesMeta.about.description,
  });
}

export default async function AboutPage({
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
        title={dict.nav.about}
        subtitle={dict.story.subtitle}
        breadcrumbs={[{ label: dict.nav.about }]}
      />
      <AboutSubNav />
      <Story />
      <CeoMessage />
      <VisionMission />
      <Values />
      <CtaBand />
    </>
  );
}

