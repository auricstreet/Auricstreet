"use client";

import { useEffect, useMemo, useState } from "react";

type Session = {
  id: string;
  name: string;
  startUTC: number;
  endUTC: number;
};

type SessionState = Session & {
  localStart: number;
  localEnd: number;
  active: boolean;
  countdown: { hours: number; minutes: number; seconds: number };
  volatility: "Low" | "Medium" | "High";
  nextSessionOpens: number | null;
};

const SESSION_DATA: Session[] = [
  { id: "sydney", name: "Sydney", startUTC: 22, endUTC: 7 },
  { id: "tokyo", name: "Tokyo (Asia)", startUTC: 23, endUTC: 8 },
  { id: "london", name: "London", startUTC: 7, endUTC: 16 },
  { id: "newyork", name: "New York", startUTC: 13, endUTC: 22 }
];

// -------------------------------------------
// Convert a UTC hour → Local hour only once
// -------------------------------------------
function convertUTCToLocal(utcHour: number): number {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), utcHour)).getHours();
}

// -------------------------------------------
function isActive(localStart: number, localEnd: number, hour: number) {
  return localStart < localEnd
    ? hour >= localStart && hour < localEnd
    : hour >= localStart || hour < localEnd; // midnight wrap
}

// -------------------------------------------
function calculateCountdown(target: number): { hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const t = new Date();
  t.setHours(target, 0, 0, 0);

  let diff = t.getTime() - now.getTime();
  if (diff < 0) diff += 86400000; // next day

  return {
    hours: Math.floor(diff / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  };
}

// -------------------------------------------
// Dynamic volatility w/ timezone correction
// -------------------------------------------
function computeVolatility(session: Session, active: boolean, hour: number): "Low" | "Medium" | "High" {
  if (!active) return "Low";

  // Major overlap window — London + New York open
  const londonUTC = 7;
  const newYorkUTC = 13;

  const londonLocal = convertUTCToLocal(londonUTC);
  const nyLocal = convertUTCToLocal(newYorkUTC);

  const overlapStart = londonLocal;
  const overlapEnd = convertUTCToLocal(16); // London close

  if (hour >= overlapStart && hour <= overlapEnd && (session.id === "london" || session.id === "newyork"))
    return "High";

  return "Medium";
}

// -------------------------------------------
// Hook
// -------------------------------------------
export default function useSessionData() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const data = useMemo<SessionState[]>(() => {
    const currentHour = currentTime.getHours();

    return SESSION_DATA.map((session) => {
      const localStart = convertUTCToLocal(session.startUTC);
      const localEnd = convertUTCToLocal(session.endUTC);

      const active = isActive(localStart, localEnd, currentHour);

      return {
        ...session,
        localStart,
        localEnd,
        active,
        countdown: calculateCountdown(active ? localEnd : localStart),
        volatility: computeVolatility(session, active, currentHour),
        nextSessionOpens: active ? null : localStart
      };
    });
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return data;
}
