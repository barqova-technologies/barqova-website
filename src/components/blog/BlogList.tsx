"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/posts";
import type { BlogPost } from "@/types";

type BlogListProps = {
  posts: BlogPost[];
  categories: string[];
};

type SortKey = "newest" | "oldest" | "shortest";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest first" },
  { key: "oldest", label: "Oldest first" },
  { key: "shortest", label: "Shortest read" },
];

export function BlogList({ posts, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    let out = posts;
    if (activeCategory !== "All") {
      out = out.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    const sorted = [...out];
    if (sort === "newest") {
      sorted.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
    } else if (sort === "oldest") {
      sorted.sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1));
    } else if (sort === "shortest") {
      sorted.sort((a, b) => a.readMinutes - b.readMinutes);
    }
    return sorted;
  }, [posts, activeCategory, query, sort]);

  const allCategories = useMemo(() => ["All", ...categories], [categories]);

  return (
    <div>
      {/* Filter bar */}
      <div className="rounded-2xl border border-app bg-elevated p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={cn(
                    "inline-flex h-9 items-center rounded-full px-4 text-xs font-semibold uppercase tracking-widest transition",
                    active
                      ? "bg-amber text-[#0A0A0A] shadow-amber-glow"
                      : "border border-app text-muted-app hover:border-amber hover:text-amber",
                  )}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts"
                className="input-app pr-9"
                style={{ width: 240 }}
                aria-label="Search posts"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-app hover:text-amber"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort posts"
              className="input-app"
              style={{ width: 180 }}
            >
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-app">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>
      </div>

      {/* List */}
      <ul className="mt-10 space-y-4">
        {filtered.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block rounded-2xl border border-app bg-elevated p-6 sm:p-7 transition hover:border-amber-soft hover:bg-amber-soft/30"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-amber">
                    <span>{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-amber/40" />
                    <span className="text-muted-app">
                      {formatDate(p.publishedAt)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-amber/40" />
                    <span className="inline-flex items-center gap-1 text-muted-app">
                      <Clock className="h-3 w-3" />
                      {p.readMinutes} min read
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-app group-hover:text-amber">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-app text-pretty">
                    {p.excerpt}
                  </p>
                </div>
                <div className="shrink-0 sm:pt-1">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-app text-app transition group-hover:border-amber group-hover:bg-amber group-hover:text-[#0A0A0A]">
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-app bg-elevated p-10 text-center">
          <p className="text-base text-muted-app">
            No posts match these filters. Try clearing the search or picking a
            different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCategory("All");
              setSort("newest");
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-amber px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
          >
            Reset filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
