import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Capabilities. Six kinds of work, one way of doing it.";

export default function OG() {
  return renderOg({
    eyebrow: "Capabilities",
    title: "Six kinds of work. One way of doing it.",
    subtitle: "Custom software, web apps, mobile, AI, SaaS and portfolios.",
  });
}
