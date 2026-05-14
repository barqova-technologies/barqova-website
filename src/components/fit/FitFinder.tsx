"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Brain,
  Cloud,
  Code2,
  Layers,
  Smartphone,
  Sparkles,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";

type CapabilityKey =
  | "custom-software"
  | "web-applications"
  | "ai-integration"
  | "app-development"
  | "saas-development"
  | "portfolio-sites";

type CapabilityMeta = {
  key: CapabilityKey;
  label: string;
  Icon: LucideIcon;
  promise: string;
  serviceParam: string;
};

const CAPS: Record<CapabilityKey, CapabilityMeta> = {
  "custom-software": {
    key: "custom-software",
    label: "Custom Software Development",
    Icon: Code2,
    promise: "Built around how your team actually works.",
    serviceParam: "Custom Software Development",
  },
  "web-applications": {
    key: "web-applications",
    label: "Web Applications",
    Icon: Briefcase,
    promise: "Dashboards, portals and tools that scale.",
    serviceParam: "Web Applications",
  },
  "ai-integration": {
    key: "ai-integration",
    label: "AI Integration Applications",
    Icon: Brain,
    promise: "Real workflows powered by language models.",
    serviceParam: "AI Integration Application",
  },
  "app-development": {
    key: "app-development",
    label: "App Development",
    Icon: Smartphone,
    promise: "iOS and Android, one clean codebase.",
    serviceParam: "App Development",
  },
  "saas-development": {
    key: "saas-development",
    label: "SaaS Development",
    Icon: Cloud,
    promise: "Multi-tenant products. End to end.",
    serviceParam: "SaaS Development",
  },
  "portfolio-sites": {
    key: "portfolio-sites",
    label: "Portfolio Sites",
    Icon: Layers,
    promise: "Personal and creative portfolios with real craft.",
    serviceParam: "Portfolio Sites",
  },
};

type Option = {
  label: string;
  hint?: string;
  scores: Partial<Record<CapabilityKey, number>>;
};

type Question = {
  id: string;
  prompt: string;
  helper?: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "audience",
    prompt: "Who actually uses this thing?",
    helper: "Pick the closest match.",
    options: [
      {
        label: "Just my own team or company",
        hint: "Internal tools, ops, finance, HR",
        scores: { "custom-software": 3, "web-applications": 2 },
      },
      {
        label: "My customers or clients",
        hint: "External users with logins",
        scores: { "web-applications": 2, "app-development": 1, "saas-development": 2 },
      },
      {
        label: "The world (it shows my work)",
        hint: "Portfolio, brand, founder site",
        scores: { "portfolio-sites": 6 },
      },
    ],
  },
  {
    id: "surface",
    prompt: "Where will they mostly use it?",
    options: [
      {
        label: "On their phone",
        hint: "Field, on-the-go, consumer",
        scores: { "app-development": 4, "web-applications": 1 },
      },
      {
        label: "On a computer",
        hint: "Desk work, dashboards, admin",
        scores: { "web-applications": 3, "custom-software": 2, "saas-development": 2 },
      },
      {
        label: "Both, equally",
        scores: {
          "web-applications": 2,
          "app-development": 2,
          "saas-development": 1,
        },
      },
    ],
  },
  {
    id: "ai",
    prompt: "Is AI / a language model part of this?",
    helper: "Honestly. Most projects don't need it.",
    options: [
      {
        label: "Yes, it's the core thing",
        hint: "Drafting, copilots, automation",
        scores: { "ai-integration": 6 },
      },
      {
        label: "Maybe sprinkled in",
        hint: "Search, suggestions, auto-tag",
        scores: { "ai-integration": 2 },
      },
      {
        label: "No, not really",
        scores: {},
      },
    ],
  },
  {
    id: "scale",
    prompt: "Will many separate companies sign up and pay for this?",
    helper: "Tenancy, billing, accounts.",
    options: [
      {
        label: "Yes, that's the model",
        hint: "It's a SaaS",
        scores: { "saas-development": 5 },
      },
      {
        label: "Maybe later, not now",
        scores: { "saas-development": 1 },
      },
      {
        label: "No, single owner only",
        scores: {},
      },
    ],
  },
];

type Answers = Record<string, number | null>;

