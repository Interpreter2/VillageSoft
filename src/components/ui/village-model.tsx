"use client";

import React, { useState } from "react";
import { Target, Search, Zap, GraduationCap, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const villageSteps = [
  { id: "v", letter: "V", title: "VISION", focus: "Define the ambition.", desc: "Align transformation with business priorities, customer needs and measurable outcomes.", icon: Target },
  { id: "i", letter: "I", title: "INSIGHTS", focus: "Turn information into intelligence.", desc: "Use data, analytics and business understanding to identify opportunities and improve decisions.", icon: Search },
  { id: "l1", letter: "L", title: "LEVERAGE", focus: "Harness technology for advantage.", desc: "Apply AI, data and emerging technologies to improve productivity, experience, efficiency and growth.", icon: Zap },
  { id: "l2", letter: "L", title: "LEARN", focus: "Build future-ready capabilities.", desc: "Continuously develop people, skills and organizational capabilities to adapt and transform.", icon: GraduationCap },
  { id: "a", letter: "A", title: "ASSURE", focus: "Build trust into transformation.", desc: "Validate AI, data and solutions for reliability, security, responsibility and business effectiveness.", icon: ShieldCheck },
  { id: "g", letter: "G", title: "GOVERN", focus: "Transform with accountability.", desc: "Establish governance, controls, measurement and oversight to scale transformation responsibly.", icon: Scale },
  { id: "e", letter: "E", title: "EXECUTE", focus: "Turn strategy into outcomes.", desc: "Drive disciplined execution, ownership and continuous improvement to deliver measurable results.", icon: CheckCircle2 }
];

export function VillageModelInteractive() {
  const [activeId, setActiveId] = useState(villageSteps[0].id);

  const activeStep = villageSteps.find(step => step.id === activeId) || villageSteps[0];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="max-w-5xl mx-auto w-full">
      {/* Letters Navigation */}
      <ScrollReveal>
        <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 mb-12 flex-wrap">
          {villageSteps.map((step) => {
            const isActive = step.id === activeId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveId(step.id)}
                className={cn(
                  "relative group flex flex-col items-center transition-all duration-300",
                  "focus:outline-none"
                )}
              >
                <div 
                  className={cn(
                    "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black transition-all duration-300 border-2",
                    isActive 
                      ? "bg-[#3d8c35] text-white border-[#3d8c35] shadow-lg shadow-[#4ea645]/25 scale-110" 
                      : "bg-white text-stone-400 border-stone-200 hover:border-[#93c83c] hover:text-[#3d8c35] hover:scale-105"
                  )}
                >
                  {step.letter}
                </div>
                <div 
                  className={cn(
                    "absolute -bottom-6 text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap",
                    isActive ? "text-[#2e6d27] opacity-100" : "text-stone-400 opacity-0 group-hover:opacity-100"
                  )}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Content Display Area */}
      <ScrollReveal delay={100}>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200 min-h-[300px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle Background Icon */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
            <ActiveIcon className="w-96 h-96 text-[#3d8c35]" />
          </div>
          
          <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[#eef6ed] rounded-full flex items-center justify-center text-[#3d8c35] border-8 border-stone-100 shadow-inner">
              <ActiveIcon className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            
            <div className="text-center md:text-left flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeId}>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-3xl font-black text-[#3d8c35]">{activeStep.letter}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900">{activeStep.title}</h3>
              </div>
              <p className="text-xl text-[#2e6d27] font-medium mb-4">{activeStep.focus}</p>
              <p className="text-lg text-stone-600 leading-relaxed">
                {activeStep.desc}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
