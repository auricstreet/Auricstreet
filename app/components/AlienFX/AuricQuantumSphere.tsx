"use client";

import { useEffect, useState } from "react";
import "./quantumSphere.css";

export default function AuricQuantumSphere({ size = 300 }) {
  const [sphereSize, setSphereSize] = useState(size);

  useEffect(() => {
    const updateSize = () => {

      if (window.innerWidth <= 360) {
        setSphereSize(80); 
      }
      else if (window.innerWidth <= 480) {
        setSphereSize(120);
      }
      else if (window.innerWidth <= 768) {
        setSphereSize(180);
      } 
      else if (window.innerWidth <= 1024) {
        setSphereSize(200);
      } 
      else {
        setSphereSize(size); // desktop default
      }
    };

    updateSize();  // Trigger on load
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <div
      className="quantum-sphere"
      style={{ width: sphereSize, height: sphereSize }}
    >
      <div className="planet"></div>
      <div className="crack"></div>
      <div className="glow"></div>

      {/* Primary Rings */}
      <div className="ring ring1"></div>
      <div className="ring ring2"></div>

      {/* Moons */}
      <div className="moon moon1"></div>
      <div className="moon moon2"></div>

      <div className="dust"></div>
    </div>
  );
}
