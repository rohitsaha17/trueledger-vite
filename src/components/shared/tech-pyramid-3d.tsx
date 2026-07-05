import { useState } from "react";
import { motion } from "framer-motion";

interface TechTier {
  label: string;
  tools: { name: string; logo: string }[];
}

const TIER_H = 96;
const CAP_H = 64;
const GAP = 12;
const DX = 26;
const DY = 14;

// Cumulative slice base widths (% of pyramid area): cap base first, then each tier's base
const W = [14, 31.2, 48.4, 65.6, 82.8, 100];

// index 0 = apex cap, 1..5 = tiers top to bottom
const STYLES = [
  { grad: "linear-gradient(160deg, #f2b273 0%, #dd9355 55%, #b97a40 100%)", top: "#f9d3a2", side: "#8a5a2c" },
  { grad: "linear-gradient(160deg, #e9a263 0%, #d18a4e 55%, #aa6f3a 100%)", top: "#f5c68f", side: "#7c5026" },
  { grad: "linear-gradient(160deg, #d98a68 0%, #bf7455 55%, #995c42 100%)", top: "#edb695", side: "#6d4030" },
  { grad: "linear-gradient(160deg, #bc7590 0%, #a05e78 55%, #7d495e 100%)", top: "#d9a3b8", side: "#573242" },
  { grad: "linear-gradient(160deg, #8f68ac 0%, #765394 55%, #5b4074 100%)", top: "#b697cf", side: "#3f2c54" },
  { grad: "linear-gradient(160deg, #6b4f9e 0%, #553d82 55%, #3e2c62 100%)", top: "#9a7fc0", side: "#2a1e44" },
];

// Back slab is shifted up-right; only its top sliver (lit surface) and right
// sliver (shaded side) stay visible, so a hard-stop gradient fakes both faces.
const backFill = (s: (typeof STYLES)[number]) =>
  `linear-gradient(180deg, ${s.top} ${DY}px, ${s.side} ${DY}px)`;

function Logo({ tool }: { tool: { name: string; logo: string } }) {
  const [bad, setBad] = useState(false);
  const initials = tool.name
    .split(/[\s.]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      title={tool.name}
      className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-between px-1 pt-2 pb-1.5 w-[68px] h-[78px] flex-shrink-0"
    >
      {bad ? (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-500">{initials}</span>
        </div>
      ) : (
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-10 h-10 object-contain"
          loading="lazy"
          onError={() => setBad(true)}
        />
      )}
      <span className="text-[9px] text-gray-700 font-semibold text-center leading-[1.15] line-clamp-2 w-full">
        {tool.name}
      </span>
    </div>
  );
}

function Cap() {
  const s = STYLES[0];
  const clip = "polygon(50% 0%, 100% 100%, 0% 100%)";
  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: `${W[0]}%`, height: CAP_H, filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.35))" }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="absolute inset-0"
        style={{ background: backFill(s), clipPath: clip, transform: `translate(${DX}px,-${DY}px)` }}
      />
      <div className="absolute inset-0" style={{ background: s.grad, clipPath: clip }} />
    </motion.div>
  );
}

function PyramidTier({ tier, i }: { tier: TechTier; i: number }) {
  const topW = W[i];
  const botW = W[i + 1];
  const s = STYLES[i + 1];
  const inset = ((botW - topW) / botW) * 50;
  const clip = `polygon(${inset}% 0%, ${100 - inset}% 0%, 100% 100%, 0% 100%)`;

  return (
    <motion.div
      className="relative mx-auto"
      style={{
        width: `${botW}%`,
        height: TIER_H,
        marginTop: GAP,
        filter: "drop-shadow(0 14px 18px rgba(0,0,0,0.35))",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.07 * (i + 1), duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="absolute inset-0"
        style={{ background: backFill(s), clipPath: clip, transform: `translate(${DX}px,-${DY}px)` }}
      />
      <div className="absolute inset-0" style={{ background: s.grad, clipPath: clip }} />
      {/* Logo layer is NOT clipped, so cards never get sliced by the trapezoid edges */}
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2">
        {tier.tools.map((tool, j) => (
          <Logo key={j} tool={tool} />
        ))}
      </div>
    </motion.div>
  );
}

function Bracket({ h }: { h: number }) {
  const mid = h / 2;
  return (
    <svg width="28" height={h} viewBox={`0 0 28 ${h}`} fill="none" className="flex-shrink-0">
      <path
        d={`M 4 4 C 12 4, 14 ${mid * 0.55}, 14 ${mid - 4} Q 14 ${mid}, 22 ${mid} Q 14 ${mid}, 14 ${mid + 4} C 14 ${mid + (mid - 4) * 0.45 + 4}, 12 ${h - 4}, 4 ${h - 4}`}
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="22" y1={mid} x2="27" y2={mid} stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
    </svg>
  );
}

export function TechPyramid3D({ tiers }: { tiers: TechTier[] }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Desktop: 3D sliced pyramid with side labels */}
      <div className="hidden md:flex items-start">
        <div className="flex-1 min-w-0" style={{ overflow: "visible" }}>
          <Cap />
          {tiers.map((tier, i) => (
            <PyramidTier key={tier.label} tier={tier} i={i} />
          ))}

          <div
            className="mx-auto mt-5 rounded-full"
            style={{
              width: "100%",
              height: 22,
              background: "radial-gradient(ellipse, rgba(77,57,127,0.35) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
        </div>

        <div className="flex flex-col flex-shrink-0 w-64 pl-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.label}
              className="flex items-center gap-1"
              style={{ height: TIER_H, marginTop: i === 0 ? CAP_H + GAP : GAP }}
            >
              <Bracket h={TIER_H * 0.7} />
              <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider leading-snug">
                {tier.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked slabs, full width so logos stay readable */}
      <div className="md:hidden flex flex-col gap-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.label}
            className="rounded-xl px-3 py-3 shadow-lg"
            style={{ background: STYLES[i + 1].grad }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 * i, duration: 0.4 }}
          >
            <div className="text-white/85 text-[10px] font-bold uppercase tracking-widest text-center mb-2">
              {tier.label}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tier.tools.map((tool, j) => (
                <Logo key={j} tool={tool} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
