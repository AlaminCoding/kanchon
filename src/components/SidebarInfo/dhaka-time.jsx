"use client";
import { useEffect, useState } from "react";

const formatDhakaTime = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

const DhakaTime = () => {
  // Set on mount to keep server and client markup identical
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(formatDhakaTime());
    const interval = setInterval(() => {
      setTime(formatDhakaTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-[10px] text-white/60">
      <span className="size-1.5 rounded-full block bg-white/60 animate-scale-pulse" />
      <p>Dhaka</p>
      <span className="bg-white/60 size-[2px] block rounded-full" />
      <p>{time}</p>
    </div>
  );
};

export default DhakaTime;
