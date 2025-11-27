"use client";

import { useEffect, useState } from "react";
import "./blueplanetrings.css";

export default function BluePlanetRings({ size = 300 }) {
  const [planetSize, setPlanetSize] = useState(size);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 768) {
        setPlanetSize(100); // mobile size
      } 
       else if (window.innerWidth <= 1024) {
  setPlanetSize(120);
       }
      else if (window.innerWidth <= 480) {
  setPlanetSize(90);
       } 
        else if (window.innerWidth <= 360) {
  setPlanetSize(80);
       }// tablet
      else {
        setPlanetSize(size); // desktop size
      }
    };

    updateSize();         // run once on load
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  return (
    <div
      className="planet-rings-wrapper"
      style={{ width: planetSize, height: planetSize }}
    >
      <div className="planet-core"></div>
      <div className="planet-ring ring1"></div>
      <div className="planet-ring ring2"></div>
    </div>
  );
}
