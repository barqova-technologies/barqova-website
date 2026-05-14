import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { formatDate, getAllSlugs, getPost, getPostsByDate } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return buildMetadata({
      title: "Post not found | Barqova Technologies",
      description: "The post you&rsquo;re looking for doesn&rsquo;t exist.",
      path: `/blog/${slug}`,
    });
  }
  return buildMetadata({
    title: `${post.title} | Barqova Field Notes`,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getPostsByDate()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="bg-app">
        {/* Header */}
        <header className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
          <div className="container-page relative">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-hero-subtle transition hover:text-amber"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to field notes
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-amber">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-amber/40" />
                <span className="text-hero-subtle">
                  {formatDate(post.publishedAt)}
                </span>
                <span className="h-1 w-1 rounded-full bg-amber/40" />
                <span className="inline-flex items-center gap-1.5 text-hero-subtle">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readMinutes} min read
                </span>
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
                {post.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-hero-muted text-pretty">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <section className="py-16 sm:py-20">
          <div className="container-page">
            <div
              className="post-body mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-app"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        </section>

        {/* Related */}
        {related.length > 0 ? (
          <section className="bg-surface py-16 sm:py-20">
            <div className="container-page">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-semibold tracking-tight text-app">
                  Keep reading
                </h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group rounded-2xl border border-app bg-elevated p-7 transition hover:border-amber-soft"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-amber">
                        {p.category} · {formatDate(p.publishedAt)}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-app group-hover:text-amber">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-app">
                        {p.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
