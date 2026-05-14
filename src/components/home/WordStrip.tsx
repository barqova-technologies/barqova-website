const WORDS = [
  "Custom Software",
  "Web Apps",
  "AI Integrations",
  "Mobile",
  "Portfolio Sites",
  "SaaS",
  "Dashboards",
  "Internal Tools",
];

export function WordStrip() {
  const doubled = [...WORDS, ...WORDS];
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-app bg-surface py-7"
    >
      <div className="flex w-max word-strip">
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="flex shrink-0 items-center gap-10 px-10 text-[clamp(1.7rem,3.6vw,3.2rem)] font-semibold tracking-tight text-app/25"
          >
            {w}
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber/70" />
          </span>
        ))}
      </div>
    </section>
  );
}
