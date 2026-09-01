import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Code, Database, LineChart } from "lucide-react";

export const metadata = {
  title: "Professional Training",
  description: "Practical, career-oriented training to become industry ready.",
};

export default function TrainingPage() {
  return (
    <div className="py-24 space-y-32">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Learn Skills. Build Projects. <span className="text-primary">Become Industry Ready.</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Our training programs focus on practical, career-oriented skills. We don&apos;t just teach theory; we prepare you to apply concepts to real-world business challenges.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild>
            <Link href="/contact?service=Training">Enquire About Training</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted py-24 border-y">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <SectionHeader title="Areas of Training" subtitle="Comprehensive skill development for modern corporate careers." />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-8 rounded-xl border shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <p className="text-muted-foreground mb-6">
                Foundational and advanced software engineering skills necessary for building reliable technology solutions.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 mt-auto">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Python Programming</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Software Architecture</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Development Best Practices</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Data & AI Skills</h3>
              <p className="text-muted-foreground mb-6">
                Equipping professionals to work with data pipelines, perform analytics, and apply artificial intelligence.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 mt-auto">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Data Analytics & SQL</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Machine Learning Concepts</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Applied AI in Business</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Professional & Workplace Skills</h3>
              <p className="text-muted-foreground mb-6">
                The critical soft skills needed to succeed in a corporate environment, from communication to problem-solving.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 mt-auto">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Corporate Communication</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Project Management Basics</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Business Acumen</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-sm flex flex-col items-start">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Corporate Readiness</h3>
              <p className="text-muted-foreground mb-6">
                Tying it all together through real-world projects that simulate actual business environments and demands.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80 mt-auto">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Real-World Projects</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Capstone Presentations</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"/> Interview Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Built for the Real World</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          The technology industry does not just need people who know syntaxâ€”it needs problem solvers who understand business context. Our programs are uniquely designed to bridge the gap between academic learning and corporate execution.
        </p>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Contact Our Training Team</Link>
        </Button>
      </section>
    </div>
  );
}
