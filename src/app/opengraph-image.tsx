import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Barqova Technologies. Powered by Lightning, Built for Scale";

export default function OGImage() {
  return renderOg({
    eyebrow: "Barqova Technologies",
    title: "Software that earns its keep.",
    subtitle: "Custom software, web apps, mobile, AI integrations and SaaS.",
  });
}
