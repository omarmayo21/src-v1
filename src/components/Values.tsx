"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";

function ValueIcon({ iconKey }: { iconKey: "quality" | "precision" | "commitment" | "trust" }) {
  switch (iconKey) {
    case "quality":
      return (
        <svg
          className="h-6 w-6 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
          <path d="M2 9h20" />
          <path d="m12 21 4-12-4-6-4 6 4 12Z" />
        </svg>
      );
    case "precision":
      return (
        <svg
          className="h-6 w-6 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h4M3 15h4M9 3v4M15 3v4M21 9h-4M21 15h-4M9 21v-4M15 21v-4" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "commitment":
      return (
        <svg
          className="h-6 w-6 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "trust":
      return (
        <svg
          className="h-6 w-6 text-gold"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="11" height="11" rx="2" />
          <rect x="10" y="10" width="11" height="11" rx="2" />
        </svg>
      );
  }
}

export function Values() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="values"
      className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.values.title}
          subtitle={dict.values.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.values.items.map((item, index) => (
            <motion.article
              key={item.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-[24px] border border-stone-gray bg-cream/35 p-7 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-gold/60 text-start"
            >
              <div>
                {/* Top bar: Line icon in gold inside navy square + Gold serif number */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-navy shadow-navy-sm">
                    <ValueIcon iconKey={item.iconKey} />
                  </div>
                  <span
                    dir="ltr"
                    className="font-latin-serif tabular-nums-brand text-3xl font-bold text-navy/85"
                  >
                    {item.number}
                  </span>
                </div>

                {/* Bilingual Title */}
                <div className="mt-6 pb-4 border-b border-navy/10">
                  <h3 className="font-serif-brand text-2xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-navy/65">
                    {item.secondaryTitle}
                  </p>
                </div>

                <p className="mt-4 text-sm sm:text-base text-navy/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-2" aria-hidden="true">
                <span className="block h-[2px] w-10 bg-gold transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

