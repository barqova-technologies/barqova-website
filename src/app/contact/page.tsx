import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { ContactForm } from "@/components/contact/ContactForm";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Barqova Technologies",
  description:
    "Get in touch with Barqova Technologies. Tell us about your project and we will get back within 24 hours.",
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
      <section className="bg-[#0F172A] text-white pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="container-page text-center">
          <span className="inline-block rounded-full border border-[#D5AD36]/40 bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#E7C358] uppercase">
            Contact
          </span>
          <h1 className="mt-6 mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] text-balance">
            Let&rsquo;s Build Something Together.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-white/70">
            Tell us about your idea. No lengthy brief needed — just tell us the problem you are trying to solve.
          </p>
        </div>
      </section>

      <section className="bg-app py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <aside className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-app bg-surface p-7">
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

              <div className="rounded-2xl border border-app bg-surface p-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5AD36]/10 text-[#D5AD36]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-app">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-app hover:text-[#D5AD36]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-app bg-surface p-7">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#D5AD36]/10 text-[#D5AD36]">
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
    </>
  );
}
