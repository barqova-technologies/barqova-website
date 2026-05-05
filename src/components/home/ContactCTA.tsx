"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { magnetize, useScrollAnimation } from "@/lib/gsap";

export function ContactCTA() {
  const scope = useRef<HTMLElement | null>(null);

  useScrollAnimation(({ gsap, scope, isMobile }) => {
    const cleanups: Array<() => void> = [];

    gsap.from("[data-cta]", {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: scope,
        start: "top 80%",
      },
    });

    if (!isMobile) {
      gsap.fromTo(
        "[data-cta-headline]",
        { scale: 0.85 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top bottom",
            end: "top 40%",
            scrub: 0.8,
          },
        },
      );

      gsap.to("[data-cta-blob-a]", {
        x: 80,
        y: -50,
        scale: 1.2,
        scrollTrigger: {
          trigger: scope,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.to("[data-cta-blob-b]", {
        x: -100,
        y: 60,
        scale: 1.25,
        scrollTrigger: {
          trigger: scope,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    gsap.utils.toArray<HTMLElement>("[data-magnet]").forEach((el) => {
      cleanups.push(magnetize(el, gsap, { strength: 0.35, radius: 160 }));
    });

    return () => cleanups.forEach((fn) => fn());
  }, scope);

  return (
    <section
      ref={scope}
      id="contact-cta"
      aria-label="Contact"
      className="relative isolate overflow-hidden bg-[#0F172A] py-24 sm:py-32 text-white"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div
        aria-hidden
        data-cta-blob-a
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D5AD36]/25 blur-3xl gpu"
      />
      <div
        aria-hidden
        data-cta-blob-b
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#E7C358]/20 blur-3xl gpu"
      />
      <div aria-hidden className="absolute inset-0 noise" />

      <div className="container-page relative text-center">
        <h2
          data-cta
          data-cta-headline
          className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance gpu"
        >
          Have an idea?{" "}
          <span className="gold-text-gradient">Let&rsquo;s build it together.</span>
        </h2>
        <p
          data-cta
          className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed text-pretty"
        >
          No lengthy forms or formal proposals needed. Just a conversation.
        </p>
        <div data-cta className="mt-10">
          <Link
            data-magnet
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#D5AD36] px-8 py-4 text-base font-semibold text-[#0F172A] shadow-[0_8px_28px_-8px_rgba(213,173,54,0.6)] transition-shadow hover:shadow-[0_14px_40px_-8px_rgba(213,173,54,0.8)]"
          >
            <span className="relative z-10">Start a Conversation</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
