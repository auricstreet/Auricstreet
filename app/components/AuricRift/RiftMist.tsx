"use client";

import React from "react";

export default function RiftMist() {
  return (
    <div
      className="
        absolute 
        inset-0 
        pointer-events-none 
        z-[3]
        animate-riftMistMove
      "
      style={{
        background: `
          radial-gradient(
            circle at 50% 55%, 
            rgba(255,215,150,0.10) 0%, 
            rgba(255,190,120,0.07) 20%, 
            rgba(120,90,50,0.04) 45%, 
            rgba(0,0,0,0) 80%
          )
        `,
        filter: "blur(60px)",
        opacity: 0.55,
      }}
    />
  );
}