"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { FlowingVeins } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";

export function Story() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-stone-gray"
    >
      <FlowingVeins tone="cream" className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.story.title}
          subtitle={dict.story.subtitle}
        />

        {/* 2x2 Architectural Milestone Grid with Gold Serif 01-04 Numerals */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {dict.story.steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between rounded-[24px] border border-stone-gray bg-cream/45 p-7 sm:p-9 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-gold/60"
            >
              <div>
                {/* Header row: Navy square frame with Gold Serif Number + Bilingual Title */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-navy/10">
                  <div className="text-start">
                    <h3 className="font-serif-brand text-2xl sm:text-[1.65rem] font-bold text-navy leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-navy/65">
                      {step.secondaryTitle}
                    </p>
                  </div>

                  <div
                    dir="ltr"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold font-latin-serif text-2xl font-bold tabular-nums-brand shadow-navy-sm"
                  >
                    {step.number}
                  </div>
                </div>

                {/* Milestone Narrative */}
                <p className="mt-6 text-base sm:text-[1.05rem] text-navy/85 leading-relaxed text-start">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-2 flex items-center gap-2" aria-hidden="true">
                <span className="h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-20" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

