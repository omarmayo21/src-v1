"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BrandPattern, FlowingVeins } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

export function Hero() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-cream/75 via-white to-cream/40 pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-stone-gray"
    >
      {/* Fading Brand Symbol Pattern & Flowing Organic Veins */}
      <BrandPattern tone="light" fadeDirection="end" />
      <FlowingVeins tone="cream" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Text Column */}
          <motion.div
            className="lg:col-span-7 text-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-[3.65rem] font-bold text-navy leading-[1.14] tracking-[-0.02em]">
              {dict.hero.headline}
            </h1>

            {/* Signature ~120px thin Champagne Gold underline */}
            <span
              className="mt-6 block h-[3px] w-[120px] rounded-full bg-gold"
              aria-hidden="true"
            />

            <p className="mt-6 text-lg sm:text-xl text-navy/85 leading-relaxed max-w-[58ch]">
              {dict.hero.subheadline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-navy/75 border-s-2 border-gold ps-4 py-0.5 max-w-[54ch]">
              {dict.hero.brandIdeaQuote}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-base font-medium text-white shadow-navy-md transition-all duration-200 hover:bg-navy-light hover:-translate-y-0.5"
              >
                <span>{dict.hero.primaryCta}</span>
                <svg
                  className="h-4 w-4 text-gold transition-transform duration-200 rtl:rotate-180"
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
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-navy bg-white/80 px-7 py-3.5 text-base font-medium text-navy transition-all duration-200 hover:bg-cream hover:-translate-y-0.5"
              >
                <span>{dict.hero.secondaryCta}</span>
                <svg
                  className="h-4 w-4 text-navy transition-transform duration-200 rtl:rotate-180"
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
              </Link>
            </div>

            {/* Under-Hero Stats Strip (+40 Years & +1,000 Projects) */}
            <div className="mt-12 pt-8 border-t border-navy/15 grid grid-cols-2 gap-6 sm:gap-10 max-w-lg">
              <div>
                <div
                  dir="ltr"
                  className="font-latin-serif tabular-nums-brand text-3xl sm:text-4xl font-bold text-navy inline-block"
                >
                  {dict.hero.stats.experienceValue}
                </div>
                <p className="mt-1 text-sm sm:text-base font-medium text-navy/80">
                  {dict.hero.stats.experienceLabel}
                </p>
              </div>

              <div className="border-s border-navy/15 ps-6 sm:ps-10">
                <div
                  dir="ltr"
                  className="font-latin-serif tabular-nums-brand text-3xl sm:text-4xl font-bold text-navy inline-block"
                >
                  {dict.hero.stats.projectsValue}
                </div>
                <p className="mt-1 text-sm sm:text-base font-medium text-navy/80">
                  {dict.hero.stats.projectsLabel}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architectural Stone Slab Frame Column */}
          <motion.div
            className="lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-[28px] border border-gold/45 bg-cream/40 -z-10"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[24px] bg-navy shadow-navy-lg border border-navy/15 aspect-[4/5]">
                <Image
                  src={siteConfig.images.hero}
                  alt={dict.hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-start">
                  <span
                    className="block h-[2px] w-12 bg-gold mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base font-medium text-white leading-snug">
                    {dict.hero.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
