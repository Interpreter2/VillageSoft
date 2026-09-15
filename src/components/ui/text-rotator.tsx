"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRotatorProps {
  items: string[];
  className?: string;
  interval?: number;
}

export function TextRotator({ items, className, interval = 3000 }: TextRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;
    
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsVisible(true);
      }, 500); // Wait for fade out
      
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, interval]);

  if (!items || items.length === 0) return null;

  return (
    <span className={cn("inline-block transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", className)}>
      {items[index]}
    </span>
  );
}
