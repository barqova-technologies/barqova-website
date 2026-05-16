import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Compass,
  FileText,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lost the trail | Barqova Technologies",
  description:
    "Page not found on barqova.com. Try the home page, capabilities, blog or contact Barqova Technologies directly.",
  robots: { index: false, follow: false },
};

type Suggestion = {
  href: string;
  label: string;
  blurb: string;
  Icon: LucideIcon;
};

const SUGGESTIONS: Suggestion[] = [
  {
    href: "/",
    label: "Home",
    blurb: "Start at the top.",
    Icon: Home,
  },
  {
    href: "/services",
    label: "Capabilities",
    blurb: "Six kinds of work we do.",
    Icon: Compass,
  },
  {
    href: "/fit-finder",
    label: "Fit Finder",
    blurb: "Four questions, one pick.",
    Icon: Compass,
  },
  {
    href: "/blog",
    label: "Field Notes",
    blurb: "Short pieces on the work.",
    Icon: FileText,
  },
  {
    href: "/contact",
    label: "Contact",
    blurb: "Tell us what you&rsquo;re building.",
    Icon: MessageCircle,
  },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-hero text-hero">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-[#D5AD36]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#E7C358]/15 blur-3xl"
      />

      <div className="container-page relative pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            404
          </span>
          <h1 className="mt-6 text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
            <span className="gold-text-gradient">Lost the trail.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-hero-muted leading-relaxed text-pretty">
            That page isn&rsquo;t here. Probably moved, renamed, or never
            existed. The good news: most of the site is one click away.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-amber px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)] hover:scale-[1.01]"
            >
              Take me home
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-hero bg-hero-surface px-7 py-3.5 text-sm font-semibold text-hero backdrop-blur-sm transition hover:border-amber hover:bg-amber-soft hover:text-amber"
            >
              Report a broken link
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-hero-subtle">
            Or try one of these
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SUGGESTIONS.map(({ href, label, blurb, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-2 rounded-xl border border-hero bg-hero-surface p-5 transition hover:border-amber hover:bg-amber-soft hover:text-amber"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-soft text-amber ring-1 ring-amber-soft">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="mt-1 text-base font-semibold text-hero group-hover:text-amber">
                    {label}
                  </span>
                  <span
                    className="text-sm text-hero-muted"
                    dangerouslySetInnerHTML={{ __html: blurb }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
