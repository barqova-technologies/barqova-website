import { notFound } from "next/navigation";
import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { getAllSlugs, getPost } from "@/lib/posts";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Barqova Field Notes";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function OG({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return renderOg({
    eyebrow: `${post.category} · Field Notes`,
    title: post.title,
    subtitle: post.excerpt,
  });
}
