"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import type { ProjectItem } from "../data/projects";

interface ProjectDetailContentProps {
  project: ProjectItem;
  prevProject: ProjectItem;
  nextProject: ProjectItem;
}

export function ProjectDetailContent({
  project,
  prevProject,
  nextProject,
}: ProjectDetailContentProps) {
  const { locale, dict } = useLanguage();
  const content = project[locale];
  const prevContent = prevProject[locale];
  const nextContent = nextProject[locale];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? 0 : (prev + 1) % project.gallery.length
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + project.gallery.length) % project.gallery.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-stone-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8 text-start">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/80 hover:text-navy transition-colors"
          >
            <svg
              className="h-4 w-4 text-gold rotate-180 rtl:rotate-0"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4.167 10h11.666m0 0L10.833 5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{dict.projects.backToProjects}</span>
          </Link>
        </div>

        {/* Hero Image + Info Sidebar */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Primary Hero Image */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-navy shadow-navy-lg border border-navy/15">
              <Image
                src={project.image}
                alt={content.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 inset-x-6 flex items-center justify-between">
                <span
                  dir="ltr"
                  className="rounded-full bg-navy/90 border border-gold/50 px-4 py-1 font-latin-sans text-xs font-semibold text-gold"
                >
                  {project.code}
                </span>
              </div>
            </div>
          </div>

          {/* Info Sidebar (Type, Location, Year, Stone Type — all placeholders) */}
          <aside className="lg:col-span-4 rounded-[24px] bg-navy p-7 sm:p-9 text-white shadow-navy-lg text-start">
            <h2 className="font-serif-brand text-2xl font-bold text-white">
              {dict.projects.infoTitle}
            </h2>
            <span
              className="mt-3 block h-[2.5px] w-16 bg-gold"
              aria-hidden="true"
            />

            <dl className="mt-7 space-y-5 text-sm sm:text-base">
              <div className="pb-4 border-b border-gold/20">
                <dt className="text-xs font-medium text-gold">
                  {dict.projects.typeLabel}
                </dt>
                <dd className="mt-1 font-medium text-white">{content.type}</dd>
              </div>

              <div className="pb-4 border-b border-gold/20">
                <dt className="text-xs font-medium text-gold">
                  {dict.projects.locationLabel}
                </dt>
                <dd className="mt-1 text-cream/95">{content.location}</dd>
              </div>

              <div className="pb-4 border-b border-gold/20">
                <dt className="text-xs font-medium text-gold">
                  {dict.projects.yearLabel}
                </dt>
                <dd className="mt-1 text-cream/95">{content.year}</dd>
              </div>

              <div>
                <dt className="text-xs font-medium text-gold">
                  {dict.projects.stoneTypeLabel}
                </dt>
                <dd className="mt-1 text-cream/95">{content.stoneType}</dd>
              </div>
            </dl>
          </aside>
        </div>

        {/* Project Description */}
        <div className="mt-14 max-w-4xl text-start">
          <SectionTitle title={dict.projects.overviewTitle} />
          <div className="mt-6 space-y-4 text-base sm:text-lg text-navy/85 leading-relaxed">
            {content.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-gold/45 bg-cream/60 px-4 py-3 text-xs sm:text-sm text-navy/80">
            {dict.projects.placeholderNotice}
          </p>
        </div>

        {/* Image Gallery with Lightbox */}
        <div className="mt-16">
          <SectionTitle title={dict.projects.galleryTitle} />

          {/* Active Lightbox Viewer Panel */}
          {lightboxIndex !== null && (
            <div
              role="region"
              aria-label={dict.projects.galleryTitle}
              className="mt-8 overflow-hidden rounded-[24px] border-2 border-gold bg-navy p-5 sm:p-8 text-white shadow-navy-lg"
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gold/25">
                <p className="text-sm sm:text-base font-medium text-cream">
                  {content.galleryCaptions[lightboxIndex]}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + project.gallery.length) %
                          project.gallery.length
                      )
                    }
                    aria-label={dict.a11y.previousImage}
                    className="rounded-full border border-gold/40 px-3.5 py-1.5 text-xs font-medium text-cream hover:bg-gold hover:text-navy transition-colors cursor-pointer"
                  >
                    {dict.a11y.previousImage}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % project.gallery.length
                      )
                    }
                    aria-label={dict.a11y.nextImage}
                    className="rounded-full border border-gold/40 px-3.5 py-1.5 text-xs font-medium text-cream hover:bg-gold hover:text-navy transition-colors cursor-pointer"
                  >
                    {dict.a11y.nextImage}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    aria-label={dict.a11y.closeModal}
                    className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-navy hover:bg-gold-light transition-colors cursor-pointer"
                  >
                    {dict.a11y.closeModal}
                  </button>
                </div>
              </div>

              <div className="mt-5 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-navy-light">
                <Image
                  src={project.gallery[lightboxIndex]}
                  alt={content.galleryCaptions[lightboxIndex] || content.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {project.gallery.map((imgSrc, idx) => {
              const caption = content.galleryCaptions[idx] || content.title;
              const isSelected = lightboxIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightboxIndex(isSelected ? null : idx)}
                  aria-label={`${dict.projects.openLightboxLabel}: ${caption}`}
                  className={`group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-navy text-start shadow-navy-sm border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md cursor-pointer ${
                    isSelected ? "border-gold" : "border-stone-gray"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={caption}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span
                      className="block h-[2px] w-8 bg-gold mb-1.5"
                      aria-hidden="true"
                    />
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-16 pt-10 border-t border-stone-gray grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            href={`/${locale}/projects/${prevProject.slug}`}
            className="group flex flex-col justify-between rounded-[20px] border border-stone-gray bg-cream/40 p-6 text-start transition-all duration-200 hover:border-gold hover:bg-cream"
          >
            <span className="text-xs font-medium text-navy/65">
              {dict.projects.previousProject}
            </span>
            <span className="mt-2 font-serif-brand text-xl font-bold text-navy group-hover:text-navy-light">
              {prevContent.title}
            </span>
          </Link>

          <Link
            href={`/${locale}/projects/${nextProject.slug}`}
            className="group flex flex-col justify-between rounded-[20px] border border-stone-gray bg-cream/40 p-6 text-start sm:text-end transition-all duration-200 hover:border-gold hover:bg-cream"
          >
            <span className="text-xs font-medium text-navy/65">
              {dict.projects.nextProject}
            </span>
            <span className="mt-2 font-serif-brand text-xl font-bold text-navy group-hover:text-navy-light">
              {nextContent.title}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

