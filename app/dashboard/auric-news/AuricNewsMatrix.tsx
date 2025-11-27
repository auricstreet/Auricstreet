"use client";

import React from "react";
import NewsRail from "./NewsRail";
import "@/app/dashboard/auric-news/auricNewsStyles.css";

export default function AuricNewsMatrix() {
  return (
    <div className="auric-news-wrapper">
      
      <h1 className="auric-news-title">AURIC NEWS MATRIX</h1>

      {/* US Futures Section */}
      <div className="auric-section-block">
        <h2 className="auric-section-heading gold-text">US FUTURES</h2>
        <NewsRail category="futures" />
      </div>

      {/* Forex Section */}
      <div className="auric-section-block">
        <h2 className="auric-section-heading gold-text">FOREX NEWS</h2>
        <NewsRail category="forex" />
      </div>

      {/* Crypto Section */}
      <div className="auric-section-block">
        <h2 className="auric-section-heading gold-text">CRYPTO NEWS</h2>
        <NewsRail category="crypto" />
      </div>
    </div>
  );
}