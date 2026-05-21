import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { BlogList } from "@/components/blog/BlogList";
import { formatDate, getAllCategories, getPostsByDate } from "@/lib/posts";

export const metadata: Metadata = buildMetadata({
  title: "Field Notes. Custom Software & AI Build Logs | Barqova Technologies",
  description:
    "Articles and field notes by Barqova Technologies on custom software development, AI integration patterns, SaaS architecture and shipping real products.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPostsByDate();
  const featured = posts[0];
  const rest = posts.slice(1);
  const categories = getAllCategories();

  return (
    <>
      <BreadcrumbsJsonLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero text-hero pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#E7C358]/15 blur-3xl"
        />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
              Field notes
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Notes from the workbench.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-hero-muted">
              Short pieces on the work. What we&rsquo;re building, what
              we&rsquo;re learning, what we&rsquo;d do differently next time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="bg-app pt-16 sm:pt-20">
          <div className="container-page">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl border border-app bg-elevated p-8 sm:p-12 transition hover:border-amber-soft"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-amber">
                <span>Featured</span>
                <span className="h-1 w-1 rounded-full bg-amber/40" />
                <span className="text-muted-app">{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-amber/40" />
                <span className="text-muted-app">
                  {formatDate(featured.publishedAt)}
                </span>
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app group-hover:text-amber">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-muted-app leading-relaxed text-pretty">
                {featured.excerpt}
              </p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                Read the post
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {/* List with filters */}
      <section className="bg-app py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-app">
                All field notes
              </h2>
              <p className="text-sm text-muted-app">
                {posts.length} posts
              </p>
            </div>
            <BlogList posts={posts} categories={categories} />
          </div>
        </div>
      </section>
    </>
  );
}
