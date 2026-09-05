import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = {
  title: "Industries",
  description: "Specialized technology and management expertise for IT Services and Startups.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industries We Serve</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              We bring our expertise in technology, AI, and talent development to address the unique challenges of modern, dynamic sectors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-stone-100 py-24 border-y border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* IT Services */}
            <ScrollReveal delay={0}>
              <div className="flex flex-col h-full bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-10 flex-1">
                  <div className="w-14 h-14 bg-amber-50 text-amber-700 border border-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-stone-900">IT Services</h2>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Technology companies face constant pressure to evolve, optimize delivery, and upskill their talent. We support IT services organizations by providing strategic consulting, AI integration frameworks, and targeted professional training to build stronger, more capable teams.
                  </p>
                  <ul className="space-y-3 text-sm text-stone-700 font-medium">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> AI Strategy & Integration</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Advanced Data Analytics</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Corporate Talent Development</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Management & Process Improvement</li>
                  </ul>
                </div>
                <div className="p-6 bg-stone-50 border-t border-stone-200 mt-auto">
                  <Button variant="outline" className="w-full bg-white hover:bg-stone-100 text-stone-700" asChild>
                    <Link href="/contact?industry=IT+Services">Discuss IT Services Solutions</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Startups */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col h-full bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-10 flex-1">
                  <div className="w-14 h-14 bg-amber-50 text-amber-700 border border-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-stone-900">Startups</h2>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Startups need to move fast while building scalable foundations. We help early and growth-stage companies navigate technology choices, implement solid data infrastructure, adopt AI effectively, and establish the management processes necessary for sustainable growth.
                  </p>
                  <ul className="space-y-3 text-sm text-stone-700 font-medium">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Scalable Technology Strategy</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Data Architecture & Validation</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Rapid Prototyping & Solutions</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 shrink-0"/> Team Structuring & Training</li>
                  </ul>
                </div>
                <div className="p-6 bg-stone-50 border-t border-stone-200 mt-auto">
                  <Button variant="outline" className="w-full bg-white hover:bg-stone-100 text-stone-700" asChild>
                    <Link href="/contact?industry=Startups">Discuss Startup Solutions</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-stone-800 py-24 text-center text-stone-50 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Expanding Our Expertise</h2>
            <p className="text-lg text-stone-400 leading-relaxed mb-0">
              While our immediate focus is on empowering IT Services and Startups, VillageSoft is continually developing methodologies that translate across sectors. We intend to expand our industry-specific offerings as we grow, always grounded in practical, measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
