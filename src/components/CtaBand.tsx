"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BrandPattern } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";

/**
 * Reusable <CtaBand /> component.
 * Placed at the bottom of Home and inner pages with Granite Navy background,
 * horizontally fading <BrandPattern />, and a Champagne Gold CTA button with Granite Navy text.
 */
export function CtaBand() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-24 text-white border-t border-gold/25">
      <BrandPattern tone="dark" fadeDirection="start" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-[24px] border border-gold/35 bg-navy-light/80 p-8 sm:p-12 shadow-navy-lg"
        >
          <div className="text-start max-w-2xl">
            <h2 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              {dict.ctaBand.heading}
            </h2>
            <span
              className="mt-4 block h-[3px] w-[120px] rounded-full bg-gold"
              aria-hidden="true"
            />
            <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
              {dict.ctaBand.subtext}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy shadow-navy-md transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
            >
              <span>{dict.ctaBand.buttonLabel}</span>
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
        </motion.div>
      </div>
    </section>
  );
}

