import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Code, Database, Users, MessagesSquare, CheckCircle2, PlayCircle, Star, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRotator } from "@/components/ui/text-rotator";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata = {
  title: "Professional Training",
  description: "Talent transformation. From College to Corporate. From Knowledge to Performance.",
};

export default function TrainingPage() {
  const rotatingEndings = [
    "Corporate.",
    "Performance.",
    "Impact."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0d1710] text-white border-b border-[#182e1d]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-[#2f5733] bg-[#162d1b]/70 px-3.5 py-1 text-sm font-medium text-[#93c83c] mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#93c83c] mr-2 animate-pulse"></span>
              VillageSoft Academy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              From College to <br className="md:hidden" />
              <TextRotator items={rotatingEndings} className="text-[#93c83c]" />
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              The gap between academic learning and corporate performance is rarely about knowledge alone. Employers need professionals who can communicate, understand business context, apply technology, work in teams, take ownership and deliver.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The HIGH Framework */}
      <section className="py-24 bg-[#f4f8f3] border-b border-[#e2ece0]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <ScrollReveal>
            <SectionHeader 
              title="The VillageSoft HIGH Framework" 
              subtitle="Knowledge creates potential. Execution transforms potential into performance. We develop the complete professional through four core pillars."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <ScrollReveal delay={0}>
              <div className="bg-white p-6 rounded-2xl border border-[#e2ece0] shadow-sm h-full relative overflow-hidden group hover:border-[#4ea645]/40 transition-colors">
                <div className="w-12 h-12 bg-[#eef6ed] text-[#3d8c35] rounded-xl flex items-center justify-center mb-6 border border-[#cbe3c8]">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-10 -mt-2 -mr-2 pointer-events-none group-hover:text-emerald-100 transition-colors">H</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Hard Skills</h3>
                <h4 className="text-[#2e6d27] text-sm font-medium mb-3">Understand & Build</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Industry-relevant capabilities across Data & Analytics, SQL, Python, Business Intelligence, AI, GenAI, AI Validation, automation and emerging technologies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-2xl border border-[#e2ece0] shadow-sm h-full relative overflow-hidden group hover:border-[#4ea645]/40 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-10 -mt-2 -mr-2 pointer-events-none group-hover:text-indigo-100 transition-colors">I</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Industry Ready</h3>
                <h4 className="text-[#2e6d27] text-sm font-medium mb-3">Corporate Context</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Understanding business priorities, corporate environments, industry domains, and aligning technological solutions to real-world workplace expectations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-2xl border border-[#e2ece0] shadow-sm h-full relative overflow-hidden group hover:border-[#4ea645]/40 transition-colors">
                <div className="w-12 h-12 bg-[#eef6ed] text-[#3d8c35] rounded-xl flex items-center justify-center mb-6 border border-[#cbe3c8]">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-10 -mt-2 -mr-2 pointer-events-none group-hover:text-emerald-100 transition-colors">G</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Get-it-done Skills</h3>
                <h4 className="text-[#2e6d27] text-sm font-medium mb-3">Own & Deliver</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Requirement understanding, planning, project execution, Agile ways of working, documentation, status reporting, escalation, accountability and outcome-based thinking.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-2xl border border-[#e2ece0] shadow-sm h-full relative overflow-hidden group hover:border-[#4ea645]/40 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                  <MessagesSquare className="w-6 h-6" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-10 -mt-2 -mr-2 pointer-events-none group-hover:text-blue-100 transition-colors">H</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Human (Soft) Skills</h3>
                <h4 className="text-[#2e6d27] text-sm font-medium mb-3">Communicate & Collaborate</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Business communication, presentation, teamwork, professional etiquette, critical thinking, problem solving, interview readiness and customer orientation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VillageSoft Academy Path */}
      <section className="py-24 bg-[#101b13] text-stone-50 border-b border-[#1a2d1f]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Industry-Ready Talent</h2>
              <p className="text-lg text-stone-300 max-w-3xl mx-auto">
                VillageSoft Academy prepares students, fresh graduates and job seekers for technology careers through practical, industry-oriented learning modeled on real corporate environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1 bg-[#1e3824] md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                { title: "Learn", desc: "Build strong technical and professional foundations." },
                { title: "Practice", desc: "Apply concepts through exercises, labs and business scenarios." },
                { title: "Execute", desc: "Work on assignments and projects modeled on corporate environments." },
                { title: "Experience", desc: "Develop teamwork, communication, ownership and delivery discipline." },
                { title: "Employ", desc: "Prepare for interviews, workplace expectations and successful career transition." }
              ].map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 50}>
                  <div className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Node */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#93c83c] rounded-full md:-translate-x-1/2 border-4 border-[#101b13] z-10 shadow-[0_0_0_4px_rgba(78,166,69,0.3)]"></div>
                    
                    {/* Content */}
                    <div className="w-full md:w-5/12 pl-16 md:pl-0 flex">
                      <div className={`bg-[#142617] border border-[#223a26] p-6 rounded-xl w-full shadow-sm hover:border-[#4ea645]/60 transition-colors ${idx % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                        <h3 className="text-xl font-bold text-[#93c83c] mb-2">{step.title}</h3>
                        <p className="text-stone-300">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <ScrollReveal delay={300}>
             <div className="mt-16 text-center text-xl font-medium text-stone-300">
                Participants learn to <span className="text-white">understand a business problem</span>, <span className="text-white">work as a team</span>, <span className="text-white">use the right technology</span>, <span className="text-white">execute a project</span>, <span className="text-white">present the solution</span> and <span className="text-white">deliver an outcome</span>.
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f4f8f3] border-b border-[#e2ece0] text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal>
               <h2 className="text-3xl font-bold text-stone-900 mb-6">Start Your Transformation</h2>
               <p className="text-lg text-stone-600 mb-4">Ready to bridge the gap between academic knowledge and workplace performance?</p>
               <p className="text-lg text-[#2e6d27] font-medium mb-8">Whether you are starting fresh or looking for a second chance to reboot your career, VillageSoft Academy provides the skills, context, and discipline needed to succeed.</p>
               <Button size="lg" className="bg-[#3d8c35] hover:bg-[#34782d] text-white shadow-lg shadow-[#3d8c35]/25" asChild>
                  <Link href="/contact">Apply to VillageSoft Academy</Link>
               </Button>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
