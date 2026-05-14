import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Compass, Hammer, MessageCircle } from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import type { JobOpening } from "@/types";

export const metadata: Metadata = buildMetadata({
  title:
    "Careers at Barqova Technologies. Build Software People Actually Use",
  description:
    "Careers at Barqova Technologies. Build custom software, AI workflows, web and mobile apps used by real businesses. We hire habits, not titles.",
  path: "/careers",
});

const HOW_WE_WORK = [
  {
    Icon: Compass,
    title: "Tight problems first",
    body: "Every brief gets broken into something shippable in two weeks. We don&rsquo;t do six-month invisible projects.",
  },
  {
    Icon: Hammer,
    title: "Craft over shortcuts",
    body: "Code that&rsquo;s readable a year from now, design that respects attention. Speed comes from clarity, not corner-cutting.",
  },
  {
    Icon: MessageCircle,
    title: "Plain talk",
    body: "Write like a human. To clients, in PRs, in standups. Jargon usually means we don&rsquo;t understand it yet.",
  },
  {
    Icon: Sparkles,
    title: "Curious about the business",
    body: "We&rsquo;d rather hire someone who asks &lsquo;why is the user doing this?&rsquo; than someone who just ships the ticket.",
  },
];

const OPENINGS: JobOpening[] = [];

export default function CareersPage() {
  const hasOpenings = OPENINGS.length > 0;

  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#D5AD36]/15 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Careers
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Build software people{" "}
              <span className="gold-text-gradient">actually use.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-hero-muted leading-relaxed text-pretty">
              Real projects, no theatre. If you like building the unglamorous
              tools businesses lean on every day, you&rsquo;ll fit in.
            </p>
            <div className="mt-8">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-[10px] bg-amber px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
              >
                See open roles
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-app py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              How we work
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
              Four things we genuinely care about.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {HOW_WE_WORK.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-app bg-elevated p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-soft text-amber ring-1 ring-amber-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-app">
                  {title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-app"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who fits */}
      <section className="bg-surface py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
                Who fits
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
                We&rsquo;re less interested in titles than in habits.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-app text-pretty">
                If a few of these sound like you, we&rsquo;d like to talk,
                whether or not we have a role posted right now.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "You think about users before you think about frameworks.",
                "You write things, code, docs, replies, like a human.",
                "You finish things. Polished, deployed, monitored.",
                "You can argue without ego, and update your mind cleanly.",
                "You&rsquo;re comfortable owning a project end to end.",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-app bg-elevated p-4 text-sm text-app"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Openings or empty state */}
      <section id="apply" className="bg-app py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Open roles
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
              {hasOpenings
                ? "Roles we&rsquo;re hiring for right now."
                : "No open roles yet. We read every email."}
            </h2>
          </div>

          {hasOpenings ? (
            <ul className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--divider)] rounded-2xl border border-app bg-elevated">
              {OPENINGS.map((j) => (
                <li
                  key={j.slug}
                  className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-app">
                      {j.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-app">
                      {j.team} · {j.location} · {j.type}
                    </p>
                    <p className="mt-2 text-sm text-muted-app">{j.summary}</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Applying for ${encodeURIComponent(
                      j.title,
                    )}`}
                    className="inline-flex items-center gap-2 self-start rounded-[10px] bg-amber px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)] sm:self-auto"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-app bg-elevated p-8 sm:p-10">
              <p className="text-base sm:text-lg leading-relaxed text-app text-pretty">
                We&rsquo;re not actively hiring at the moment, but we keep a
                short list of people we&rsquo;d call first when we are. Send
                your work, a few lines about you, and what you&rsquo;d love to
                build. Short and direct beats a polished CV here.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}?subject=Joining Barqova`}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-amber px-6 py-3 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
                >
                  <Mail className="h-4 w-4" />
                  Email us your work
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-app px-6 py-3 text-sm font-semibold text-app transition hover:border-amber hover:bg-amber-soft hover:text-amber"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
