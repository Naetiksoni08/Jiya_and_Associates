"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-cream/50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* Left — sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 text-center lg:text-left"
          >
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold leading-tight mb-5">
              Areas of Expertise
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-6 mx-auto lg:mx-0" />
            <p className="text-navy/55 text-base leading-relaxed mb-10">
              A focused range of legal and regulatory services across key areas of practice.
            </p>

            {/* CTA — desktop only */}
            <Link
              href="/services"
              className="hidden lg:inline-flex relative items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide text-navy"
            >
              <span className="absolute top-0 left-0 h-px bg-gold animate-border-top" style={{ width: 0 }} />
              <span className="absolute top-0 right-0 w-px bg-gold animate-border-right" style={{ height: 0 }} />
              <span className="absolute bottom-0 right-0 h-px bg-gold animate-border-bottom" style={{ width: 0 }} />
              <span className="absolute bottom-0 left-0 w-px bg-gold animate-border-left" style={{ height: 0 }} />
              View All Areas <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — vertical list */}
          <div>
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {i === 0 && <div className="h-px bg-navy/10" />}

                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-6 py-6 hover:bg-gold/[0.06] transition-colors duration-200 px-4 -mx-4 cursor-pointer"
                >
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-1 group-hover:text-gold transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-navy/55 text-sm leading-relaxed">
                      {service.brief}
                    </p>
                  </div>
                </Link>

                <div className="h-px bg-navy/10" />
              </motion.div>
            ))}

            {/* CTA — mobile only, after list */}
            <div className="lg:hidden flex justify-center mt-8">
              <Link
                href="/services"
                className="relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide text-navy"
              >
                <span className="absolute top-0 left-0 h-px bg-gold animate-border-top" style={{ width: 0 }} />
                <span className="absolute top-0 right-0 w-px bg-gold animate-border-right" style={{ height: 0 }} />
                <span className="absolute bottom-0 right-0 h-px bg-gold animate-border-bottom" style={{ width: 0 }} />
                <span className="absolute bottom-0 left-0 w-px bg-gold animate-border-left" style={{ height: 0 }} />
                View All Areas <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
