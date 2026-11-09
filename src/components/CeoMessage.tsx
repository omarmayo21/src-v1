"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BrandPattern } from "./BrandPattern";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

export function CeoMessage() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="ceo"
      className="relative overflow-hidden bg-navy py-20 sm:py-28 text-white border-b border-gold/20"
    >
      <BrandPattern tone="dark" fadeDirection="start" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Portrait Image Placeholder (Rounded Architectural Frame) */}
          <motion.div
            className="lg:col-span-4"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-2.5 rounded-[28px] border border-gold/40 -z-10"
                aria-hidden="true"
              />
              <div className="relative aspect-[5/6] overflow-hidden rounded-[24px] border border-gold/35 bg-navy-light shadow-navy-lg">
                <Image
                  src={siteConfig.images.ceoPortrait}
                  alt={dict.ceo.portraitAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-start">
                  <p className="font-serif-brand text-xl font-bold text-white">
                    {dict.ceo.namePlaceholder}
                  </p>
                  <p className="mt-0.5 text-sm text-gold">
                    {dict.ceo.roleTitle}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Area + Name/Title */}
          <motion.div
            className="lg:col-span-8 text-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <SectionTitle title={dict.ceo.title} tone="dark" />

            <div className="mt-8 rounded-[24px] border border-gold/30 bg-navy-light/70 p-7 sm:p-10 shadow-navy-md">
              {/* Gold Quotation Mark Icon */}
              <svg
                className="h-11 w-11 text-gold mb-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14 22C14 16.477 18.477 12 24 12V16C20.686 16 18 18.686 18 22H22V34H10V22H14ZM32 22C32 16.477 36.477 12 42 12V16C38.686 16 36 18.686 36 22H40V34H28V22H32Z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="font-serif-brand text-xl sm:text-2xl text-white leading-relaxed">
                {dict.ceo.messagePlaceholder}
              </blockquote>

              <p className="mt-4 text-sm text-cream/75">
                {dict.ceo.placeholderNote}
              </p>

              <div className="mt-8 pt-6 border-t border-gold/25 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-serif-brand text-xl font-bold text-gold">
                    {dict.ceo.namePlaceholder}
                  </div>
                  <div className="mt-1 text-sm text-cream/85">
                    {dict.ceo.roleTitle} — {dict.ceo.companyLabel}
                  </div>
                </div>
                <span
                  className="h-[2px] w-16 bg-gold"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

