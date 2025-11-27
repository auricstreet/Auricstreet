"use client";

import React from "react";

export default function RiftGlow() {
  return (
    <div
      className="
        absolute 
        inset-0 
        pointer-events-none 
        z-[4] 
        flex 
        items-center 
        justify-center
      "
    >
      {/* Main Glow */}
      <div
        className="
          w-[700px] 
          h-[700px] 
          rounded-full 
          blur-[120px] 
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,220,140,0.35) 0%, rgba(255,180,80,0.2) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* Soft Outer Glow */}
      <div
        className="
          absolute 
          w-[1000px] 
          h-[1000px] 
          rounded-full 
          blur-[200px] 
          opacity-30
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,220,150,0.15) 0%, rgba(150,120,70,0.05) 40%, rgba(0,0,0,0) 80%)",
        }}
      />
    </div>
  );
}