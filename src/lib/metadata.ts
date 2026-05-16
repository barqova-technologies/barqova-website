import type { Metadata } from "next";

export const siteConfig = {
  name: "Barqova Technologies",
  tagline: "Powered by Lightning, Built for Scale",
  email: "contact@barqova.com",
  phone: "+918052911911",
  phoneDisplay: "+91 8052 911 911",
  url: "https://barqova.com",
  description:
    "Barqova Technologies is a remote-first software company building custom software, web apps, mobile apps, AI integrations and SaaS for founders worldwide.",
  keywords: [
    "Barqova Technologies",
    "custom software development company",
    "web app development",
    "mobile app development",
    "AI integration services",
    "SaaS development company",
    "portfolio website design",
    "remote software development team",
    "distributed software company India",
    "product development for startups",
    "hire remote development team",
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
};

export function buildMetadata({
  title,
  description,
  path = "/",
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
