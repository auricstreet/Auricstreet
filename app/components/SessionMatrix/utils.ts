import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const sessions = [
  {
    id: "asian",
    name: "Asian Session",
    start: "00:00",
    end: "09:00",
    volatility: "medium",
  },
  {
    id: "london",
    name: "London Session",
    start: "08:00",
    end: "17:00",
    volatility: "high",
  },
  {
    id: "newyork",
    name: "New York Session",
    start: "13:00",
    end: "22:00",
    volatility: "high",
  },
  {
    id: "sydney",
    name: "Sydney Session",
    start: "22:00",
    end: "06:00",
    volatility: "low",
  },
];

export function isSessionOpen(start: string, end: string) {
  const now = dayjs().tz("Etc/UTC");
  const s = dayjs.tz(start, "HH:mm", "Etc/UTC");
  const e = dayjs.tz(end, "HH:mm", "Etc/UTC");

  if (e.isBefore(s)) return now.isAfter(s) || now.isBefore(e);
  return now.isAfter(s) && now.isBefore(e);
}

export function getCountdownTo(time: string) {
  const now = dayjs().tz("Etc/UTC");
  let target = dayjs.tz(time, "HH:mm", "Etc/UTC");

  if (target.isBefore(now)) target = target.add(1, "day");

  const diff = target.diff(now, "second");

  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;

  return `${h}h ${m}m ${s}s`;
}