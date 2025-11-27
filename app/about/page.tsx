"use client";
import { useEffect } from "react";
import { initAuricParticles } from "./particles";
import React from "react";
import "./about.css";

export default function AboutPage() {
  useEffect(() => {
    // Scroll fade reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
  });
});

document.querySelectorAll(".about-content p, .about-content ul, .section-header, .divider")
  .forEach(el => observer.observe(el));
  initAuricParticles();
}, []);
  return (

    <section className="about-wrapper">
      {/* HOLOGRAM HEADING */}
      <h1 className="about-title hologram-text">
        AURIC STREET — PERSONAL NOTE TO YOU
      </h1>
      <div className="nebula-fog"></div>
      {/* ROTATING PLANET WITH MOVING RINGS */}
      <div className="planet-container">
        <div className="planet-core"></div>
        <div className="planet-ring ring-1"></div>
        <div className="planet-ring ring-2"></div>
        <div className="planet-ring ring-3"></div>
        <div className="planet-fog"></div>
      </div>
      <div className="scroll-indicator">SCROLL TO CONTINUE</div>

      {/* PERSONAL NOTE TEXT */}
      <div className="about-content scroll-fade">
        <p className="pulse-line">Hi.</p>
        <p>You landed here for a reason, even if you don’t know it yet.</p>
        <p>Maybe you’re curious.</p>
        <p>Maybe you’re skeptical.</p>
        <p>Maybe you’re judging us.</p>
        <p>Maybe you’re rooting for us.</p>
        <p>Or maybe… you’re searching for a way out of your ordinary life.</p>

        <p>Whatever brought you here — this is for you.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">We wish we could speak to each one of you in person.</h2>
        <p>So take this note as if we are sitting face-to-face.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">Auric Street is not “another trading academy”.</h2>

        <p>There are many academies out there.</p>
        <p className="pulse-line">Some good.</p>
        <p className="pulse-line">Some loud.</p>
        <p className="pulse-line">Some full of promises.</p>
        <p className="pulse-line">Some full of excuses.</p>

        <p>
          We’re not here to join that race.  
          We’re here to build something Kerala hasn’t seen yet —  
          a global trading ecosystem for those who refuse to settle.
        </p>

        <p className="divider">⸻</p>

        <h2 className="section-header">What we teach (and what we don’t)</h2>

        <p className="pulse-line">We teach US Futures and Forex. Only these. Only what we mastered.</p>
        <ul className="no-list">
          <li className="pulse-line">❌ Crypto</li>
          <li className="pulse-line">❌ Indian Stock Market</li>
          <li className="pulse-line">❌ Options casino</li>
          <li className="pulse-line">❌ Hype topics</li>
        </ul>

        <p>
          Not because we can’t.  
          But because the world doesn’t need more “general” academies.  
          It needs one academy that goes deep enough to transform people.
        </p>

        <p className="divider">⸻</p>

        <h2 className="section-header">Here, the people who teach… are the people who built this.</h2>

        <p className="pulse-line">No hired experts.  
        No part-time mentors.  
        No employees reading slides.</p>

        <p>
          Our directors themselves teach you —  
          because the responsibility is personal.
        </p>

        <p>
          Our cameraman trades.  
          Everyone here trades first and works second.
        </p>

        <p className="divider">⸻</p>

        <h2 className="section-header">Let’s be honest.</h2>
        <p>
          It’s easy for a mentor to be profitable.  
          What matters is whether they can make YOU profitable.
        </p>

        <p className="divider">⸻</p>

        <h2 className="section-header pulse-line">Fees, commitment, and your freedom.</h2>

        <p>You can walk away after the first week with a full refund. No questions.</p>
        <p>But there is one rule: one hour a day for 60 days.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">Our After-Service (where every academy fails)</h2>

        <ul className="no-list">
          <li className="pulse-line">✔ Lifetime community access</li>
          <li className="pulse-line">✔ Post-course doubt clearing</li>
          <li className="pulse-line">✔ Weekly guidance</li>
          <li className="pulse-line">✔ Trackable progress</li>
          <li className="pulse-line">✔ Mentor involvement beyond the classroom</li>
        </ul>

        <p className="divider">⸻</p>

        <h2 className="section-header">We welcome criticism.</h2>

        <p>Your hard-earned money deserves honesty, not applause.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">We are not greedy.</h2>
        <p>We teach for free to underprivileged students with passion and discipline.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">If another academy feels right for you… join them.</h2>

        <p className="pulse-line">No sales team.  
        No follow-ups.  
        Your dream should chase you, not us.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">We take only 30 per batch.</h2>
        <p>Not for hype.  
        But because transformation needs attention.</p>

        <p className="divider">⸻</p>

        <h2 className="section-header">If you’re still reading… maybe you’re meant to be here.</h2>

        <p className="pulse-line">
          Thank you for giving us a moment of your life.  
          We’ll meet when you’re ready.
        </p>

        <p className="divider">⸻</p>

        <h2 className="section-header">Every trader deserves a second chance.</h2>

        <p>You’re not late.  
        It’s okay to start again.</p>

        <br />

        <p className="signature">— Team Auric Street  
        Global Trading Ecosystem  
        Escape the Ordinary.</p>
        
      </div>
      
    </section>
   
  );
}