import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Field notes from Barqova Technologies.";

export default function OG() {
  return renderOg({
    eyebrow: "Field Notes",
    title: "Notes from the workbench.",
    subtitle: "Building software, shipping things, what we'd do differently.",
  });
}
