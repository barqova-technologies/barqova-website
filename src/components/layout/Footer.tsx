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

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Custom Software", href: "/services" },
  { label: "Web App Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Hire Our Team", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="Barqova — Home" className="inline-block">
              <Image
                src="/logo-dark.png"
                alt="Barqova Technologies"
                width={180}
                height={180}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              We build web and mobile products for startups and growing businesses.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Barqova on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[#D5AD36] hover:text-[#D5AD36]"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Barqova on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[#D5AD36] hover:text-[#D5AD36]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/80 transition hover:text-[#D5AD36]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/80 transition hover:text-[#D5AD36]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/80 transition hover:text-[#D5AD36]"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/60">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition hover:text-[#D5AD36]"
              >
                WhatsApp · {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>&copy; 2026 Barqova Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#D5AD36]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D5AD36]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
