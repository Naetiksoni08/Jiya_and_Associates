"use client";

import { Clock, ArrowUp, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Expertise", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const fromLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const fromRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

export default function Footer() {
  return (
    <>
      {/* Wave transition to navy */}
      <div className="bg-white overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20 block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#060E1A" />
        </svg>
      </div>
      <footer className="bg-navy-dark text-cream">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-[3fr_1fr_1.5fr_1fr] gap-10 mb-12">

            {/* Brand */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-2 md:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/jiya.png" alt="Jiya & Associates" width={60} height={60} className="object-contain" />
                <span className="font-serif text-2xl font-bold uppercase">Jiya &amp; Associates</span>
              </div>
              <p className="text-cream/55 text-base leading-loose max-w-md text-justify">
                Approaching legal advisory with structure and intent — bringing clarity to regulatory and transactional complexities, and guiding decisions with precision and foresight, to ensure outcomes that are both practical and sound.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <a href="#" aria-label="LinkedIn"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-accent-gold hover:text-accent-gold transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className=""
            >
              
              
              <h4 className="font-semibold text-sm tracking-widest uppercase text-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-cream/60 text-sm hover:text-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Expertise */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className=""
            >
              <h4 className="font-semibold text-sm tracking-widest uppercase text-gold mb-4">
                Our Expertise
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-cream/60 text-sm hover:text-gold transition-colors duration-200">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              className="col-span-2 md:col-span-1"
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h4 className="font-semibold text-sm tracking-widest uppercase text-gold mb-4 flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                Office Hours
              </h4>
              <ul className="space-y-2 text-sm text-cream/60">
                <li className="flex flex-col gap-1">
                  <span>Monday – Saturday</span>
                  <span className="text-cream/90 font-medium">10:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex items-center justify-between">
            <p className="text-cream/40 text-xs">
              © {new Date().getFullYear()} Jiya &amp; Associates. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-cream/50 text-xs font-semibold tracking-widest uppercase hover:text-gold transition-colors duration-200 group"
            >
              Back to Top
              <span className="w-7 h-7 border border-cream/20 group-hover:border-gold flex items-center justify-center transition-colors duration-200">
                <ArrowUp size={12} />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
