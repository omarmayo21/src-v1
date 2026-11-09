"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { projectsData, type ProjectItem } from "../data/projects";

type FilterCategory = "all" | ProjectItem["categoryKey"];

export function Projects() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  // Derive unique categories from projectsData
  const availableCategories = Array.from(
    new Set(projectsData.map((item) => item.categoryKey))
  );

  const filterButtons: { key: FilterCategory; label: string }[] = [
    { key: "all", label: dict.projects.filters.all },
    ...availableCategories.map((cat) => ({
      key: cat,
      label: dict.projects.filters[cat],
    })),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.categoryKey === activeFilter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-start">
          <SectionTitle title={dict.projects.heading} />
          <p className="mt-6 text-base sm:text-[1.05rem] text-navy/85 leading-relaxed">
            {dict.projects.description}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div
          className="mt-10 flex flex-wrap items-center gap-2.5"
          role="tablist"
          aria-label={dict.projects.title}
        >
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(btn.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-navy text-white shadow-navy-sm"
                    : "bg-white text-navy/80 border border-stone-gray hover:border-gold hover:text-navy"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Project Cards Grid linking to /[lang]/projects/[slug] */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const content = project[locale];
            return (
              <motion.article
                key={project.slug}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Granite Navy gradient overlay where text sits on top */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Top project code badge */}
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

                  {/* Bottom overlay content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-start">
                    <span
                      className="block h-[2px] w-10 bg-gold mb-3 transition-all duration-300 group-hover:w-16"
                      aria-hidden="true"
                    />
                    <h2 className="font-serif-brand text-xl font-bold text-white leading-snug">
                      {content.title}
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-cream/85">
                      {content.location}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gold">
                      <span>{dict.projects.viewDetails}</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
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
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
