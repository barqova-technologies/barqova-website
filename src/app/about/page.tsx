import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title:
    "About Barqova Technologies. Founder-Led Remote Software Company",
  description:
    "Meet Barqova Technologies: a founder-led, remote-first software company started by Sahil Muhib and Mohd Atif Khan. Sharp brief, honest timelines.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <section className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#E7C358]/15 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              About
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Barqova Technologies.{" "}
              <span className="gold-text-gradient">Building real things.</span>
            </h1>
            <div className="mt-8 space-y-5 text-hero-muted leading-relaxed text-pretty">
              <p className="text-base sm:text-lg">
                Barqova Technologies is a founder-led software company. We
                design, build and ship the software, apps and AI workflows
                businesses actually use every day.
              </p>
              <p className="text-base sm:text-lg">
                We started this because we got tired of seeing good ideas
                buried under bad agency work. Bloated scopes, vanishing
                project managers, code nobody else can read. We try to do the
                opposite of all of that.
              </p>
              <p className="text-base sm:text-lg text-hero">
                Sharp brief. Honest timelines. Code we&rsquo;d be happy to hand
                to the next team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <ValuesSection />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-app text-balance">
            Want to work with us, or for us?
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-amber px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-[10px] border border-app px-7 py-3.5 text-sm font-semibold text-app transition hover:border-amber hover:bg-amber-soft hover:text-amber"
            >
              See careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
