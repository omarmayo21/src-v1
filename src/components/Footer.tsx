"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { BrandPattern } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../data/site-config";

function SocialIcon({ id }: { id: string }) {
  switch (id) {
    case "linkedin":
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "x":
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    default:
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
  }
}

export function Footer() {
  const { locale, dict } = useLanguage();

  const quickLinks = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.factory, href: `/${locale}/factory` },
    { label: dict.nav.whySrfec, href: `/${locale}/why-srfec` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.clients, href: `/${locale}/clients` },
    ...(siteConfig.showOptionalStonesSection
      ? [{ label: dict.nav.stones, href: `/${locale}/stones` }]
      : []),
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-white pt-16 pb-12">
      {/* Fading Brand Symbol Pattern in Background */}
      <BrandPattern tone="dark" fadeDirection="end" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-gold/20 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column (Primary / White Logo + Short Brand Line) */}
          <div className="lg:col-span-5 text-start flex flex-col items-start">
            <Link href={`/${locale}`} className="-ms-3">
              <Logo variant="primary" tone="white" />
            </Link>
            <p className="mt-4 text-sm sm:text-base text-cream/85 leading-relaxed max-w-md">
              {dict.footer.brandLine}
            </p>
            <p className="mt-3 font-serif-brand text-base text-gold">
              {dict.footer.craftTagline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4 text-start">
            <h3 className="font-serif-brand text-xl font-bold text-white">
              {dict.footer.quickLinksTitle}
            </h3>
            <span
              className="mt-2.5 block h-[2px] w-12 bg-gold"
              aria-hidden="true"
            />
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="lg:col-span-3 text-start">
            <h3 className="font-serif-brand text-xl font-bold text-white">
              {dict.footer.contactTitle}
            </h3>
            <span
              className="mt-2.5 block h-[2px] w-12 bg-gold"
              aria-hidden="true"
            />
            <ul className="mt-5 space-y-2.5 text-sm text-cream/85">
              <li>{siteConfig.contact.address[locale]}</li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  dir="ltr"
                  className="font-latin-sans hover:text-gold transition-colors inline-block"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  dir="ltr"
                  className="font-latin-sans hover:text-gold transition-colors inline-block"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-medium text-gold">
                {dict.footer.followUsTitle}
              </p>
              <div className="mt-2.5 flex items-center gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 bg-navy-light text-cream transition-all hover:bg-gold hover:text-navy"
                  >
                    <SocialIcon id={social.id} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cream/75">
          <p>{dict.footer.copyright}</p>
          <p dir="ltr" className="font-latin-sans text-gold/90">
            {siteConfig.contact.website}
          </p>
        </div>
      </div>
    </footer>
  );
}
