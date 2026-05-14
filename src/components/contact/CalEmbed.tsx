"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const NAMESPACE = "15min";
export const CAL_LINK = "barqova/15min";

function detectTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function CalEmbed() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(detectTheme());
    const obs = new MutationObserver(() => setTheme(detectTheme()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme,
        cssVarsPerTheme: {
          light: { "cal-brand": "#D5AD36" },
          dark: { "cal-brand": "#D5AD36" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);

  return (
    <div className="overflow-hidden rounded-2xl border border-app bg-elevated">
      <Cal
        namespace={NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "640px", overflow: "scroll" }}
        config={{ layout: "month_view", theme }}
      />
    </div>
  );
}
