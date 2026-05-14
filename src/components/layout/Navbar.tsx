"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/services" },
  { label: "Fit Finder", href: "/fit-finder" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-hero)]/85 backdrop-blur-md border-b border-hero"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-20 lg:h-24 items-center justify-between"
        >
          <Link
            href="/"
            aria-label="Barqova Technologies, Home"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo-light.png"
              alt="Barqova Technologies"
              width={260}
              height={260}
              priority
              className="block w-auto h-24 lg:h-28 dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="Barqova Technologies"
              width={260}
              height={260}
              priority
              className="hidden w-auto h-24 lg:h-28 dark:block"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[15px] xl:text-base font-medium tracking-[-0.005em] transition-colors",
                      active ? "text-amber" : "text-app hover:text-amber",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] bg-amber px-5 py-2.5 xl:px-6 xl:py-3 text-[15px] xl:text-base font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)] hover:scale-[1.01]"
              >
                Let&rsquo;s Talk
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-app hover:bg-surface"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 lg:hidden bg-app transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 p-8">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl sm:text-3xl font-semibold tracking-tight transition-colors",
                  active ? "text-amber" : "text-app hover:text-amber",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-[10px] bg-amber px-8 py-4 text-base font-semibold text-[#0A0A0A] hover:bg-[var(--amber-hover)]"
          >
            Let&rsquo;s Talk
          </Link>
        </div>
      </div>
    </>
  );
}
