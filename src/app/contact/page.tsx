import { siteConfig } from "@/config/site";
import { Mail, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with VillageSoft.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-900 text-white border-b border-stone-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Transform Together.
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto">
              Whether you are an enterprise unlocking value from Data and AI, an organization building trusted AI, an educational institution improving student employability, or an aspiring professional preparing for a technology career, VillageSoft can be your transformation partner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-stone-100 py-24 border-y border-stone-200 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="md:col-span-2 space-y-8">
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-stone-900">Contact Information</h3>
                  <p className="text-stone-600 mb-8">
                    Reach out to our teams directly or submit the inquiry form, and a member of our team will get back to you promptly.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Sales & Business Enquiries */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white border border-stone-200 text-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-1">Sales & Partnerships</h4>
                      <a 
                        href={`mailto:${siteConfig.contact.salesEmail}`} 
                        className="text-stone-600 hover:text-amber-700 transition-colors break-all"
                      >
                        {siteConfig.contact.salesEmail}
                      </a>
                    </div>
                  </div>

                  {/* HR & Careers */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white border border-stone-200 text-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-0.5">HR & Careers</h4>
                      <p className="text-xs text-stone-500 font-medium mb-1">HR Villagesoft Technologies</p>
                      <a 
                        href={`mailto:${siteConfig.contact.hrEmail}`} 
                        className="text-stone-600 hover:text-amber-700 transition-colors break-all"
                      >
                        {siteConfig.contact.hrEmail}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white border border-stone-200 text-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-900 mb-1">Location</h4>
                      <p className="text-stone-600">
                        {siteConfig.contact.location}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <ScrollReveal delay={100} className="h-full">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
