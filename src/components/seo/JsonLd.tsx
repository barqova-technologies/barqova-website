import { siteConfig } from "@/lib/metadata";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: "Web and mobile app development company",
    foundingDate: "2026",
    founders: [
      { "@type": "Person", name: "Sahil Muhib" },
      { "@type": "Person", name: "Mohd Atif Khan" },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Lucknow,Uttar Pradesh",
      addressCountry: "IN",
    },
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
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    "@id": siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    telephone: siteConfig.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Lucknow,Uttar Pradesh",
      addressCountry: "IN",
    },
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
    name: siteConfig.name,
    url: siteConfig.url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
