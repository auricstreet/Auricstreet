"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RiftLayers from "./AuricRift/RiftLayers";
import OrbHalo from "./AuricRift/OrbaHalo";
import Footer from "./Footer";
import CosmicBackgrounds from "./CosmicBackgrounds";

type CSSVarStyle = React.CSSProperties & {
  [key: `--${string}`]: string;
};
export default function Hero() {
  // Generate random timings ONCE (safe – runs only on first mount)
  const [particleTimings] = useState<number[]>(() =>
    Array.from({ length: 12 }, () => 3.5 + Math.random() * 3)
  );

  return (
    <section className="relative min-h-screen flex items-center px-[7%] overflow-hidden select-none bg-black">
      <div className="starfield">
        <div
          className="stars-layer"
          style={
            {
              backgroundImage: "url('/stars/star1.svg')",
              "--speed": "120s",
            } as CSSVarStyle
          }
        ></div>

        <div
          className="stars-layer gold"
          style={
            {
              backgroundImage: "url('/stars/star2.svg')",
              "--speed": "180s",
            } as CSSVarStyle
          }
        ></div>

        <div
          className="stars-layer"
          style={
            {
              backgroundImage: "url('/stars/star3.svg')",
              "--speed": "240s",
            } as CSSVarStyle
          }
        ></div>
      </div>
       {/* NEW: Space-Time Rift Engine */}
<RiftLayers/>
  <OrbHalo size={500} />
      {/* ---- SUBTLE BACKGROUND LAYER ---- */}
      
      <div className="absolute inset-0 opacity-[0.28] pointer-events-none">
        <div className="hero-gradient w-full h-full" />
      </div>
     
      {/* ---- ENHANCED GOLDEN ORB ---- */}
      <motion.div
        className="orb-container absolute right-[8%] top-[20%]"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow Aura */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37]/25 to-transparent blur-3xl"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core Orb */}
        <motion.div
          className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full 
                     bg-gradient-to-br from-[#D4AF37]/70 to-[#8A6B2E]/15 backdrop-blur-lg 
                     shadow-[0_0_55px_rgba(212,175,55,0.4)]"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particle Sparks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-[6px] h-[6px] rounded-full bg-[#D4AF37]"
            style={{
              top: `${50 + Math.sin(i) * 110}px`,
              left: `${50 + Math.cos(i) * 110}px`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.4, 1, 0.4],
              rotate: [0, 360],
            }}
            transition={{
              duration: particleTimings[i],
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
          />
        ))}
      </motion.div>

      {/* ---- TEXT CONTENT ---- */}
      <div className="relative z-10 max-w-[650px]">
        
     
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          EVERY TRADER DESERVES A{" "}
          <span className="gold-gradient">SECOND CHANCE</span>
        </motion.h1>

        <motion.p
          className="subheading-font text-[18px] text-white/90 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          South India’s First Trading Hub to Introduce US Futures &amp; Forex.
        </motion.p>

        <motion.p
          className="body-font text-[var(--muted)] leading-relaxed mt-5 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Designed for serious learners and working professionals. A disciplined
          pathway to become a consistently profitable  and eventually funded 
          trader.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          className="btn-primary glow-pulse inline-flex px-6 py-3 rounded-md text-[17px] font-semibold 
                     shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Begin Your Second Chance →
        </motion.a>
      </div>
   
    </section>
  );
}
