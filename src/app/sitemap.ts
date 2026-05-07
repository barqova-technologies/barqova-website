import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-07");
  const routes = ["/", "/services", "/portfolio", "/about", "/contact", "/privacy", "/terms"];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
  }));
}
