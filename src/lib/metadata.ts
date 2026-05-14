import type { Metadata } from "next";

export const siteConfig = {
  name: "Barqova Technologies",
  tagline: "Powered by Lightning, Built for Scale",
  email: "contact@barqova.com",
  phone: "+918052911911",
  phoneDisplay: "+91 8052 911 911",
  url: "https://barqova.com",
  ogImage: "https://barqova.com/og-image.jpg",
  description:
    "Barqova Technologies builds custom software, web apps, mobile apps, AI integrations and SaaS for founders and growing businesses. Honest timelines.",
  keywords: [
    "Barqova Technologies",
    "custom software development company",
    "web app development",
    "mobile app development",
    "AI integration services",
    "SaaS development company",
    "portfolio website design",
    "software development company India",
    "software company Lucknow",
    "product development for startups",
  ],
  links: {
    linkedin: "https://www.linkedin.com/company/barqova",
    instagram: "https://www.instagram.com/barqova",
    whatsapp:
      "https://wa.me/918052911911?text=Hi%20Barqova%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
  },
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
