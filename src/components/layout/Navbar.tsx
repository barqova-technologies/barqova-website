"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
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
            ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[#D5AD36]/30"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            aria-label="Barqova Technologies — Home"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo-light.png"
              alt="Barqova Technologies"
              width={180}
              height={180}
              priority
              className="block w-auto  h-20 dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="Barqova Technologies"
              width={180}
              height={180}
              priority
              className="hidden w-auto  h-20 dark:block"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
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
                      "text-sm font-medium transition-colors",
                      active
                        ? "text-[#D5AD36]"
                        : "text-app hover:text-[#D5AD36]",
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
                className="inline-flex items-center justify-center rounded-full bg-[#D5AD36] px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-all hover:bg-[#E7C358] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(213, 173, 54,0.25)]"
              >
                Let&rsquo;s Talk
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-app hover:bg-[var(--surface)]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-[#0F172A] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
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
                  "text-3xl font-semibold transition-colors",
                  active ? "text-[#D5AD36]" : "text-white hover:text-[#D5AD36]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#D5AD36] px-8 py-4 text-base font-semibold text-[#0F172A] hover:bg-[#E7C358]"
          >
            Let&rsquo;s Talk
          </Link>
        </div>
      </div>
    </>
  );
}
