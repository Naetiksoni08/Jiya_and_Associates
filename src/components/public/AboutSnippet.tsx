"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 25,  suffix: "+",  label: "Years of\nExcellence" },
  { num: 500, suffix: "+",  label: "Matters\nAdvised" },
  { num: 6,   suffix: "",   label: "Core Practice\nAreas" },
  { num: 2,   suffix: "",   label: "Branches of\n Expertise" },  
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) { setCount(0); return; }
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // ease-out
      setCount(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
      if (frame >= totalFrames) { setCount(target); clearInterval(timer); }
    }, 1400 / totalFrames);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function AboutSnippet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={sectionRef} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center px-10 xl:px-20">

          {/* Left — slides in from left */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-5">
              About Us
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Where Experience Translates
              <br />
              Into Execution
            </h2>

            <p className="text-navy/55 text-base md:text-lg leading-relaxed mb-12">
              Jiya &amp; Associates is built on years of experience across corporate,
              taxation, intellectual property and regulatory matters. The firm operates
              with a clear understanding of legal frameworks and their application in
              business and individual contexts.
            </p>

            <Link
              href="/about"
              className="relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide text-navy"
            >
              <span className="absolute top-0 left-0 h-px bg-gold animate-border-top" style={{ width: 0 }} />
              <span className="absolute top-0 right-0 w-px bg-gold animate-border-right" style={{ height: 0 }} />
              <span className="absolute bottom-0 right-0 h-px bg-gold animate-border-bottom" style={{ width: 0 }} />
              <span className="absolute bottom-0 left-0 w-px bg-gold animate-border-left" style={{ height: 0 }} />
              Learn More About Us <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Right — circular cards slide in from right, staggered */}
          <motion.div
            className="flex-1 grid grid-cols-2 gap-1"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex justify-center"
                style={{ marginTop: i % 2 === 0 ? "-20px" : "16px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease: "easeOut" }}
              >
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#4c3228] flex flex-col items-center justify-center text-center px-4 md:px-6 shadow-lg hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)] hover:scale-105 hover:bg-[#3d251e] transition-all duration-300 cursor-default">
                  <span className="font-serif text-2xl md:text-4xl font-bold text-white leading-none">
                    <CountUp target={stat.num} suffix={stat.suffix} active={inView} />
                  </span>
                  <p className="text-gold/80 font-bold text-xs md:text-sm mt-1 md:mt-2 leading-snug whitespace-pre-line">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

      </div>

    </section>
  );
}
