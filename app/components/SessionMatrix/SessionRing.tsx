"use client";

import React from "react";
import useSessionData from "./useSessionData";
import "@/app/components/SessionMatrix/sessionStyles.css";

export default function SessionRing() {
  const sessions = useSessionData();
  const activeSession = sessions.find((s) => s.active);

  return (
    <div className="session-ring-wrapper">

      {/* Outer cosmic glow */}
      <div className="session-ring-outer-glow"></div>

      {/* Main ring */}
      <div className="session-ring relative">

        {/* Base circle */}
        <svg width="360" height="360" viewBox="0 0 360 360">
          <circle
            cx="180"
            cy="180"
            r="160"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Session arcs */}
        <svg
          className="session-ring-arcs absolute top-0"
          width="360"
          height="360"
          viewBox="0 0 360 360"
        >
          {sessions.map((session, index) => {
            const arcStart = index * 90;
            const arcEnd = arcStart + 90;
            const isActive = session.active;

            return (
              <path
                key={session.id}
                className={`session-arc ${
                  isActive ? "arc-active" : "arc-inactive"
                }`}
                d={describeArc(180, 180, 160, arcStart, arcEnd)}
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Active pulse */}
        {activeSession && <div className="active-session-pulse"></div>}

        {/* ---------------------- */}
        {/* SESSION LABELS AROUND RING */}
        {/* ---------------------- */}

        <div className="session-label top-center">
          {sessions[0].name}
        </div>

        <div className="session-label right-center">
          {sessions[1].name}
        </div>

        <div className="session-label bottom-center">
          {sessions[2].name}
        </div>

        <div className="session-label left-center">
          {sessions[3].name}
        </div>

      </div>
    </div>
  );
}

/* Utility functions for arc drawing */
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}