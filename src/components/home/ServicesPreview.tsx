"use client";

import { useRef } from "react";
import Link from "next/link";
import { Code2, Globe, Smartphone, Users, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tilt3d, useScrollAnimation } from "@/lib/gsap";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "We build exactly what your business needs — from scratch.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    description: "Modern web apps using React and Next.js — fast and scalable.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "iOS and Android apps from one clean codebase.",
  },
  {
    icon: Users,
    title: "Hire Our Team",
    description: "Dedicated developers working on your project, sprint by sprint.",
  },
];

export function ServicesPreview() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];

    const cards = gsap.utils.toArray<HTMLElement>("[data-svc-card]");

    gsap.set(cards, { opacity: 0, y: 80, rotateX: -22, scale: 0.92 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: { each: 0.12, from: "start" },
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("[data-svc-icon]", {
      rotate: -180,
      scale: 0,
      duration: 0.9,
      ease: "back.out(2)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
      },
    });

    gsap.from("[data-svc-rail]", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
      },
    });

    if (!isMobile) {
      cards.forEach((card) => {
        const glare = card.querySelector<HTMLElement>("[data-svc-glare]");
        cleanups.push(tilt3d(card, gsap, { max: 6, glare }));
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section ref={scope} className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="What We Do"
          subtitle="Four things we do really well."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2" style={{ perspective: "1200px" }}>
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <Link
              key={title}
              href="/services"
              data-svc-card
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-app bg-[var(--bg)] p-7 transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(213,173,54,0.5)] gpu"
            >
              <span
                aria-hidden
                data-svc-glare
                className="pointer-events-none absolute -inset-1/2 z-0 h-[200%] w-[200%] rounded-full bg-[radial-gradient(circle_at_center,rgba(213,173,54,0.2),transparent_60%)] opacity-0"
              />
              <span
                aria-hidden
                data-svc-rail
                className="absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-[#E7C358] via-[#D5AD36] to-[#B0892A]"
              />
              <div
                data-svc-icon
                className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D5AD36]/15 to-[#E7C358]/5 text-[#D5AD36] ring-1 ring-[#D5AD36]/20 transition-transform group-hover:rotate-6 group-hover:scale-110"
              >
                <Icon className="h-6 w-6" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-app">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-app">
                  {description}
                </p>
              </div>
              <span className="relative z-10 mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#D5AD36]">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
