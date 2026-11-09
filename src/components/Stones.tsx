"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

/**
 * Optional "Our Stones / أحجارنا" Section.
 * Can be disabled at any time by setting `showOptionalStonesSection: false` in `src/data/site-config.ts`.
 * Displays Marble, Granite, Travertine, Onyx, and Limestone without invented specs or prices.
 */
export function Stones() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  if (!siteConfig.showOptionalStonesSection) {
    return null;
  }

  return (
    <section
      id="stones"
      className="relative overflow-hidden bg-white py-20 sm:py-24 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.stones.title}
          subtitle={dict.stones.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {dict.stones.items.map((stone, index) => (
            <motion.article
              key={stone.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[24px] border border-stone-gray bg-cream/35 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-gold/60"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
                <Image
                  src={stone.image}
                  alt={stone.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-start">
                <h3 className="font-serif-brand text-xl font-bold text-navy">
                  {stone.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-navy/65">
                  {stone.secondaryName}
                </p>
                <span
                  className="mt-3 block h-[2px] w-8 bg-gold transition-all duration-300 group-hover:w-14"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

