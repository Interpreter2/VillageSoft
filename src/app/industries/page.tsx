import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRotator } from "@/components/ui/text-rotator";

export const metadata = {
  title: "Who We Serve",
  description: "Transformation solutions for Enterprises and Educational Institutions.",
};

export default function IndustriesPage() {
  const rotatingSegments = [
    "Enterprises.",
    "AI Leaders.",
    "Universities.",
    "Students."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Solutions For <br className="md:hidden" />
              <TextRotator items={rotatingSegments} className="text-amber-500" />
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              We bring our expertise in technology, AI, and talent development to address the unique challenges of both the corporate and academic worlds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Enterprises */}
      <section className="bg-stone-100 py-24 border-y border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-stone-300 bg-white px-3 py-1 text-sm font-medium text-stone-700">
                <Building2 className="w-4 h-4 mr-2" />
                Corporate Sector
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">For Enterprises</h2>
                <p className="text-xl text-amber-700 font-medium mb-6">Transform Today. Build for Tomorrow.</p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  VillageSoft supports enterprises across the transformation lifecycle—from identifying opportunities and building solutions to assuring AI and developing the capabilities required to sustain change.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "TRANSFORM", desc: "Use Data & AI to improve decisions, productivity, customer experience and business performance." },
                  { title: "BUILD", desc: "Develop data-driven and AI-enabled solutions aligned with business requirements." },
                  { title: "ASSURE", desc: "Validate AI for trust, reliability, security, responsible use and business effectiveness." },
                  { title: "ENABLE", desc: "Upskill teams and build future-ready technology and execution capabilities." },
                  { title: "EXECUTE", desc: "Translate transformation strategy into disciplined action and measurable outcomes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold text-stone-900">{item.title}</span> &mdash; <span className="text-stone-700">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/services">Explore Enterprise Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Building2 className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Enterprise Outcomes</h3>
                <ul className="space-y-4">
                  <li className="p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <strong className="block text-stone-900 mb-1">Trusted AI Implementation</strong>
                    <span className="text-stone-600 text-sm">Move from experimental AI to reliable, secure, and validated enterprise solutions.</span>
                  </li>
                  <li className="p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <strong className="block text-stone-900 mb-1">Data-Driven Decision Making</strong>
                    <span className="text-stone-600 text-sm">Connect disparate data sources into actionable intelligence for leadership.</span>
                  </li>
                  <li className="p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <strong className="block text-stone-900 mb-1">Future-Ready Workforce</strong>
                    <span className="text-stone-600 text-sm">Equip your teams with the modern hard and soft skills required to sustain innovation.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Colleges & Universities */}
      <section className="bg-white py-24 border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal delay={100} className="order-2 lg:order-1">
              <div className="bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 shadow-sm relative">
                <div className="absolute top-0 left-0 p-8 opacity-10">
                  <GraduationCap className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-amber-500">Customized Programs</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Corporate Readiness Assessments",
                    "Data, Analytics and AI Programs",
                    "AI Validation Learning Tracks",
                    "Communication and Professional Skills",
                    "Project-Based Learning and Capstone Projects",
                    "Corporate Simulations and Agile Ways of Working",
                    "Industry Mentoring",
                    "Mock Interviews and Career Preparation",
                    "Placement Readiness Programs"
                  ].map((prog, idx) => (
                    <li key={idx} className="flex items-center text-sm md:text-base">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 shrink-0" />
                      <span className="text-stone-300">{prog}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-stone-800 rounded-xl border border-stone-700 text-center font-medium text-amber-400">
                  Academic Foundation + Technology Skills + Business Context + Execution Experience
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
                <GraduationCap className="w-4 h-4 mr-2" />
                Academic Sector
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">For Colleges & Universities</h2>
                <p className="text-xl text-amber-700 font-medium mb-6">Bridging Campus and Corporate</p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  VillageSoft partners with educational institutions to complement academic education with industry readiness. Programs can be customized by student profile, technology track and placement objectives.
                </p>
              </div>

              <p className="text-stone-600 leading-relaxed">
                By integrating our practical, project-based curriculum, universities can significantly improve student placement rates and ensure their graduates are immediately effective in the modern workplace.
              </p>
              
              <Button asChild className="bg-stone-900 hover:bg-stone-800 text-white">
                <Link href="/training">Explore VillageSoft Academy <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Looking for a Transformation Partner?</h2>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
