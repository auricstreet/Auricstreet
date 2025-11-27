"use client";

import React from "react";

export default function RiftRipple() {
  return (
    <div
      className="
        absolute 
        inset-0 
        pointer-events-none 
        z-[4]
      "
    >
      <div
        className="
          absolute 
          left-1/2 
          top-1/2 
          -translate-x-1/2 
          -translate-y-1/2
          w-[180px]
          h-[180px]
          rounded-full
          opacity-0
          animate-riftRipple
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,240,200,0.35) 0%, rgba(255,200,120,0.12) 40%, rgba(255,200,120,0) 75%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}