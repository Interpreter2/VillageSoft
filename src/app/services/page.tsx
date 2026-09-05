import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, ChartBar, FileCheck, Laptop, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = {
  title: "Services",
  description: "Technology consulting, data analytics, and management services.",
};

const serviceDetails = [
  {
    id: "ai-consulting",
    title: "AI & Technology Consulting",
    description: "We help organizations understand and apply modern technology and AI to practical business problems.",
    icon: <Brain className="h-8 w-8" />,
    capabilities: [
      "AI strategy and adoption planning",
      "Workflow automation identification",
      "Comprehensive technology strategy",
      "Digital transformation roadmaps"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your raw data into clear, actionable insights that drive business performance.",
    icon: <ChartBar className="h-8 w-8" />,
    capabilities: [
      "Data-driven decision making frameworks",
      "Automated reporting systems",
      "Interactive business dashboards",
      "Advanced analytics solutions"
    ]
  },
  {
    id: "data-validation",
    title: "Data Validation",
    description: "Ensure the information your business relies on is accurate, consistent, and dependable.",
    icon: <FileCheck className="h-8 w-8" />,
    capabilities: [
      "Data quality assessments",
      "Validation process design",
      "Accuracy and consistency audits",
      "Reliable data workflow implementation"
    ]
  },
  {
    id: "management-services",
    title: "Management Services",
    description: "Bridging the gap between technology capabilities and operational execution.",
    icon: <Users className="h-8 w-8" />,
    capabilities: [
      "Technical project coordination",
      "Technology vendor management",
      "Business process improvement",
      "Solution implementation support"
    ]
  },
  {
    id: "technology-solutions",
    title: "Technology Solutions",
    description: "Building reliable, focused software tools to solve specific operational challenges.",
    icon: <Laptop className="h-8 w-8" />,
    capabilities: [
      "Focused software solutions",
      "Process automation tools",
      "Data-driven applications",
      "Custom technology integrations"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Practical consulting and technology services designed to help businesses optimize operations, leverage data, and adopt artificial intelligence effectively.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div>
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-stone-100 border-y border-stone-200 text-stone-900" : "bg-stone-800 text-stone-50 border-y border-stone-700";
          
          return (
            <section key={service.id} id={service.id} className={`py-24 ${bgClass}`}>
              <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <div className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <ScrollReveal className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-900/50 text-amber-400 flex items-center justify-center border border-amber-900/30 shadow-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className={`text-lg leading-relaxed ${isEven ? 'text-stone-600' : 'text-stone-400'}`}>
                      {service.description}
                    </p>
                    <div className="space-y-3 pt-4">
                      <h4 className="font-semibold">Key Capabilities:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className={`flex items-start ${isEven ? 'text-stone-600' : 'text-stone-400'}`}>
                            <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 mr-3 shrink-0" />
                            <span className="text-sm">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6">
                      <Button variant="outline" className={isEven ? "border-stone-300 text-stone-700 hover:bg-stone-200" : "border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white bg-transparent"} asChild>
                        <Link href={`/contact?service=${service.id}`}>Enquire About This Service</Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={100} className="flex-1 w-full">
                    <div className={`rounded-2xl border aspect-video flex items-center justify-center p-8 shadow-sm ${isEven ? 'bg-white border-stone-200' : 'bg-stone-700 border-stone-600'}`}>
                       <div className={`w-full h-full border-2 border-dashed rounded-xl flex items-center justify-center ${isEven ? 'border-stone-200 text-stone-400' : 'border-stone-600 text-stone-500'}`}>
                          [Service Illustration Placeholder]
                       </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-amber-900 py-24 text-center text-white border-t border-amber-950">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
            <p className="text-lg text-amber-100 mb-10">
              Let&apos;s discuss how our consulting and technology services can support your business goals.
            </p>
            <Button size="lg" className="bg-stone-800 hover:bg-stone-900 text-white border-transparent" asChild>
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
