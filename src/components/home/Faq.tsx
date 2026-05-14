import { Plus } from "lucide-react";

const FAQ = [
  {
    q: "We&rsquo;re early. Should we even talk to you?",
    a: "Especially if you&rsquo;re early. We do best when scope is still being shaped, not when it&rsquo;s frozen in a 60-page spec.",
  },
  {
    q: "How long does a typical project take?",
    a: "Tight MVPs land in 4 to 8 weeks. Bigger products run in 2-week sprints with a working release each cycle.",
  },
  {
    q: "How do you handle pricing?",
    a: "Fixed-scope where the brief is sharp, milestone-based where it isn&rsquo;t. No surprise invoices either way.",
  },
  {
    q: "Do you stay around after launch?",
    a: "Yes. Most clients keep us on a lightweight retainer for fixes, growth and the next thing.",
  },
  {
    q: "Where are you based?",
    a: "We&rsquo;re a remote-first team across India. We work with founders and teams worldwide. Calls happen on Google Meet, Cal, WhatsApp, or whatever fits your timezone.",
  },
];

export function Faq() {
  return (
    <section className="bg-app py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-amber-soft bg-amber-soft px-3 py-1 text-xs font-medium tracking-widest text-amber uppercase">
            Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance text-app">
            Things people usually ask first.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--divider)] rounded-2xl border border-app bg-elevated">
          {FAQ.map((item, i) => (
            <details key={i} className="faq group p-6 sm:p-7">
              <summary className="flex items-start justify-between gap-6">
                <span
                  className="text-base sm:text-lg font-semibold tracking-tight text-app"
                  dangerouslySetInnerHTML={{ __html: item.q }}
                />
                <span className="faq-icon mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p
                className="mt-4 text-sm leading-relaxed text-muted-app"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
