"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { locale, dict } = useLanguage();
  const pathname = usePathname();
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const mobileMenuOpen = Boolean(pathname && openMenuPath === pathname);
  const setMobileMenuOpen = (next: boolean | ((prev: boolean) => boolean)) => {
    const resolved = typeof next === "function" ? next(mobileMenuOpen) : next;
    setOpenMenuPath(resolved ? (pathname ?? "/") : null);
  };

  const navItems = [
    { id: "home", label: dict.nav.home, href: `/${locale}` },
    { id: "about", label: dict.nav.about, href: `/${locale}/about` },
    { id: "factory", label: dict.nav.factory, href: `/${locale}/factory` },
    { id: "why-srfec", label: dict.nav.whySrfec, href: `/${locale}/why-srfec` },
    { id: "projects", label: dict.nav.projects, href: `/${locale}/projects` },
    { id: "clients", label: dict.nav.clients, href: `/${locale}/clients` },
    { id: "contact", label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const isRouteActive = (href: string, id: string) => {
    if (!pathname) return false;
    if (id === "home") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setOpenMenuPath(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-navy-sm border-b border-stone-gray"
          : "bg-white/90 backdrop-blur-sm border-b border-stone-gray/70"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        {dict.a11y.skipToContent}
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Horizontal Brand Logo */}
        <Link
          href={`/${locale}`}
          className="shrink-0 rounded-lg focus-visible:outline-gold"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Logo variant="horizontal" tone="color" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {navItems.map((item) => {
            const isActive = isRouteActive(item.href, item.id);
            return (
              <Link
                key={item.id}
                href={item.href}
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
                className={`gold-link-underline py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-navy font-semibold"
                    : "text-navy/75 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Language Switcher + CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageSwitcher />

          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-navy-sm transition-all duration-200 hover:bg-navy-light hover:-translate-y-0.5"
          >
            <span>{dict.nav.contactCta}</span>
            <svg
              className="h-4 w-4 text-gold transition-transform duration-200 rtl:rotate-180"
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

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={
              mobileMenuOpen ? dict.a11y.closeMenu : dict.a11y.openMenu
            }
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-cream/60 text-navy transition-colors hover:bg-cream cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h11" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-stone-gray bg-white px-4 pt-3 pb-6 shadow-navy-md"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-1"
          >
            {navItems.map((item) => {
              const isActive = isRouteActive(item.href, item.id);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-cream text-navy font-semibold"
                      : "text-navy/80 hover:bg-cream/50 hover:text-navy"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-gold" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-base font-medium text-white shadow-navy-sm"
              >
                <span>{dict.nav.contactCta}</span>
                <svg
                  className="h-4 w-4 text-gold rtl:rotate-180"
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
          </nav>
        </div>
      )}
    </header>
  );
}
