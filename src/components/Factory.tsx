"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { FlowingVeins } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

export function Factory() {
  const { dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="factory"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 border-b border-stone-gray"
    >
      <FlowingVeins tone="cream" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Narrative & Two Highlight Chips Column */}
          <motion.div
            className="lg:col-span-6 text-start"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <SectionTitle title={dict.factory.title} />

            <h3 className="mt-6 font-serif-brand text-2xl sm:text-3xl font-bold text-navy leading-snug">
              {dict.factory.heading}
            </h3>

            <div className="mt-6 space-y-4 text-base sm:text-[1.05rem] text-navy/85 leading-relaxed">
              {dict.factory.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Two Highlight Department Chips */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] border border-gold/40 bg-navy p-5 text-white shadow-navy-sm">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-gold/25">
                  <span className="font-serif-brand text-lg font-bold text-gold">
                    {dict.factory.chips.cutting.title}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                </div>
                <p className="mt-1 text-xs font-medium text-cream/80">
                  {dict.factory.chips.cutting.secondary}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-cream/90 leading-relaxed">
                  {dict.factory.chips.cutting.description}
                </p>
              </div>

              <div className="rounded-[20px] border border-gold/40 bg-navy p-5 text-white shadow-navy-sm">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-gold/25">
                  <span className="font-serif-brand text-lg font-bold text-gold">
                    {dict.factory.chips.carving.title}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                </div>
                <p className="mt-1 text-xs font-medium text-cream/80">
                  {dict.factory.chips.carving.secondary}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm text-cream/90 leading-relaxed">
                  {dict.factory.chips.carving.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Factory Mosaic Gallery (Sawing, Carving, Finished Slabs) */}
          <motion.div
            className="lg:col-span-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Primary large slot: Automated Sawing & Processing */}
              <div className="sm:col-span-2 relative aspect-[16/10] overflow-hidden rounded-[24px] bg-navy shadow-navy-md border border-navy/15">
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
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-start">
                  <span className="block h-[2px] w-10 bg-gold mb-2" aria-hidden="true" />
                  <p className="text-sm sm:text-base font-medium text-white">
                    {dict.factory.gallery.sawingCaption}
                  </p>
                </div>
              </div>

              {/* Secondary slot 1: Carving & Shaping */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-navy shadow-navy-md border border-navy/15">
                <Image
                  src={siteConfig.images.factoryCarving}
                  alt={dict.factory.gallery.carvingAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-start">
                  <span className="block h-[2px] w-8 bg-gold mb-1.5" aria-hidden="true" />
                  <p className="text-xs sm:text-sm font-medium text-white">
                    {dict.factory.gallery.carvingCaption}
                  </p>
                </div>
              </div>

              {/* Secondary slot 2: Finished Slabs */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-navy shadow-navy-md border border-navy/15">
                <Image
                  src={siteConfig.images.factorySlabs}
                  alt={dict.factory.gallery.slabsAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-start">
                  <span className="block h-[2px] w-8 bg-gold mb-1.5" aria-hidden="true" />
                  <p className="text-xs sm:text-sm font-medium text-white">
                    {dict.factory.gallery.slabsCaption}
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

