import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/metadata";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const COMPANY_LINKS = [
  { label: "Capabilities", href: "/services" },
  { label: "Fit Finder", href: "/fit-finder" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Custom Software", href: "/services#custom-software" },
  { label: "Web Applications", href: "/services#web-applications" },
  { label: "AI Integrations", href: "/services#ai-integration" },
  { label: "App Development", href: "/services#app-development" },
  { label: "SaaS Development", href: "/services#saas-development" },
  { label: "Portfolio Sites", href: "/services#portfolio-sites" },
];

export function Footer() {
  return (
    <footer className="bg-hero text-hero">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Barqova, Home" className="inline-block">
              <Image
                src="/logo-light.png"
                alt="Barqova Technologies"
                width={180}
                height={180}
                className="block h-20 w-auto dark:hidden"
              />
              <Image
                src="/logo-dark.png"
                alt="Barqova Technologies"
                width={180}
                height={180}
                className="hidden h-20 w-auto dark:block"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-hero-muted">
              We build software, apps and AI workflows for founders and growing
              businesses.
            </p>
            <p className="mt-3 text-xs tracking-[0.2em] uppercase text-hero-subtle">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Barqova on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hero text-hero-muted transition hover:border-amber hover:text-amber"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Barqova on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hero text-hero-muted transition hover:border-amber hover:text-amber"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-hero-subtle">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-hero-muted transition hover:text-amber"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-hero-subtle">
              Capabilities
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-hero-muted transition hover:text-amber"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-hero-muted transition hover:text-amber"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hero-muted transition hover:text-amber"
              >
                WhatsApp · {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hero pt-6 text-xs text-hero-subtle sm:flex-row sm:items-center">
          <p>&copy; 2026 Barqova Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-amber">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
