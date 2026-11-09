"use client";

import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
  className?: string;
  id?: string;
}

/**
 * Reusable <SectionTitle /> component.
 * Renders the authoritative serif heading followed by SRFEC's signature
 * thin Champagne Gold underline (~120px wide, 3px high) and optional calm subtitle.
 * Follows the craft rule: no eyebrow/kicker above the heading.
 */
export function SectionTitle({
  title,
  subtitle,
  align = "start",
  tone = "light",
  className = "",
  id,
}: SectionTitleProps) {
  const isDark = tone === "dark";
  const alignClasses =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      <h2
        id={id}
        className={`font-serif-brand text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.18] tracking-[-0.02em] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <span
        className="mt-4 block h-[3px] w-[120px] rounded-full bg-gold shrink-0"
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-[68ch] ${
            isDark ? "text-cream/90" : "text-navy/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

