import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import type { Project } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Our Work | Barqova Technologies",
  description:
    "See what we have built — web apps, mobile apps, and SaaS products developed by Barqova Technologies.",
  path: "/portfolio",
});

const PROJECTS: Array<Project & { image: string; badge?: string }> = [
  {
    slug: "barqhire",
    name: "Barqhire",
    category: "SaaS",
    description:
      "Volunteer platform connecting event organisers with verified volunteers. Built end to end by Barqova.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    image: "/images/portfolio/barqhire.svg",
    badge: "Live — Our Own Product",
  },
  {
    slug: "eventflow",
    name: "EventFlow Dashboard",
    category: "Web App",
    description:
      "Event management dashboard with real-time team coordination and analytics.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "/images/portfolio/eventflow.svg",
  },
  {
    slug: "trackmate",
    name: "TrackMate",
    category: "Mobile App",
    description:
      "Field team tracking and task management mobile app for iOS and Android.",
    tech: ["React Native", "PostgreSQL"],
    image: "/images/portfolio/trackmate.svg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#0F172A] text-white pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="container-page text-center">
          <span className="inline-block rounded-full border border-[#D5AD36]/40 bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#E7C358] uppercase">
            Portfolio
          </span>
          <h1 className="mt-6 mx-auto max-w-2xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance">
            Our Work
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-white/70">
            Real projects. Built properly.
          </p>
        </div>
      </section>

      <section className="bg-app py-20 sm:py-24">
        <div className="container-page">
          <PortfolioGrid projects={PROJECTS} />
          <p className="mt-16 text-center text-sm text-muted-app">
            More client projects coming soon. First, we build. Then we show.
          </p>
        </div>
      </section>
    </>
  );
}
