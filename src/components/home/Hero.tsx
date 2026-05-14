import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CAPS = [
  "Custom Software",
  "Web Apps",
  "Mobile",
  "AI Integration",
  "SaaS",
  "Portfolio Sites",
];

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-hero text-hero"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/3 h-[420px] gold-glow pointer-events-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#D5AD36]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#E7C358]/15 blur-3xl"
      />

      <div className="container-page relative pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="mx-auto max-w-5xl">
          <div
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3.5 py-1.5 text-xs font-medium tracking-widest text-amber uppercase backdrop-blur-sm"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-amber opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-amber" />
            </span>
            Taking on new projects · 2026
          </div>

          <h1
            className="hero-reveal mt-7 text-[clamp(2.6rem,8vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-balance"
            style={{ animationDelay: "140ms" }}
          >
            Software that
            <span className="block">
              <span className="gold-text-gradient">earns its keep.</span>
            </span>
          </h1>

          <p
            className="hero-reveal mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-hero-muted text-pretty"
            style={{ animationDelay: "240ms" }}
          >
            We design, build and ship the tools your business actually runs on.
            Custom software, mobile apps, AI workflows, and SaaS that does real
            work.
          </p>

          <div
            className="hero-reveal mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-amber px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)] hover:scale-[1.01]"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/fit-finder"
              className="inline-flex items-center gap-2 rounded-[10px] border border-hero bg-hero-surface px-7 py-3.5 text-sm font-semibold text-hero backdrop-blur-sm transition hover:border-amber hover:bg-amber-soft hover:text-amber"
            >
              <Sparkles className="h-4 w-4" />
              Find your fit
            </Link>
          </div>

          <p
            className="hero-reveal mt-10 text-xs sm:text-sm tracking-[0.2em] uppercase text-hero-subtle"
            style={{ animationDelay: "420ms" }}
          >
            Powered by Lightning · Built for Scale
          </p>

          <div
            className="hero-reveal mt-14 sm:mt-16 grid gap-3 sm:grid-cols-3 lg:grid-cols-6"
            style={{ animationDelay: "520ms" }}
          >
            {CAPS.map((c) => (
              <div
                key={c}
                className="group relative overflow-hidden rounded-xl border border-hero bg-hero-surface px-4 py-3 text-xs sm:text-[13px] font-medium text-hero-muted transition hover:border-amber-soft hover:text-amber hover:bg-amber-soft"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
