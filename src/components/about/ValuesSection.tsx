"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Eye, type LucideIcon } from "lucide-react";

type Value = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const VALUES: Value[] = [
  {
    Icon: Zap,
    title: "Ship Fast",
    body: "We believe in delivering working software quickly. Speed matters, especially for startups.",
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
  const ref = useRef<HTMLElement | null>(null);

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
            const i = els.indexOf(el);
            setTimeout(() => el.classList.add("in-view"), i * 90);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-soft border border-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            Values
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-balance text-app">
            What we believe in.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="reveal-up group rounded-2xl border border-app bg-surface p-7 transition hover:border-amber-soft hover:shadow-[0_24px_50px_-25px_rgba(213,173,54,0.45)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-soft text-amber ring-1 ring-amber-soft transition-transform group-hover:rotate-6 group-hover:scale-110">
                <v.Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-app">
                {v.title}
              </h3>
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
