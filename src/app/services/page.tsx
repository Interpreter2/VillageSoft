import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, ChartBar, FileCheck, Laptop, Users } from "lucide-react";

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
    <div className="py-24 space-y-32">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Practical consulting and technology services designed to help businesses optimize operations, leverage data, and adopt artificial intelligence effectively.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="space-y-24">
          {serviceDetails.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id} 
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-foreground">Key Capabilities:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 shrink-0" />
                        <span className="text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Button variant="outline" asChild>
                    <Link href={`/contact?service=${service.id}`}>Enquire About This Service</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 w-full bg-muted rounded-2xl border border-stone-100 aspect-video flex items-center justify-center p-8">
                 {/* Visual Placeholder */}
                 <div className="w-full h-full border-2 border-dashed border-stone-200 rounded-xl flex items-center justify-center text-stone-400">
                    [Service Illustration Placeholder]
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-lg text-primary-foreground/90 mb-10">
            Let&apos;s discuss how our consulting and technology services can support your business goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
