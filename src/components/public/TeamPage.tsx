"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const Divider = () => (
  <div className="flex items-center gap-4 px-12 my-12">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

const experience = [
  {
    category: "Cross-Border & Multinational Advisory",
    description: "Guiding foreign entities and their Indian subsidiaries through entry strategy, jurisdictional alignment and tax-efficient structuring within the Indian regulatory landscape.",
    clients: [
      { name: "POSCO Group", logo: "/images/clients/posco.png" },
      { name: "Sumikin Bussan India", logo: "/images/clients/sumikin.jpeg" },
      { name: "Adeka India", logo: "/images/clients/adeka.png" },
      { name: "Marubeni India", logo: "/images/clients/marubeni.png" },
      { name: "UPS SCS India", logo: "/images/clients/ups.jpg" },
    ],
  },
  {
    category: "Infrastructure, Hospitality & Real Estate",
    description: "Supporting businesses in capital-intensive sectors on regulatory navigation, project structuring and compliance systems essential for large-scale operations.",
    clients: [
      { name: "Pride Hotels Ltd.", logo: "/images/clients/pride.jpg" },
      { name: "Apex Group", logo: "/images/clients/apex.png" },
    ],
  },
  {
    category: "Media & Entertainment",
    description: "Assisting digital and media-driven businesses in managing evolving compliance requirements, transactional structuring and regulatory alignment in dynamic markets.",
    clients: [
      { name: "Chokas Media Pvt. Ltd.", logo: "/images/clients/chokas.jpg" },
      { name: "Airnet Digital Solutions", logo: "/images/clients/aritel.png" },
    ],
  },
  {
    category: "Consumer, Financial & Growth Enterprises",
    description: "Advising new-age businesses to streamline tax exposure, build compliant structures and align legal frameworks with growth trajectories.",
    clients: [
      { name: "Bombay Shaving Company", logo: "/images/clients/bombay.png" },
      { name: "Moneyboxx Finance Ltd.", logo: "/images/clients/moneybox.png" },
    ],
  },
  {
    category: "Education & Institutional Bodies",
    description: "Structuring and regularising educational institutions and affiliated entities, including registration frameworks and ongoing statutory compliance.",
    clients: [
      { name: "GD Goenka Public School", logo: "/images/clients/gdgoneka.jpg" },
      { name: "Vidya Jain Public School", logo: "/images/clients/vidyajain.webp" },
    ],
  },
  {
    category: "Manufacturing & Industrial Enterprises",
    description: "Handling tax and compliance functions for manufacturing entities, with emphasis on operational structuring and regulatory adherence across business cycles.",
    clients: [
      { name: "AKG India Pvt. Ltd.", logo: "/images/clients/akg.jpg" },
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white">

      {/* Hero band */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A1628 45%, #1a2d4a 75%, #0f2040 100%)" }}>
        {/* Sunlight wash from top-right */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(120deg, transparent 50%, rgba(201,168,76,0.06) 75%, rgba(201,168,76,0.10) 100%)" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[250px] pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            The People Behind the Practice
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
            Our Team
          </motion.h1>
        </div>
      </div>

      {/* Member — Ravi Prakash Verma */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Name & Title */}
          <motion.h2 {...fadeUp(0)} className="font-sans font-extrabold text-4xl md:text-3xl text-navy tracking-tight mb-2">
            Ravi Prakash Verma
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gold/90 text-2xl italic mb-3">
            Founder &amp; Managing Partner
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />

          {/* Bio */}
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed mb-5 text-justify">
            Ravi Prakash Verma is the Founder of Jiya &amp; Associates and brings over two decades of experience in tax advisory, regulatory strategy and institutional compliance. His practice has been shaped by long-standing client relationships and a consistent track record of advising on complex, high-value matters across sectors.
          </motion.p>
          <motion.p {...fadeUp(0.25)} className="text-navy/65 text-base md:text-lg leading-relaxed mb-5 text-justify">
            He is regularly engaged by multinational corporations, Indian enterprises and financial institutions on issues involving tax structuring, cross-border positioning, regulatory approvals and ongoing compliance. His advisory is marked by clarity of approach, commercial awareness and the ability to anticipate regulatory exposure before it materialises.
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            Over the years, he has played a key role in advising Indian arms of global businesses on market entry, structuring and operational continuity within the Indian legal framework. His work is often central to ensuring stability in environments where regulatory and tax considerations directly impact business decisions.
          </motion.p>

        </div>
      </section>

      {/* Representative Experience */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeUp(0)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Representative Experience &amp; Clientele
          </motion.h2>
          <motion.div {...fadeUp(0.1)} className="w-12 h-0.5 bg-gold mb-12" />

          <div>
            {experience.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.06 * i)}
                className="py-12 border-b border-navy/10 last:border-0"
              >
                {/* Sector heading + description — left aligned */}
                <h3 className="font-sans font-extrabold text-xl text-navy mb-3">{item.category}</h3>
                <p className="text-black/90 text-sm mb-8 leading-relaxed">{item.description}</p>

                {/* "Select Clients" label with lines */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-navy/10" />
                  <span className="text-navy/35 text-[10px] font-semibold tracking-[0.2em] uppercase flex-shrink-0">Select Clients</span>
                  <div className="flex-1 h-px bg-navy/10" />
                </div>

                {/* Logo row */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                  {item.clients.map((client) => (
                    client.logo ? (
                      <img
                        key={client.name}
                        src={client.logo}
                        alt={client.name}
                        className="h-28 object-contain transition-all duration-300"
                      />
                    ) : (
                      <span
                        key={client.name}
                        className="text-navy text-sm font-semibold tracking-wide"
                      >
                        {client.name}
                      </span>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12"><Divider /></div>
        </div>
      </section>

      {/* Professional Standing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Professional Standing
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Approach &amp; Commitment
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            His practice reflects consistency, discretion and a steady command over mandates that demand both technical depth and commercial judgement. He continues to act as a long-term advisor across industries, with an emphasis on stability, foresight and sustained client trust.
          </motion.p>
        </div>
      </section>

      {/* Member — Keshav Soni */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <motion.h2 {...fadeUp(0)} className="font-sans font-extrabold text-4xl md:text-3xl text-navy tracking-tight mb-2">
            Keshav Soni
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-gold/90 text-2xl italic mb-3">
            Head of Disputes &amp; Litigation
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />

          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed mb-5 text-justify">
            Keshav Soni heads the disputes and litigation practice, overseeing representation across civil, commercial and criminal proceedings before courts and tribunals. His role involves advising on dispute strategy, managing ongoing litigation and ensuring that matters are conducted with consistency, structure and clear direction.
          </motion.p>
          <motion.p {...fadeUp(0.25)} className="text-navy/65 text-base md:text-lg leading-relaxed mb-5 text-justify">
            His experience includes handling commercial and financial disputes, recovery actions, cheque dishonour proceedings and regulatory matters, with appearances before the Supreme Court of India, High Courts and trial courts. He is regularly engaged at different stages of litigation, including matters requiring immediate intervention and strategic course correction.
          </motion.p>
          <motion.p {...fadeUp(0.3)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            In addition to his role within the firm, he is independently involved in a litigation-focused practice, bringing a more execution-driven and court-centric perspective to dispute handling, closely integrated with the firm's established advisory and regulatory framework.
          </motion.p>

        </div>
      </section>

      <Divider />

      {/* Dispute Practice */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Dispute Practice
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Scope of Practice
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            He handles a wide range of disputes including commercial and financial litigation, recovery actions, cheque dishonour matters and regulatory proceedings, with experience across courts, tribunals and appellate forums. His work often involves coordinating strategy across multiple proceedings to ensure consistency in position and outcome.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* Professional Standing — Keshav */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Professional Standing
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Approach &amp; Commitment
          </motion.h2>
          <motion.div {...fadeUp(0.15)} className="w-12 h-0.5 bg-gold mb-8" />
          <motion.p {...fadeUp(0.2)} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            His practice is defined by a results-oriented approach to litigation, with a clear focus on securing commercially and legally effective outcomes for clients. He is routinely entrusted with matters requiring decisive strategy, sustained control and the ability to respond to evolving proceedings across forums. His involvement reflects a consistent emphasis on client objectives, ensuring that disputes are not only managed efficiently but driven towards resolution with clarity, precision and accountability.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
