"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BrandPattern } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Reusable <PageBanner /> component for all inner pages.
 * Features Granite Navy background, fading <BrandPattern />, accessible breadcrumb trail,
 * white serif h1 title, and the signature ~120px Champagne Gold thin underline.
 */
export function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  const { locale, dict } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy py-14 sm:py-20 lg:py-24 text-white border-b border-gold/25">
      <BrandPattern tone="dark" fadeDirection="end" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-start">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label={dict.a11y.breadcrumbLabel}
          className="mb-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cream/80"
        >
          <Link
            href={`/${locale}`}
            className="hover:text-gold transition-colors"
          >
            {dict.nav.home}
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span className="text-gold/70 select-none" aria-hidden="true">
                /
              </span>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-gold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.16] tracking-[-0.02em] max-w-4xl">
            {title}
          </h1>
          <span
            className="mt-5 block h-[3px] w-[120px] rounded-full bg-gold"
            aria-hidden="true"
          />
          {subtitle && (
            <p className="mt-5 text-base sm:text-lg text-cream/90 leading-relaxed max-w-[65ch]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

