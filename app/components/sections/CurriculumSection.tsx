"use client";

import { motion } from "framer-motion";
import { AuricDust } from "../AuricDust";
import DimensionalTear from "../AlienFX/DimensionalTear";
import AnomalyLight from "../AlienFX/AnomalyLight";
import CosmicBackground from "../CosmicBackground";

const timeline = [
  {
    phase: "Phase 1 - Foundations",
    duration: "Days 1–10",
    points: [
      "Understanding US Futures & Forex",
      "Market sessions & volatility cycles",
      "Trading psychology & risk basics",
      "Candles, structure & clean charting",
      "Why Indian options fail beginners",
    ],
  },
  {
    phase: "Phase 2 - ICT Basics",
    duration: "Days 11–25",
    points: [
      "Market structure deeply explained",
      "Liquidity theory (equal highs/lows, rests)",
      "Fair Value Gaps (FVG) properly taught",
      "Mitigation & Breakers",
      "Simple roadmap for trading sessions",
    ],
  },
  {
    phase: "Phase 3 - Advanced ICT + Strategy",
    duration: "Days 26–40",
    points: [
      "Power of 3 (accumulation, manipulation, distribution)",
      "Killzones & high-probability setups",
      "SMT, displacement, inefficiency",
      "Refinement based on sessions",
      "Entry model + Re-entry model",
      "In Depth Bookmap Analysis"
    ],
  },
  {
    phase: "Phase 4 - Backtesting & Live Market Trading",
    duration: "Days 41–50",
    points: [
      "Building trading rules",
      "100 backtests challenge",
      "Journaling with precision",
      "Performance tracking dashboard",
      "Accountability & routine building",
    ],
  },
  {
    phase: "Phase 5 - Funded Trader Preparation",
    duration: "Days 51–60",
    points: [
      "Prop challenge-style environment",
      "Strict risk templates",
      "Daily bias routine",
      "Evaluation mindset",
      "Clear the challenge → get funded",
    ],
  },
];

export default function CurriculumSection() {
  return (
    <section className="curriculum container relative z-10 mt-[120px] auric-spotlight bg-black">
       <DimensionalTear />
            <AnomalyLight />
      <AuricDust  />
      <CosmicBackground>
      <h2 className="section-heading mb-12">
        60-Day Funded Trader Roadmap
      </h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="dot"></div>

            <h3 className="timeline-phase">{item.phase}</h3>
            <p className="timeline-duration">{item.duration}</p>

            <ul className="timeline-list">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      </CosmicBackground>
    </section>
  );
}
