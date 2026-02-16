"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        background: `
          radial-gradient(
            600px circle at ${pos.x}px ${pos.y}px,
            rgba(124,58,237,.15),
            transparent 60%
          )
        `,
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
    />
  );
}
