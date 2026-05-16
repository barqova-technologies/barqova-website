import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Layers,
  Smartphone,
  Brain,
  Cloud,
  Briefcase,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Faq } from "@/components/home/Faq";
import { BreadcrumbsJsonLd, ServicesJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title:
    "Capabilities. Custom Software, Web Apps, Mobile, AI & SaaS | Barqova Technologies",
  description:
    "Six capabilities offered by Barqova Technologies: custom software, web app development, mobile app development, AI integration, SaaS and portfolio sites.",
  path: "/services",
});

type Service = {
  id: string;
  num: string;
  Icon: LucideIcon;
  title: string;
  promise: string;
  body: string;
  bestFor: string[];
};

const SERVICES: Service[] = [
  {
    id: "custom-software",
    num: "01",
    Icon: Code2,
    title: "Custom Software Development",
    promise: "Built around how your team actually works.",
    body: "Off-the-shelf software bends your team out of shape. Custom software does the opposite. It bends to your workflow. We build the unglamorous tools that quietly run a business: approvals, billing, ops, scheduling, reporting.",
    bestFor: [
      "Replacing a tangle of spreadsheets and tabs",
      "Internal tools nobody else sells",
      "Workflows your team has outgrown",
    ],
  },
  {
    id: "web-applications",
    num: "02",
    Icon: Briefcase,
    title: "Web Applications",
    promise: "Dashboards, portals and tools that scale.",
    body: "When a website needs to do more than read, when users log in, click, edit, ship things, it&rsquo;s a web app. We build the dashboards, portals and admin tools that hundreds of people lean on every day.",
    bestFor: [
      "Customer or partner portals",
      "Admin dashboards and analytics views",
      "Internal tools used across teams",
    ],
  },
  {
    id: "ai-integration",
    num: "03",
    Icon: Brain,
    title: "AI Integration Applications",
    promise: "Real workflows powered by language models.",
    body: "Most AI demos are party tricks. The interesting work is everything around the model: the data, the guardrails, the human handoff. We integrate AI into the parts of your product where it actually saves hours, not headlines.",
    bestFor: [
      "Drafting, summarising and routing at scale",
      "Internal copilots for support or ops teams",
      "Anywhere a person currently re-types the same thing",
    ],
  },
  {
    id: "app-development",
    num: "04",
    Icon: Smartphone,
    title: "App Development",
    promise: "iOS and Android, one clean codebase.",
    body: "We build mobile apps that feel native on both platforms without paying twice. Offline-friendly, fast on slower phones, and easy to maintain after launch, because most of an app&rsquo;s life is after v1.",
    bestFor: [
      "Field teams, delivery, on-site workflows",
      "Consumer apps that need polish",
      "Companion apps to a web product",
    ],
  },
  {
    id: "saas-development",
    num: "05",
    Icon: Cloud,
    title: "SaaS Development",
    promise: "Multi-tenant products. End to end.",
    body: "Building a SaaS is more than a feature list. It&rsquo;s tenancy, billing, access control, infra and the bits between. We build the whole stack so you can focus on the product, not the plumbing.",
    bestFor: [
      "Founders shipping a v1 they can sell",
      "Existing SaaS needing a serious rebuild",
      "Internal platforms going to market",
    ],
  },
  {
    id: "portfolio-sites",
    num: "06",
    Icon: Layers,
    title: "Portfolio Sites",
    promise: "Personal and creative portfolios with real craft.",
    body: "Your work is the best argument you have. We build portfolio sites that get out of the way and let it speak. Fast galleries, clean type, considered motion. The kind of site that makes people scroll twice.",
    bestFor: [
      "Designers, photographers, filmmakers, agencies",
      "Replacing a tired Behance or Squarespace setup",
      "Personal sites that need to feel singular",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/services" },
        ]}
      />
      <ServicesJsonLd />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D5AD36]/15 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Capabilities
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Six kinds of work.{" "}
              <span className="gold-text-gradient">One way of doing it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-hero-muted leading-relaxed text-pretty">
              Pick a starting point. Most projects pull from two or three of
              these. We&rsquo;ll figure out the right shape together.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-xl border border-hero bg-hero-surface px-3 py-3 text-center text-[11px] sm:text-xs font-medium text-hero-muted transition hover:border-amber-soft hover:bg-amber-soft hover:text-amber"
                >
                  <span className="block font-num text-amber">{s.num}</span>
                  <span className="mt-1 block">{s.title.split(" ")[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services. Alternating stacked sections */}
      {SERVICES.map((s, i) => {
        const dark = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-20 py-20 sm:py-24 ${
              dark ? "bg-surface" : "bg-app"
            }`}
          >
            <div className="container-page">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-soft text-amber ring-1 ring-amber-soft">
                      <s.Icon className="h-5 w-5" />
                    </span>
                    <span className="font-num text-sm tracking-widest text-amber">
                      {s.num} / 06
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-lg sm:text-xl font-medium tracking-tight text-amber">
                    {s.promise}
                  </p>
                  <p
                    className="mt-5 text-base sm:text-lg leading-relaxed text-muted-app text-pretty"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-app bg-elevated p-7 sm:p-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-amber">
                      Best for
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {s.bestFor.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-app"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 rounded-[10px] bg-amber px-5 py-3 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
                    >
                      Talk about this
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Faq />

      {/* Final CTA */}
      <section className="bg-hero text-hero py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
              Not sure where your project fits?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-hero-muted text-pretty">
              That&rsquo;s usually how it starts. One short call and we&rsquo;ll
              place it.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-amber px-8 py-4 text-base font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
              >
                Tell us what you&rsquo;re building
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
