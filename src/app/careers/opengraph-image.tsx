import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Careers at Barqova. Build software people actually use.";

export default function OG() {
  return renderOg({
    eyebrow: "Careers",
    title: "Build software people actually use.",
    subtitle: "Real projects. No theatre. Plain talk and craft over shortcuts.",
  });
}
