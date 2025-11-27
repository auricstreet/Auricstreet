"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsistencyFields =
  | "balance"
  | "maxDailyLoss"
  | "maxTotalLoss"
  | "daysTraded"
  | "biggestWin"
  | "biggestLoss"
  | "avgWin"
  | "avgLoss"
  | "totalTrades";

interface ResultState {
  rule1: boolean;
  rule2: boolean;
  rule3: boolean;
  rule4: boolean;
  rule5: boolean;
  passed: boolean;
  messages: string[];
}

export default function ConsistencyRule() {
  const [data, setData] = useState<Record<ConsistencyFields, string>>({
    balance: "",
    maxDailyLoss: "",
    maxTotalLoss: "",
    daysTraded: "",
    biggestWin: "",
    biggestLoss: "",
    avgWin: "",
    avgLoss: "",
    totalTrades: "",
  });

  const [result, setResult] = useState<ResultState | null>(null);

  const handleChange = (field: ConsistencyFields, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const {
      maxDailyLoss,
      maxTotalLoss,
      daysTraded,
      biggestWin,
      biggestLoss,
      avgWin,
      avgLoss,
      totalTrades,
    } = data;

    const mdl = parseFloat(maxDailyLoss);
    const mtl = parseFloat(maxTotalLoss);
    const bw = parseFloat(biggestWin);
    const bl = parseFloat(biggestLoss);
    const aw = parseFloat(avgWin);
    const al = parseFloat(avgLoss);
    const trades = parseFloat(totalTrades);
    const days = parseFloat(daysTraded);

    const estimatedProfit = aw * trades;

    const rule1 = bl <= mdl;
    const rule2 = bl <= mtl;
    const rule3 = bw <= estimatedProfit * 0.4;
    const rule4 = al <= aw * 1.5;
    const rule5 = days >= 5;

    const messages = [];

    if (!rule1)
      messages.push(`❌ Max Daily Loss — Your largest loss ($${bl}) exceeds allowed daily limit ($${mdl}). Reduce risk size.`);

    if (!rule2)
      messages.push(`❌ Total Drawdown Risk — Your loss exceeds the program’s total allowed drawdown ($${mtl}).`);

    if (!rule3)
      messages.push(`❌ Profit Spike Issue — Your biggest win is too large compared to total profit. Aim for more consistent wins.`);

    if (!rule4)
      messages.push(`❌ Risk Control — Your average loss (${al}) exceeds healthy ratio compared to average win (${aw}). Reduce stop loss or size.`);

    if (!rule5)
      messages.push(`❌ Trading Frequency — Only ${days} days recorded. Minimum required is 5.`);

    if (messages.length === 0)
      messages.push(`🟢 Excellent — Your metrics align with funded account consistency standards.`);

    setResult({
      rule1,
      rule2,
      rule3,
      rule4,
      rule5,
      passed: rule1 && rule2 && rule3 && rule4 && rule5,
      messages,
    });
  };

  return (
    <div className="risk-container">

      {/* LEFT — Inputs */}
      <div className="risk-input-box">
        <div className="calc-grid-2col">
          {(
            [
              ["balance", "Account Balance"],
              ["maxDailyLoss", "Max Daily Loss Allowed"],
              ["maxTotalLoss", "Max Total Loss Allowed"],
              ["daysTraded", "Trading Days Completed"],
              ["biggestWin", "Biggest Win"],
              ["biggestLoss", "Biggest Loss"],
              ["avgWin", "Average Win"],
              ["avgLoss", "Average Loss"],
              ["totalTrades", "Total Trades"],
            ] as [ConsistencyFields, string][]
          ).map(([field, label]) => (
            <input
              key={field}
              className={`calc-input ${field === "totalTrades" ? "full-span" : ""}`}
              placeholder={label}
              value={data[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          ))}

          <button className="gold-btn full-span" onClick={calculate}>
            Check Consistency
          </button>
        </div>
      </div>

      {/* RIGHT — Result Panel */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="results-glass"
          >
            <h3 className={`results-title ${result.passed ? "passed" : "failed"}`}>
              {result.passed ? "🟢 Funding-Ready Trade Profile" : "🔴 Needs Improvement"}
            </h3>

            {/* Explanation Mode */}
            <ul className="explain-list">
              {result.messages.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
