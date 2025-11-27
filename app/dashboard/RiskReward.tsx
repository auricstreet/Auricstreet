"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RiskReward() {
  const [balance, setBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [entry, setEntry] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [target, setTarget] = useState("");

  const [results, setResults] = useState({
    riskAmount: 0,
    pipRisk: 0,
    pipReward: 0,
    rr: 0,
    lotSize: 0,
  });

  const isReady =
    balance && riskPercent && entry && stopLoss && target;

  useEffect(() => {
    if (!isReady) return;

    const balanceNum = parseFloat(balance);
    const riskPercentNum = parseFloat(riskPercent);
    const entryNum = parseFloat(entry);
    const slNum = parseFloat(stopLoss);
    const tpNum = parseFloat(target);

    const riskAmount = (balanceNum * riskPercentNum) / 100;

    const decimals = entry.includes(".")
      ? entry.split(".")[1].length
      : 1;

    const pipRisk =
      Math.abs(entryNum - slNum) * Math.pow(10, decimals);

    const pipReward =
      Math.abs(tpNum - entryNum) * Math.pow(10, decimals);

    const rr = pipReward / pipRisk;
    const lotSize = riskAmount / pipRisk / 0.1;

    setResults({
      riskAmount: riskAmount || 0,
      pipRisk: pipRisk || 0,
      pipReward: pipReward || 0,
      rr: rr || 0,
      lotSize: lotSize || 0,
    });
  }, [balance, riskPercent, entry, stopLoss, target]);

  return (
    <div className="risk-container">
      {/* LEFT — INPUTS */}
      <div className="risk-input-box">
        <h2 className="calc-title ">Calculate risk,reward and optimal targets instantly.</h2>

        <div className="calc-grid-2col">
          <input
            className="calc-input"
            placeholder="Account Balance"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <input
            className="calc-input"
            placeholder="Risk %"
            value={riskPercent}
            onChange={(e) => setRiskPercent(e.target.value)}
          />

          <input
            className="calc-input"
            placeholder="Entry Price"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <input
            className="calc-input"
            placeholder="Stop Loss Price"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
          />

          <input
            className="calc-input full-span"
            placeholder="Target Price"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
      </div>

      {/* RIGHT — RESULTS PANEL */}
      <AnimatePresence>
        {isReady && (
          <motion.div
            key="result-box"
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="results-glass"
          >
            <h3 className="result-title">Results</h3>

            <div className="results-list">
              <p>💸 Risk Amount: <span>${results.riskAmount.toFixed(2)}</span></p>
              <p>📉 Pips Risk: <span>{results.pipRisk.toFixed(1)}</span></p>
              <p>📈 Pips Reward: <span>{results.pipReward.toFixed(1)}</span></p>
              <p>⚖️ R:R Ratio: <span>{results.rr.toFixed(2)}</span></p>
              <p>📊 Lot Size: <span>{results.lotSize.toFixed(2)}</span></p>
            </div>
       
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
