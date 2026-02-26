"use client";

import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdExperimentProps = {
  experimentKey: string;
  className?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
};

const ADS_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-3939831601648260";
const SLOT_A = process.env.NEXT_PUBLIC_ADSENSE_SLOT_A;
const SLOT_B = process.env.NEXT_PUBLIC_ADSENSE_SLOT_B;
const SLOT_FALLBACK = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

function resolveVariant(experimentKey: string): "A" | "B" {
  if (typeof window === "undefined") return "A";
  const urlVariant = new URLSearchParams(window.location.search).get("ab_ads");
  if (urlVariant === "A" || urlVariant === "B") return urlVariant;

  const storageKey = `ab_ads_${experimentKey}`;
  const saved = window.localStorage.getItem(storageKey);
  if (saved === "A" || saved === "B") return saved;

  const assigned = Math.random() < 0.5 ? "A" : "B";
  window.localStorage.setItem(storageKey, assigned);
  return assigned;
}

export default function AdExperiment({
  experimentKey,
  className,
  format = "auto",
}: AdExperimentProps) {
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    setVariant(resolveVariant(experimentKey));
    setMounted(true);
  }, [experimentKey]);

  const slot = useMemo(() => {
    if (variant === "A") return SLOT_A || SLOT_FALLBACK;
    return SLOT_B || SLOT_A || SLOT_FALLBACK;
  }, [variant]);

  useEffect(() => {
    if (!mounted || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense can throw on duplicate mounts during hydration/retry.
    }
  }, [mounted, slot]);

  if (!mounted || !slot) return null;

  return (
    <section className={className} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADS_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </section>
  );
}
