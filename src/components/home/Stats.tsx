"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/lib/gsap";

const STATS = [
  { value: 24, suffix: "h", label: "Reply window" },
  { value: 12, suffix: "+", label: "Products shipped" },
  { value: 6, suffix: "yr", label: "Combined experience" },
  { value: 100, suffix: "%", label: "Sprint transparency" },
];

export function Stats() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope }) => {
    const items = gsap.utils.toArray<HTMLElement>("[data-stat]");

    gsap.from(items, {
      opacity: 0,
      y: 60,
      rotateX: -30,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });

    items.forEach((item) => {
      const num = item.querySelector<HTMLElement>("[data-stat-num]");
      if (!num) return;
      const target = Number(num.dataset.target ?? "0");
      const counter = { v: 0 };
      gsap.to(counter, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        onUpdate: () => {
          num.textContent = String(Math.round(counter.v));
        },
      });
    });
  }, scope);

  return (
    <section
      ref={scope}
      aria-label="By the numbers"
      className="relative isolate overflow-hidden bg-app py-20 sm:py-24"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-page relative">
        <div
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
          style={{ perspective: "1200px" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              data-stat
              className="group relative rounded-2xl border border-app bg-[var(--bg)] p-6 sm:p-8 text-center transition-shadow duration-300 hover:shadow-[0_24px_50px_-25px_rgba(213,173,54,0.45)]"
            >
              <div className="flex items-baseline justify-center gap-1 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-tight text-app">
                <span data-stat-num data-target={s.value}>0</span>
                <span className="text-[#D5AD36]">{s.suffix}</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-app">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
