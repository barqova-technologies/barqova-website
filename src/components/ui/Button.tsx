import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ease-out min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5AD36] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#D5AD36] text-[#0F172A] hover:bg-[#E7C358] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_14px_rgba(213,173,54,0.25)]",
  secondary:
    "border border-white/30 text-white hover:border-[#D5AD36] hover:text-[#D5AD36] bg-transparent",
  ghost:
    "border border-app text-app hover:border-[#D5AD36] hover:text-[#D5AD36] bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">;

export type ButtonElProps = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

function isLinkProps(p: LinkButtonProps | ButtonElProps): p is LinkButtonProps {
  return typeof (p as { href?: unknown }).href === "string";
}

export function Button(props: LinkButtonProps | ButtonElProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isLinkProps(props)) {
    const {
      href,
      external,
      variant: _v,
      size: _s,
      className: _c,
      children: _ch,
      ...rest
    } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    href: _h,
    ...rest
  } = props;
  void _v;
  void _s;
  void _c;
  void _ch;
  void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
