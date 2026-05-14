import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "About Barqova Technologies. Founder-led software company.";

export default function OG() {
  return renderOg({
    eyebrow: "About Barqova",
    title: "Building real things.",
    subtitle: "Sharp brief. Honest timelines. Code we'd hand to the next team.",
  });
}
