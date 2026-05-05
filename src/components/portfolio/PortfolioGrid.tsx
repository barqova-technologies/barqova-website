"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { tilt3d, useScrollAnimation } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types";

const FILTERS = ["All", "Web App", "Mobile App", "SaaS"] as const;
type Filter = (typeof FILTERS)[number];

type PortfolioGridProps = {
  projects: Array<Project & { image: string; badge?: string }>;
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const scope = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];
    const cards = gsap.utils.toArray<HTMLElement>("[data-pf-grid-card]");

    gsap.set(cards, { opacity: 0, y: 60, rotateX: -15, scale: 0.94 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: scope,
        start: "top 85%",
      },
    });

    if (!isMobile) {
      gsap.utils.toArray<HTMLElement>("[data-pf-grid-image]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.1 },
          {
            yPercent: 6,
            scale: 1.1,
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

      cards.forEach((c) => cleanups.push(tilt3d(c, gsap, { max: 5 })));
    }

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <div ref={scope}>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="mx-auto flex flex-wrap justify-center gap-2"
      >
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition min-h-[44px]",
                active
                  ? "bg-[#D5AD36] text-[#0F172A] shadow-[0_4px_18px_rgba(213,173,54,0.45)]"
                  : "border border-app text-app hover:border-[#D5AD36] hover:text-[#D5AD36]",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2" style={{ perspective: "1300px" }}>
        {filtered.map((p) => (
          <article
            key={p.slug}
            data-pf-grid-card
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0F172A] text-white border border-white/5 transition-shadow duration-500 hover:border-[#D5AD36] hover:shadow-[0_30px_60px_-30px_rgba(213,173,54,0.55)] gpu"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#1E293B]">
              <div data-pf-grid-image className="absolute inset-0">
                <Image
                  src={p.image}
                  alt={`${p.name} interface preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-50"
              />
              {p.badge ? (
                <span className="absolute top-3 left-3 rounded-full bg-[#D5AD36] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#0F172A] uppercase shadow-[0_4px_18px_rgba(213,173,54,0.5)]">
                  {p.badge}
                </span>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-4 p-7">
              <Tag variant="dark">{p.category}</Tag>
              <h3 className="text-2xl font-semibold transition-colors group-hover:text-[#E7C358]">
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

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-app">
          Nothing here yet — check back soon.
        </p>
      ) : null}
    </div>
  );
}
