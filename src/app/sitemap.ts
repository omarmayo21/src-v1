import type { MetadataRoute } from "next";
import { SITE_URL, siteConfig } from "../data/site-config";
import { projectsData } from "../data/projects";
import { SUPPORTED_LOCALES } from "../lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/factory", priority: 0.85 },
    { path: "/why-srfec", priority: 0.85 },
    { path: "/projects", priority: 0.9 },
    { path: "/clients", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    ...(siteConfig.showOptionalStonesSection
      ? [{ path: "/stones", priority: 0.75 }]
      : []),
  ];

  const entries: MetadataRoute.Sitemap = [];

  // 1) All static routes in both /ar and /en
  for (const route of staticRoutes) {
    for (const lang of SUPPORTED_LOCALES) {
      entries.push({
        url: `${SITE_URL}/${lang}${route.path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route.priority,
        alternates: {
          languages: {
            "ar-SA": `${SITE_URL}/ar${route.path}`,
            "en-US": `${SITE_URL}/en${route.path}`,
            "x-default": `${SITE_URL}/ar${route.path}`,
          },
        },
      });
    }
  }

  // 2) All dynamic project detail routes (/[lang]/projects/[slug]) in both /ar and /en
  for (const project of projectsData) {
    const projectPath = `/projects/${project.slug}`;
    for (const lang of SUPPORTED_LOCALES) {
      entries.push({
        url: `${SITE_URL}/${lang}${projectPath}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            "ar-SA": `${SITE_URL}/ar${projectPath}`,
            "en-US": `${SITE_URL}/en${projectPath}`,
            "x-default": `${SITE_URL}/ar${projectPath}`,
          },
        },
      });
    }
  }

  return entries;
}
