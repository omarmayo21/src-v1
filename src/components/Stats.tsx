"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { BrandPattern } from "./BrandPattern";
import { useLanguage } from "../context/LanguageContext";

function AnimatedCounter({
  target,
  prefix = "+",
  inView,
  reducedMotion,
}: {
  target: number;
  prefix?: string;
  inView: boolean;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState<number>(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || reducedMotion || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1400;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Exponential ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [inView, reducedMotion, target]);

  return (
    <span dir="ltr" className="tabular-nums-brand inline-block">
      {prefix}
      {count.toLocaleString("en-US")}
    </span>
  );
}

export function Stats() {
  const { dict } = useLanguage();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-label="SRFEC Key Milestones"
      className="relative overflow-hidden bg-navy py-16 sm:py-24 text-white border-y border-gold/25"
    >
      <BrandPattern tone="dark" fadeDirection="both" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Statement */}
          <div className="lg:col-span-5 text-start">
            <p className="font-serif-brand text-2xl sm:text-3xl font-bold text-white leading-snug">
              {dict.stats.craftStatement}
            </p>
            <span
              className="mt-4 block h-[3px] w-[120px] rounded-full bg-gold"
              aria-hidden="true"
            />
          </div>

          {/* Two Animated Counter Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-[24px] border border-gold/35 bg-navy-light/85 p-7 sm:p-9 text-start shadow-navy-md">
              <div className="font-latin-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold leading-none">
                <AnimatedCounter
                  target={dict.stats.experienceNumber}
                  prefix={dict.stats.experiencePrefix}
                  inView={inView}
                  reducedMotion={Boolean(prefersReducedMotion)}
                />
              </div>
              <div className="mt-4 font-serif-brand text-xl sm:text-2xl font-bold text-white">
                {dict.stats.experienceLabel}
              </div>
              <p className="mt-1.5 text-sm text-cream/80 leading-relaxed">
                {dict.stats.experienceSublabel}
              </p>
            </div>

            <div className="rounded-[24px] border border-gold/35 bg-navy-light/85 p-7 sm:p-9 text-start shadow-navy-md">
              <div className="font-latin-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold leading-none">
                <AnimatedCounter
                  target={dict.stats.projectsNumber}
                  prefix={dict.stats.projectsPrefix}
                  inView={inView}
                  reducedMotion={Boolean(prefersReducedMotion)}
                />
              </div>
              <div className="mt-4 font-serif-brand text-xl sm:text-2xl font-bold text-white">
                {dict.stats.projectsLabel}
              </div>
              <p className="mt-1.5 text-sm text-cream/80 leading-relaxed">
                {dict.stats.projectsSublabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

