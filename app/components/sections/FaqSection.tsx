"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuricDust } from "../AuricDust";
import CosmicBackground from "../CosmicBackground";


const faqs = [
  {
    q: "Who can join Auric Street?",
    a: "Anyone above 18 years old. Below 18 can learn only with parental permission. Working professionals are most welcome — our classes are structured around your schedule."
  },
  {
    q: "Do I need any prior trading experience?",
    a: "No. Our entire 60-day roadmap takes you from absolute basics to funded trader level with discipline and clarity."
  },
  {
    q: "Is this course beginner friendly?",
    a: "Yes. In fact, beginners perform better because they don’t have to unlearn bad habits from option-buying strategies."
  },
  {
    q: "Do we teach option buying or Indian stock market?",
    a: "No. We avoid retail traps like option buying. We focus on US Futures & Forex - cleaner, structured and easier for working professionals."
  },
  {
    q: "Is this a scam? Will I really make money?",
    a: "We don’t promise money. We promise discipline, structure, real education and a transparent path to become a funded trader if you follow the rules."
  },
  {
    q: "Why only 30 students per batch?",
    a: "We focus on quality. Every student gets personal attention. We don’t believe in mass selling or fake marketing tactics."
  },
  {
    q: "Why don’t you have a sales team?",
    a: "Because every team member is a trader or a learning trader. No one will call or follow up. Only serious learners should contact us."
  },
  {
    q: "Will you help us get funded?",
    a: "Yes. We guide you through evaluations, rules, backtesting, discipline templates and prepare you for real funded challenges."
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <CosmicBackground>
    <section className="faq-section container relative z-10 mt-[140px]auric-light bg-black">
  <AuricDust  />
  
      <h2 className="section-heading mb-10">Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div key={idx} className="faq-item">

            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="faq-question"
            >
              <span>{item.q}</span>

              <motion.span
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                className="faq-plus"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
    </CosmicBackground>
  );
}
