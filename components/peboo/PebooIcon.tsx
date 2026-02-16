"use client";

import { motion } from "framer-motion";

export default function PebooIcon({
  size = 26,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pebooRing" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="var(--purple)" />
          <stop offset="0.55" stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--pink)" />
        </linearGradient>

        <radialGradient id="pebooGlow" cx="0.35" cy="0.25" r="0.9">
          <stop stopColor="white" stopOpacity="0.14" />
          <stop offset="1" stopColor="white" stopOpacity="0.02" />
        </radialGradient>
      </defs>

      {/* outer ring */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="url(#pebooRing)"
        strokeWidth="1.6"
        opacity="0.95"
      />

      {/* inner glass */}
      <circle cx="12" cy="12" r="8.4" fill="rgba(255,255,255,.06)" />
      <circle cx="12" cy="12" r="8.4" fill="url(#pebooGlow)" />

      {/* LEFT EYE (static) */}
      <circle
        cx="9.3"
        cy="12"
        r="0.9"
        fill="rgba(255,255,255,.85)"
      />

      {/* RIGHT EYE (blink animation) */}
      <motion.g
        animate={{ opacity: [1, 1, 0, 1] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.85, 0.9, 1],
        }}
      >
        <circle
          cx="14.7"
          cy="12"
          r="0.9"
          fill="rgba(255,255,255,.85)"
        />
      </motion.g>

      <motion.g
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.85, 0.9, 1],
        }}
      >
        <line
          x1="13.8"
          y1="12"
          x2="15.6"
          y2="12"
          stroke="rgba(255,255,255,.85)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* smile */}
      <path
        d="M9.6 14.3c.9.9 1.9 1.35 2.4 1.35s1.5-.45 2.4-1.35"
        stroke="rgba(255,255,255,.75)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* blush */}
      <circle cx="7.9" cy="13.7" r="0.55" fill="var(--pink)" opacity="0.35" />
      <circle cx="16.1" cy="13.7" r="0.55" fill="var(--pink)" opacity="0.35" />
    </svg>
  );
}
