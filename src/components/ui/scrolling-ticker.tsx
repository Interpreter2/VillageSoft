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
    <div className={cn("overflow-hidden whitespace-nowrap bg-stone-900 border-y border-stone-800 py-3 flex", className)}>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-medium tracking-wide text-amber-500 uppercase">
            <span className="mr-12 text-stone-700">◆</span>
            {item}
          </div>
        ))}
      </div>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-medium tracking-wide text-amber-500 uppercase">
            <span className="mr-12 text-stone-700">◆</span>
            {item}
          </div>
        ))}
      </div>
      <div className={cn("flex space-x-12 shrink-0 items-center px-6", speedClass)} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center text-sm font-medium tracking-wide text-amber-500 uppercase">
            <span className="mr-12 text-stone-700">◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
