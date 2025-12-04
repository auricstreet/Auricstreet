"use client";


import Navbar from "../components/Navbar";
import RiskReward from "./RiskReward";
import ConsistencyRule from "./ConsistencyRule";
import AuricNewsMatrix from "./auric-news/AuricNewsMatrix";
import Footer from "../components/Footer";
import AuricTicker from "@/app/components/AuricTicker/AuricTicker";
import CosmicBackground from "../components/CosmicBackground";
import AuricQuantumSphere from "../components/AlienFX/AuricQuantumSphere";

export default function DashboardPage() {

  return (
    <>
    <div className="min-h-screen px-6 md:px-12 py-16 relative">

<Navbar></Navbar>

      <AuricTicker />
      <CosmicBackground>
      {/* Background */}
      <div className="auric-dashboard-bg"></div>
      <div className="auric-particles">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* HEADER */}
      <div className="dashboard-header">
        <h1 className="text-4xl font-bold gold-gradient mb-2">
          AURIC DASHBOARD V1 
        </h1>
        
        <p className="text-gray-300 mb-12">
          Your personal trading command center for live calculations.
        </p>
      </div>

      {/* === TERMINAL ROW 1: RISK ENGINE === */}
      <div className="terminal-row">

        {/* Left — Risk Calculator */}
        <div className="terminal-panel">
          <h2 className="terminal-title">Auric Risk–Reward Calculator</h2>
          <RiskReward />
        </div>

        {/* Right — Preview Box Placeholder (Future Upgrade) */}
       <div className="flex justify-center mt-10">
  <AuricQuantumSphere size={300} />
</div>

      </div>

      {/* Divider */}
      <div className="terminal-divider"></div>

      {/* === TERMINAL ROW 2 — CONSISTENCY === */}
      <div className="terminal-wide">
        <h2 className="terminal-title">Auric Consistency Rule Calculator </h2>
        <ConsistencyRule />
      </div>

      {/* Divider */}
      <div className="terminal-divider"></div>

      {/* === TERMINAL ROW 3 — NEWS === */}
      <div className="terminal-wide">
        <h2 className="terminal-title">Live Market News</h2>
        <AuricNewsMatrix />
      </div>
</CosmicBackground>
    </div>
    <Footer></Footer>
    </>
  );
}
