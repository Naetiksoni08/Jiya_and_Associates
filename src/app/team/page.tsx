"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { team } from "@/lib/team";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

const founder = team.find((m) => m.slug === "founder");
const rest = team.filter((m) => m.slug !== "founder");

export default function TeamRoster() {
  return (
    <div className="pt-20">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative py-20 lg:py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/team.jpeg')" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.40))" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#B8973A" }}
            >
              The People Behind the Practice
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-luxury text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5"
            >
              Our Team
            </motion.h1>
            <div className="w-10 h-[2px] mb-8" style={{ background: "#B8973A" }} />
            <div className="space-y-5">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Jiya &amp; Associates is led by practitioners with long-standing experience across corporate, taxation, intellectual property and litigation matters.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-sans text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Each member of the team brings a focused area of expertise, enabling the firm to handle matters with both depth and continuity. The team's collective experience spans advisory, compliance, taxation, dispute resolution and regulatory representation across forums.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">

          {/* Founder Featured Card */}
          {founder && (
            <Link href={`/team/${founder.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-0 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full sm:w-[300px] lg:w-[380px] flex-shrink-0" style={{ aspectRatio: "1/1.2", backgroundColor: "#E8E2D9" }}>
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 300px, 380px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16" style={{ color: "#B8A898" }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-12">
                  <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
                    {founder.designation}
                  </p>
                  <h2 className="font-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a1628] leading-tight mb-4">
                    {founder.name}
                  </h2>
                  <div className="w-10 h-[1.5px] mb-5" style={{ background: "#B8973A" }} />
                  <p className="font-sans text-sm text-[#0a1628]/60 leading-relaxed mb-7 max-w-xl">
                    {founder.bio[0]}
                  </p>
                  <span className="self-start inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase border px-5 py-2.5 border-[#0a1628]/30 text-[#0a1628] hover:border-[#B8973A] hover:text-[#B8973A] transition-colors duration-200">
                    View Full Profile →
                  </span>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Team Members Grid */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#B8973A" }}>
              Team Members
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((member, index) => (
                <Link href={`/team/${member.slug}`} key={member.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden flex-shrink-0" style={{ aspectRatio: "1/1.1", backgroundColor: "#E8E2D9" }}>
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-16 h-16" style={{ color: "#B8A898" }} />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="px-5 pt-4 pb-5 flex-grow flex flex-col">
                      <h3 className="font-luxury text-xl font-semibold text-[#0a1628] leading-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs tracking-[0.15em] uppercase mb-4" style={{ color: "#B8973A" }}>
                        {member.designation}
                      </p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wide uppercase border px-4 py-2 border-[#0a1628]/25 text-[#0a1628] group-hover:border-[#B8973A] group-hover:text-[#B8973A] transition-colors duration-200">
                          View Profile →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}