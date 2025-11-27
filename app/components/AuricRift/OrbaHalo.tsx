"use client";

import React from "react";

type Props = {
  size?: number; // base size in px (optional)
  mobile?: boolean;
};

export default function OrbHalo({ size = 420, mobile = false }: Props) {
  // scale down on mobile (caller can pass mobile flag)
  const s = mobile ? Math.round(size * 0.65) : size;
  const outer = Math.round(s * 2.2);    // outer glow area
  const mid = Math.round(s * 1.35);     // atmospheric ring
  const inner = s;                      // orb hit-area

  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none orb-halo-root"
      style={{ width: outer + "px", height: outer + "px" }}
    >
      {/* volumetric outer aura */}
      <div
        className="orb-halo-outer"
        style={{
          width: outer + "px",
          height: outer + "px",
          borderRadius: "50%",
        }}
      />

      {/* atmospheric limb (thin ring) */}
      <div
        className="orb-halo-limb"
        style={{
          width: mid + "px",
          height: mid + "px",
          borderRadius: "50%",
        }}
      />

      {/* specular highlight / crescent */}
      <div
        className="orb-halo-specular"
        style={{
          width: inner + "px",
          height: inner + "px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}