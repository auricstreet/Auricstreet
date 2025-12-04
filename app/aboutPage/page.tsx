"use client";

import React from "react";
import FadeSlide from "@/app/components/animations/FadeSlide";
import ParticlesBackground from "../components/ParticlesBackground";
import CosmicBackgrounds from "../components/CosmicBackgrounds";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./about.css";   // ✅ normal CSS import

export default function AboutPage() {
  return (
    <section className="pageWrapper">
      <Navbar />
      <ParticlesBackground />
      <CosmicBackgrounds />

      <main className="contentContainer">
        <div className="gridWrapper">

          {/* LEFT SIDE */}
          <div className="leftContent">
            <h1 className="heading fade-in">AURIC STREET PERSONAL NOTE</h1>

            <FadeSlide>
              {noteLines.map((line, index) => (
                <p key={index} className="paragraph">
                  {line}
                </p>
              ))}
              
              
            </FadeSlide>
          </div>

          {/* RIGHT SIDE (Planet) */}
          <div className="rightContent">
            
            <div className="planetContainer">
              <div className="planetCore"></div>
              <div className="planetRing ring1"></div>
              <div className="planetRing ring2"></div>
              <div className="planetRing ring3"></div>
            </div>

            
          </div>
        </div>
        <p className="signature divider fade-in">
                 Every trader deserves a second chance. You&apos;re not late. It&apos;s okay to start again.
              </p>
      </main>

      <Footer />
    </section>
  );
}

const noteLines = [
  "Hi. You landed here for a reason, even if you don’t know it yet.",
  "Maybe you’re curious. Maybe you’re skeptical. Maybe you’re judging us. Maybe you’re rooting for us. Or maybe… you’re searching for a way out of your ordinary life.",
  "Whatever brought you here, this is for you.",
  "We wish we could speak to each one of you in person. So take this note as if we are sitting face-to-face.",
  "Auric Street is not “another trading academy.",
  "There are many academies out there. Some good. Some loud. Some full of promises. Some full of excuses.",
  "We’re not here to join that race. We’re here to build something Kerala hasn’t seen yet, a global trading ecosystem for those who refuse to settle.",
  "What we teach (and what we don’t): We teach US Futures and Forex. Only these. Only what helped us become successful.",
  "❌ Crypto",
  "❌ Indian Stock Market",
  "❌ Hype topics",
  "Not because we can’t. But because the world doesn’t need more “general” academies. It needs one academy that goes deep enough to transform people.",
  "Here, the people who teach… are the people who built this. No hired experts. No part-time mentors.",
  "Our directors themselves teach you, because the responsibility is personal.",
  "Let’s be honest. It’s easy for a mentor to be profitable. What matters is whether they can make YOU profitable.",
  "Fees, commitment and your freedom: You can walk away after the first week with a full refund. No questions.",
  "Our After-Service (where every academy fails):",
  "✔ 5 years community access",
  "✔ Post-course doubt clearing",
  "✔ Weekly guidance",
  "✔ Trackable progress",
  "✔ Mentor involvement beyond the classroom",
  "We welcome criticism. Your hard-earned money deserves honesty.",
  "We are not greedy. We teach for free to underprivileged students with passion and discipline.",
  "If another academy feels right for you… join them. No sales team. No follow-ups. Your dream should chase you, not us.",
  "We take only 30 per batch. Not for hype. But because transformation needs attention.",
  "If you’re still reading… maybe you’re meant to be here.",
  "Thank you for giving us a moment of your life. We’ll meet when you’re ready.",
 
];
