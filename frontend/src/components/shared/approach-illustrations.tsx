import type { SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Transparent line-art illustrations for the Approach &               */
/*  Differentiation cards. No background fill — they sit directly on    */
/*  the card surface and inherit colour via `currentColor`.             */
/* ------------------------------------------------------------------ */

type IllustrationProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* 01 — Strategic Cost Advantage: stacked coins, cost trending down */
export function CostAdvantageArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="20" cy="20" rx="12" ry="4.5" />
      <path d="M8 20v8c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5v-8" />
      <path d="M8 28v8c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5v-8" />
      <path d="M8 36v8c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5v-8" />
      <path d="M40 24l6 8 4-5 6 9" />
      <path d="M56 36v-6h-6" />
      <path d="M40 46h16" strokeOpacity="0.5" />
    </svg>
  );
}

/* 02 — Qualified Teams: credential badge with ribbon */
export function QualifiedTeamArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="32" cy="24" r="14" />
      <circle cx="32" cy="24" r="8.5" strokeOpacity="0.45" />
      <path d="M27.5 24l3 3 6-6" />
      <path d="M22 36l-4 20 14-7 14 7-4-20" />
    </svg>
  );
}

/* 03 — Smoother Onboarding: checklist with forward momentum */
export function OnboardingArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <rect x="10" y="10" width="32" height="44" rx="4" />
      <path d="M24 10V7a2 2 0 012-2h4a2 2 0 012 2v3" />
      <path d="M17 22l3 3 6-6" />
      <path d="M17 34l3 3 6-6" />
      <path d="M17 46h10" strokeOpacity="0.5" />
      <path d="M32 22h4M32 34h4" strokeOpacity="0.5" />
      <path d="M46 32h12" />
      <path d="M53 27l5 5-5 5" />
    </svg>
  );
}

/* 04 — Dedicated Team & Integration: connected nodes around a hub */
export function DedicatedTeamArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="32" cy="32" r="8" />
      <path d="M32 24v-6M32 46v-6M24 32h-6M46 32h-6" strokeOpacity="0.55" />
      <circle cx="32" cy="12" r="5" />
      <circle cx="32" cy="52" r="5" />
      <circle cx="12" cy="32" r="5" />
      <circle cx="52" cy="32" r="5" />
      <path d="M29 32l2.5 2.5L35 30" />
    </svg>
  );
}

/* 05 — Transparent Visibility: eye over an activity readout */
export function VisibilityArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 24s10-12 28-12 28 12 28 12-10 12-28 12S4 24 4 24z" />
      <circle cx="32" cy="24" r="6.5" />
      <path d="M32 21v3.5l2.5 1.5" strokeOpacity="0.6" />
      <path d="M14 52v-8M26 52v-14M38 52v-10M50 52v-17" />
      <path d="M8 52h48" strokeOpacity="0.45" />
    </svg>
  );
}

/* 06 — Multi-Timezone Coverage: globe with meridians and a clock */
export function TimezoneArt(props: IllustrationProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="28" cy="28" r="20" />
      <path d="M8 28h40" strokeOpacity="0.6" />
      <path d="M28 8c6 6 8 13 8 20s-2 14-8 20c-6-6-8-13-8-20s2-14 8-20z" strokeOpacity="0.6" />
      <path d="M12.5 16c4.5 3 9.8 4.5 15.5 4.5S39 19 43.5 16" strokeOpacity="0.4" />
      <path d="M12.5 40c4.5-3 9.8-4.5 15.5-4.5S39 37 43.5 40" strokeOpacity="0.4" />
      <circle cx="48" cy="48" r="11" />
      <path d="M48 42v6l4 2.5" />
    </svg>
  );
}
