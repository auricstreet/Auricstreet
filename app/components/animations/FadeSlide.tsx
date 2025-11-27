"use client";

import React, { useEffect, useRef } from "react";
import "@/app/components/animations/FadeSlide.css";

export default function FadeSlide({
  children,
  delay = 120,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(".fade-item");

    // Apply stagger only AFTER mount
    items.forEach((item, index) => {
      (item as HTMLElement).style.animationDelay = `${index * delay}ms`;
    });

    // Trigger animation after layout paint
    setTimeout(() => {
      container.classList.add("fade-slide-in");
    }, 10);
  }, [delay]);

  return (
    <div ref={ref} className="fade-slide-wrapper">
      {React.Children.map(children, (child) => (
        <div className="fade-item">{child}</div>
      ))}
    </div>
  );
}
