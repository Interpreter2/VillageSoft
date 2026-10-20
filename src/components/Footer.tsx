import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/70 relative">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/emblem@2x.png"
                alt="VillageSoft Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-foreground leading-none">
                  <span>VILLAGE</span>
                  <span className="text-primary font-black">SOFT</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mt-1 leading-none">
                  Pvt. Ltd.
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/training" className="hover:text-primary transition-colors">
                  Professional Training
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[\s+]/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.hrEmail}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.hrEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`https://${siteConfig.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {siteConfig.contact.website}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName || siteConfig.name} All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-not-allowed opacity-50 hover:opacity-50" title="Placeholder for LinkedIn">LinkedIn</span>
            <span className="cursor-not-allowed opacity-50 hover:opacity-50" title="Placeholder for Twitter">Twitter</span>
          </div>
        </div>
      </div>

      {/* Signature letterhead bottom bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#93c83c] via-[#4ea645] to-[#4ea645]" />
    </footer>
  );
}
