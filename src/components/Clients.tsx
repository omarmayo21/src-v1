"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { clientsData } from "../data/clients";

export function Clients() {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-stone-gray"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.clients.title}
          subtitle={dict.clients.subtitle}
        />

        {/* Responsive Grid handling 6 to 20+ client logos gracefully */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clientsData.map((client, index) => {
            const info = client[locale];
            return (
              <motion.div
                key={client.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group flex flex-col items-center justify-center rounded-[20px] border border-stone-gray bg-stone-light/60 px-4 py-7 text-center grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:bg-white hover:border-gold hover:shadow-navy-sm"
              >
                {/* Client Logo Image or Architectural Monogram Frame */}
                {client.logoPath ? (
                  <div className="relative h-11 w-24">
                    <Image
                      src={client.logoPath}
                      alt={info.name}
                      fill
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-navy/20 bg-white text-navy transition-colors duration-300 group-hover:border-gold group-hover:bg-navy group-hover:text-gold">
                    <span
                      dir="ltr"
                      className="font-latin-serif text-xs font-bold tracking-wider"
                    >
                      {client.code}
                    </span>
                  </div>
                )}
                <p className="mt-3.5 text-sm font-semibold text-navy">
                  {info.name}
                </p>
                <p className="mt-0.5 text-xs text-navy/65">{info.sector}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-navy/65 text-start">
          {dict.clients.placeholderNotice}
        </p>
      </div>
    </section>
  );
}

