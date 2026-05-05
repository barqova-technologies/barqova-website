import type { Metadata } from "next";

export const siteConfig = {
  name: "Barqova Technologies",
  tagline: "We Build Products That Scale",
  email: "contact@barqova.com",
  phone: "+918052911911",
  phoneDisplay: "+91 8052 911 911",
  url: "https://barqova.com",
  ogImage: "https://barqova.com/images/og-image.jpg",
  description:
    "We build fast, scalable web apps and mobile apps using React, Next.js, Node.js and React Native. A product-focused technology company for startups and businesses.",
  keywords: [
    "web app development company India",
    "mobile app development India",
    "React Native development India",
    "Next.js development company",
    "Node.js backend development",
    "custom software development India",
    "hire developers India",
    "app development startup India",
    "MVP development India",
    "software company India",
    "software company in Lucknow",
    "best software company India",
    "top software companies India",
    "software development company India",
    "web development company India",
    "mobile app development company India",
    "React Native development company India",
    "Next.js development company India",
    "Node.js development company India",
    "web app development company Lucknow",
    "mobile app development company Lucknow",
    "React Native development company Lucknow",
    "Next.js development company Lucknow",
    "Node.js development company Lucknow",
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
