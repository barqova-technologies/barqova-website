"use client";

import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

const DO = [
  "Build for what your business actually needs today",
  "Ship working features every sprint, not status updates",
  "Write code the next person can read",
  "Stay involved long after launch day",
];

const DONT = [
  "Pad scope to inflate invoices",
  "Disappear once the cheque clears",
  "Hide behind technical jargon",
  "Promise unicorns to win the pitch",
];

export function Manifesto() {
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
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            How we operate
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
            Two short lists. They explain almost everything.
          </h2>
        </div>

        <div ref={ref} className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="reveal-up rounded-2xl border border-amber-soft bg-amber-soft/50 p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber text-[#0A0A0A]">
                <Check className="h-3.5 w-3.5" />
              </span>
              We do
            </div>
            <ul className="mt-6 space-y-4">
              {DO.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm sm:text-base text-app">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-up rounded-2xl border border-app bg-elevated p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-app">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--status-neutral-bg)] text-app">
                <X className="h-3.5 w-3.5" />
              </span>
              We don&rsquo;t
            </div>
            <ul className="mt-6 space-y-4">
              {DONT.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm sm:text-base text-muted-app">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-app/50" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
