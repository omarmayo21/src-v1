"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import type { Locale } from "../data/types";

interface LanguageSwitcherProps {
  className?: string;
}

function buildLocalizedPathname(pathname: string | null, targetLocale: Locale): string {
  if (!pathname || pathname === "/") {
    return `/${targetLocale}`;
  }

  const segments = pathname.split("/");
  if (segments[1] === "ar" || segments[1] === "en") {
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, dict } = useLanguage();
  const pathname = usePathname();

  const arHref = buildLocalizedPathname(pathname, "ar");
  const enHref = buildLocalizedPathname(pathname, "en");

  return (
    <div
      className={`inline-flex items-center rounded-full border border-navy/15 bg-cream/70 p-0.5 text-xs font-medium ${className}`}
      role="group"
      aria-label={dict.a11y.switchLanguage}
    >
      <Link
        href={arHref}
        aria-current={locale === "ar" ? "page" : undefined}
        className={`px-3 py-1.5 rounded-full transition-colors duration-200 ${
          locale === "ar"
            ? "bg-navy text-white font-semibold shadow-navy-sm"
            : "text-navy/75 hover:text-navy"
        }`}
      >
        AR
      </Link>
      <Link
        href={enHref}
        aria-current={locale === "en" ? "page" : undefined}
        className={`px-3 py-1.5 rounded-full font-latin-sans transition-colors duration-200 ${
          locale === "en"
            ? "bg-navy text-white font-semibold shadow-navy-sm"
            : "text-navy/75 hover:text-navy"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
