"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";

export function WhySrfec() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="why-srfec"
      className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.whySrfec.title}
          subtitle={dict.whySrfec.intro}
        />

        {/* 6 Cards (3x2 Grid) */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {dict.whySrfec.cards.map((card, index) => (
            <motion.article
              key={card.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group flex flex-col justify-between rounded-[24px] border border-stone-gray bg-cream/40 p-7 sm:p-8 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-gold/60 text-start"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-navy/10">
                  <div
                    dir="ltr"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold font-latin-serif text-xl font-bold tabular-nums-brand"
                  >
                    {card.number}
                  </div>
                  <span
                    className="h-[2px] w-10 bg-gold/75 transition-all duration-300 group-hover:w-16"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-serif-brand text-2xl font-bold text-navy leading-snug">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-navy/65">
                  {card.secondaryTitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-navy/85 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

