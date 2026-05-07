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
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "sales",
        areaServed: "IN",
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

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
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
      "Bespoke software built around your business — dashboards, SaaS platforms, internal tools and workflow automation.",
    serviceType: "Custom software development",
  },
  {
    name: "Web App Development",
    description:
      "Fast, modern web applications built with React and Next.js — SEO-friendly, scalable, production-grade.",
    serviceType: "Web application development",
  },
  {
    name: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native, plus native Android with Kotlin Jetpack Compose.",
    serviceType: "Mobile application development",
  },
  {
    name: "Hire Our Team",
    description:
      "Dedicated developers working on your project sprint-by-sprint — full-stack delivery without the full-time hire.",
    serviceType: "Software development staffing",
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
