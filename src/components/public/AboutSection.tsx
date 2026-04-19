"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    heading: "Understanding the Requirements",
    body: "Each matter is taken up with a clear understanding of the client's requirements and the legal framework involved. Time is spent in identifying the relevant issues, applicable provisions and the most suitable course of action at the outset.",
  },
  {
    heading: "Clarity in Advice",
    body: "Advice is provided with clarity, keeping both immediate requirements and longer-term implications in view. Where matters involve ongoing compliance or multiple stages, consistency in approach is maintained throughout.",
  },
  {
    heading: "Consistent Execution",
    body: "Execution is carried out in a steady and disciplined manner, whether it involves filings, advisory support or representation before authorities. The focus remains on ensuring that each stage progresses smoothly, with due attention to timelines and procedural requirements.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row) => {
        if (!row) return;

        const heading = row.querySelector(".step-heading") as HTMLElement;
        const body = row.querySelector(".step-body") as HTMLElement;
        const line = row.querySelector(".step-line") as HTMLElement;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        });

        // Line draws in
        tl.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.25,
          ease: "power2.inOut",
        });

        // Heading slides up from slightly below
        tl.from(
          heading,
          {
            opacity: 0,
            y: 16,
            duration: 0.3,
            ease: "power3.out",
          },
          "-=0.1"
        );

        // Body fades in slightly after heading
        tl.from(
          body,
          {
            opacity: 0,
            y: 10,
            duration: 0.3,
            ease: "power3.out",
          },
          "-=0.15"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-cream/50" style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <p
          className="text-gold text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          In Practice
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl text-navy font-bold leading-tight mb-4"
        >
          How Matters Are Handled
        </h2>
        <div className="w-12 h-0.5 bg-gold mb-16" />

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.heading}
              ref={(el) => { if (el) rowRefs.current[i] = el; }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 py-8 px-8 mb-4 bg-white/30 border-l-4 hover:border-l-7 border-gold shadow-sm hover:shadow-[0_8px_40px_-8px_rgba(201,168,76,0.35)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out cursor-default"
              style={{ boxShadow: undefined }}
            >
              <h3 className="step-heading font-serif text-lg text-navy font-semibold leading-snug uppercase tracking-wide">
                {step.heading}
              </h3>

              <p className="step-body text-navy/65 text-base leading-relaxed text-justify">
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
}
