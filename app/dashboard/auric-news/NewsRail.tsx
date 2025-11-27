"use client";

import React, { useEffect, useRef, useState } from "react";
import getFuturesNews from "./fetchers/getFuturesNews";
import getForexNews from "./fetchers/getForexNews";
import getCryptoNews from "./fetchers/getCryptoNews";

interface NewsItem {
  title: string;
  link: string;
  time: string;
}

export default function NewsRail({ category }: { category: string }) {
  const [items, setItems] = useState<NewsItem[]>([]);
  const railRef = useRef<HTMLDivElement>(null);

  // Fetch correct news feed
  useEffect(() => {
    async function load() {
      let data: NewsItem[] = [];

      if (category === "futures") data = await getFuturesNews();
      if (category === "forex") data = await getForexNews();
      if (category === "crypto") data = await getCryptoNews();

      // Duplicate items to create infinite loop
      setItems([...data, ...data]);
    }
    load();
  }, [category]);

  return (
    <div className="news-rail-container">
      <div className="news-rail-track" ref={railRef}>
        {items.map((item, i) => (
          <a
            key={i}
            className="news-card"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="news-title">{item.title}</h3>
            <p className="news-time">{item.time}</p>
          </a>
        ))}
      </div>
    </div>
  );
}