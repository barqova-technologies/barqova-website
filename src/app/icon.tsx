import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  // Served from /public/logo.png at build time
  const file = readFileSync(join(process.cwd(), "public", "logo.png"));
  return new Response(file, {
    headers: { "Content-Type": "image/png" },
  });
}