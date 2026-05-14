import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagProps = {
  children: ReactNode;
  variant?: "gold" | "outline" | "dark";
  className?: string;
};

const styles: Record<NonNullable<TagProps["variant"]>, string> = {
  gold: "bg-amber-soft text-amber border border-amber-soft",
  outline: "border border-app text-muted-app",
  dark: "bg-white/5 text-white/80 border border-white/10",
};

export function Tag({ children, variant = "gold", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
