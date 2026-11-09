import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "../../../../components/PageBanner";
import { ProjectDetailContent } from "../../../../components/ProjectDetailContent";
import { CtaBand } from "../../../../components/CtaBand";
import { projectsData, getProjectBySlug } from "../../../../data/projects";
import {
  SUPPORTED_LOCALES,
  resolveLocale,
  getDictionary,
  buildPageMetadata,
} from "../../../../lib/i18n";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of SUPPORTED_LOCALES) {
    for (const project of projectsData) {
      params.push({ lang, slug: project.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildPageMetadata({
      lang: locale,
      routePath: `/projects/${slug}`,
      title: dict.pagesMeta.notFound.title,
      description: dict.pagesMeta.notFound.description,
    });
  }

  const content = project[locale];
  return buildPageMetadata({
    lang: locale,
    routePath: `/projects/${project.slug}`,
    title: `${content.title} | ${dict.projects.title}`,
    description: content.scope,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject =
    projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const content = project[locale];

  return (
    <>
      <PageBanner
        title={content.title}
        subtitle={content.scope}
        breadcrumbs={[
          { label: dict.nav.projects, href: `/${locale}/projects` },
          { label: content.title },
        ]}
      />
      <ProjectDetailContent
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <CtaBand />
    </>
  );
}

