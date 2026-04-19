"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Image src="/images/hero-bg.png" alt="Jiya & Associates law firm" fill priority className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold opacity-70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">

          <motion.h1
            variants={item}
            className="[font-family:var(--font-cormorant)] text-5xl md:text-7xl text-white font-extrabold leading-tight tracking-[0.1em] mb-6 drop-shadow-lg uppercase"
          >
            Advisory. <span className="text-gold">Compliance.</span><br />Execution.
          </motion.h1>

          <motion.p
            variants={item}
            className="[font-family:var(--font-sans)] text-white/80 text-lg md:text-xl mb-10 leading-relaxed tracking-wide"
          >
            A Practice shaped by years of experience, addressing legal and
            regulatory requirements with consistency, clarity and an
            understanding of practical realities.
          </motion.p>

          <motion.div variants={item} className="flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy px-10 py-4 text-base font-semibold tracking-widest uppercase rounded-lg hover:bg-gold-light transition-colors duration-200"
            >
              Connect With Us
            </Link>
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
