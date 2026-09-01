import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Rocket } from "lucide-react";

export const metadata = {
  title: "Industries",
  description: "Specialized technology and management expertise for IT Services and Startups.",
};

export default function IndustriesPage() {
  return (
    <div className="py-24 space-y-32">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Industries We Serve</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We bring our expertise in technology, AI, and talent development to address the unique challenges of modern, dynamic sectors.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* IT Services */}
          <div className="flex flex-col h-full bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-10 flex-1">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4">IT Services</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Technology companies face constant pressure to evolve, optimize delivery, and upskill their talent. We support IT services organizations by providing strategic consulting, AI integration frameworks, and targeted professional training to build stronger, more capable teams.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80 font-medium">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> AI Strategy & Integration</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Advanced Data Analytics</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Corporate Talent Development</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Management & Process Improvement</li>
              </ul>
            </div>
            <div className="p-6 bg-muted border-t mt-auto">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact?industry=IT+Services">Discuss IT Services Solutions</Link>
              </Button>
            </div>
          </div>

          {/* Startups */}
          <div className="flex flex-col h-full bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-10 flex-1">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Startups</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Startups need to move fast while building scalable foundations. We help early and growth-stage companies navigate technology choices, implement solid data infrastructure, adopt AI effectively, and establish the management processes necessary for sustainable growth.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80 font-medium">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Scalable Technology Strategy</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Data Architecture & Validation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Rapid Prototyping & Solutions</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0"/> Team Structuring & Training</li>
              </ul>
            </div>
            <div className="p-6 bg-muted border-t mt-auto">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact?industry=Startups">Discuss Startup Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-24 text-center text-stone-50">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Expanding Our Expertise</h2>
          <p className="text-lg text-stone-300 leading-relaxed mb-0">
            While our immediate focus is on empowering IT Services and Startups, VillageSoft is continually developing methodologies that translate across sectors. We intend to expand our industry-specific offerings as we grow, always grounded in practical, measurable results.
          </p>
        </div>
      </section>
    </div>
  );
}
