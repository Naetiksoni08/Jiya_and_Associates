import Link from "next/link";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { services } from "@/lib/services";

export const metadata = {
  title: "Expertise | Jiya & Associates",
  description: "A focused range of legal and regulatory expertise — corporate law, taxation, GST, FEMA, IP, and dispute resolution.",
  openGraph: {
    title: "Our Expertise | Jiya & Associates",
    description: "Corporate law, taxation, GST, FEMA, IP and dispute resolution — expert legal counsel across key practice areas.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero band — Option 6: Horizontal Lines Grid */}
      <div className="relative bg-navy pt-32 pb-16 px-6 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Directional gold glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Do
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Areas of Expertise
          </h1>
        </div>
      </div>

      {/* Cards grid — cream bg, white cards */}
      <div className="bg-white/50 px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white border border-gray-200 p-10 flex flex-col justify-between hover:border-gold/50 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
            >
              <div>
                <h2 className="font-serif text-xl text-navy font-semibold mb-3 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="text-navy/55 text-sm leading-relaxed">
                  {service.brief}
                </p>
              </div>
              <div className="mt-8">
                <span className="relative text-xs font-semibold tracking-widest uppercase text-navy/40 group-hover:text-gold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold group-hover:after:w-full after:transition-all after:duration-300">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
