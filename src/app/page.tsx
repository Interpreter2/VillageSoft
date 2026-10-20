import Link from "next/link";
import { ArrowRight, Brain, ChartBar, CheckCircle2, FileCheck, GraduationCap, Laptop, Lightbulb, Users, Target, Search, Settings, ShieldCheck, Scale, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { MosaicBackground } from "@/components/ui/mosaic-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRotator } from "@/components/ui/text-rotator";
import { VillageModelInteractive } from "@/components/ui/village-model";

export default function Home() {
  const rotatingImpact = [
    "AI into Business Impact.",
    "Data into Decisions.",
    "Talent into Performance."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[#0d1710] border-b border-[#182e1d]">
        <MosaicBackground />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-[#2f5733] bg-[#162d1b]/70 px-3.5 py-1 text-sm font-medium text-[#93c83c] mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#93c83c] mr-2 animate-pulse"></span>
              TECHNOLOGY. TALENT. TRANSFORMATION.
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white max-w-5xl mx-auto leading-[1.1] h-[160px] md:h-[220px] flex flex-col justify-center">
              <span>Transforming Businesses. <br className="hidden md:block" /> Transforming Talent.</span>
              <span className="mt-4 text-3xl md:text-5xl text-stone-300 font-medium">
                Turning <TextRotator items={rotatingImpact} className="text-[#93c83c] font-bold" />
              </span>
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              VillageSoft is a business, technology and talent transformation company helping enterprises turn AI into Business Impact, Data into Decisions, and Talent into Performance. We combine business understanding, technology expertise and execution excellence to deliver meaningful and measurable transformation.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-12 px-8 text-base bg-[#3d8c35] hover:bg-[#34782d] text-white shadow-lg shadow-[#3d8c35]/25 transition-all hover:-translate-y-0.5" asChild>
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-[#142617]/60 border-[#2f5733] text-stone-200 hover:bg-[#1a341f] hover:text-white transition-all hover:-translate-y-0.5" asChild>
                <Link href="/training">
                  Explore VillageSoft Academy
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VILLAGE Model */}
      <section className="py-24 bg-[#f4f8f3] border-t border-[#e2ece0] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The VILLAGE Transformation Model™</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">From Vision to Execution. Our proprietary VILLAGE Transformation Model™ brings together business, technology, talent, assurance, governance and execution into one integrated framework for transformation.</p>
            </div>
          </ScrollReveal>

          <VillageModelInteractive />
          
          <ScrollReveal delay={300}>
            <div className="mt-20 p-8 bg-[#0d1710] text-stone-100 rounded-2xl max-w-4xl mx-auto text-center border border-[#1d3823] shadow-xl">
              <p className="text-lg leading-relaxed">
                The model anchors VillageSoft&apos;s <span className="text-[#93c83c] font-semibold">Vision</span>: Data & Analytics creates <span className="text-[#93c83c] font-semibold">Insights</span>; AI enables <span className="text-[#93c83c] font-semibold">Leverage</span>; Talent Transformation drives <span className="text-[#93c83c] font-semibold">Learn</span>; AI Validation provides <span className="text-[#93c83c] font-semibold">Assurance</span>;  <span className="text-[#93c83c] font-semibold">Governance</span> enables responsible scale; and  <span className="text-[#93c83c] font-semibold">Execution</span> converts strategy into measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services Summary */}
      <section className="py-24 bg-[#101b13] text-stone-50 border-t border-[#1a2d1f]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Transformation Services</h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">From identifying opportunities to assuring AI and developing human capabilities.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="flex flex-col h-full bg-[#16261a] border border-[#223a26] rounded-2xl p-8 shadow-sm hover:border-[#4ea645]/50 transition-colors">
                <div className="w-14 h-14 bg-[#234227] text-[#93c83c] rounded-xl flex items-center justify-center mb-6">
                  <ChartBar className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Data & Analytics</h3>
                <h4 className="text-[#93c83c] font-medium mb-4">From Data to Decisions</h4>
                <p className="text-stone-300 flex-1 leading-relaxed mb-6">
                  Build trusted, connected and actionable data environments that support operational performance, management visibility and growth.
                </p>
                <Link href="/services#data-analytics" className="text-white font-medium inline-flex items-center hover:text-[#93c83c] transition-colors">
                  Explore Data Services <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-col h-full bg-[#16261a] border border-[#223a26] rounded-2xl p-8 shadow-sm hover:border-[#4ea645]/50 transition-colors">
                <div className="w-14 h-14 bg-[#234227] text-[#93c83c] rounded-xl flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Artificial Intelligence</h3>
                <h4 className="text-[#93c83c] font-medium mb-4">From Possibilities to Impact</h4>
                <p className="text-stone-300 flex-1 leading-relaxed mb-6">
                  Move from AI experimentation to practical business adoption by designing solutions integrated into real workflows.
                </p>
                <Link href="/services#artificial-intelligence" className="text-white font-medium inline-flex items-center hover:text-[#93c83c] transition-colors">
                  Explore AI Services <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col h-full bg-[#16261a] border border-[#223a26] rounded-2xl p-8 shadow-sm hover:border-[#4ea645]/50 transition-colors">
                <div className="w-14 h-14 bg-[#234227] text-[#93c83c] rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Validation & Assurance</h3>
                <h4 className="text-[#93c83c] font-medium mb-4">From Innovation to Trust</h4>
                <p className="text-stone-300 flex-1 leading-relaxed mb-6">
                  Assess whether AI solutions are reliable, secure, responsible, consistent and aligned with intended business outcomes.
                </p>
                <Link href="/services#ai-validation" className="text-white font-medium inline-flex items-center hover:text-[#93c83c] transition-colors">
                  Explore Assurance <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Talent Transformation Summary */}
      <section className="py-24 bg-[#f4f8f3] border-t border-[#e2ece0]">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-[#cbe3c8] bg-[#eef6ed] text-[#245b20]">
                  VillageSoft Academy
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Talent Transformation</h2>
                <h3 className="text-xl text-stone-600 font-medium">From College to Corporate. From Knowledge to Performance.</h3>
                <p className="text-lg text-stone-700 leading-relaxed">
                  The gap between academic learning and corporate performance is rarely about knowledge alone. Employers need professionals who can communicate, understand business context, apply technology, work in teams, take ownership and deliver.
                </p>
                <div className="pt-4">
                  <Button size="lg" className="bg-[#3d8c35] hover:bg-[#34782d] text-white" asChild>
                    <Link href="/training">Discover The HIGH Framework</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Hard Skills", "Industry Ready", "Get-it-done (Execution) Skills", "Human (Soft) Skills"].map((skill, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 text-center font-bold text-stone-900 flex flex-col items-center justify-center gap-3 hover:border-[#4ea645]/40 transition-colors">
                    <CheckCircle2 className="w-8 h-8 text-[#3d8c35]" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0d1710] text-white text-center border-t border-[#182e1d]">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Transform Together.</h2>
            <p className="text-xl text-stone-300 mb-10 leading-relaxed">
              Whether you are an enterprise looking to unlock value from Data and AI, or an educational institution looking to improve student employability, VillageSoft can be your transformation partner.
            </p>
            <Button size="lg" className="px-8 bg-[#3d8c35] hover:bg-[#34782d] text-white shadow-lg shadow-[#3d8c35]/25" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
