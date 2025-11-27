
import AnomalyLight from "../components/AlienFX/AnomalyLight";
import { AuricDust } from "../components/AuricDust";
import CosmicBackground from "../components/CosmicBackground";
import MindsetTest from "./Mindset";

export default function Curriculum() {
  return (
    <section className="relative">
     
      {/* SECTION-ONLY ALIEN EFFECTS */}
      <CosmicBackground>
      
      <AnomalyLight />
      <AuricDust />
      
      {/* Particle Layer */}
      <div className="curriculum-header text-center mb-10">
        <h1 className="auric-heading">Your Trader Mindset Score</h1>
        <p className="curriculum-sub">
          Your transformation begins here — build skill, discipline, and
          conviction.
        </p>
        <MindsetTest />
      </div>
      </CosmicBackground>
    </section>
  );
}
