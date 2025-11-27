"use client";

import { motion } from "framer-motion";
import { AuricDust } from "../AuricDust";
import DimensionalTear from "../AlienFX/DimensionalTear";
import AnomalyLight from "../AlienFX/AnomalyLight";

const values = [
  {
    title: "South India’s First to Introduce US Futures",
    desc: "A revolutionary trading hub built for serious learners who want a global-edge advantage.",
  },
  {
    title: "Every Trader Deserves a Second Chance",
    desc: "Whether you lost money, got scammed, or feel stuck — we rebuild traders from zero with discipline.",
  },
  {
    title: "We Only Take 30 Serious Students",
    desc: "We prefer quality over quantity. Only those who can dedicate 200% effort for 60 days are accepted.",
  },
  {
    title: "No Sales Team — Only Traders Teaching You",
    desc: "Every team member is a trader or actively learning. No calling. No forcing. No gimmicks.",
  },
  {
    title: "Become a Funded Trader in 60 Days",
    desc: "Follow our rules with discipline and we help you clear prop firm evaluations to get funded.",
  },
];

export default function ValueSection() {
  return (
    <section className="value-section relative">
        {/* SECTION-ONLY ALIEN EFFECTS */}
      <DimensionalTear />
      <AnomalyLight />

      <AuricDust  />
      {/* Particle Layer */}
      <div className="value-stars"></div>

      <div className="heading-wrap">
        <h2 className="section-heading">Why Auric Street Works</h2>
        <span className="heading-underline"></span>
      </div>
      <div className="value-grid">
        {values.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ scale: 1.04, y: -6 }}
            className="value-card"
          >
            <h3 className="value-title">{item.title}</h3>
            <p className="value-desc">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
