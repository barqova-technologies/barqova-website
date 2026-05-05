import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Barqova Technologies — Powered by Lightning, Built for Scale";

export default function OGImage() {
  const file = readFileSync(join(process.cwd(), "public", "og-image.png"));
  return new Response(file, {
    headers: { "Content-Type": "image/png" },
  });
}