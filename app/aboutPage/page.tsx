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
  "Classes and curriculum are conducted by Auric Street founder and mentor Akhil T S US Futures and Forex trader."
 
];
