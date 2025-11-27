"use client";

import React from "react";

const particles = [
  { size: 10, orbit: 180, duration: 28, delay: 0 },
  { size: 14, orbit: 220, duration: 34, delay: -4 },
  { size: 8,  orbit: 260, duration: 40, delay: -8 },
  { size: 12, orbit: 300, duration: 48, delay: -12 },
  { size: 9,  orbit: 340, duration: 55, delay: -16 },
  { size: 15, orbit: 380, duration: 62, delay: -20 }
];

export default function RiftOrbitParticles() {
  return (
    <div
      className="
        absolute 
        inset-0 
        z-[5]
        pointer-events-none
      "
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            marginLeft: `-${p.size / 2}px`,
            marginTop: `-${p.size / 2}px`,
            background:
              "radial-gradient(circle, rgba(255,240,200,0.9), rgba(255,200,120,0.5), rgba(255,200,120,0))",
            borderRadius: "50%",
            filter: "blur(2px)",
            animation: `orbit-${i} ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}