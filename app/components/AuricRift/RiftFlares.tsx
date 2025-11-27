"use client";

import React from "react";

export default function RiftFlares() {
  return (
    <div
      className="
        absolute 
        inset-0 
        pointer-events-none 
        z-[4]
      "
    >
      {/* Outer broad flare */}
      <div
        className="
          absolute 
          left-1/2 
          top-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          blur-[160px]
          opacity-20
          animate-flareRotateSlow
        "
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,200,120,0.25), rgba(140,90,40,0.05), rgba(255,200,120,0.25))",
        }}
      />

      {/* Inner golden arc */}
      <div
        className="
          absolute 
          left-1/2 
          top-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          blur-[80px]
          opacity-35
          animate-flareRotateFast
        "
        style={{
          background:
            "conic-gradient(from 180deg, rgba(255,210,150,0.35), rgba(120,80,40,0), rgba(255,210,150,0.35))",
        }}
      />
    </div>
  );
}