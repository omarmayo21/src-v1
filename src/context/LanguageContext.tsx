"use client";

import React, { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ar } from "../data/ar";
import { en } from "../data/en";
import type { Dictionary, Locale } from "../data/types";

interface LanguageContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "ar",
  dir: "rtl",
  dict: ar,
});

export function LanguageProvider({
  initialLocale = "ar",
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Derive active locale from URL segment (/ar/... or /en/...) with fallback to initialLocale
  const pathLocale: Locale =
    pathname?.startsWith("/en") ? "en" : pathname?.startsWith("/ar") ? "ar" : initialLocale;

  const dict = pathLocale === "en" ? en : ar;
  const dir = pathLocale === "en" ? "ltr" : "rtl";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = pathLocale;
      document.documentElement.dir = dir;
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathLocale, dir, pathname]);

  return (
    <LanguageContext.Provider value={{ locale: pathLocale, dir, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
