import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCTAProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  href?: string;
};

export function ServiceCTA({
  title,
  subtitle,
  buttonLabel,
  href = "/contact",
}: ServiceCTAProps) {
  return (
    <div className="rounded-3xl border border-app bg-[var(--bg)] p-10 sm:p-14 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-app text-balance">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-base text-muted-app text-pretty">
        {subtitle}
      </p>
      <div className="mt-8">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-[#D5AD36] px-7 py-3.5 text-sm font-semibold text-[#0F172A] transition hover:bg-[#E7C358] hover:-translate-y-0.5"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
