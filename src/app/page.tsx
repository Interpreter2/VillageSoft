import Link from "next/link";
import { ArrowRight, Brain, ChartBar, CheckCircle2, FileCheck, GraduationCap, Laptop, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 md:pt-48 md:pb-48 overflow-hidden bg-stone-950">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-amber-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/50 px-3 py-1 text-sm font-medium text-amber-400 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
            Elevating Technology & Talent
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white max-w-5xl mx-auto leading-[1.1]">
            Building Skills. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Enabling Businesses.</span> <br className="hidden md:block" />
            Creating Real-World Impact.
          </h1>
          <p className="mt-8 text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            VillageSoft helps businesses navigate technology, AI, and data while equipping individuals with practical, industry-ready skills for today&apos;s workplace.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-amber-900/20 transition-all hover:-translate-y-0.5" asChild>
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-stone-900/50 border-stone-700 text-slate-200 hover:bg-stone-800 hover:text-white transition-all hover:-translate-y-0.5" asChild>
              <Link href="/training">
                Explore Training
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Empowering the Future of Work</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          We bridge the gap between technological potential and practical execution. For businesses, we provide consulting and technology services that drive efficiency and growth. For individuals, we offer rigorous, career-focused training that builds industry-ready professionals.
        </p>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-transparent border-t">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Our Capabilities" 
            subtitle="Comprehensive technology and management solutions designed to solve real business challenges." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AI & Technology Consulting"
              description="Strategic guidance to understand and apply modern technology and artificial intelligence effectively."
              icon={<Brain className="h-6 w-6" />}
              href="/services"
            />
            <FeatureCard
              title="Data Analytics"
              description="Transform raw data into actionable insights for smarter, data-driven decision making."
              icon={<ChartBar className="h-6 w-6" />}
              href="/services"
            />
            <FeatureCard
              title="Data Validation"
              description="Ensure data quality, accuracy, and consistency across your organization's workflows."
              icon={<FileCheck className="h-6 w-6" />}
              href="/services"
            />
            <FeatureCard
              title="Management Services"
              description="Expert project coordination and process improvement to guarantee successful implementations."
              icon={<Users className="h-6 w-6" />}
              href="/services"
            />
            <FeatureCard
              title="Technology Solutions"
              description="Custom software solutions, automation, and reliable data-driven applications."
              icon={<Laptop className="h-6 w-6" />}
              href="/services"
            />
            <FeatureCard
              title="Professional Training"
              description="Rigorous, practical training programs preparing talent for modern corporate environments."
              icon={<GraduationCap className="h-6 w-6" />}
              href="/training"
            />
          </div>
        </div>
      </section>

      {/* Training / Career Readiness */}
      <section className="py-24 bg-muted border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-amber-100 text-amber-900">
                Corporate Training
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for the Real World</h2>
              <p className="text-lg text-muted-foreground">
                Our training programs go beyond theoretical concepts. We focus on practical, industry-relevant skills and real-world projects that prepare you for immediate workplace readiness.
              </p>
              <ul className="space-y-3">
                {[
                  "Industry-relevant technical skills",
                  "Hands-on real-world projects",
                  "Professional and workplace readiness",
                  "Data, AI, and software engineering foundations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/training">Explore Training Programs</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full bg-card rounded-2xl shadow-sm border p-8">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-muted-foreground border border-dashed border-stone-300">
                [Placeholder for Training Interface/Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Consulting */}
      <section className="py-24 bg-transparent border-t">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <SectionHeader 
            title="Accelerate Your Business" 
            subtitle="We help startups and small to medium-sized businesses adopt technology, leverage data, and streamline management processes to drive tangible growth." 
          />
          <Button size="lg" asChild>
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Industries We Serve" 
            subtitle="Applying specialized technology and management expertise to distinct industry challenges." 
            className="text-stone-50"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
              <h3 className="text-2xl font-semibold mb-4">IT Services</h3>
              <p className="text-stone-300 leading-relaxed">
                Supporting technology-focused organizations with AI adoption, advanced data analytics, robust technology solutions, and talent development.
              </p>
            </div>
            <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
              <h3 className="text-2xl font-semibold mb-4">Startups</h3>
              <p className="text-stone-300 leading-relaxed">
                Helping early and growth-stage companies with scalable technology strategy, process improvement, data infrastructure, and building capable teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VillageSoft */}
      <section className="py-24 bg-transparent border-t">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader title="Why VillageSoft" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Practical Approach", desc: "We prioritize solutions and skills that can be applied immediately to generate real value." },
              { title: "Technology Driven", desc: "Deep expertise in leveraging modern tools, AI, and data to solve complex problems." },
              { title: "Industry-Relevant", desc: "Our frameworks and training curricula are designed directly from current workplace demands." },
              { title: "Business-Focused", desc: "Every technological implementation is aligned with clear business objectives and ROI." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-muted rounded-xl border">
                <div className="w-12 h-12 bg-amber-100 text-amber-900 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build What&apos;s Next.</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Whether you&apos;re looking to strengthen your business operations or develop the skills needed for the modern workplace, VillageSoft can help.
          </p>
          <Button size="lg" variant="secondary" className="px-8" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
