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
                className="group"
              >
                {/* Photo area */}
                <div className="relative overflow-hidden" style={{ height: "340px", backgroundColor: "#E8E2D9" }}>
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User size={40} className="text-[#b8a88c]" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="pt-4 pb-5">
                  <h2 className="font-serif text-xl font-semibold text-navy leading-tight mb-1">
                    {member.name}
                  </h2>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-4 text-gold">
                    {member.designation}
                  </p>
                  <Link
                    href={`/team/${member.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase border px-4 py-2 border-navy/25 text-navy hover:border-gold hover:text-gold transition-colors duration-200"
                  >
                    View Profile <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
