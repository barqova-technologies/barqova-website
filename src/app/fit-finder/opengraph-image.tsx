import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Fit Finder. Four questions, one clear pick.";

export default function OG() {
  return renderOg({
    eyebrow: "Fit Finder",
    title: "Four questions. One clear pick.",
    subtitle: "Find the Barqova capability that fits your project.",
  });
}
