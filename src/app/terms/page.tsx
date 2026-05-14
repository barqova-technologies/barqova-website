import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Terms | Barqova Technologies",
  description: "Terms of use for the Barqova Technologies website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-app py-20 sm:py-24">
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-app">Terms</h1>
        <p className="mt-4 text-sm text-muted-app">Last updated: 4 May 2026</p>

        <div className="mt-8 space-y-5 text-app/90">
          <p>
            By using barqova.com you agree to use the site for lawful purposes and not to disrupt its operation.
          </p>
          <p>
            All content, branding, and code on this site are the property of Barqova Technologies unless otherwise credited. You may not reproduce or redistribute without written permission.
          </p>
          <p>
            Any project engagement with Barqova Technologies is governed by a separate signed agreement. The information on this site is provided for general guidance only.
          </p>
          <p>
            Questions: <a className="text-amber hover:underline" href="mailto:contact@barqova.com">contact@barqova.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