function score(answers: Answers): CapabilityKey {
  const totals: Record<CapabilityKey, number> = {
    "custom-software": 0,
    "web-applications": 0,
    "ai-integration": 0,
    "app-development": 0,
    "saas-development": 0,
    "portfolio-sites": 0,
  };
  QUESTIONS.forEach((q) => {
    const idx = answers[q.id];
    if (idx == null) return;
    const opt = q.options[idx];
    if (!opt) return;
    for (const [k, v] of Object.entries(opt.scores)) {
      totals[k as CapabilityKey] += v ?? 0;
    }
  });

  // Portfolio overrides if it scored — strong signal from Q1
  if (totals["portfolio-sites"] >= 6) return "portfolio-sites";

  let best: CapabilityKey = "custom-software";
  let bestVal = -1;
  (Object.keys(totals) as CapabilityKey[]).forEach((k) => {
    if (totals[k] > bestVal) {
      bestVal = totals[k];
      best = k;
    }
  });
  return best;
}

export function FitFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const isResult = step >= QUESTIONS.length;
  const recommendation = useMemo(
    () => (isResult ? CAPS[score(answers)] : null),
    [isResult, answers],
  );

  function pick(qIdx: number, optIdx: number) {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[qIdx].id]: optIdx }));
    setStep(qIdx + 1);
  }

  function back() {
    if (step === 0) return;
    setStep(step - 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
          <span className="text-amber">
            {isResult
              ? "Result"
              : `Question ${step + 1} of ${QUESTIONS.length}`}
          </span>
          {!isResult ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 text-muted-app transition hover:text-amber"
            >
              <RotateCcw className="h-3 w-3" />
              Restart
            </button>
          ) : null}
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--status-neutral-bg)]">
          <div
            className="h-full rounded-full bg-amber transition-all duration-500"
            style={{
              width: `${
                isResult
                  ? 100
                  : Math.round(((step + 0.0) / QUESTIONS.length) * 100)
              }%`,
            }}
          />
        </div>
      </div>

      {!isResult ? (
        <div className="rounded-2xl border border-app bg-elevated p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-app text-balance">
            {QUESTIONS[step].prompt}
          </h2>
          {QUESTIONS[step].helper ? (
            <p className="mt-2 text-sm text-muted-app">
              {QUESTIONS[step].helper}
            </p>
          ) : null}

          <div className="mt-7 grid gap-3">
            {QUESTIONS[step].options.map((opt, i) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => pick(step, i)}
                className="group flex flex-col items-start gap-1 rounded-xl border border-app bg-app px-5 py-4 text-left transition hover:border-amber hover:bg-amber-soft"
              >
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="text-base font-semibold text-app group-hover:text-amber">
                    {opt.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-app transition group-hover:translate-x-0.5 group-hover:text-amber" />
                </span>
                {opt.hint ? (
                  <span className="text-sm text-muted-app">{opt.hint}</span>
                ) : null}
              </button>
            ))}
          </div>

          {step > 0 ? (
            <div className="mt-6">
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-app transition hover:text-amber"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
            </div>
          ) : null}
        </div>
      ) : recommendation ? (
        <ResultCard cap={recommendation} onReset={reset} />
      ) : null}
    </div>
  );
}

function ResultCard({
  cap,
  onReset,
}: {
  cap: CapabilityMeta;
  onReset: () => void;
}) {
  const Icon = cap.Icon;
  const contactHref = `/contact?service=${encodeURIComponent(cap.serviceParam)}`;
  const serviceHref = `/services#${cap.key}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-amber-soft bg-elevated">
      <div className="bg-amber-soft p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber">
          <Sparkles className="h-3.5 w-3.5" />
          Sounds like you need
        </div>
        <div className="mt-5 flex items-start gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber text-[#0A0A0A] shadow-amber-glow">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-app">
              {cap.label}
            </h2>
            <p className="mt-2 text-base text-muted-app">{cap.promise}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:p-8">
        <Link
          href={contactHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-amber px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] shadow-amber-glow transition hover:bg-[var(--amber-hover)]"
        >
          Talk about this
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={serviceHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-app px-6 py-3.5 text-sm font-semibold text-app transition hover:border-amber hover:bg-amber-soft hover:text-amber"
        >
          Read the deep-dive
        </Link>
      </div>

      <div className="border-t border-app px-6 pb-6 sm:px-8 sm:pb-8">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-muted-app transition hover:text-amber"
        >
          <RotateCcw className="h-4 w-4" />
          Try again with different answers
        </button>
      </div>
    </div>
  );
}
