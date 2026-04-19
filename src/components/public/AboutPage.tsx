"use client";

import { motion } from "framer-motion";

const sop = [
  "Each engagement begins with a detailed understanding of the requirement and the applicable legal framework.",
  "Relevant issues, documentation and procedural aspects are identified at the outset.",
  "Advice is provided with clarity, keeping the client's objectives and constraints in view.",
  "Execution is carried out in a structured manner across stages, including filings, compliance or representation.",
  "Ongoing matters are managed with continuity, ensuring consistency in handling and follow-through.",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const Divider = () => (
  <div className="flex items-center gap-4 px-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero band — image background with split overlay */}
      <div className="relative pt-40 pb-32 px-10 xl:px-20 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        {/* Split overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(5,10,20,0.72) 50%, rgba(5,10,20,0.10))" }}
        />

        <div className="relative z-10">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About Us
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-8">
            A Practice Built on
            <br />
            <span className="text-gold">Continuity &amp; Trust</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/90 text-base md:text-lg leading-relaxed text-justify">
            Jiya &amp; Associates reflects a long-standing legal practice built over years of continuous
            engagement across corporate, taxation, intellectual property and regulatory matters. The
            firm&apos;s work is shaped by sustained experience before various authorities and forums,
            allowing matters to be handled with familiarity, stability and informed judgment.
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-white/90 text-base md:text-lg leading-relaxed mt-5 text-justify">
            Clients approach the firm not only for legal input, but for guidance that is steady,
            dependable and aligned with their specific requirements. Over time, this has established a
            practice grounded in trust, continuity and a clear understanding of how legal and
            regulatory processes unfold in practice.
          </motion.p>
        </div>
      </div>

      {/* Scope of Work */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Handle
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-6">
            Scope of Work
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed mb-5 text-justify">
            The firm advises and represents clients across corporate and commercial matters,
            regulatory compliance, taxation, intellectual property and real estate.
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            Assignments are handled with an integrated perspective, ensuring that overlapping legal,
            financial and regulatory aspects are addressed cohesively. This allows for continuity in
            matters that extend across multiple areas, reducing fragmentation and maintaining clarity
            throughout.
          </motion.p>
        </div>
      </section>

      {/* How Matters Are Handled */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            In Practice
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-6">
            How Matters Are Handled
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-10" />
          <div className="space-y-4">
            {sop.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 * i)}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="border-l-2 border-gold/50 pl-5 py-1 cursor-default"
              >
                <p className="text-navy/70 text-base leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Over the Years */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Over the Years
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-6">
            25+ Years of Continued Practice
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            With over 25 years of continued practice, the firm reflects a depth of experience
            developed through sustained engagement across legal and regulatory matters. This
            continuity allows for a steady and informed approach, enabling clients to rely on
            guidance that remains consistent, considered and aligned with their requirements over
            time.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
