import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Code, Database, LineChart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = {
  title: "Professional Training",
  description: "Practical, career-oriented training to become industry ready.",
};

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Learn Skills. Build Projects. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Become Industry Ready.</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Our training programs focus on practical, career-oriented skills. We don&apos;t just teach theory; we prepare you to apply concepts to real-world business challenges.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <Link href="/contact?service=Training">Enquire About Training</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-stone-100 py-24 border-y border-stone-200 text-stone-900">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal>
            <SectionHeader title="Areas of Training" subtitle="Comprehensive skill development for modern corporate careers." />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Technical Skills",
                desc: "Foundational and advanced software engineering skills necessary for building reliable technology solutions.",
                icon: Code,
                items: ["Python Programming", "Software Architecture", "Development Best Practices"]
              },
              {
                title: "Data & AI Skills",
                desc: "Equipping professionals to work with data pipelines, perform analytics, and apply artificial intelligence.",
                icon: Database,
                items: ["Data Analytics & SQL", "Machine Learning Concepts", "Applied AI in Business"]
              },
              {
                title: "Professional & Workplace Skills",
                desc: "The critical soft skills needed to succeed in a corporate environment, from communication to problem-solving.",
                icon: Briefcase,
                items: ["Corporate Communication", "Project Management Basics", "Business Acumen"]
              },
              {
                title: "Corporate Readiness",
                desc: "Tying it all together through real-world projects that simulate actual business environments and demands.",
                icon: LineChart,
                items: ["Real-World Projects", "Capstone Presentations", "Interview Preparation"]
              }
            ].map((section, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm flex flex-col items-start h-full">
                  <div className="w-12 h-12 bg-stone-100 text-amber-700 rounded-lg flex items-center justify-center mb-6 border border-stone-200">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-stone-900">{section.title}</h3>
                  <p className="text-stone-600 mb-6">
                    {section.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-stone-700 mt-auto">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"/> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-800 text-stone-50 py-24 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Built for the Real World</h2>
            <p className="text-lg text-stone-400 leading-relaxed mb-8">
              The technology industry does not just need people who know syntax—it needs problem solvers who understand business context. Our programs are uniquely designed to bridge the gap between academic learning and corporate execution.
            </p>
            <Button size="lg" variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white bg-transparent" asChild>
              <Link href="/contact">Contact Our Training Team</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
