"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MosaicBackgroundProps {
  className?: string;
}

export function MosaicBackground({ className }: MosaicBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-100", className)}>
      <div className="absolute inset-0 mosaic-pattern" />
      
      {/* Gradient fades to blend the edges into the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-transparent to-stone-950" />
      <div className="absolute inset-0 bg-gradient-to-l from-stone-950 via-transparent to-stone-950" />
    </div>
  );
}
