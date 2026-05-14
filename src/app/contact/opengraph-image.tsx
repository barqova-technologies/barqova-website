import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Barqova. Tell us about your project.";

export default function OG() {
  return renderOg({
    eyebrow: "Contact",
    title: "Tell us what you're building.",
    subtitle: "One short call to figure out if we're the right fit.",
  });
}
