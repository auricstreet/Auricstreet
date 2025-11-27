"use client";

import { useState, useEffect } from "react";

// Import ALL components only once
import { RiftCanvas, RiftGlow, RiftMist, RiftFlares, RiftOrbitParticles, RiftRipples, RiftParallax } from ".";

// Utility import (only once)
import { isMobileDevice } from "./index";

export default function RiftLayers() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);
  if (isMobile) {
  document.documentElement.style.setProperty("--px", "0");
  document.documentElement.style.setProperty("--py", "0");
}

  return (
   <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">

  <RiftParallax />

  <div className="rift-parallax-strong">
    
  </div>

  <div className="rift-parallax-medium">
    <RiftMist />
  </div>

  <div className="rift-parallax-light">
    <RiftRipples />
    <RiftFlares />
  </div>

  <div className="rift-parallax-ultralight">
    <RiftOrbitParticles />
    <RiftGlow />
  </div>

</div>
  );
}
