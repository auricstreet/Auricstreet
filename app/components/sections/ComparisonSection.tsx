"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { AuricDust } from "../AuricDust";

const comparison = [
  {
    title: "US Futures",
    color: "gold-gradient",
    points: [
      "✓ Highly liquid — clean chart movements",
      "✓ 24-hour market, easier for working professionals",
      "✓ No manipulation like small Indian stocks",
      "✓ Simple price action — easier to master",
      "✓ Moves with fundamentals & sentiment",
      "✓ Predictable volatility with sessions",
      "✓ Fewer traps compared to options",
      "✓ Ideal for funded trader challenges",
    ],
  },
  {
    title: "Indian Market (Options)",
    color: "text-red-400",
    points: [
      "⚠ Extreme manipulation (BankNifty/Nifty)",
      "⚠ Liquidity drops during key moves",
      "⚠ 90% retail lose money",
      "⚠ Time decay kills profits",
      "⚠ Complex Greeks confuse beginners",
      "⚠ Hard for working professionals",
      "⚠ Requires large capital to trade safely",
      "⚠ Brokers widen spreads during volatility",
    ],
  },
  {
    title: "Forex (World's Largest Market)",
    color: "text-blue-400",
    points: [
      "✓ $6.6 trillion liquidity — zero manipulation",
      "✓ Perfect for consistency",
      "✓ High probability setups with discipline",
      "✓ Works beautifully with ICT concepts",
      "✓ No Greeks — pure price action",
      "✓ Great for funded trader pathway",
    ],
  },
];

export default function ComparisonSection() {
  // Cursor motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth following (like magnets)
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);
  useEffect(() => {
  let timeout: NodeJS.Timeout;

  const fade = () => {
    const orb = document.querySelector(".cursor-orb");
    if (!orb) return;
    orb.classList.add("idle");
  };

  const resetFade = () => {
    const orb = document.querySelector(".cursor-orb");
    if (!orb) return;
    orb.classList.remove("idle");
    clearTimeout(timeout);
    timeout = setTimeout(fade, 2000);
  };

  window.addEventListener("mousemove", resetFade);
  resetFade(); // start tracking immediately

  return () => window.removeEventListener("mousemove", resetFade);
}, []);


  return (
    <section className="comparison-section relative auric-spotlight">
<AuricDust  />
      {/* Interactive glowing orb */}
      <motion.div
        className="cursor-orb"
        style={{
          translateX: smoothX,
          translateY: smoothY,
        }}
      />

      {/* Background orbs */}
      <div className="comparison-orbs">
        <div className="orb gold" style={{ top: "10%", left: "5%" }}></div>
        <div className="orb" style={{ top: "55%", left: "18%" }}></div>
        <div className="orb gold" style={{ top: "30%", right: "6%" }}></div>
        <div className="orb" style={{ bottom: "10%", right: "20%" }}></div>
      </div>

      {/* Heading */}
      <div className="comparison-heading">
        <h2>Why US Futures & Forex Work Better Than Indian Markets</h2>
        <span className="heading-underline"></span>
      </div>

      {/* Cards */}
      <div className="comparison-list">
        {comparison.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ duration: 0.35 }}
            className="comparison-card"
          >
            <h3 className={`comparison-title ${item.color}`}>{item.title}</h3>
            <ul className="comparison-points">
              {item.points.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}