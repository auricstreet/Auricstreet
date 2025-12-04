
import AnomalyLight from "../components/AlienFX/AnomalyLight";
import { AuricDust } from "../components/AuricDust";
import CosmicBackground from "../components/CosmicBackground";
import Navbar from "../components/Navbar";
import MindsetTest from "./Mindset";

export default function Curriculum() {
  return (
    <section className="relative">
     
      {/* SECTION-ONLY ALIEN EFFECTS */}
      <CosmicBackground>
      
      <AnomalyLight />
      <AuricDust />
      
      <Navbar></Navbar>
      
      {/* Particle Layer */}
      <div className="curriculum-header text-center mb-10">
        <h1 className="auric-heading">Your Trader Mindset Score</h1>
        <p className="curriculum-sub">
          Your transformation begins here <br></br><span className="curriculum-sub-span">Build skill, discipline and
          conviction.</span> 
        </p>
        <MindsetTest />
      </div>
      </CosmicBackground>
    </section>
  );
}
