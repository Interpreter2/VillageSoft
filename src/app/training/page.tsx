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
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-amber-900/50 bg-amber-900/20 px-3 py-1 text-sm font-medium text-amber-400 mb-8">
              VillageSoft Academy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              From College to <br className="md:hidden" />
              <TextRotator items={rotatingEndings} className="text-amber-500" />
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              The gap between academic learning and corporate performance is rarely about knowledge alone. Employers need professionals who can communicate, understand business context, apply technology, work in teams, take ownership and deliver.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The 3-Skill Model */}
      <section className="py-24 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal>
            <SectionHeader 
              title="The VillageSoft 3-Skill Model" 
              subtitle="Knowledge creates potential. Execution transforms potential into performance. We develop the complete professional through three core pillars."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm h-full relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                  <MessagesSquare className="w-7 h-7" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-20 -mt-4 -mr-4 pointer-events-none group-hover:text-blue-100 transition-colors">1</div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Soft Skills</h3>
                <h4 className="text-amber-700 font-medium mb-4">Communicate & Collaborate</h4>
                <p className="text-stone-600 leading-relaxed">
                  Business communication, presentation, teamwork, professional etiquette, critical thinking, problem solving, interview readiness and customer orientation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm h-full relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100">
                  <Code className="w-7 h-7" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-20 -mt-4 -mr-4 pointer-events-none group-hover:text-amber-100 transition-colors">2</div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Hard Skills</h3>
                <h4 className="text-amber-700 font-medium mb-4">Understand & Build</h4>
                <p className="text-stone-600 leading-relaxed">
                  Industry-relevant capabilities across Data & Analytics, SQL, Python, Business Intelligence, AI, GenAI, AI Validation, automation and emerging technologies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm h-full relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <div className="absolute top-0 right-0 bg-stone-100 text-stone-400 font-black text-8xl opacity-20 -mt-4 -mr-4 pointer-events-none group-hover:text-emerald-100 transition-colors">3</div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Execution Skills</h3>
                <h4 className="text-amber-700 font-medium mb-4">Own & Deliver</h4>
                <p className="text-stone-600 leading-relaxed">
                  Requirement understanding, planning, project execution, Agile ways of working, documentation, status reporting, escalation, accountability and outcome-based thinking.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VillageSoft Academy Path */}
      <section className="py-24 bg-stone-800 text-stone-50 border-b border-stone-700">
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
            <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1 bg-stone-700 md:-translate-x-1/2" />
            
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
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full md:-translate-x-1/2 border-4 border-stone-800 z-10 shadow-[0_0_0_4px_rgba(28,25,23,1)]"></div>
                    
                    {/* Content */}
                    <div className="w-full md:w-5/12 pl-16 md:pl-0 flex">
                      <div className={`bg-stone-700 border border-stone-600 p-6 rounded-xl w-full shadow-sm hover:border-amber-500/50 transition-colors ${idx % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                        <h3 className="text-xl font-bold text-amber-400 mb-2">{step.title}</h3>
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
      <section className="py-24 bg-stone-100 border-b border-stone-200 text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal>
               <h2 className="text-3xl font-bold text-stone-900 mb-6">Start Your Transformation</h2>
               <p className="text-lg text-stone-600 mb-8">Ready to bridge the gap between academic knowledge and workplace performance?</p>
               <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                  <Link href="/contact">Apply to VillageSoft Academy</Link>
               </Button>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
