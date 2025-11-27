"use client";
import { useEffect, useState } from "react";
import "./auricTicker.css";

type TickerItem = {
  symbol: string;
  price: string;
  change: string;
};

export default function AuricTicker() {
  const [data, setData] = useState<TickerItem[]>([]);

  async function loadData() {
    try {
      const res = await fetch("/api/ticker", { cache: "no-store" });
      const json = await res.json();

      if (Array.isArray(json)) {
        setData(json as TickerItem[]);
      }
    } catch (err) {
      console.error("Ticker fetch failed:", err);
    }
  }

 useEffect(() => {
  let mounted = true;

  const init = async () => {
    if (mounted) await loadData();
  };

  init();

  const interval = setInterval(() => {
    if (mounted) loadData();
  }, 10000);

  return () => {
    mounted = false;
    clearInterval(interval);
  };
}, []);

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {data.map((item, i) => (
          <div key={i} className="ticker-item">
            <span className="symbol">{item.symbol}</span>
            <span className={`change ${parseFloat(item.change) >= 0 ? "up" : "down"}`}>
              {item.change}%
            </span>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
