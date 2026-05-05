"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { magnetize, tilt3d, useScrollAnimation } from "@/lib/gsap";

type Project = {
  name: string;
  category: string;
  description: string;
  tech: readonly string[];
  image: string;
  badge?: string;
};

const PROJECTS: readonly Project[] = [
  {
    name: "Barqhire",
    category: "SaaS Product",
    description:
      "Volunteer management platform for event organisers — built by Barqova.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    image: "/images/portfolio/barqhire.svg",
    badge: "Live — Our Own Product",
  },
  {
    name: "EventFlow Dashboard",
    category: "Web App",
    description:
      "Event management dashboard with real-time analytics and team coordination.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "/images/portfolio/eventflow.svg",
  },
  {
    name: "TrackMate",
    category: "Mobile App",
    description:
      "Cross-platform mobile app for field team tracking and task management.",
    tech: ["React Native", "PostgreSQL"],
    image: "/images/portfolio/trackmate.svg",
  },
];

export function PortfolioPreview() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];

    const cards = gsap.utils.toArray<HTMLElement>("[data-pf-card]");

    gsap.set(cards, {
      opacity: 0,
      y: 90,
      rotateX: -20,
      rotateY: 8,
      scale: 0.93,
      transformOrigin: "center bottom",
    });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
      stagger: { each: 0.15, from: "start" },
      scrollTrigger: {
        trigger: scope,
        start: "top 78%",
        toggleActions: "play none none reverse",
      },
    });

    if (!isMobile) {
      gsap.utils.toArray<HTMLElement>("[data-pf-image]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.12 },
          {
            yPercent: 8,
            scale: 1.12,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      cards.forEach((card) => {
        cleanups.push(tilt3d(card, gsap, { max: 5 }));
      });

      const cta = scope.querySelector<HTMLElement>("[data-pf-cta]");
      if (cta) cleanups.push(magnetize(cta, gsap, { strength: 0.3 }));
    }

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section ref={scope} id="portfolio" className="bg-surface py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="Things we have built."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3" style={{ perspective: "1400px" }}>
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              data-pf-card
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0F172A] text-white transition-shadow duration-500 hover:border-[#D5AD36] hover:shadow-[0_30px_60px_-30px_rgba(213,173,54,0.55)] gpu"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1E293B]">
                <div data-pf-image className="absolute inset-0">
                  <Image
                    src={p.image}
                    alt={`${p.name} interface preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"
                />
                {p.badge ? (
                  <span className="absolute top-3 left-3 rounded-full bg-[#D5AD36] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#0F172A] uppercase shadow-[0_4px_18px_rgba(213,173,54,0.5)]">
                    {p.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <Tag variant="dark">{p.category}</Tag>
                <h3 className="text-xl font-semibold transition-colors group-hover:text-[#E7C358]">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70 transition-colors group-hover:border-[#D5AD36]/30 group-hover:text-[#E7C358]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            data-pf-cta
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-app px-7 py-3.5 text-sm font-semibold text-app transition hover:border-[#D5AD36] hover:bg-[#D5AD36]/5 hover:text-[#D5AD36]"
          >
            View All Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
