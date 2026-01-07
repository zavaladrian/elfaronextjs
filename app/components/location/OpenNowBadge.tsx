"use client";

import { useEffect, useMemo, useState } from "react";

type HoursRule = {
  days: number[];   // 0=Sun ... 6=Sat
  open: string;     // "06:00"
  close: string;    // "03:00" (can be next day if earlier than open)
};

export type HoursConfig = {
  tz?: string; // default America/Chicago
  rules: HoursRule[];
};

function getPartsInTZ(date: Date, timeZone: string) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const parts = fmt.formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  const weekdayShort = get("weekday"); // Sun/Mon/...
  const weekdayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  return {
    dow: weekdayMap[weekdayShort] ?? 0,
    hour: Number(get("hour") || "0"),
    minute: Number(get("minute") || "0"),
  };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function isOpenNow(nowDow: number, nowMin: number, rule: HoursRule) {
  const openMin = toMinutes(rule.open);
  const closeMin = toMinutes(rule.close);

  // Normal same-day window (e.g. 08:00 -> 22:00)
  if (closeMin > openMin) {
    return rule.days.includes(nowDow) && nowMin >= openMin && nowMin < closeMin;
  }

  // Overnight window (e.g. 06:00 -> 03:00 next day)
  // Open on day D from openMin..1440 AND on next day from 0..closeMin
  const prevDow = (nowDow + 6) % 7;

  const isLate = rule.days.includes(nowDow) && nowMin >= openMin; // same day, after open
  const isEarly =
    rule.days.includes(prevDow) && nowMin < closeMin; // next day, before close (belongs to previous day's shift)

  return isLate || isEarly;
}

export default function OpenNowBadge({
  hours,
  label = "Open Now",
  closedLabel = "Closed",
}: {
  hours: HoursConfig;
  label?: string;
  closedLabel?: string;
}) {
  const tz = hours.tz ?? "America/Chicago";
  const [tick, setTick] = useState(0);

  // Update every minute
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  const status = useMemo(() => {
    const { dow, hour, minute } = getPartsInTZ(new Date(), tz);
    const nowMin = hour * 60 + minute;

    const open = hours.rules.some((r) => isOpenNow(dow, nowMin, r));
    return open;
  }, [hours.rules, tz, tick]);

  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold shadow-sm"
      }
    >
      <span
        className={
          "h-2 w-2 rounded-full " +
          (status ? "bg-emerald-500" : "bg-black/30")
        }
        aria-hidden
      />
      <span className="text-black/80">{status ? label : closedLabel}</span>
    </span>
  );
}
