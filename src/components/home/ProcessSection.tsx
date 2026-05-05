"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/lib/gsap";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We understand your idea and goals on a simple call — no forms needed.",
  },
  {
    n: "02",
    title: "Design",
    body: "We design the screens first. You review and approve before any code is written.",
  },
  {
    n: "03",
    title: "Build",
    body: "We build in 2-week sprints. You see working features every cycle.",
  },
  {
    n: "04",
    title: "Launch",
    body: "We deploy, monitor, and stay available long after go-live.",
  },
];

export function ProcessSection() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope }) => {
    const cards = gsap.utils.toArray<HTMLElement>("[data-step]");
    const numbers = gsap.utils.toArray<HTMLElement>("[data-step-num]");

    gsap.from(cards, {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 0.85,
      ease: "back.out(1.5)",
      stagger: 0.18,
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(numbers, {
      scale: 0,
      rotate: -180,
      duration: 0.7,
      ease: "back.out(1.8)",
      stagger: 0.18,
      scrollTrigger: { trigger: scope, start: "top 75%" },
    });

    // Each number lights up as it crosses the center of the viewport
    numbers.forEach((num) => {
      gsap.fromTo(
        num,
        { boxShadow: "0 4px 18px -6px rgba(213,173,54,0.3)" },
        {
          boxShadow: "0 16px 40px -6px rgba(213,173,54,0.85)",
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: num,
            start: "top 70%",
            end: "top 30%",
            scrub: 0.6,
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });

    const line = scope.querySelector<HTMLElement>("[data-process-line]");
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        },
      );
    }
  }, scope);

  return (
    <section ref={scope} className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Process"
          title="How We Work"
          subtitle="Simple, transparent, no surprises."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            data-process-line
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#D5AD36]/60 via-[#E7C358] to-[#D5AD36]/60"
          />
          <ol className="grid gap-10 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li
                key={s.n}
                data-step
                className="relative flex gap-5 lg:flex-col lg:gap-4 gpu"
              >
                <span
                  data-step-num
                  className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E7C358] to-[#D5AD36] text-[#0F172A] font-bold text-lg ring-4 ring-[var(--bg)]"
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-app">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-app">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
