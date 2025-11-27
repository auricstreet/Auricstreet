"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "@/app/components/animations/FadeSlide.css";

gsap.registerPlugin(ScrollTrigger);

export default function LineReveal({ textBlocks }: { textBlocks: string[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wrapper = containerRef.current;
    wrapper.classList.add("fade-slide-in"); // Trigger FadeSlide wrapper animation

    const lines = wrapper.querySelectorAll(".fade-item");

    lines.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="fade-slide-wrapper" ref={containerRef}>
      {textBlocks.map((t, i) => (
        <motion.p
          key={i}
          className="fade-item"
          whileHover={{
            color: "#11d1ff",
            textShadow: "0px 0px 12px rgba(17,209,255,0.6)",
            transition: { duration: 0.3 },
          }}
        >
          {t}
        </motion.p>
      ))}
    </div>
  );
}
