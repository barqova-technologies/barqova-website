"use client";

import { useRef } from "react";
import { Zap, Shield, Eye } from "lucide-react";
import { tilt3d, useScrollAnimation } from "@/lib/gsap";

const VALUES = [
  {
    Icon: Zap,
    title: "Ship Fast",
    body: "We believe in delivering working software quickly. Speed matters — especially for startups.",
  },
  {
    Icon: Shield,
    title: "Build Right",
    body: "Fast does not mean cutting corners. Clean code and solid architecture from day one.",
  },
  {
    Icon: Eye,
    title: "Be Transparent",
    body: "Daily updates, honest timelines, no surprises. You always know where your project stands.",
  },
];

export function ValuesSection() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];

    const cards = gsap.utils.toArray<HTMLElement>("[data-value]");

    gsap.set(cards, {
      opacity: 0,
      y: 60,
      rotateY: -25,
      scale: 0.9,
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("[data-value-icon]", {
      scale: 0,
      rotate: 270,
      duration: 0.9,
      ease: "back.out(2)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
      },
    });

    if (!isMobile) {
      cards.forEach((c) => cleanups.push(tilt3d(c, gsap, { max: 7 })));
    }

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section ref={scope} className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
            Values
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
            What we believe in.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {VALUES.map((v) => (
            <div
              key={v.title}
              data-value
              className="group rounded-2xl border border-app bg-surface p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-25px_rgba(213,173,54,0.45)] gpu"
            >
              <div
                data-value-icon
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D5AD36]/15 to-[#E7C358]/5 text-[#D5AD36] ring-1 ring-[#D5AD36]/20 transition-transform group-hover:rotate-12 group-hover:scale-110"
              >
                <v.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-app">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-app">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
