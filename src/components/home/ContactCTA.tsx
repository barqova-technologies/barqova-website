import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      id="contact-cta"
      aria-label="Contact"
      className="relative isolate overflow-hidden bg-hero py-24 sm:py-32 text-hero"
    >
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D5AD36]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#E7C358]/15 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase backdrop-blur-sm">
            Let&rsquo;s build
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
            Have a rough idea?{" "}
            <span className="gold-text-gradient">Bring it over.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-hero-muted leading-relaxed text-pretty">
            One short call to figure out if we&rsquo;re the right fit. No forms,
            no formal proposals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-amber px-8 py-4 text-base font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)] hover:scale-[1.01]"
            >
              Start a conversation
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 rounded-[10px] border border-hero bg-hero-surface px-8 py-4 text-base font-semibold text-hero backdrop-blur-sm transition hover:border-amber hover:bg-amber-soft hover:text-amber"
            >
              Book a 15-min call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
