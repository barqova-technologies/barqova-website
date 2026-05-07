import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Tag } from "@/components/ui/Tag";
import { HowWeBuild } from "@/components/services/HowWeBuild";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { BreadcrumbsJsonLd, ServicesJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title:
    "Our Services — Custom Software, Web & Mobile Apps | Barqova Technologies",
  description:
    "Custom software development, web app development, mobile app development and dedicated developer hiring. Built properly, delivered on time.",
  path: "/services",
});

const BUILD_TAGS = [
  "Custom dashboards",
  "SaaS platforms",
  "Internal tools",
  "Client portals",
  "Booking systems",
  "Inventory management",
  "Workflow automation",
  "API integrations",
  "MVP for startups",
  "Admin panels",
];

const WEB_TECH = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"];

const WEB_FOR = [
  "Startups building their first product",
  "Businesses replacing outdated software",
  "Teams needing a client portal or dashboard",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesJsonLd />
      {/* Page hero */}
      <section className="bg-[#0F172A] text-white pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="container-page text-center">
          <span className="inline-block rounded-full border border-[#D5AD36]/40 bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#E7C358] uppercase">
            What We Offer
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance">
            Everything we build, we build with care.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed text-pretty">
            Four services. All delivered the same way — transparently, on time, and properly.
          </p>
        </div>
      </section>

      {/* Service 1 — Custom Software */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
              Service 01 — Custom Software
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
              We Build Software Around Your Business. Not the Other Way.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-app text-pretty">
              Got an idea but not sure where to start? That is exactly where we come in. We sit with you, understand your problem, and build software that actually solves it.
            </p>
          </div>
        </div>
      </section>

      <HowWeBuild />

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-app text-balance">
              What We Build
            </h3>
            <p className="mt-3 text-muted-app">
              A few of the things teams come to us for.
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {BUILD_TAGS.map((t) => (
              <Tag key={t} variant="gold">
                {t}
              </Tag>
            ))}
          </div>
          <div className="mt-16">
            <ServiceCTA
              title="Tell us what you are trying to build."
              subtitle="No technical knowledge needed. If you can explain the problem, we can figure out the solution together."
              buttonLabel="Start a Conversation"
            />
          </div>
        </div>
      </section>

      {/* Service 2 — Web Apps */}
      <section className="bg-app py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
                Service 02 — Web Apps
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
                Fast, Modern Web Apps That Work on Every Device.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-app text-pretty">
                We build web applications using React and Next.js — fast loading, SEO friendly, and built to scale as your user base grows.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {WEB_TECH.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#0F172A] px-3 py-1 text-xs font-semibold text-[#E7C358]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-app bg-surface p-7">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D5AD36]">
                Best for
              </h3>
              <ul className="mt-5 space-y-4">
                {WEB_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-app">
                    <Check className="h-5 w-5 shrink-0 text-[#D5AD36]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D5AD36] px-5 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358]"
              >
                Build Your Web App
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 — Mobile */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
              Service 03 — Mobile Apps
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
              Mobile Apps for iOS and Android — Without Paying for Two.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-app text-pretty">
              Using React Native we build one codebase that runs on both iOS and Android — faster to build, easier to maintain, better for your budget.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-app bg-[var(--bg)] p-7">
              <Tag variant="gold">Cross Platform</Tag>
              <h3 className="mt-4 text-xl font-semibold text-app">React Native</h3>
              <p className="mt-3 text-sm text-muted-app leading-relaxed">
                Best for startups and businesses who need both iOS and Android fast.
              </p>
            </div>
            <div className="rounded-2xl border border-app bg-[var(--bg)] p-7">
              <Tag variant="gold">Native Android</Tag>
              <h3 className="mt-4 text-xl font-semibold text-app">Kotlin Jetpack Compose</h3>
              <p className="mt-3 text-sm text-muted-app leading-relaxed">
                Best for Android-only apps that need native performance.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D5AD36] px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358]"
            >
              Build Your Mobile App
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service 4 — Hire Team */}
      <section className="bg-app py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
              Service 04 — Hire Our Team
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-balance text-app">
              Need Developers Without the Overhead of Full-Time Hiring?
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-app text-pretty">
              Work directly with our developers on your project. Sprint-based, transparent, and available when you need us.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Dedicated Developer",
                body: "Works on your project only. Daily standups included.",
              },
              {
                title: "Sprint Delivery",
                body: "2-week cycles. Working features delivered every sprint.",
              },
              {
                title: "Full Stack",
                body: "Frontend, backend, and mobile. One team handles everything.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-app bg-surface p-7"
              >
                <h3 className="text-lg font-semibold text-app">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-app leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D5AD36] px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358]"
            >
              Hire Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
