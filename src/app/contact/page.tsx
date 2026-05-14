import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Clock, Calendar } from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalEmbed } from "@/components/contact/CalEmbed";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = buildMetadata({
  title:
    "Contact Barqova Technologies. Custom Software, Apps & AI Projects",
  description:
    "Contact Barqova Technologies for custom software, web apps, mobile apps, AI or SaaS projects. Book a 15-minute call. Reply within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <section className="bg-hero text-hero pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="container-page text-center">
          <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            Contact
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
            Let&rsquo;s build something together.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-hero-muted">
            Tell us about your idea. No lengthy brief needed. Just tell us the
            problem you&rsquo;re trying to solve.
          </p>
        </div>
      </section>

      <section className="bg-app py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>

            <aside className="lg:col-span-2 space-y-5">
              <div className="card-app">
                <h2 className="text-lg font-semibold text-app">
                  Prefer a quick chat?
                </h2>
                <p className="mt-2 text-sm text-muted-app">
                  We are usually available on WhatsApp during working hours.
                </p>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1FB358]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-muted-app">
                  {siteConfig.phoneDisplay}
                </p>
              </div>

              <div className="card-app">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-soft text-amber">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-app">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-app hover:text-amber"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-app">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-soft text-amber">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-app">
                      Response time
                    </p>
                    <p className="text-sm font-semibold text-app">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Cal.com booking */}
      <section className="bg-surface py-20 sm:py-24" id="book">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              <Calendar className="h-3.5 w-3.5" />
              Book a slot
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
              Pick a time that works for you.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-app">
              15 minutes. No prep needed. Bring the rough idea.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <CalEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
