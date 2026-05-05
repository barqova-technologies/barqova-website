"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { magnetize, splitChars, useScrollAnimation } from "@/lib/gsap";

const ROTATING = ["Scale", "Convert", "Last", "Ship Fast"];

export function Hero() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];

    // Split each line into chars for the cascade reveal
    const lineEls = gsap.utils.toArray<HTMLElement>("[data-hero-line]", scope);
    const lineCharSets = lineEls.map((el) => splitChars(el));

    lineCharSets.forEach((chars) => {
      gsap.set(chars, {
        yPercent: 110,
        rotate: 8,
        opacity: 0,
        filter: "blur(6px)",
      });
    });

    const tl = gsap.timeline({ delay: 0.1 });

    tl.from("[data-hero='badge']", {
      opacity: 0,
      y: -16,
      scale: 0.85,
      duration: 0.7,
      ease: "back.out(1.6)",
    });

    lineCharSets.forEach((chars, i) => {
      tl.to(
        chars,
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "expo.out",
          stagger: { each: 0.025, from: "start" },
        },
        i === 0 ? "-=0.3" : "-=0.85",
      );
    });

    tl.from(
      "[data-hero='sub']",
      { opacity: 0, y: 24, duration: 0.7, ease: "power3.out" },
      "-=0.6",
    )
      .from(
        "[data-hero='cta']",
        {
          opacity: 0,
          y: 22,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      )
      .from("[data-hero='stack']", { opacity: 0, y: 14, duration: 0.5 }, "-=0.2")
      .from("[data-hero='scroll']", { opacity: 0, duration: 0.5 }, "-=0.1")
      .from(
        "[data-hero='orb']",
        {
          opacity: 0,
          scale: 0.4,
          duration: 1.4,
          stagger: 0.18,
          ease: "power2.out",
        },
        0,
      );

    // Rotating word inside the headline
    const rotatingTl = gsap.timeline({ repeat: -1, repeatDelay: 1.4, delay: tl.duration() + 0.5 });
    gsap.utils.toArray<HTMLElement>("[data-rotating-word]").forEach((el, i) => {
      if (i === 0) return;
      rotatingTl
        .to(`[data-rotating-word='${i - 1}']`, {
          yPercent: -100,
          opacity: 0,
          duration: 0.55,
          ease: "power2.in",
        })
        .fromTo(
          el,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
          "-=0.3",
        )
        .to({}, { duration: 1.4 });
    });
    // loop back to first
    rotatingTl
      .to(`[data-rotating-word='${ROTATING.length - 1}']`, {
        yPercent: -100,
        opacity: 0,
        duration: 0.55,
        ease: "power2.in",
      })
      .fromTo(
        `[data-rotating-word='0']`,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
        "-=0.3",
      );

    // Floating orb drift
    gsap.utils.toArray<HTMLElement>("[data-hero='orb']").forEach((orb, i) => {
      gsap.to(orb, {
        x: i % 2 === 0 ? 50 : -50,
        y: i % 2 === 0 ? -40 : 40,
        rotate: i % 2 === 0 ? 25 : -25,
        duration: 9 + i * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.to("[data-hero='ring']", {
      rotate: 360,
      duration: 32,
      repeat: -1,
      ease: "none",
    });

    // Cursor-follow gradient — cheap quick-setter for 60fps tracking
    if (!isMobile) {
      const follow = scope.querySelector<HTMLElement>("[data-hero-follow]");
      if (follow) {
        const xTo = gsap.quickTo(follow, "x", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(follow, "y", { duration: 0.6, ease: "power3" });
        const onMove = (e: MouseEvent) => {
          const r = scope.getBoundingClientRect();
          xTo(e.clientX - r.left - 250);
          yTo(e.clientY - r.top - 250);
        };
        scope.addEventListener("mousemove", onMove);
        cleanups.push(() => scope.removeEventListener("mousemove", onMove));
      }
    }

    if (!isMobile) {
      gsap.to("[data-hero='ring']", {
        yPercent: 35,
        scale: 1.15,
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.8 },
      });
      gsap.to("[data-hero-orb='a']", {
        yPercent: -45,
        xPercent: -12,
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to("[data-hero-orb='b']", {
        yPercent: 50,
        xPercent: 15,
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 1.2 },
      });
      gsap.to("[data-hero='headline']", {
        yPercent: -10,
        opacity: 0.3,
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom 30%", scrub: 0.6 },
      });
      gsap.to("[data-hero='sub']", {
        yPercent: -30,
        opacity: 0,
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom 50%", scrub: 0.8 },
      });
    }

    gsap.to("[data-hero='scroll']", {
      opacity: 0,
      y: 12,
      scrollTrigger: { trigger: scope, start: "top top", end: "+=200", scrub: true },
    });

    gsap.utils.toArray<HTMLElement>("[data-magnet]").forEach((el) => {
      cleanups.push(magnetize(el, gsap, { strength: 0.32, radius: 140 }));
    });

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section
      ref={scope}
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-[#0F172A] text-white"
      style={{ minHeight: "calc(100svh - 64px)" }}
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-70" />
      <div aria-hidden className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[480px] gold-glow" />

      <div
        aria-hidden
        data-hero="ring"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full gold-conic opacity-25 blur-2xl gpu"
      />

      {/* Cursor-follow gradient blob */}
      <div
        aria-hidden
        data-hero-follow
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(231,195,88,0.18),transparent_70%)] gpu"
        style={{ willChange: "transform" }}
      />

      <div
        aria-hidden
        data-hero="orb"
        data-hero-orb="a"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D5AD36]/30 blur-3xl gpu"
      />
      <div
        aria-hidden
        data-hero="orb"
        data-hero-orb="b"
        className="pointer-events-none absolute -right-24 bottom-32 h-96 w-96 rounded-full bg-[#E7C358]/20 blur-3xl gpu"
      />
      <div
        aria-hidden
        data-hero="orb"
        className="pointer-events-none absolute left-1/3 bottom-20 h-40 w-40 rounded-full bg-[#D5AD36]/15 blur-2xl gpu"
      />

      <div aria-hidden className="absolute inset-0 noise" />

      <div
        className="container-page relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "calc(100svh - 64px)" }}
      >
        <span
          data-hero="badge"
          className="inline-flex items-center gap-2 rounded-full border border-[#D5AD36]/40 bg-[#D5AD36]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[#E7C358] uppercase backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#E7C358] animate-pulse" />
          Web &amp; Mobile App Development
        </span>

        <h1
          data-hero="headline"
          className="mt-7 max-w-[18ch] text-[clamp(2.6rem,9vw,9rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-balance gpu"
          style={{ perspective: "1400px" }}
        >
          <span className="block overflow-hidden">
            <span data-hero-line className="inline-block">
              We Build Products
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="inline-block">
              That&nbsp;
            </span>
            <span
              aria-hidden
              className="relative inline-grid overflow-hidden align-baseline"
              style={{ height: "1em", minWidth: "5ch" }}
            >
              {ROTATING.map((w, i) => (
                <span
                  key={w}
                  data-rotating-word={i}
                  className="col-start-1 row-start-1 inline-block whitespace-nowrap gold-text-gradient"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {w}
                </span>
              ))}
            </span>
            <span className="sr-only">{ROTATING[0]}</span>
          </span>
        </h1>

        <p
          data-hero="sub"
          className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed text-pretty"
        >
          From idea to launch — we design, build and ship web apps and mobile apps that grow with your business.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            data-hero="cta"
            data-magnet
            href="#portfolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#D5AD36] px-8 py-4 text-sm font-semibold text-[#0F172A] shadow-[0_4px_18px_rgba(213,173,54,0.45)] transition-shadow hover:shadow-[0_14px_38px_rgba(213,173,54,0.7)]"
          >
            <span className="relative z-10">See Our Work</span>
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
          <Link
            data-hero="cta"
            data-magnet
            href="#contact-cta"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/[0.02] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D5AD36] hover:bg-[#D5AD36]/10 hover:text-[#E7C358]"
          >
            Hire Us
          </Link>
        </div>

        <p data-hero="stack" className="mt-9 text-xs sm:text-sm text-white/50 tracking-wide">
          React · Next.js · Node.js · React Native · TypeScript
        </p>

        <div
          data-hero="scroll"
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
