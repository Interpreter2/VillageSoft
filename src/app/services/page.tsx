import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, ChartBar, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextRotator } from "@/components/ui/text-rotator";

export const metadata = {
  title: "Services",
  description: "Technology consulting, Data, AI, and Validation services.",
};

const serviceDetails = [
  {
    id: "data-analytics",
    title: "Data & Analytics",
    subtitle: "From Data to Decisions",
    description: "Data becomes valuable when it improves decisions. VillageSoft helps enterprises build trusted, connected and actionable data environments that support operational performance, management visibility and growth.",
    icon: <ChartBar className="h-8 w-8" />,
    capabilities: [
      "Data Strategy, Architecture & Modernization",
      "Data Engineering, Integration & Transformation",
      "Data Quality, Governance & Validation",
      "Business Intelligence & Management Dashboards",
      "Advanced and Predictive Analytics",
      "AI-enabled Analytics and Decision Intelligence"
    ],
    outcome: "better visibility, faster decisions, stronger forecasting, improved customer insights and greater operational efficiency."
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    subtitle: "From AI Possibilities to Business Impact",
    description: "VillageSoft helps organizations move from AI experimentation to practical business adoption. We begin with the business problem, identify where AI can create value, and design solutions that can be integrated into real workflows and operating environments.",
    icon: <Brain className="h-8 w-8" />,
    capabilities: [
      "AI Strategy & Use-Case Identification",
      "Generative AI and Enterprise Knowledge Solutions",
      "Agentic AI and AI Agents",
      "Intelligent Automation & Conversational AI",
      "Intelligent Document Processing",
      "Custom AI Solutions and Enterprise Integration"
    ],
    outcome: "improving productivity, reducing operating effort, accelerating decisions, enhancing customer and employee experience, and creating new digital capabilities."
  },
  {
    id: "ai-validation",
    title: "AI Validation & Assurance",
    subtitle: "From AI Innovation to Trusted AI",
    description: "As AI becomes embedded in business processes, organizations need confidence that AI systems behave as intended. Traditional software testing alone is not enough. We provide AI Validation & Assurance to assess whether AI solutions are reliable, secure, responsible, consistent and aligned with the business outcomes.",
    icon: <ShieldCheck className="h-8 w-8" />,
    capabilities: [
      "Data Validation — quality, completeness, consistency",
      "Model Validation — accuracy, robustness, expected behavior",
      "GenAI Validation — relevance, grounding, hallucination risk",
      "Agentic AI Validation — reasoning, tool usage, boundaries",
      "Performance, Reliability, Security & Safety Validation",
      "Responsible AI & Business Outcome Validation"
    ],
    outcome: "Trusted AI. Responsible AI. Enterprise-Ready AI."
  }
];

export default function ServicesPage() {
  const rotatingItems = [
    "Data & Analytics.",
    "Artificial Intelligence.",
    "AI Validation & Assurance."
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Expertise in <br className="md:hidden" />
              <TextRotator items={rotatingItems} className="text-amber-500" />
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Transform Today. Build for Tomorrow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div>
        {serviceDetails.map((service, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-stone-100 border-y border-stone-200 text-stone-900" : "bg-white border-y border-stone-100";
          
          return (
            <section key={service.id} id={service.id} className={`py-24 ${bgClass}`}>
              <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <ScrollReveal className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-stone-900">{service.title}</h2>
                      <h3 className="text-xl font-medium text-amber-700 mt-2">{service.subtitle}</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-stone-600">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 pt-4">
                      <h4 className="font-semibold text-stone-900">Key Capabilities:</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3 shrink-0" />
                            <span className="text-base">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 bg-stone-50 p-4 rounded-lg border border-stone-200">
                      <p className="text-sm font-medium text-stone-800">
                        <span className="text-amber-700 font-bold">Outcome: </span> 
                        {service.outcome}
                      </p>
                    </div>

                    <div className="pt-6">
                      <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100" asChild>
                        <Link href={`/contact?service=${service.id}`}>Enquire About This Service</Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={100} className="flex-1 w-full">
                    <div className="rounded-3xl border border-stone-200 aspect-square md:aspect-[4/3] flex flex-col items-center justify-center p-8 shadow-sm bg-stone-50 relative overflow-hidden">
                       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-200/50 via-stone-50 to-stone-50"></div>
                       <div className="relative z-10 text-center space-y-4">
                          {service.id === "data-analytics" && (
                            <div className="font-mono text-sm text-stone-500 font-semibold tracking-wider">Data &rarr; Insights &rarr; Decisions &rarr; Actions</div>
                          )}
                          {service.id === "artificial-intelligence" && (
                            <div className="font-mono text-sm text-stone-500 font-semibold tracking-wider">Start with the business problem.</div>
                          )}
                          {service.id === "ai-validation" && (
                            <div className="font-mono text-sm text-stone-500 font-semibold tracking-wider">Validate Data &rarr; Model &rarr; Workflow &rarr; Outcome</div>
                          )}
                       </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* For Enterprises Lifecycle */}
      <section className="bg-stone-900 py-24 text-stone-50 border-t border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Enterprises</h2>
            <p className="text-xl text-amber-500 font-medium mb-16">
              Transform Today. Build for Tomorrow.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "TRANSFORM", desc: "Use Data & AI to improve decisions, productivity, and business performance." },
              { title: "BUILD", desc: "Develop data-driven and AI-enabled solutions aligned with business requirements." },
              { title: "ASSURE", desc: "Validate AI for trust, reliability, security, and business effectiveness." },
              { title: "ENABLE", desc: "Upskill teams and build future-ready technology and execution capabilities." },
              { title: "EXECUTE", desc: "Translate transformation strategy into disciplined action and measurable outcomes." }
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 h-full flex flex-col hover:border-amber-500/50 transition-colors">
                  <h3 className="text-amber-500 font-bold tracking-widest text-sm mb-3">{step.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
