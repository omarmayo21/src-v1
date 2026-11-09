"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SUB_SECTIONS = ["story", "ceo", "vision", "mission", "values"] as const;

export function AboutSubNav() {
  const { dict } = useLanguage();
  const [activeId, setActiveId] = useState<string>("story");

  const items = [
    { id: "story", label: dict.aboutSubNav.story },
    { id: "ceo", label: dict.aboutSubNav.ceo },
    { id: "vision", label: dict.aboutSubNav.vision },
    { id: "mission", label: dict.aboutSubNav.mission },
    { id: "values", label: dict.aboutSubNav.values },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = SUB_SECTIONS.length - 1; i >= 0; i--) {
        const id = SUB_SECTIONS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[68px] z-40 border-b border-stone-gray bg-cream/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label={dict.a11y.subNavLabel}
          className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-3 no-scrollbar"
        >
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-navy text-white shadow-navy-sm"
                    : "text-navy/75 hover:bg-white hover:text-navy"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

