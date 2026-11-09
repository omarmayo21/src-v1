"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { FlowingVeins } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";
import { projectsData } from "../data/projects";
import { clientsData } from "../data/clients";

function DirectionalArrow({ className = "text-gold" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 rtl:rotate-180 ${className}`}
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
  );
}

export function HomeTeasers() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const whyHighlights = dict.whySrfec.cards.slice(0, 3);
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const clientPreview = clientsData.slice(0, 6);

  return (
    <>
      {/* 1) Short "Our Story" Teaser -> /about */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-stone-gray">
        <FlowingVeins tone="cream" className="opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-6 text-start"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle title={dict.story.title} />
              <p className="mt-6 text-base sm:text-lg text-navy/85 leading-relaxed">
                {dict.homeTeasers.storySummary}
              </p>
              <div className="mt-8">
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm sm:text-base font-medium text-white shadow-navy-sm transition-all duration-200 hover:bg-navy-light hover:-translate-y-0.5"
                >
                  <span>{dict.homeTeasers.storyCta}</span>
                  <DirectionalArrow />
                </Link>
              </div>
            </motion.div>

            {/* Two Preview Milestone Cards (01 & 04) */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[dict.story.steps[0], dict.story.steps[3]].map((step) => (
                <div
                  key={step.number}
                  className="rounded-[24px] border border-stone-gray bg-cream/45 p-6 sm:p-7 shadow-navy-sm text-start"
                >
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-navy/10">
                    <span
                      dir="ltr"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold font-latin-serif text-lg font-bold tabular-nums-brand"
                    >
                      {step.number}
                    </span>
                    <span className="h-[2px] w-8 bg-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif-brand text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-navy/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2) 3 Highlights from "Why SRFEC" -> /why-srfec */}
      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 border-b border-stone-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionTitle
              title={dict.whySrfec.title}
              subtitle={dict.whySrfec.intro}
            />
            <div className="shrink-0">
              <Link
                href={`/${locale}/why-srfec`}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-navy bg-white px-6 py-3 text-sm font-medium text-navy transition-all duration-200 hover:bg-navy hover:text-white"
              >
                <span>{dict.homeTeasers.whySrfecCta}</span>
                <DirectionalArrow className="text-current" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {whyHighlights.map((card, index) => (
              <motion.article
                key={card.number}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="flex flex-col justify-between rounded-[24px] border border-stone-gray bg-white p-7 sm:p-8 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-gold/60 text-start"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-navy/10">
                    <div
                      dir="ltr"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-latin-serif text-xl font-bold tabular-nums-brand"
                    >
                      {card.number}
                    </div>
                    <span className="h-[2px] w-10 bg-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif-brand text-2xl font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-navy/65">
                    {card.secondaryTitle}
                  </p>
                  <p className="mt-3.5 text-sm sm:text-base text-navy/85 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Factory Teaser (Image + Short Paragraph) -> /factory */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-stone-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-[24px] bg-navy shadow-navy-lg border border-navy/15"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <Image
                src={siteConfig.images.factorySawing}
                alt={dict.factory.gallery.sawingAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-start">
                <span className="block h-[2px] w-10 bg-gold mb-2" aria-hidden="true" />
                <p className="text-sm sm:text-base font-medium text-white">
                  {dict.factory.heading}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 text-start"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <SectionTitle title={dict.factory.title} />
              <p className="mt-6 text-base sm:text-lg text-navy/85 leading-relaxed">
                {dict.homeTeasers.factorySummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream border border-navy/15 px-4 py-2 text-xs sm:text-sm font-medium text-navy">
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                  <span>{dict.factory.chips.cutting.title}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream border border-navy/15 px-4 py-2 text-xs sm:text-sm font-medium text-navy">
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                  <span>{dict.factory.chips.carving.title}</span>
                </span>
              </div>

              <div className="mt-8">
                <Link
                  href={`/${locale}/factory`}
                  className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm sm:text-base font-medium text-white shadow-navy-sm transition-all duration-200 hover:bg-navy-light hover:-translate-y-0.5"
                >
                  <span>{dict.homeTeasers.factoryCta}</span>
                  <DirectionalArrow />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4) Featured Projects (3 Cards) -> /projects */}
      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 border-b border-stone-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionTitle
              title={dict.projects.title}
              subtitle={dict.homeTeasers.projectsSubtitle}
            />
            <div className="shrink-0">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white shadow-navy-sm transition-all duration-200 hover:bg-navy-light"
              >
                <span>{dict.homeTeasers.projectsCta}</span>
                <DirectionalArrow />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const content = project[locale];
              return (
                <motion.article
                  key={project.slug}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative overflow-hidden rounded-[24px] bg-navy shadow-navy-md border border-navy/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-lg"
                >
                  <Link
                    href={`/${locale}/projects/${project.slug}`}
                    className="block relative aspect-[5/4] w-full overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={content.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10"
                      aria-hidden="true"
                    />
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span
                        dir="ltr"
                        className="rounded-full bg-navy/90 border border-gold/40 px-3.5 py-1 font-latin-sans text-xs font-medium text-gold"
                      >
                        {project.code}
                      </span>
                      <span className="rounded-full bg-navy/90 px-3.5 py-1 text-xs font-medium text-cream">
                        {content.type}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-start">
                      <span
                        className="block h-[2px] w-10 bg-gold mb-3 transition-all duration-300 group-hover:w-16"
                        aria-hidden="true"
                      />
                      <h3 className="font-serif-brand text-xl font-bold text-white leading-snug">
                        {content.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-cream/85">
                        {content.location}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gold">
                        <span>{dict.projects.viewDetails}</span>
                        <DirectionalArrow />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5) Clients Logo Strip -> /clients */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SectionTitle
              title={dict.clients.title}
              subtitle={dict.clients.subtitle}
            />
            <div className="shrink-0">
              <Link
                href={`/${locale}/clients`}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-navy bg-white px-6 py-3 text-sm font-medium text-navy transition-all duration-200 hover:bg-navy hover:text-white"
              >
                <span>{dict.homeTeasers.clientsCta}</span>
                <DirectionalArrow className="text-current" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clientPreview.map((client) => {
              const info = client[locale];
              return (
                <div
                  key={client.id}
                  className="group flex flex-col items-center justify-center rounded-[20px] border border-stone-gray bg-stone-light/60 px-4 py-6 text-center grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-white hover:border-gold hover:shadow-navy-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/20 bg-white text-navy transition-colors duration-300 group-hover:border-gold group-hover:bg-navy group-hover:text-gold">
                    <span
                      dir="ltr"
                      className="font-latin-serif text-xs font-bold tracking-wider"
                    >
                      {client.code}
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-navy">
                    {info.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

