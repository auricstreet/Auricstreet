"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function CosmicOrbitLayer() {
  // Pre-calculate orbit particles ONCE (safe for TSX)
  const orbitParticles = useMemo(() => {
    const particles = [];

    for (let i = 0; i < 22; i++) {
      const angle = (i / 22) * Math.PI * 2;
      const radius = 240 + Math.random() * 120;

      particles.push({
        cx: radius * Math.cos(angle),
        cy: radius * Math.sin(angle),
        size: Math.random() * 3.5 + 1,
      });
    }

    return particles;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Soft ambient glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.12 }}
        animate={{ opacity: [0.09, 0.18, 0.12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,215,160,0.12), transparent 60%)",
        }}
      />

      {/* Slow rotating orbit circles */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[140vh] h-[140vh] -translate-x-[50%] -translate-y-[50%] opacity-[0.18]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <svg width="100%" height="100%">
          {orbitParticles.map((p: { cx: unknown; cy: unknown; size: string | number | undefined; }, i: Key | null | undefined) => (
            <circle
              key={i}
              cx={`calc(50% + ${p.cx}px)`}
              cy={`calc(50% + ${p.cy}px)`}
              r={p.size}
              fill="rgba(255,255,255,0.75)"
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
