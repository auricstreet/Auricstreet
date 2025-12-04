"use client";

import React, { useState } from "react";
import "./contact-verify-final.css";

const SUPPORT_NUMBER = "916282939341"; // YOUR AURIC STREET WHATSAPP BUSINESS NUMBER

// Generates unique Signature ID per lead
function genSignatureId() {
  const part1 = Date.now().toString(36).toUpperCase();
  const part2 = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AURIC-${part1}-${part2}`;
}

export default function ContactVerifyFinal() {
  const [stage, setStage] = useState<"form" | "verify" | "awaiting" | "done">(
    "form"
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [expectation, setExpectation] = useState("");
  const [signatureId, setSignatureId] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function validPhone(p: string) {
    const clean = p.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(clean);
  }

  // ⬇️ STEP 1 : FORM SUBMIT → SAVE TO GOOGLE SHEETS → GO TO VERIFY STAGE
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    if (!validPhone(phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setLoading(true);

    const sig = genSignatureId();
    setSignatureId(sig);

    // Payload sent to Google Sheets
    const payload = {
      name,
      phone,
      place,
      expectation,
      signatureId: sig,
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
      setStage("verify");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  }

  // Build WhatsApp link text
  function buildWaLink() {
    const clean = phone.replace(/\D/g, "");
    const full = clean.length === 10 ? "91" + clean : clean;

    const text = encodeURIComponent(
      `🔐 AURIC STREET VERIFICATION REQUEST\n\n` +
        `Name: ${name}\n` +
        `Phone: ${full}\n` +
        `Place: ${place}\n` +
        `Expectation: ${expectation}\n\n` +
        `Signature ID: ${signatureId}\n` +
        `I request verification to receive the Auric Street Brochure.`
    );

    return `https://wa.me/${SUPPORT_NUMBER}?text=${text}`;
  }

  // STEP 2: redirect to WhatsApp → then show awaiting
  function openWhatsApp() {
    window.open(buildWaLink(), "_blank");
    setStage("awaiting");
  }

  // STEP 3: user confirms they received the brochure
  function markDone() {
    setStage("done");
  }

  return (
    <div className="auric-verification-wrapper">
      {/* ---------------- FORM ---------------- */}
      {stage === "form" && (
        <form className="auric-form-card" onSubmit={handleSubmit}>
          <h2 className="form-title">Begin Your Registration</h2>
          <p className="form-sub">
            Only 30 seats per batch. Verification required.
          </p>

          <input
            className="input"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="Primary Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="Your Place (Optional)"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />

          <textarea
            className="textarea"
            placeholder="What do you expect from us?"
            value={expectation}
            onChange={(e) => setExpectation(e.target.value)}
            required
          />

          {error && <div className="form-error">{error}</div>}

          <button className="btn-submit" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit →"}
          </button>
        </form>
      )}

      {/* ---------------- VERIFICATION CARD ---------------- */}
      {stage === "verify" && (
        <div className="verify-card">
          <h2 className="verify-title">Verify Yourself to Continue</h2>
          <p className="verify-sub">
            To avoid fake submissions, complete a quick WhatsApp verification.
          </p>

          <div className="verify-details">
            <div>
              <strong>Name:</strong> {name}
            </div>
            <div>
              <strong>Phone:</strong> {phone}
            </div>
            <div className="sig">
              <strong>Signature ID:</strong> {signatureId}
            </div>
          </div>

          <button className="btn-wa" onClick={openWhatsApp}>
            VERIFY ON WHATSAPP →
          </button>

          <small className="verify-foot">
            Only verified users can access the brochure.
          </small>
        </div>
      )}

      {/* ---------------- WAITING STATE ---------------- */}
      {stage === "awaiting" && (
        <div className="awaiting-card">
          <div className="loader"></div>

          <h2>Waiting for your WhatsApp message…</h2>
          <p>
            We opened WhatsApp for you. Send the message and our team will reply
            with your brochure.
          </p>

          <a
            href="/Auric_street_Brochure.pdf"
            download="Auric_Street_Brochure.pdf"
            className="btn-outline"
            onClick={markDone}
          >
            I have received the brochure →
          </a>
        </div>
      )}

      {/* ---------------- SUCCESS ---------------- */}
      {stage === "done" && (
        <div className="success-card">
          <h2>Verified Successfully ✔</h2>
          <p>
            Thank you! If you haven&apos;t received the brochure yet, our team will
            contact you directly.
          </p>
        </div>
      )}
    </div>
  );
}
