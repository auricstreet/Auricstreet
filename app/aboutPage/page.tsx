// app/about/page.tsx
"use client";

import React from "react";
import FadeSlide from "@/app/components/animations/FadeSlide";
import ParticlesBackground from "../components/ParticlesBackground";
import CosmicBackgrounds from "../components/CosmicBackgrounds";

export default function AboutPage() {
  return (
    <section>
 <ParticlesBackground></ParticlesBackground>
<CosmicBackgrounds></CosmicBackgrounds>
    <main>
 
<FadeSlide>
  <h1 className="heading">AURIC STREET — PERSONAL NOTE</h1>
  

  {noteLines.map((line, index) => (
    <p key={index}>{line}</p>
  ))}
</FadeSlide>

    </main>
    </section>
  );
}
const noteLines = [
  "Hi. You landed here for a reason, even if you don’t know it yet.",
  "Maybe you’re curious. Maybe you’re skeptical. Maybe you’re judging us. Maybe you’re rooting for us. Or maybe… you’re searching for a way out of your ordinary life.",
  "Whatever brought you here — this is for you.",
  "We wish we could speak to each one of you in person. So take this note as if we are sitting face-to-face.",
  "Auric Street is not “another trading academy”.",
  "There are many academies out there. Some good. Some loud. Some full of promises. Some full of excuses.",
  "We’re not here to join that race. We’re here to build something Kerala hasn’t seen yet — a global trading ecosystem for those who refuse to settle.",
  "What we teach (and what we don’t): We teach US Futures and Forex. Only these. Only what we mastered.",
  "❌ Crypto\n❌ Indian Stock Market\n❌ Options casino\n❌ Hype topics",
  "Not because we can’t. But because the world doesn’t need more “general” academies. It needs one academy that goes deep enough to transform people.",
  "Here, the people who teach… are the people who built this. No hired experts. No part-time mentors. No employees reading slides.",
  "Our directors themselves teach you — because the responsibility is personal.",
  "Our cameraman trades. Everyone here trades first and works second.",
  "Let’s be honest. It’s easy for a mentor to be profitable. What matters is whether they can make YOU profitable.",
  "Fees, commitment, and your freedom: You can walk away after the first week with a full refund. No questions. But there is one rule: one hour a day for 60 days.",
  "Our After-Service (where every academy fails):",
  "✔ Lifetime community access",
  "✔ Post-course doubt clearing",
  "✔ Weekly guidance",
  "✔ Trackable progress",
  "✔ Mentor involvement beyond the classroom",
  "We welcome criticism. Your hard-earned money deserves honesty, not applause.",
  "We are not greedy. We teach for free to underprivileged students with passion and discipline.",
  "If another academy feels right for you… join them. No sales team. No follow-ups. Your dream should chase you, not us.",
  "We take only 30 per batch. Not for hype. But because transformation needs attention.",
  "If you’re still reading… maybe you’re meant to be here.",
  "Thank you for giving us a moment of your life. We’ll meet when you’re ready.",
  "Every trader deserves a second chance. You're not late. It's okay to start again."
];
