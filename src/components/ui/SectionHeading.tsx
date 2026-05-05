import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-block rounded-full bg-[#D5AD36]/10 px-3 py-1 text-xs font-medium tracking-widest text-[#D5AD36] uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-balance",
          light ? "text-white" : "text-app",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-pretty",
            light ? "text-white/70" : "text-muted-app",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
