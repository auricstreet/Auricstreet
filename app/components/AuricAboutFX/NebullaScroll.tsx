"use client";

import { useEffect } from "react";

export default function NebulaScroll() {
  useEffect(() => {
    const nebula = document.querySelector(".auric-nebula") as HTMLElement;

    const update = () => {
      const scrollY = window.scrollY * 0.15;
      nebula.style.transform = `translateY(${scrollY}px)`;
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div className="auric-nebula"></div>;
}