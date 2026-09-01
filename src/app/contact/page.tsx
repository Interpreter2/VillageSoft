import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with VillageSoft.",
};

export default function ContactPage() {
  return (
    <div className="py-24 space-y-24">
      <section className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Let&apos;s Start a Conversation.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Contact VillageSoft regarding consulting, technology services, professional training, partnerships, or general enquiries.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us directly or fill out the form, and a member of our team will get back to you promptly.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-card border shadow-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Jane Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="jane@company.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Company Name" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground">Service of Interest</label>
                <select 
                  id="service"
                  defaultValue=""
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="ai-consulting">AI & Technology Consulting</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="data-validation">Data Validation</option>
                  <option value="management-services">Management Services</option>
                  <option value="technology-solutions">Technology Solutions</option>
                  <option value="training">Training</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder="How can we help you?" 
                ></textarea>
              </div>

              <Button type="button" className="w-full h-11 text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
