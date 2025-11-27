"use client";

import { useEffect } from "react";

export default function CosmicBackgrounds() {
  useEffect(() => {
    const layers = document.querySelectorAll(".parallax");

    const onScroll = () => {
      const scrollY = window.scrollY;
      layers.forEach((el: any) => {
        const speed = el.getAttribute("data-speed");
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 80;
      const y = (e.clientY - window.innerHeight / 2) / 80;

      layers.forEach((el: any) => {
        const depth = el.getAttribute("data-depth");
        el.style.transform += ` translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-black">
      
      {/* Nebula Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full parallax blur-[160px] opacity-40"
        data-speed="0.05"
        data-depth="2"
        style={{
          background: "radial-gradient(circle, #8a2be2, transparent)"
        }}
      />

      {/* Stars Layer */}
      {[...Array(90)].map((_, i) => (
        <div
          key={i}
          className="absolute parallax animate-twinkle"
          data-speed="0.1"
          data-depth="1.2"
          style={{
            width: "2px",
            height: "2px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "white",
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      ))}

      {/* Floating Orbs */}
      <div
        className="absolute parallax animate-float-slow rounded-full blur-[40px]"
        data-speed="0.2"
        data-depth="3"
        style={{
          width: "150px",
          height: "150px",
          top: "15%",
          left: "70%",
          background: "radial-gradient(circle, #12d6ff, transparent)"
        }}
      />

      <div
        className="absolute parallax animate-float"
        data-speed="0.35"
        data-depth="4"
        style={{
          width: "8px",
          height: "8px",
          top: "70%",
          left: "30%",
          background: "#ffffff",
          borderRadius: "50%",
          boxShadow: "0 0 15px #11d1ff",
        }}
      />

    </div>
  );
}
