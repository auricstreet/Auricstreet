"use client";

import { ReactNode, useEffect, useRef } from "react";

interface CosmicBackgroundProps {
  children: ReactNode;
}

export default function CosmicBackground({ children }: CosmicBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.className =
      "absolute inset-0 w-full h-full pointer-events-none z-0";
    containerRef.current.appendChild(canvas);

    const setSize = () => {
      canvas.width = containerRef.current!.offsetWidth;
      canvas.height = containerRef.current!.offsetHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);

    // ⭐ Generate stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.3,
      speed: Math.random() * 0.25 + 0.05,
    }));

    // ✨ Shooting star state
    const shootingStar: {
      x: number;
      y: number;
      length: number;
      speed: number;
      active: boolean;
    } = {
      x: 0,
      y: 0,
      length: 120,
      speed: 6,
      active: false,
    };

    // 🌠 Trigger new shooting star every few seconds
    const spawnShootingStar = () => {
      shootingStar.x = Math.random() * canvas.width;
      shootingStar.y = Math.random() * (canvas.height / 2);
      shootingStar.active = true;
    };

    setInterval(() => {
      if (!shootingStar.active) spawnShootingStar();
    }, 5000);

    // 🎯 PARALLAX SCROLL EFFECT
    let scrollOffset = 0;
    const handleScroll = () => {
      scrollOffset = window.scrollY * 0.08;
    };

    window.addEventListener("scroll", handleScroll);

    // 🎬 Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render falling stars with parallax shift
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.8})`;
        ctx.beginPath();
        ctx.arc(
          star.x,
          (star.y + scrollOffset) % canvas.height,
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });

      // Draw shooting star
      if (shootingStar.active) {
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x - shootingStar.length,
          shootingStar.y - shootingStar.length
        );

        gradient.addColorStop(0, "rgba(255,215,150,1)");
        gradient.addColorStop(1, "rgba(255,215,150,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.length,
          shootingStar.y - shootingStar.length
        );
        ctx.stroke();

        shootingStar.x += shootingStar.speed;
        shootingStar.y += shootingStar.speed;

        if (
          shootingStar.x > canvas.width + shootingStar.length ||
          shootingStar.y > canvas.height + shootingStar.length
        ) {
          shootingStar.active = false;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden z-10">
      <div className="relative z-20">{children}</div>
    </div>
  );
}
