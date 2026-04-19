"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { team } from "@/lib/team";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function TeamRoster() {
  return (
    <main>
      <Navbar />

      {/* Hero band */}
      <div
        className="relative pt-40 pb-52 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/images/team.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(5,10,20,0.85) 30%, rgba(5,10,20,0.55))",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            {...fadeUp(0)}
            className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            The People Behind the Practice
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6"
          >
            Our Team
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-white/100 text-base md:text-lg leading-relaxed"
          >
            Jiya &amp; Associates is led by practitioners with long-standing experience across
            corporate, taxation, intellectual property and litigation matters. Each member of the
            team brings a focused area of expertise, enabling the firm to handle matters with both
            depth and continuity.
          </motion.p>
        </div>
      </div>

      {/* Team grid */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.slug}
                {...fadeUp(i * 0.08)}
                className="group relative bg-cream border border-navy/8 overflow-hidden
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo area */}
                <div className="relative w-full aspect-[3/4] bg-[#e4ddd2] overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User size={40} className="text-[#b8a88c]" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300" />
                </div>

                {/* Info */}
                <div className="p-3">
                  <h2 className="font-serif text-sm text-navy font-bold mb-0.5 group-hover:text-gold transition-colors duration-200 leading-snug">
                    {member.name}
                  </h2>
                  <p className="text-navy/45 text-[9px] tracking-wide uppercase font-semibold mb-3">
                    {member.designation}
                  </p>

                  {/* View Profile button */}
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-1.5 border border-gold text-navy text-[9px] font-semibold tracking-widest uppercase px-3 py-1.5
                               hover:bg-gold hover:text-navy transition-all duration-200 group/btn"
                  >
                    View Profile
                    <ArrowRight size={10} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>

                {/* Gold bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
