"use client";

import { useState } from "react";
import { QUESTIONS } from "./questions";
import "./mindset.css";

export default function MindsetTest() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const isFinished = step >= QUESTIONS.length;

  function handleSelect(points: number) {
    setScore(score + points);

    // Wait for animation
    setTimeout(() => {
      setStep(step + 1);
    }, 280);
  }

  const totalPossible = QUESTIONS.length * 4;
  const percentage = Math.round((score / totalPossible) * 100);

  return (
    <div className="mindset-wrapper">

      {!isFinished && (
        <div className="question-card fade-slide">
          <h2 className="question-text">
            {QUESTIONS[step].q}
          </h2>

          <div className="options">
            {QUESTIONS[step].options.map((opt, i) => (
              <button
                key={i}
                className="option-btn"
                onClick={() => handleSelect(opt.score)}
              >
                {opt.text}
              </button>
            ))}
          </div>

          <div className="progress">
            Question {step + 1} / {QUESTIONS.length}
          </div>
        </div>
      )}

      {isFinished && (
        <div className="result-screen fade-in">

          <h2 className="result-title">Your Trader Mindset Score</h2>

          {/* Glowing Mindset Meter */}
          <div className="meter-wrapper">
            <div className="meter-glow"></div>

            <div className="meter-circle">
              <div
                className="meter-fill"
                style={{ ["--p"]: `${percentage}` } as React.CSSProperties}

              ></div>

              <div className="meter-value">{percentage}</div>
            </div>
          </div>

          {/* Result message */}
          <p className="result-msg">
            {percentage >= 80
              ? "Elite Mindset - You think like a long-term trader."
              : percentage >= 60
              ? "Strong Mindset — With guidance, you’ll perform well."
              : percentage >= 40
              ? "Developing Mindset - You’re improving, stay consistent."
              : "Emotional Zone — You need structure, discipline and coaching."}
          </p>

          <a href="/contact" className="result-cta">
            Begin Your Second Chance →
          </a>
        </div>
      )}
    </div>
  );
}