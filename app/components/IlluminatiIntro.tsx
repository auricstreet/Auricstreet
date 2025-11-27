"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IlluminatiIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Auto-hide intro after 2.7 seconds
    const t = setTimeout(() => {
      setShow(false);

      // Fade in background audio
      const audio = document.getElementById("ambient-audio") as HTMLAudioElement;
      if (audio) {
        audio.volume = 0;
        audio.play().catch(() => {});
        let v = 0;
        const fade = setInterval(() => {
          v += 0.02;
          audio.volume = Math.min(v, 0.25);
          if (v >= 0.25) clearInterval(fade);
        }, 120);
      }
    }, 2700);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[var(--navy)] flex items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glass Ripple */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="glass-dark w-[280px] h-[280px] rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            {/* Illuminati Eye SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <svg
                width="140"
                height="140"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Logo Morph Flash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="absolute"
          >
            <img
              src="/logo.png"
              alt="Auric Street Logo"
              className="w-[160px] opacity-80"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
