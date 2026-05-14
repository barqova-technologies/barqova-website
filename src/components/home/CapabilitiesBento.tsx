"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Smartphone,
  Brain,
  Cloud,
  Briefcase,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Cap = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  span: string;
  accent?: boolean;
};

const CAPS: Cap[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    blurb:
      "Built around how your team actually works, not bent into someone else's template.",
    span: "md:col-span-2 lg:col-span-3",
    accent: true,
  },
  {
    icon: Briefcase,
    title: "Web Applications",
    blurb: "Dashboards, portals and internal tools that scale.",
    span: "md:col-span-2 lg:col-span-3",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    blurb: "Real workflows powered by language models. Not party tricks.",
    span: "md:col-span-2 lg:col-span-2",
    accent: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    blurb: "iOS and Android, one clean codebase.",
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    blurb: "Multi-tenant products, billing, infra. End to end.",
    span: "md:col-span-1 lg:col-span-2",
  },
  {
    icon: Layers,
    title: "Portfolio Sites",
    blurb: "Personal and creative portfolios with real craft.",
    span: "md:col-span-2 lg:col-span-6",
  },
];

export function CapabilitiesBento() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal-up"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = (els.indexOf(el) % 6) * 60;
            setTimeout(() => el.classList.add("in-view"), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function trackCursor(e: React.MouseEvent<HTMLAnchorElement>) {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      aria-label="Capabilities"
      className="relative bg-app py-24 sm:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Capabilities
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
              Six things we&rsquo;re really good at.
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-app">
            Pick a starting point. Most projects pull from two or three of
            these. We&rsquo;ll figure out the right mix together.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {CAPS.map(({ icon: Icon, title, blurb, span, accent }) => (
            <Link
              key={title}
              href="/services"
              onMouseMove={trackCursor}
              className={`bento-card reveal-up group ${span} ${
                accent ? "ring-1 ring-amber-soft" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    accent
                      ? "bg-amber text-[#0A0A0A] shadow-amber-glow"
                      : "bg-amber-soft text-amber ring-1 ring-amber-soft"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-app transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-app">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-app">
                {blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
