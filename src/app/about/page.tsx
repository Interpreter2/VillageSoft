import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = {
  title: "About",
  description: "Learn about VillageSoft, our mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Who We Are */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Are</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              VillageSoft is a technology, consulting, management, and training company. We are driven by the belief that organizations thrive when technology is applied effectively, and individuals succeed when equipped with practical, real-world skills.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-stone-100 py-24 border-y border-stone-200 text-stone-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal delay={0}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  To help businesses adopt useful technology and make AI and data more accessible. We are equally committed to helping people build practical skills and preparing talent for real-world corporate environments.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  To bridge the gap between technological potential and practical execution—creating stronger businesses through practical innovation, and empowering skilled professionals through accessible, rigorous learning.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-stone-800 text-stone-50 py-24 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Approach</h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">A simple, effective framework for delivering consistent value.</p>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 mt-12">
            {["Understand", "Strategize", "Build", "Enable"].map((step, i) => (
              <ScrollReveal key={step} delay={i * 100} className="flex-1 flex flex-col items-center max-w-xs relative group">
                <div className="w-16 h-16 rounded-2xl bg-amber-900/50 text-amber-400 flex items-center justify-center text-2xl font-bold shadow-lg z-10 mb-6 border border-amber-900/30">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step}</h3>
                <p className="text-stone-400 text-sm">
                  {i === 0 && "Deep dive into core challenges, requirements, and business context."}
                  {i === 1 && "Formulate practical, technology-driven plans tailored to your specific goals."}
                  {i === 2 && "Execute solutions using robust engineering, data, and management practices."}
                  {i === 3 && "Train teams, transfer knowledge, and ensure sustainable success."}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-stone-100 py-24 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <ScrollReveal>
            <SectionHeader title="Our Values" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-12">
            {[
              { title: "Integrity", desc: "Honest advice, transparent processes, and ethical technology practices." },
              { title: "Practicality", desc: "Focusing on solutions that actually work in the real world." },
              { title: "Continuous Learning", desc: "Staying at the forefront of AI, data, and software engineering." },
              { title: "Innovation", desc: "Applying creative thinking to solve traditional business problems." },
              { title: "Client Focus", desc: "Measuring our success entirely by the success of our clients and trainees." },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex p-6 rounded-xl bg-white border border-stone-200 shadow-sm h-full">
                  <CheckCircle2 className="h-6 w-6 text-amber-700 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-stone-900">{value.title}</h4>
                    <p className="text-stone-600 mt-1">{value.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
