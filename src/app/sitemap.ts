import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const staticRoutes = [
    "/",
    "/services",
    "/fit-finder",
    "/blog",
    "/careers",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: today,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticEntries, ...postEntries];
}
