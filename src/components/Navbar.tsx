"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-xs">
      {/* Letterhead signature top accent stripe */}
      <div className="w-full h-1 bg-gradient-to-r from-[#93c83c] via-[#4ea645] to-[#4ea645]" />

      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/emblem@2x.png"
              alt="VillageSoft Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-foreground flex items-center gap-1 leading-none">
                <span>VILLAGE</span>
                <span className="text-primary font-black">SOFT</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mt-1 leading-none">
                Pvt. Ltd.
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap px-1 py-1"
            >
              {item.title}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-[#3d8c35] hover:bg-[#34782d] text-white shadow-xs ml-1 lg:ml-2">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 pb-6 bg-background">
          <nav className="flex flex-col gap-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
