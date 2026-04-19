"use client";

const row1 = [
  {
    text: "Before initiating proceedings, we consulted Jiya & Associates for a legal assessment. Their evaluation of risk and strategy gave us a clear direction, and the transition into litigation was handled seamlessly through their associated practice.",
  },
  {
    text: "We engaged Jiya & Associates for reviewing and structuring our commercial agreements. Ravi and his team identified gaps we had overlooked and refined the terms to better protect our position. The advice was practical and directly implementable.",
  },
  {
    text: "Support from Jiya & Associates in navigating regulatory compliance proved extremely valuable. Their structured and detail-oriented approach ensured that all requirements were addressed without unnecessary complexity.",
  },
  {
    text: "We got our trademark registered through Jiya & Associates, and the entire process was handled very efficiently. They explained the stages clearly, kept us updated on timelines and ensured that there were no unnecessary delays. What stood out was their clarity and the ease with which everything was managed.",
  },
  {
    text: "Before finalising a property purchase, we had the documents reviewed by Jiya & Associates. They conducted a thorough due diligence and highlighted issues we would not have been able to identify on our own. Their inputs gave us the confidence to proceed with clarity and avoid potential complications.",
  },
];

const row2 = [
  {
    text: "During the restructuring of our business operations, the inputs provided by Jiya & Associates were both practical and forward-looking. They helped align the legal framework with our commercial objectives without overcomplicating the process.",
  },
  {
    text: "The team at Jiya & Associates demonstrated a thorough understanding of our sector. Their guidance on compliance and structuring was clear, considered and aligned with both our immediate needs and long-term direction.",
  },
  {
    text: "We required guidance on compliance for our online business operations. Jiya & Associates provided practical and well-structured advice that was easy to understand and implement. Their approach ensured that we were fully compliant without overcomplicating the process.",
  },
  {
    text: "While setting up our business, Ravi and his team assisted us with structuring and documentation. The process was handled smoothly, and their advice was aligned with our long-term plans rather than just immediate requirements. It made a noticeable difference in how we approached the setup.",
  },
  {
    text: "We had multiple agreements drafted and reviewed by Jiya & Associates. The level of detail and clarity that Ravi and Keshav put in the documents was impressive, and they ensured that our interests were well-protected. Their ability to anticipate potential issues and address them upfront was particularly valuable.",
  },
];

function TestimonialCard({ text }: { text: string }) {
  return (
    <div className="w-80 shrink-0 border border-gray-100 bg-white p-7 shadow-sm flex flex-col">
      <span className="block font-serif text-7xl text-gold leading-none mb-2">&ldquo;</span>
      <p className="text-navy/65 text-sm leading-relaxed flex-1">{text}</p>
      <span className="block font-serif text-7xl text-gold leading-none text-right mt-2">&rdquo;</span>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      {/* Mobile heading */}
      <div className="md:hidden px-8 mb-8 text-center">
        <h2 className="font-serif text-4xl font-bold text-navy leading-tight mb-4">
          What Our<br />Clients Say
        </h2>
        <div className="w-12 h-[2px] bg-gold mx-auto" />
      </div>

      <div className="flex items-center gap-0">

        {/* Left — heading (desktop only) */}
        <div className="hidden md:flex shrink-0 w-[480px] px-16 flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy leading-tight mb-4">
            What Our<br />Clients Say
          </h2>
          <div className="w-12 h-[2px] bg-gold mt-2" />
        </div>

        {/* Two row carousels */}
        <div className="flex-1 overflow-hidden flex flex-col gap-6">

          {/* Row 1 — scrolls left */}
          <div className="flex">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-stretch gap-6 animate-marquee shrink-0"
                aria-hidden={copy === 1}
              >
                {row1.map((t, i) => (
                  <TestimonialCard key={i} text={t.text} />
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-stretch gap-6 animate-marquee-reverse shrink-0"
                aria-hidden={copy === 1}
              >
                {row2.map((t, i) => (
                  <TestimonialCard key={i} text={t.text} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
