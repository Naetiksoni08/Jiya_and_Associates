import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User } from "lucide-react";
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
      <section className="relative pt-36 pb-28 lg:pb-32 overflow-hidden" style={{ background: "#0A1628" }}>
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-10 transition-colors duration-200"
            style={{ color: "#B8973A" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-10">
            {/* Photo */}
            <div
              className="flex-shrink-0 w-48 sm:w-64 overflow-hidden rounded-lg"
              style={{ backgroundColor: "#1E3250", height: "320px" }}
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={256}
                  height={320}
                  className="object-cover object-top w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User size={48} className="text-white/20" />
                </div>
              )}
            </div>

            {/* Name + role */}
            <div className="pt-2">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#B8973A" }}>
                {member.designation}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-3">
                {member.name}
              </h1>
              <div className="w-12 h-[2px] bg-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Professional Background
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Profile
          </h2>
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
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Track Record
            </p>
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

                  <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                    {item.clients.map((client) =>
                      client.logo ? (
                        <div key={client.name} className="flex items-center justify-center w-40 h-24 rounded-2xl overflow-hidden">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="max-h-full max-w-full object-contain transition-all duration-300"
                          />
                        </div>
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
