"use client";

import { motion } from "framer-motion";

export default function FoundationSection() {
  return (
    <section
      className="relative pt-24 pb-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/law.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          The Framework
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="font-serif text-3xl md:text-4xl text-white font-bold uppercase tracking-wide mb-8"
        >
          A Foundation of Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="text-white/90 text-base md:text-lg leading-relaxed mb-20 text-justify"
          style={{ textAlignLast: "center" }}
        >
          At Jiya &amp; Associates, every case we handle is backed by years of accumulated expertise.
          Our legacy is built on trust, precision, and an unwavering commitment to our clients. With
          a deep understanding of the law and a proven record of results, we transform experience into
          actionable insights, ensuring that our clients navigate even the most complex legal and
          regulatory challenges with confidence, ensuring desired results.
        </motion.p>


      </div>
    </section>
  );
}
