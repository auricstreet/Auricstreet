"use client";

import Navbar from "../components/Navbar";
import { AuricDust } from "../components/AuricDust";
import Footer from "../components/Footer";
import CosmicBackground from "../components/CosmicBackground";
import CosmicBackgrounds from "../components/CosmicBackgrounds";
import ContactVerifyFinal from "./ContactVerifyFinal";


export default function ContactPage() {
  return (
    <>
  
  <Navbar></Navbar>
  
    <AuricDust />
        <CosmicBackgrounds></CosmicBackgrounds>
    <CosmicBackground>

    <section className="container contact-page z-10">
    <h1 className="section-heading mb-8">CONTACT US </h1>
 
<ContactVerifyFinal></ContactVerifyFinal>
    </section>
    </CosmicBackground>
    
    </>
  );
}
