import { useState } from "react";
import { motion } from "framer-motion";

interface TechTier {
  label: string;
  tools: { name: string; logo: string }[];
}

const TIER_H = 100;
const APEX_EXTRA = 54;
const TIER_GAP = 4;
const DX = 18;
const DY = 10;

const W = [14, 30, 46, 62, 80, 96];

const STYLES = [
  { grad: "linear-gradient(155deg, #e8a060 0%, #d4874d 50%, #a86b38 100%)", back: "#7a5228" },
  { grad: "linear-gradient(155deg, #d49060 0%, #c07850 50%, #9a6040 100%)", back: "#6a4430" },
  { grad: "linear-gradient(155deg, #ba7595 0%, #9b5e7a 50%, #7a4a62 100%)", back: "#5c3848" },
  { grad: "linear-gradient(155deg, #9068ab 0%, #7a5496 50%, #5e4178 100%)", back: "#42305a" },
  { grad: "linear-gradient(155deg, #7050a0 0%, #5a3d80 50%, #402b60 100%)", back: "#2e1e48" },
];

function Logo({ tool }: { tool: { name: string; logo: string } }) {
  const [bad, setBad] = useState(false);
  const initials = tool.name
    .split(/[\s.]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-1 w-[48px] h-[54px] flex-shrink-0">
      {bad ? (
        <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center">
          <span className="text-[10px] font-bold text-gray-500">{initials}</span>
        </div>
      ) : (
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-7 h-7 object-contain"
          loading="lazy"
          onError={() => setBad(true)}
        />
      )}
      <span className="text-[5.5px] text-gray-600 font-medium text-center leading-tight line-clamp-2 mt-auto w-full">
        {tool.name}
      </span>
    </div>
  );
}

function Tier({ tier, i }: { tier: TechTier; i: number }) {
  const botW = W[i + 1];
  const s = STYLES[Math.min(i, STYLES.length - 1)];
  const isApex = i === 0;

  let clip: string;
  let h: number;

  if (isApex) {
    clip = "polygon(50% 0%, 100% 100%, 0% 100%)";
    h = TIER_H + APEX_EXTRA;
  } else {
    const topW = W[i];
    const inset = (((botW - topW) / botW) * 100) / 2;
    clip = `polygon(${inset}% 0%, ${100 - inset}% 0%, 100% 100%, 0% 100%)`;
    h = TIER_H;
  }

  return (
    <motion.div
      className="relative mx-auto"
      style={{ width: `${botW}%`, marginTop: isApex ? 0 : TIER_GAP, overflow: "visible" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * i, duration: 0.45 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: s.back, clipPath: clip, transform: `translate(${DX}px,-${DY}px)` }}
      />
      <div
        className={`relative z-10 flex flex-col items-center gap-1 px-4 ${isApex ? "justify-end pb-3" : "justify-center"}`}
        style={{ height: h, background: s.grad, clipPath: clip }}
      >
        <span className="md:hidden text-white/70 text-[8px] font-bold uppercase tracking-widest mb-0.5">
          {tier.label}
        </span>
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          {tier.tools.map((tool, j) => (
            <Logo key={j} tool={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Bracket({ h }: { h: number }) {
  const mid = h / 2;
  return (
    <svg
      width="28"
      height={h}
      viewBox={`0 0 28 ${h}`}
      fill="none"
      className="flex-shrink-0"
    >
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
      <div className="flex items-start">
        <div className="flex-1 flex flex-col items-center" style={{ overflow: "visible" }}>
          {tiers.map((tier, i) => (
            <Tier key={tier.label} tier={tier} i={i} />
          ))}

          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "105%",
              height: 20,
              background: "radial-gradient(ellipse, rgba(77,57,127,0.3) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
        </div>

        <div className="hidden md:flex flex-col flex-shrink-0 w-60 pl-2">
          {tiers.map((tier, i) => {
            const h = i === 0 ? TIER_H + APEX_EXTRA : TIER_H;
            return (
              <div
                key={tier.label}
                className="flex items-center gap-1"
                style={{ height: h, marginTop: i === 0 ? 0 : TIER_GAP }}
              >
                <Bracket h={h * 0.7} />
                <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider leading-snug">
                  {tier.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
