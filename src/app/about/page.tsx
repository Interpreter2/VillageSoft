import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2, Globe, Users, ArrowRight, Lightbulb, Target, Settings, Brain, ShieldCheck, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRotator } from "@/components/ui/text-rotator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About",
  description: "Learn about VillageSoft, our mission, vision, and core values.",
};

export default function AboutPage() {
  const rotatingIdentities = [
    "Transformation.",
    "Technology.",
    "Talent.",
    "Impact."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transformation with <br className="md:hidden" />
              <TextRotator items={rotatingIdentities} className="text-amber-500" />
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Organizations today are navigating rapid shifts in data, AI, automation and workforce expectations. Technology creates possibilities, but sustainable transformation requires more: clear business priorities, trusted solutions, capable people and disciplined execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-stone-100 py-24 border-y border-stone-200 text-stone-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-2xl font-medium leading-relaxed mb-8">
              VillageSoft brings these elements together. We help enterprises identify business opportunities, apply Data and AI, validate AI-driven solutions and build the talent required to execute change.
            </p>
            <p className="text-xl text-stone-600 leading-relaxed">
              In parallel, VillageSoft Academy prepares students and job seekers for the realities of the corporate world by bridging the gap between academic knowledge and workplace performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-stone-800 text-stone-50 py-24 border-y border-stone-700">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal delay={0}>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-amber-900/50 text-amber-400 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  To transform businesses and talent by connecting technology, human potential and execution excellence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-amber-900/50 text-amber-400 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  To create measurable business value through Data, AI and AI Validation, while developing future-ready professionals with the soft skills, hard skills and execution skills required to succeed in the digital economy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why VillageSoft */}
      <section className="bg-white py-24 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader title="Why VillageSoft?" subtitle="How we deliver meaningful and measurable transformation." />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Business First", desc: "We start with the business problem and desired outcome—not technology for its own sake.", icon: Briefcase },
              { title: "Transformation Led", desc: "We connect business priorities, technology, talent, assurance, governance and execution.", icon: Settings },
              { title: "AI & Data Powered", desc: "We use Data, Analytics and AI to create practical, scalable business value.", icon: Brain },
              { title: "AI Assured", desc: "We help organizations move from adopting AI to deploying trusted and enterprise-ready AI.", icon: ShieldCheck },
              { title: "Talent Driven", desc: "We build the human capabilities required to sustain technology transformation.", icon: Users },
              { title: "Execution Focused", desc: "We bridge the gap between strategy and delivery through ownership and disciplined execution.", icon: CheckCircle2 }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex flex-col p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white text-amber-700 rounded-lg flex items-center justify-center mb-6 border border-stone-200">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="bg-stone-900 text-stone-50 py-24 border-t border-stone-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The VillageSoft Ecosystem</h2>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Our enterprise services and talent transformation businesses reinforce each other. Enterprise engagements keep us connected to evolving business challenges, AI use cases, technologies and skill requirements. 
                </p>
                <p className="text-lg text-stone-300 leading-relaxed">
                  Those insights shape our learning programs, while our talent ecosystem develops professionals with stronger business context, technology capability and execution discipline.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 shadow-xl space-y-4 font-medium text-amber-400">
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Business Challenges</div>
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Data & AI / AI Validation</div>
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Learning</div>
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Future-Ready Talent</div>
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Execution</div>
                <div className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-stone-500" /> Business Outcomes</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Purpose & Careers */}
      <section className="bg-stone-100 py-24 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-24">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-stone-900">From Villages to Global Enterprises</h2>
              <p className="text-xl text-stone-600 leading-relaxed">
                Talent exists everywhere. Opportunity does not. VillageSoft believes capable people across cities, towns and villages should have access to the skills, industry exposure and opportunities required to participate in the global digital economy.
              </p>
              <p className="text-xl font-medium text-amber-700">
                Our ambition is to connect untapped potential with enterprise demand—transforming local potential into global capability.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="bg-white p-10 rounded-3xl border border-stone-200 shadow-sm text-center space-y-6">
              <h2 className="text-3xl font-bold text-stone-900">Careers at VillageSoft</h2>
              <h3 className="text-xl text-amber-700 font-medium">Learn. Transform. Create Impact.</h3>
              <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                We are building a culture of continuous learning, innovation, ownership and execution. We value people who are curious enough to learn, confident enough to question, creative enough to innovate, disciplined enough to execute and committed enough to deliver.
              </p>
              <div className="pt-6">
                <Button variant="outline" size="lg" className="border-amber-700 text-amber-700 hover:bg-amber-50" asChild>
                  <Link href="/contact">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
