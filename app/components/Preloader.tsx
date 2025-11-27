"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true);

      // Fade-in ambient audio
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
    }, 2500);

    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Illuminati eye */}
          <div className="eye center relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>

            {/* gold shimmer */}
          
          </div>

          {/* Text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute bottom-[18%] text-[32px] tracking-wider text-gold preloader-text"
          >
            AURIC STREET
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
