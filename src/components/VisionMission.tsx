"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrandPattern } from "./BrandPattern";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export function VisionMission() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* PART 1: OUR VISION (Granite Navy Architectural Block) */}
        <motion.div
          id="vision"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] bg-navy p-8 sm:p-12 lg:p-14 text-white shadow-navy-lg"
        >
          <BrandPattern tone="dark" fadeDirection="end" />

          <div className="relative z-10">
            <SectionTitle title={dict.visionMission.visionTitle} tone="dark" />

            <p className="mt-7 text-lg sm:text-xl text-cream/95 leading-relaxed max-w-[68ch] text-start">
              {dict.visionMission.visionStatement}
            </p>

            {/* 3 Vision Pillars */}
            <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
              {dict.visionMission.visionPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-[20px] border border-gold/30 bg-navy-light/85 p-6 sm:p-7 text-start transition-all duration-300 hover:-translate-y-1 hover:border-gold"
                >
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-gold/20">
                    <span
                      dir="ltr"
                      className="font-latin-serif tabular-nums-brand text-3xl font-bold text-gold"
                    >
                      {pillar.number}
                    </span>
                    <span className="h-[2px] w-8 bg-gold/60" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif-brand text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gold/90">
                    {pillar.secondaryTitle}
                  </p>
                  <p className="mt-3.5 text-sm sm:text-base text-cream/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PART 2: OUR MISSION (Two Architectural Cards) */}
        <div id="mission" className="mt-16 sm:mt-20">
          <SectionTitle title={dict.visionMission.missionTitle} tone="light" />

          <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
            {dict.visionMission.missionCards.map((card, index) => (
              <motion.article
                key={card.number}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-[24px] border border-stone-gray bg-white p-8 sm:p-10 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md"
              >
                <div className="text-start">
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-gray">
                    <div>
                      <h3 className="font-serif-brand text-2xl font-bold text-navy">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-medium text-navy/65">
                        {card.secondaryTitle}
                      </p>
                    </div>
                    <div
                      dir="ltr"
                      className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold font-latin-serif text-xl font-bold tabular-nums-brand"
                    >
                      {card.number}
                    </div>
                  </div>

                  <p className="mt-6 text-base sm:text-[1.05rem] text-navy/85 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-7 pt-2 flex items-center" aria-hidden="true">
                  <span className="h-[2.5px] w-14 bg-gold rounded-full" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

