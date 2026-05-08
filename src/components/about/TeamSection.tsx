"use client";

import { useRef } from "react";
import { tilt3d, useScrollAnimation } from "@/lib/gsap";
import type { TeamMember } from "@/types";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

const TEAM: TeamMember[] = [
  {
    name: "Sahil Muhib",
    initials: "SM",
    role: "Co-Founder & CEO",
    bio: "Leads client partnerships and business growth. Deep expertise in business development and event management. The reason clients trust us from day one.",
    linkedin: "https://www.linkedin.com/in/sahilmuhib",
  },
  {
    name: "Mohd Atif Khan",
    initials: "MAK",
    role: "Co-Founder & COO",
    bio: "Drives operations, marketing, and brand growth. Background in team leadership and business management. The reason things run smoothly behind the scenes.",
    linkedin: "https://www.linkedin.com/in/mohdatifkhan21",
  },
];

export function TeamSection() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];
    const cards = gsap.utils.toArray<HTMLElement>("[data-team-card]");

    gsap.set(cards, { opacity: 0, y: 70, rotateY: -18, scale: 0.92 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      duration: 1.05,
      ease: "power3.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });

    gsap.from("[data-team-avatar]", {
      scale: 0,
      rotate: -90,
      duration: 0.8,
      ease: "back.out(1.8)",
      stagger: 0.18,
      scrollTrigger: {
        trigger: scope,
        start: "top 75%",
      },
    });

    if (!isMobile) {
      cards.forEach((c) => cleanups.push(tilt3d(c, gsap, { max: 6 })));
    }

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section ref={scope} className="bg-surface py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
            Team
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
            The People Behind Barqova
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-app">
            Two co-founders. One shared goal.
          </p>
        </div>

        <div
          className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {TEAM.map((m) => (
            <article
              key={m.name}
              data-team-card
              className="group flex flex-col items-center text-center rounded-2xl border border-app bg-[var(--bg)] p-7 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-25px_rgba(213,173,54,0.45)] gpu"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-full gold-conic opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50"
                />
                <div
                  data-team-avatar
                  className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-2xl font-bold text-[#E7C358] shadow-[0_8px_24px_-8px_rgba(213,173,54,0.6)] ring-2 ring-[#D5AD36]/30"
                >
                  {m.initials}
                </div>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-app">{m.name}</h3>
              <p className="mt-1 text-xs font-semibold tracking-widest text-[#D5AD36] uppercase">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-app">
                {m.bio}
              </p>
              <a
                href={m.linkedin}
                aria-label={`${m.name} on LinkedIn`}
                className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-app text-muted-app transition hover:border-[#D5AD36] hover:bg-[#D5AD36]/10 hover:text-[#D5AD36]"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
