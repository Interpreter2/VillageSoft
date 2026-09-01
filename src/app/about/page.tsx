import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Learn about VillageSoft, our mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <div className="py-24 space-y-32">
      {/* Hero / Who We Are */}
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Who We Are</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          VillageSoft is a technology, consulting, management, and training company. We are driven by the belief that organizations thrive when technology is applied effectively, and individuals succeed when equipped with practical, real-world skills.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-24 border-y">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help businesses adopt useful technology and make AI and data more accessible. We are equally committed to helping people build practical skills and preparing talent for real-world corporate environments.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To bridge the gap between technological potential and practical executionâ€”creating stronger businesses through practical innovation, and empowering skilled professionals through accessible, rigorous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <SectionHeader title="Our Approach" subtitle="A simple, effective framework for delivering consistent value." />
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 mt-12">
          {["Understand", "Strategize", "Build", "Enable"].map((step, i) => (
            <div key={step} className="flex-1 flex flex-col items-center max-w-xs relative group">
              <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg z-10 mb-6">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="text-muted-foreground text-sm">
                {i === 0 && "Deep dive into core challenges, requirements, and business context."}
                {i === 1 && "Formulate practical, technology-driven plans tailored to your specific goals."}
                {i === 2 && "Execute solutions using robust engineering, data, and management practices."}
                {i === 3 && "Train teams, transfer knowledge, and ensure sustainable success."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 md:px-8 max-w-4xl">
        <SectionHeader title="Our Values" />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {[
            { title: "Integrity", desc: "Honest advice, transparent processes, and ethical technology practices." },
            { title: "Practicality", desc: "Focusing on solutions that actually work in the real world." },
            { title: "Continuous Learning", desc: "Staying at the forefront of AI, data, and software engineering." },
            { title: "Innovation", desc: "Applying creative thinking to solve traditional business problems." },
            { title: "Client Focus", desc: "Measuring our success entirely by the success of our clients and trainees." },
          ].map((value, i) => (
            <div key={i} className="flex p-4 rounded-lg bg-card border shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-primary mr-4 shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">{value.title}</h4>
                <p className="text-muted-foreground mt-1">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
