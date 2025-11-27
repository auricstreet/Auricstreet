"use client";

import { useEffect } from "react";

export default function RiftParallax() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      document.documentElement.style.setProperty("--px", x.toString());
      document.documentElement.style.setProperty("--py", y.toString());
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}