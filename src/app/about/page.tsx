import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Barqova Technologies",
  description:
    "Meet the team behind Barqova Technologies. The co-founders building web and mobile products for startups and businesses.",
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
      <section className="bg-[#0F172A] text-white pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-[#D5AD36]/40 bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#E7C358] uppercase">
              About
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance">
              We Are Barqova Technologies.
            </h1>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-white/70 leading-relaxed text-pretty">
              <p>
                We are a small team that builds web and mobile products for startups and growing businesses.
              </p>
              <p>
                We care about three things — understanding your problem properly, building it cleanly, and delivering it on time.
              </p>
              <p className="text-white">
                No fluff. No corporate speak. Just good software, built right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <ValuesSection />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-app text-balance">
            Want to work with us?
          </h2>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D5AD36] px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358] hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
