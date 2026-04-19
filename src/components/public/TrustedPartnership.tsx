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
          className="text-[#B8973A] font-inter text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-5"
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
            Legal matters often require both strategic advisory and effective dispute resolution. Jiya &amp; Associates operates in structured alignment with its associated litigation practice. This ensures continuity from legal advice to courtroom representation. Clients benefit from a seamless and coordinated legal approach.
          </p>
          <p className="text-[#B8973A] font-bold whitespace-nowrap text-base">
            STRATUM JURIS — ADVOCATES &amp; SOLICITORS
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

      </div>
    </section>
  );
}
