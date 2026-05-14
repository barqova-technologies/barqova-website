"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  { n: "01", title: "Talk", body: "A short call to understand the real problem." },
  { n: "02", title: "Map", body: "Scope, milestones, and what we ship first." },
  { n: "03", title: "Design", body: "Screens you sign off before we touch code." },
  { n: "04", title: "Build", body: "Two-week sprints with working features each cycle." },
  { n: "05", title: "Launch", body: "Deploy, monitor, and stay close after go-live." },
];

export function ProcessSection() {
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
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const idx = els.indexOf(el);
            setTimeout(() => el.classList.add("in-view"), idx * 80);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
            Five steps. No black boxes.
          </h2>
        </div>

        <div ref={ref} className="relative mt-14">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-amber to-transparent opacity-50"
          />
          <ol className="grid gap-6 md:grid-cols-5">
            {STEPS.map((s) => (
              <li key={s.n} className="reveal-up relative">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-amber-soft bg-app font-num text-base font-semibold text-amber">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-app">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-app">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
