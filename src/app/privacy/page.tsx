import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Barqova Technologies",
  description: "How Barqova Technologies handles your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-app py-20 sm:py-24">
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-app">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-app">Last updated: 4 May 2026</p>

        <div className="mt-8 space-y-5 text-app/90">
          <p>
            We respect your privacy. This page explains what we collect when you contact us through this website and how we use it.
          </p>
          <h2 className="text-xl font-semibold mt-8">Information we collect</h2>
          <p>
            When you submit the contact form we collect your name, email, optional phone number, the service you are interested in, and the message you send us.
          </p>
          <h2 className="text-xl font-semibold mt-8">How we use it</h2>
          <p>
            We use the information you provide solely to reply to your enquiry. We do not sell or share your data with third parties for marketing.
          </p>
          <h2 className="text-xl font-semibold mt-8">Contact</h2>
          <p>
            For any privacy-related questions, email <a className="text-amber hover:underline" href="mailto:contact@barqova.com">contact@barqova.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
