"use client";

import { motion } from "framer-motion";
import { AuricDust } from "../AuricDust";
import CosmicBackground from "../CosmicBackground";

export default function CtaSection() {
  return (
    <section className="cta-section container relative z-10 mt-[160px] mb-[120px] auric-spotlight">
     
      <AuricDust  />
       <CosmicBackground>
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >

        {/* Floating Illuminati Eye */}
        <motion.div
          className="cta-eye"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
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
            className="opacity-90"
          >
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </motion.div>

        {/* Text */}
        <motion.h2
          className="cta-title gold-gradient auric-heading"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Begin Your Second Chance
        </motion.h2>

        <p className="cta-sub">
          Only <span className="text-[#D4AF37] font-bold">30 Seats</span> Per Batch.  
          No Sales Team. No Follow Ups.  
          Only Serious Traders Who Want To Change Their Life.
        </p>

        {/* CTA button */}
        <motion.a
          href="/contact"
          className="cta-button magnetic"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          Contact Us →
        </motion.a>
      </motion.div>
      </CosmicBackground>
    </section>
  );
}
