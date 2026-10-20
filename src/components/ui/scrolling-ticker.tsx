"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ScrollingTickerProps {
  items: React.ReactNode[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export function ScrollingTicker({ items, className, speed = "normal" }: ScrollingTickerProps) {
  const speedClass = {
    slow: "animate-ticker-slow",
    normal: "animate-ticker",
    fast: "animate-ticker-fast",
  }[speed];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap bg-[#0d160f] border-y border-[#1a2b1c] py-3 flex", className)}>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-semibold tracking-wider text-[#93c83c] uppercase">
            <span className="mr-12 text-[#244229]">◆</span>
            {item}
          </div>
        ))}
      </div>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-semibold tracking-wider text-[#93c83c] uppercase">
            <span className="mr-12 text-[#244229]">◆</span>
            {item}
          </div>
        ))}
      </div>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-semibold tracking-wider text-[#93c83c] uppercase">
            <span className="mr-12 text-[#244229]">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
