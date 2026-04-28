"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Expertise", href: "/services" },
  { label: "Our Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        solid
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gold/15 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          {/* Logo image */}
          <div className={cn(
            "p-1.5 transition-all duration-300 border-[0.5px]",
            solid ? "border-black/60" : "border-white/50"
          )}>
            <Image
              src="/images/jiya.png"
              alt="Jiya & Associates"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-1.5">
            <span className={cn(
              "[font-family:var(--font-cormorant)] font-bold text-2xl transition-colors duration-300",
              solid ? "text-navy" : "text-cream"
            )}>
              JIYA &amp; ASSOCIATES
            </span>
            <div className="flex flex-col gap-[5px]">
              <div className={cn("h-px w-full transition-colors duration-300", solid ? "bg-navy/30" : "bg-cream/40")} />
              <span className={cn(
                "font-sans text-[9px] font-bold tracking-[0.22em] uppercase transition-colors duration-300",
                solid ? "text-[#0A1628]" : "text-cream/60"
              )}>
                Legacy of Trust. Precision in Practice.
              </span>
              <div className={cn("h-px w-full transition-colors duration-300", solid ? "bg-navy/30" : "bg-cream/40")} />
            </div>
          </div>
        </Link>

        {/* Vertical gold separator */}
        <div className={cn("hidden md:block w-px h-10 mx-6 transition-colors duration-300", solid ? "bg-gold/25" : "bg-cream/20")} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <div key={link.href} className="flex items-center">
              {(
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-200 hover:text-gold group pb-0.5 px-4",
                    solid ? "text-navy" : "text-cream"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px w-0 bg-gold group-hover:w-[calc(100%-2rem)] transition-all duration-300 ease-out" />
                </Link>
              )}
              {/* Gold dot separator between links */}
              {i < navLinks.length - 1 && (
                <span className={cn("text-base select-none transition-colors duration-300", solid ? "text-gold/70" : "text-cream/50")}>·</span>
              )}
            </div>
          ))}

          {/* Dot before CTA */}
          <span className={cn("text-base select-none transition-colors duration-300 ml-1", solid ? "text-gold/70" : "text-cream/50")}>·</span>

          {/* CTA */}
          <Link
            href="/contact"
            className={cn(
              "ml-4 px-5 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-300 rounded-md",
              solid
                ? "bg-gold text-navy hover:bg-gold-dark"
                : "border border-gold text-cream hover:bg-gold hover:text-navy"
            )}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        {!mobileOpen && (
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className={solid ? "text-navy" : "text-cream"} />
          </button>
        )}
      </div>

      {/* Bottom gold accent line (scrolled only) */}
      {solid && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      )}

    </header>

      {/* Mobile menu — full-screen overlay, outside header to avoid backdrop-blur clipping */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col">
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
              <div className="p-1.5 border-[0.5px] border-black/60">
                <Image src="/images/jiya.png" alt="Jiya & Associates" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="[font-family:var(--font-cormorant)] font-bold text-xl text-navy">JIYA &amp; ASSOCIATES</span>
                <div className="h-px w-full bg-navy/30" />
                <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-[#0A1628]">Legacy of Trust. Precision in Practice.</span>
                <div className="h-px w-full bg-navy/30" />
              </div>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={24} className="text-navy" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy text-[11px] font-medium tracking-[0.14em] uppercase py-4 hover:text-gold border-b border-gray-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-6 pb-10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-gold text-navy text-center py-4 text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-gold-dark transition-colors rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
