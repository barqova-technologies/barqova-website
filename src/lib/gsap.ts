"use client";

import { useEffect, useRef, type RefObject } from "react";

export const fadeUpFrom = {
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out",
};

export const fadeOnlyFrom = {
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
};

export function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type AnimateFn = (ctx: {
  scope: HTMLElement;
  gsap: typeof import("gsap").default;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  isMobile: boolean;
  reduceMotion: boolean;
}) => void | (() => void);

/**
 * Lazily loads gsap + ScrollTrigger, runs the animation inside a gsap.context,
 * and cleans up triggers on unmount. The animate fn may return a cleanup
 * function for additional listeners (mousemove, etc.).
 *
 * Skips animation entirely when reduced motion is requested.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  animate: AnimateFn,
  scopeRef: RefObject<T | null>,
) {
  const animateRef = useRef(animate);
  animateRef.current = animate;

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    if (prefersReducedMotion()) return;

    let cleanup: (() => void) | undefined;
    let mounted = true;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      let userCleanup: (() => void) | void;
      const ctx = gsap.context(() => {
        userCleanup = animateRef.current({
          scope,
          gsap,
          ScrollTrigger,
          isMobile: isMobileViewport(),
          reduceMotion: false,
        });
      }, scope);

      cleanup = () => {
        if (typeof userCleanup === "function") userCleanup();
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger && scope.contains(t.trigger)) t.kill();
        });
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [scopeRef]);
}

/* ------------------------------------------------------------------ */
/*  Reusable animation primitives                                     */
/* ------------------------------------------------------------------ */

type Gsap = typeof import("gsap").default;

/**
 * Magnetic hover. Element drifts toward the cursor while hovered, then
 * springs back when the cursor leaves. Returns a cleanup fn.
 */
export function magnetize(
  el: HTMLElement,
  gsap: Gsap,
  opts: { strength?: number; radius?: number } = {},
) {
  const strength = opts.strength ?? 0.35;
  const radius = opts.radius ?? 120;

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
      return;
    }
    gsap.to(el, {
      x: dx * strength,
      y: dy * strength,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  window.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    window.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    gsap.to(el, { x: 0, y: 0, duration: 0.2 });
  };
}

/**
 * 3D tilt on cursor position. Element gets perspective + rotateX/rotateY
 * proportional to where the cursor sits inside its bounds. The optional
 * `glare` element gets opacity proportional to distance from center.
 */
export function tilt3d(
  el: HTMLElement,
  gsap: Gsap,
  opts: { max?: number; glare?: HTMLElement | null } = {},
) {
  const max = opts.max ?? 10;
  const glare = opts.glare ?? null;

  el.style.transformStyle = "preserve-3d";
  el.style.perspective = "900px";

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    gsap.to(el, {
      rotateX: rx,
      rotateY: ry,
      duration: 0.45,
      ease: "power3.out",
      transformPerspective: 900,
    });
    if (glare) {
      gsap.to(glare, {
        opacity: 0.8,
        x: `${(px - 0.5) * 100}%`,
        y: `${(py - 0.5) * 100}%`,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const onLeave = () => {
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.9,
      ease: "elastic.out(1, 0.55)",
    });
    if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/**
 * Wrap each character of a text node in a span so it can be animated
 * individually. Returns the array of span elements (ready for stagger).
 * Mutates the element in place.
 */
export function splitChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent ?? "";
  el.textContent = "";
  const chars: HTMLSpanElement[] = [];
  for (const ch of text) {
    const span = document.createElement("span");
    span.textContent = ch === " " ? " " : ch;
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity, filter";
    el.appendChild(span);
    chars.push(span);
  }
  return chars;
}

/**
 * Smooth-scrub "scroll velocity" tracker. Adds `--scroll-vel` (between -1 and 1)
 * as a CSS variable on the document root. Useful for skewing or stretching
 * elements with the user's scroll speed.
 */
export function trackScrollVelocity(): () => void {
  if (typeof window === "undefined") return () => {};
  let last = window.scrollY;
  let vel = 0;
  let frame = 0;
  const tick = () => {
    const cur = window.scrollY;
    const delta = cur - last;
    last = cur;
    vel += (delta - vel) * 0.15;
    const norm = Math.max(-1, Math.min(1, vel / 60));
    document.documentElement.style.setProperty("--scroll-vel", String(norm));
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}
