"use client";

import { useRef } from "react";
import {
  MessageCircle,
  LayoutDashboard,
  PenTool,
  Zap,
  CheckCircle,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/lib/gsap";
import { cn } from "@/lib/cn";

type Step = {
  n: string;
  title: string;
  body: string;
  warm: string;
  Icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Let's Understand Your Idea",
    body: "We start with a simple call. No forms, no lengthy questionnaires. Just a real conversation about what you are trying to build and why.",
    warm: "You talk. We listen. Really.",
    Icon: MessageCircle,
  },
  {
    n: "02",
    title: "We Map It Out Together",
    body: "After the call we break your idea into clear modules — what gets built first, what comes later, what is essential and what can wait. You get a scope document before a single line of code is written.",
    warm: "No vague promises. Just a clear plan you can actually read.",
    Icon: LayoutDashboard,
  },
  {
    n: "03",
    title: "Design Before We Build",
    body: "We design every screen before development starts. You review, give feedback, and approve. Nothing gets built that you have not seen first.",
    warm: "You will never see a surprise on launch day.",
    Icon: PenTool,
  },
  {
    n: "04",
    title: "We Build in Sprints",
    body: "We work in 1-2 week sprints. Every sprint ends with real working features — not a status update. You see progress every single week.",
    warm: "Weekly updates. Always.",
    Icon: Zap,
  },
  {
    n: "05",
    title: "You Test. We Fix.",
    body: "Before anything goes live you get full access to test it. We fix every issue. Your sign-off is the only thing that moves us to launch.",
    warm: "We do not call it done until you do.",
    Icon: CheckCircle,
  },
  {
    n: "06",
    title: "Launch and Beyond",
    body: "We deploy your product, monitor it, and stay available after launch. Most clients continue working with us to add features over time.",
    warm: "The relationship does not end at go-live.",
    Icon: Rocket,
  },
];

export function HowWeBuild() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope }) => {
    gsap.utils.toArray<HTMLElement>("[data-build-step]").forEach((el, i) => {
      const card = el.querySelector<HTMLElement>("[data-build-card]");
      const icon = el.querySelector<HTMLElement>("[data-build-icon]");
      const fromX = i % 2 === 0 ? -60 : 60;

      if (card) {
        gsap.from(card, {
          opacity: 0,
          x: fromX,
          y: 30,
          rotateY: i % 2 === 0 ? -12 : 12,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }
      if (icon) {
        gsap.from(icon, {
          scale: 0,
          rotate: -180,
          duration: 0.7,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }
    });

    const line = scope.querySelector<HTMLElement>("[data-build-line]");
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 70%",
            end: "bottom 85%",
            scrub: 0.6,
          },
        },
      );
    }
  }, scope);

  return (
    <section ref={scope} className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
            How We Build
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
            Here is exactly how we work — no surprises, no black boxes.
          </h2>
        </div>

        <ol className="relative mt-20 mx-auto max-w-4xl" style={{ perspective: "1400px" }}>
          <span
            aria-hidden
            data-build-line
            className="absolute left-7 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D5AD36]/60 to-transparent"
          />
          {STEPS.map((s, i) => {
            const onRight = i % 2 === 1;
            return (
              <li
                key={s.n}
                data-build-step
                className={cn(
                  "relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-start mb-14 last:mb-0",
                )}
              >
                <span
                  aria-hidden
                  data-build-icon
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#E7C358] to-[#D5AD36] text-[#0F172A] font-bold shadow-[0_8px_24px_-8px_rgba(213,173,54,0.7)] ring-4 ring-[var(--bg)] z-10"
                >
                  <s.Icon className="h-6 w-6" />
                </span>

                <div
                  data-build-card
                  className={cn(
                    "rounded-2xl border border-app bg-[var(--bg)] p-6 sm:p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-25px_rgba(213,173,54,0.4)] gpu",
                    onRight ? "md:col-start-2" : "md:col-start-1 md:text-right",
                  )}
                >
                  <span className="text-xs font-semibold tracking-widest text-[#D5AD36] uppercase">
                    Step {s.n}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-app">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-app">
                    {s.body}
                  </p>
                  <p className="mt-4 text-sm font-medium italic text-[#D5AD36]">
                    “{s.warm}”
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
