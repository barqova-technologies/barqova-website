"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/lib/gsap";

const ITEMS = [
  "Web Apps",
  "Mobile Apps",
  "Custom Software",
  "Dashboards",
  "SaaS Products",
  "API Integrations",
  "Internal Tools",
  "MVPs",
];

export function Marquee() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope }) => {
    const track = scope.querySelector<HTMLElement>("[data-marquee-track]");
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 32,
      ease: "none",
      repeat: -1,
    });

    let lastY = window.scrollY;
    let raf = 0;
    const tick = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      const baseDir = 1;
      const scaled = gsap.utils.clamp(0.4, 4, baseDir + Math.abs(delta) * 0.05);
      const sign = delta < 0 ? -1 : 1;
      tween.timeScale(sign * scaled);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, scope);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section
      ref={scope}
      aria-hidden
      className="relative overflow-hidden border-y border-app bg-surface py-8"
    >
      <div className="flex w-max" data-marquee-track>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 px-10 text-[clamp(2rem,4.5vw,4rem)] font-extrabold tracking-tight text-app/30"
          >
            {item}
            <span className="inline-block h-3 w-3 rounded-full bg-[#D5AD36]" />
          </span>
        ))}
      </div>
    </section>
  );
}
