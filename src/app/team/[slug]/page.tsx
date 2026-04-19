import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { getMemberBySlug, team } from "@/lib/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const member = getMemberBySlug(params.slug);
  if (!member) return {};
  return {
    title: `${member.name} | Jiya & Associates`,
    description: member.tagline,
  };
}


export default function MemberProfilePage({ params }: { params: { slug: string } }) {
  const member = getMemberBySlug(params.slug);
  if (!member) notFound();

  return (
    <main>
      <Navbar />

      {/* Hero band */}
      <div className="relative bg-navy pt-32 pb-16 px-6 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={14} /> Back to Our Team
          </Link>
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            {member.designation}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
            {member.name}
          </h1>
          <div className="w-12 h-[2px] bg-gold mt-4" />
        </div>
      </div>

      {/* Bio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-0.5 bg-gold mb-10" />
          {member.bio.map((para, i) => (
            <p
              key={i}
              className="text-navy/65 text-base md:text-lg leading-relaxed text-justify mb-5 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Representative Experience — Ravi only */}
      {member.experience && member.experience.length > 0 && (
        <section className="py-20 px-6 bg-cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
              Representative Experience &amp; Clientele
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-12" />

            <div>
              {member.experience.map((item, i) => (
                <div
                  key={i}
                  className="py-12 border-b border-navy/10 last:border-0"
                >
                  <h3 className="font-sans font-extrabold text-xl text-navy mb-3">
                    {item.category}
                  </h3>
                  <p className="text-navy/70 text-sm mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-navy/10" />
                    <span className="text-navy/35 text-[10px] font-semibold tracking-[0.2em] uppercase flex-shrink-0">
                      Select Clients
                    </span>
                    <div className="flex-1 h-px bg-navy/10" />
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {item.clients.map((client) =>
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
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dispute Practice Section — Keshav only */}
      {member.practiceSection && (
        <section className="py-20 px-6 bg-cream">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              {member.practiceSection.label}
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
              {member.practiceSection.title}
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
              {member.practiceSection.para}
            </p>
            </div>
        </section>
      )}

      {/* Professional Standing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Professional Standing
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Approach &amp; Commitment
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-8" />
          <p className="text-navy/65 text-base md:text-lg leading-relaxed text-justify">
            {member.standing}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
