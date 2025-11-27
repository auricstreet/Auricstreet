"use client";

import React from "react";
import useSessionData from "./useSessionData";
import SessionRing from "./SessionRing";
import "@/app/components/SessionMatrix/sessionStyles.css";
import BluePlanetRings from "../AlienFX/BluePlanetRings";
import CosmicOrbitLayer from "../CosmicFog";


export default function SessionMatrix() {
  const sessions = useSessionData();

  return (
    <section className="session-matrix-section">
      <div className="relative">
        <CosmicOrbitLayer />
        <BluePlanetRings size={300} />

        {/* TITLE */}
        <h2 className="session-matrix-title">AURIC SESSION MATRIX</h2>

        {/* SUBTEXT */}
        <p className="session-matrix-sub">
          Real-time global trading sessions with countdowns, volatility levels,
          and dynamic cosmic glow.
        </p>

        {/* SESSION RING CENTERPIECE */}
        <div className="session-ring-container">
          <SessionRing />
        </div>

        {/* SESSION CARDS */}
        <div className="session-grid">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`session-card ${
                session.active ? "session-card-active" : ""
              }`}
            >
              {/* Session Name */}
              <h3 className="session-card-title">{session.name}</h3>

              {/* Active / Closed */}
              <p className="session-card-status">
                {session.active ? (
                  <span className="status-open">ACTIVE</span>
                ) : (
                  <span className="status-closed">CLOSED</span>
                )}
              </p>

              {/* Countdown */}
              <p className="session-card-timer">
                {session.active ? "Closes in:" : "Opens in:"}
              </p>
              <p className="countdown">
                {session.countdown.hours}h {session.countdown.minutes}m{" "}
                {session.countdown.seconds}s
              </p>

              {/* Volatility */}
              <p className="session-card-vol">
                Volatility:{" "}
                <span
                  className={`vol-tag vol-${session.volatility.toLowerCase()}`}
                >
                  {session.volatility}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
