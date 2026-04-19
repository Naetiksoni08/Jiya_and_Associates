"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function TrustedPartnership() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(to bottom, #060E1A 0%, #0A1628 100%)" }}>
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(circle, #B8973A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#B8973A] font-inter text-sm tracking-[0.25em] uppercase mb-5"
        >
          Trusted Legal Partnership
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cormorant text-2xl md:text-4xl font-semibold text-white mb-6 leading-tight"
        >
          An Associated Advisory Practice
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-10"
        >
          <p className="font-inter text-white/60 text-base leading-relaxed">
            Legal matters often require both dispute resolution and regulatory or advisory support.
            To facilitate this, Stratum Juris works alongside its associated advisory practice<br></br>{" "}
            <span className="text-[#B8973A] font-bold mt-10 whitespace-nowrap text-md">
              STRATUM JURIS — ADVOCATES & SOLICITORS
            </span>
          </p>
          <p className="font-inter text-white/60 text-base leading-relaxed">
            This framework brings together regulatory, taxation and corporate expertise along with litigation and dispute resolution tactics.
            It ensures consistency in strategy across all stages of a matter.
            The focus remains on clarity, coordination and effective outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.stratumjuris.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#B8973A] hover:bg-[#D4A853] font-bold text-black/80 font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 transition-colors duration-300 rounded-lg"
          >
            Visit Stratum Juris
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mt-14 w-full">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #B8973A44)" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B8973A] flex-shrink-0" />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #B8973A44)" }} />
        </div>
      </div>
    </section>
  );
}
