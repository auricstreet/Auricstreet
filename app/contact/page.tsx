"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { AuricDust } from "../components/AuricDust";
import Footer from "../components/Footer";
import CosmicBackground from "../components/CosmicBackground";
import CosmicBackgrounds from "../components/CosmicBackgrounds";
import "./brochure.css";


// Types for form fields
type ContactFormElements = HTMLFormControlsCollection & {
  name: HTMLInputElement;
  phone1: HTMLInputElement;
  phone2: HTMLInputElement;
  place: HTMLInputElement;
  expectations: HTMLTextAreaElement;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const modal = document.getElementById("brochureModal");
    if (modal) {
      modal.style.display = "flex";
    }

    const form = e.currentTarget as HTMLFormElement & {
      elements: ContactFormElements;
    };

    const payload = {
      name: form.elements.name.value,
      phone1: form.elements.phone1.value,
      phone2: form.elements.phone2.value,
      place: form.elements.place.value,
      expectations: form.elements.expectations.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyUa2KsHQe44x5S2JL1kjCPApFjvk1vt-CZdsEiX84rJJ9H5cqpSHL5zWWh6zfEzT3L5Q/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      setLoading(false);
      setSuccess(true);
      form.reset();

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
  
  <Navbar></Navbar>
  
    <AuricDust />
        <CosmicBackgrounds></CosmicBackgrounds>
    <CosmicBackground>

    <section className="container contact-page z-10 mt-[60px] mb-[120px]">
      <h1 className="section-heading mb-8">CONTACT US </h1>

      <p className="contact-sub">
        Only 30 seats. We accept only serious learners who can give 200% effort.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <input
          name="name"
          required
          placeholder="Your Name"
          className="input-field"
        />

        <input
          name="phone1"
          required
          placeholder="Primary Phone Number"
          className="input-field"
        />

        <input
          name="phone2"
          placeholder="Secondary Phone Number (Optional)"
          className="input-field"
        />

        <input
          name="place"
          required
          placeholder="Your Place"
          className="input-field"
        />

        <textarea
          name="expectations"
          required
          placeholder="What do you expect from us?"
          className="textarea-field"
        />

        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit →"}
        </motion.button>

        {success && (
          <motion.div
            className="success-popup"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✓ Submitted Successfully
          </motion.div>
        )}
      </form>
      {/* BROCHURE DOWNLOAD MODAL */}
<div id="brochureModal" className="modal-hidden">
  <div className="modal-box">
    <h2>Your Brochure is Ready</h2>
    <p>Thank you for reaching out! Download the Auric Street Brochure below.</p>

    <a 
      href="/Auric_street_Brochure.pdf"
      download="Auric_Street_Brochure.pdf"
      className="gold-download-btn"
    >
      Download Brochure 📄
    </a>
  </div>
</div>
    </section>
    </CosmicBackground>
    
    </>
  );
}
