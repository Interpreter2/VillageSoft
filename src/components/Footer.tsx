import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-primary">
              {siteConfig.name}
            </h3>
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
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>Â© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="cursor-not-allowed opacity-50 hover:opacity-50" title="Placeholder for LinkedIn">LinkedIn</span>
            <span className="cursor-not-allowed opacity-50 hover:opacity-50" title="Placeholder for Twitter">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
