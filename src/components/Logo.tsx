"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "../data/site-config";
import { useLanguage } from "../context/LanguageContext";

export interface LogoProps {
  variant?: "primary" | "horizontal" | "symbol" | "monogram";
  tone?: "color" | "mono" | "white";
  className?: string;
}

const FILE_MAP: Record<
  NonNullable<LogoProps["variant"]>,
  Record<NonNullable<LogoProps["tone"]>, string>
> = {
  primary: {
    color: "/brand/srfec-logo-primary.svg",
    mono: "/brand/srfec-logo-primary-mono.svg",
    white: "/brand/srfec-logo-primary-white.svg",
  },
  horizontal: {
    color: "/brand/srfec-logo-horizontal.svg",
    mono: "/brand/srfec-logo-horizontal-mono.svg",
    white: "/brand/srfec-logo-horizontal-white.svg",
  },
  symbol: {
    color: "/brand/srfec-symbol.svg",
    mono: "/brand/srfec-symbol-mono.svg",
    white: "/brand/srfec-symbol-white.svg",
  },
  monogram: {
    color: "/brand/srfec-monogram.svg",
    mono: "/brand/srfec-monogram-mono.svg",
    white: "/brand/srfec-monogram-white.svg",
  },
};

export function Logo({
  variant = "horizontal",
  tone = "color",
  className = "",
}: LogoProps) {
  const { dict } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const src = FILE_MAP[variant][tone];

  // When official SVG files are placed in /public/brand/ and enabled in siteConfig
  if (siteConfig.brandAssetsReady && !imgError) {
    const dimensions =
      variant === "primary"
        ? { width: 160, height: 140 }
        : variant === "symbol"
        ? { width: 70, height: 70 }
        : { width: 190, height: 56 };

    return (
      <div
        className={`inline-flex items-center select-none min-w-[70px] p-2 ${className}`}
        data-logo-variant={variant}
        data-logo-tone={tone}
      >
        <Image
          src={src}
          alt={dict.a11y.logoAlt}
          width={dimensions.width}
          height={dimensions.height}
          className="h-auto w-auto max-h-14 object-contain"
          onError={() => setImgError(true)}
          priority
        />
      </div>
    );
  }

  // Architectural placeholder box until /public/brand/*.svg files are dropped in.
  // Follows the brand book proportions: 6x by 6x square frame symbol, 2x serif "SRFEC", 0.8x sans tagline,
  // minimum width 70px, and 1/6 symbol clear space padding.
  const isWhite = tone === "white";
  const isMono = tone === "mono";

  const wordmarkColor = isWhite ? "text-white" : "text-navy";
  const taglineColor = isWhite
    ? "text-gold"
    : isMono
    ? "text-navy/80"
    : "text-navy";
  const symbolBorder = isWhite
    ? "border-white/80 bg-white/5"
    : isMono
    ? "border-navy bg-navy/5"
    : "border-navy bg-navy";
  const symbolInnerText = isWhite
    ? "text-gold"
    : isMono
    ? "text-navy"
    : "text-gold";

  if (variant === "symbol") {
    return (
      <div
        className={`inline-flex items-center justify-center min-w-[70px] p-2 select-none ${className}`}
        data-logo-placeholder={src}
        aria-label={dict.a11y.logoAlt}
      >
        <div
          className={`w-12 h-12 rounded-md border-2 ${symbolBorder} flex items-center justify-center relative overflow-hidden`}
        >
          <span className={`font-latin-serif font-bold text-sm tracking-widest ${symbolInnerText}`}>
            S
          </span>
          <span
            className="absolute inset-x-1 top-1/2 h-[1.5px] bg-gold/60 -rotate-12"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  if (variant === "monogram") {
    return (
      <div
        className={`inline-flex flex-col justify-center min-w-[96px] p-2 select-none ${className}`}
        data-logo-placeholder={src}
        aria-label={dict.a11y.logoAlt}
      >
        <span
          className={`font-latin-serif font-extrabold text-2xl leading-none tracking-[0.12em] ${wordmarkColor}`}
        >
          SRFEC
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5">
          <span className="w-3 h-[2px] bg-gold shrink-0" aria-hidden="true" />
          <span
            className={`font-latin-sans text-xs font-medium uppercase tracking-[0.18em] leading-none ${taglineColor}`}
          >
            Stones &amp; Granite
          </span>
        </span>
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <div
        className={`inline-flex flex-col items-center text-center min-w-[120px] p-3 select-none ${className}`}
        data-logo-placeholder={src}
        aria-label={dict.a11y.logoAlt}
      >
        {/* 6x by 6x symbol frame placeholder (not redrawing the symbol) */}
        <div
          className={`w-14 h-14 rounded-lg border-2 ${symbolBorder} flex flex-col items-center justify-center mb-3 relative`}
        >
          <span
            className={`font-latin-serif font-bold text-base tracking-widest ${symbolInnerText}`}
          >
            SR
          </span>
          <span
            className="w-7 h-[1.5px] bg-gold mt-0.5"
            aria-hidden="true"
          />
        </div>
        <span
          className={`font-latin-serif font-extrabold text-2xl leading-none tracking-[0.14em] ${wordmarkColor}`}
        >
          SRFEC
        </span>
        <span className="mt-1.5 inline-flex items-center gap-2">
          <span className="w-3 h-[1.5px] bg-gold" aria-hidden="true" />
          <span
            className={`font-latin-sans text-xs font-medium uppercase tracking-[0.2em] leading-none ${taglineColor}`}
          >
            Stones &amp; Granite
          </span>
          <span className="w-3 h-[1.5px] bg-gold" aria-hidden="true" />
        </span>
      </div>
    );
  }

  // Default: Horizontal variant (symbol on start side, wordmark + tagline on end side)
  return (
    <div
      className={`inline-flex items-center gap-3.5 min-w-[170px] py-1.5 px-2 select-none ${className}`}
      data-logo-placeholder={src}
      aria-label={dict.a11y.logoAlt}
    >
      <div
        className={`w-11 h-11 rounded-lg border-2 ${symbolBorder} flex flex-col items-center justify-center shrink-0 relative`}
      >
        <span
          className={`font-latin-serif font-bold text-sm tracking-widest ${symbolInnerText}`}
        >
          SR
        </span>
        <span className="w-5 h-[1.5px] bg-gold mt-0.5" aria-hidden="true" />
      </div>
      <div className="flex flex-col justify-center text-start">
        <span
          className={`font-latin-serif font-extrabold text-xl sm:text-2xl leading-none tracking-[0.12em] ${wordmarkColor}`}
        >
          SRFEC
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5">
          <span className="w-3.5 h-[2px] bg-gold shrink-0" aria-hidden="true" />
          <span
            className={`font-latin-sans text-xs font-medium uppercase tracking-[0.16em] leading-none ${taglineColor}`}
          >
            Stones &amp; Granite
          </span>
        </span>
      </div>
    </div>
  );
}

