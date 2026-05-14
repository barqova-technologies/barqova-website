import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { FitFinder } from "@/components/fit/FitFinder";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title:
    "Fit Finder. Pick the Right Capability in 60 Seconds | Barqova Technologies",
  description:
    "Find which Barqova Technologies capability fits your project in 60 seconds. Four questions, one clear pick. No email, no sales call required.",
  path: "/fit-finder",
});

export default function FitFinderPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Fit Finder", path: "/fit-finder" },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-[#E7C358]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#D5AD36]/15 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Fit Finder
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Four questions.{" "}
              <span className="gold-text-gradient">One clear pick.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-hero-muted">
              Not sure which kind of work yours is? Answer four quick
              questions and we&rsquo;ll point at the right capability, no email
              required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-app py-16 sm:py-20">
        <div className="container-page">
          <FitFinder />
        </div>
      </section>
    </>
  );
}
