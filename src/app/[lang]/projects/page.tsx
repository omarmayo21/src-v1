import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "../../../components/PageBanner";
import { Projects } from "../../../components/Projects";
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
    routePath: "/projects",
    title: dict.pagesMeta.projects.title,
    description: dict.pagesMeta.projects.description,
  });
}

export default async function ProjectsPage({
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
        title={dict.projects.title}
        subtitle={dict.projects.heading}
        breadcrumbs={[{ label: dict.nav.projects }]}
      />
      <Projects />
      <CtaBand />
    </>
  );
}

