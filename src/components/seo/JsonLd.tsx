import { siteConfig } from "@/lib/metadata";

const ORG_ID = `${siteConfig.url}#organization`;

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    slogan: siteConfig.tagline,
    description: "Web and mobile app development company",
    foundingDate: "2026",
    founders: [
      { "@type": "Person", name: "Sahil Muhib" },
      { "@type": "Person", name: "Mohd Atif Khan" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [siteConfig.links.linkedin, siteConfig.links.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type Crumb = { name: string; path: string };

export function BreadcrumbsJsonLd({ trail }: { trail: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteConfig.url}${c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SERVICE_OFFERINGS: Array<{ name: string; description: string; serviceType: string }> = [
  {
    name: "Custom Software Development",
    description:
      "Bespoke software built around how your team works. Internal tools, workflow automation, the unglamorous stack that quietly runs a business.",
    serviceType: "Custom software development",
  },
  {
    name: "Web Applications",
    description:
      "Dashboards, customer portals and internal tools used by hundreds of people every day.",
    serviceType: "Web application development",
  },
  {
    name: "AI Integration Applications",
    description:
      "Real workflows powered by language models. Drafting, routing, internal copilots that actually save time.",
    serviceType: "AI integration",
  },
  {
    name: "App Development",
    description:
      "Mobile apps for iOS and Android from one clean codebase. Fast on slower phones, easy to maintain after launch.",
    serviceType: "Mobile application development",
  },
  {
    name: "SaaS Development",
    description:
      "End-to-end SaaS. Multi-tenancy, billing, access control and infra so you can focus on the product.",
    serviceType: "SaaS product development",
  },
  {
    name: "Portfolio Sites",
    description:
      "Personal and creative portfolios with real craft. Fast galleries, clean type, considered motion.",
    serviceType: "Portfolio website development",
  },
];

export function ServicesJsonLd() {
  const data = SERVICE_OFFERINGS.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    url: `${siteConfig.url}/services`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
