"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../../components/Logo";
import { BrandPattern } from "../../components/BrandPattern";
import { useLanguage } from "../../context/LanguageContext";

export default function LocaleNotFound() {
  const { locale, dict } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-36 text-white">
      <BrandPattern tone="dark" fadeDirection="both" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <Logo variant="symbol" tone="white" />

        <div
          dir="ltr"
          className="mt-6 font-latin-serif text-6xl sm:text-7xl font-bold text-gold leading-none tabular-nums-brand"
        >
          {dict.notFound.code}
        </div>

        <h1 className="mt-4 font-serif-brand text-3xl sm:text-4xl font-bold text-white">
          {dict.notFound.title}
        </h1>

        <span
          className="mt-4 block h-[3px] w-[120px] rounded-full bg-gold"
          aria-hidden="true"
        />

        <p className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed max-w-xl">
          {dict.notFound.description}
        </p>

        <div className="mt-9">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy shadow-navy-md transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
          >
            <span>{dict.notFound.backHomeCta}</span>
            <svg
              className="h-4 w-4 text-navy rtl:rotate-180"
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
      </div>
    </section>
  );
}

