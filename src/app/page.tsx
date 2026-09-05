import Link from "next/link";
import { ArrowRight, Brain, ChartBar, CheckCircle2, FileCheck, GraduationCap, Laptop, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { MosaicBackground } from "@/components/ui/mosaic-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 md:pt-48 md:pb-48 overflow-hidden bg-stone-900">
        {/* Premium Background Elements */}
        <MosaicBackground />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-amber-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-stone-700 bg-stone-800/50 px-3 py-1 text-sm font-medium text-amber-400 mb-8 shadow-sm">
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
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-stone-800/50 border-stone-600 text-slate-200 hover:bg-stone-700 hover:text-white transition-all hover:-translate-y-0.5" asChild>
              <Link href="/training">
                Explore Training
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">Empowering the Future of Work</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge the gap between technological potential and practical execution. For businesses, we provide consulting and technology services that drive efficiency and growth. For individuals, we offer rigorous, career-focused training that builds industry-ready professionals.
          </p>
        </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-stone-800 text-stone-50 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Capabilities</h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">Comprehensive technology and management solutions designed to solve real business challenges.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI & Technology Consulting", desc: "Strategic guidance to understand and apply modern technology and artificial intelligence effectively.", icon: Brain, href: "/services" },
              { title: "Data Analytics", desc: "Transform raw data into actionable insights for smarter, data-driven decision making.", icon: ChartBar, href: "/services" },
              { title: "Data Validation", desc: "Ensure data quality, accuracy, and consistency across your organization's workflows.", icon: FileCheck, href: "/services" },
              { title: "Management Services", desc: "Expert project coordination and process improvement to guarantee successful implementations.", icon: Users, href: "/services" },
              { title: "Technology Solutions", desc: "Custom software solutions, automation, and reliable data-driven applications.", icon: Laptop, href: "/services" },
              { title: "Professional Training", desc: "Rigorous, practical training programs preparing talent for modern corporate environments.", icon: GraduationCap, href: "/training" }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex flex-col h-full bg-stone-700 border border-stone-600 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-amber-900/50 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-stone-400 mb-6 flex-1">{item.desc}</p>
                  <Link href={item.href} className="text-amber-400 font-medium inline-flex items-center hover:text-amber-300 transition-colors">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training / Career Readiness */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>

      {/* Business Consulting */}
      <section className="py-24 bg-stone-800 text-stone-50 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Accelerate Your Business</h2>
              <p className="text-lg text-stone-400 max-w-2xl mx-auto">We help startups and small to medium-sized businesses adopt technology, leverage data, and streamline management processes to drive tangible growth.</p>
            </div>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <SectionHeader 
              title="Industries We Serve" 
              subtitle="Applying specialized technology and management expertise to distinct industry challenges." 
            />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-xl border border-stone-200 h-full shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-stone-900">IT Services</h3>
                <p className="text-stone-600 leading-relaxed">
                  Supporting technology-focused organizations with AI adoption, advanced data analytics, robust technology solutions, and talent development.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-xl border border-stone-200 h-full shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-stone-900">Startups</h3>
                <p className="text-stone-600 leading-relaxed">
                  Helping early and growth-stage companies with scalable technology strategy, process improvement, data infrastructure, and building capable teams.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why VillageSoft */}
      <section className="py-24 bg-stone-800 text-stone-50 border-t border-stone-700">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why VillageSoft</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Practical Approach", desc: "We prioritize solutions and skills that can be applied immediately to generate real value." },
              { title: "Technology Driven", desc: "Deep expertise in leveraging modern tools, AI, and data to solve complex problems." },
              { title: "Industry-Relevant", desc: "Our frameworks and training curricula are designed directly from current workplace demands." },
              { title: "Business-Focused", desc: "Every technological implementation is aligned with clear business objectives and ROI." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 bg-stone-700 rounded-xl border border-stone-600 h-full shadow-sm">
                  <div className="w-12 h-12 bg-amber-900/50 text-amber-400 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-stone-50">{item.title}</h3>
                  <p className="text-sm text-stone-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-stone-100 text-stone-900 text-center border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build What&apos;s Next.</h2>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
              Whether you&apos;re looking to strengthen your business operations or develop the skills needed for the modern workplace, VillageSoft can help.
            </p>
            <Button size="lg" className="px-8 bg-amber-700 hover:bg-amber-800 text-white" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
