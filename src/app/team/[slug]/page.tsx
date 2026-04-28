import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { getMemberBySlug, team } from "@/lib/team";
import PracticeTags from "@/components/public/PracticeTags";

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

  const navLinks = [
    { label: "Professional Background", href: "#profile" },
    ...(member.experience?.length
      ? [{ label: "Representative Experience & Clientele", href: "#experience" }]
      : []),
    ...(member.practiceSection
      ? [{ label: member.practiceSection.title, href: "#practice" }]
      : []),
    { label: "Approach & Commitment", href: "#standing" },
  ];

  return (
    <main>
      <Navbar />

      {/* ── Hero: Option A — Dark Split ── */}
      <section className="flex flex-col sm:flex-row overflow-hidden sm:min-h-[560px] pt-28 sm:pt-20" style={{ background: "#0f1c2e" }}>

        {/* Photo — full width on mobile, 38% on desktop */}
        <div
          className="w-full sm:w-[38%] flex-shrink-0 relative h-[320px] sm:h-auto"
          style={{ background: "#0f1c2e" }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className={`object-contain object-bottom sm:object-contain sm:object-bottom ${
                member.slug === "associate-1"
                  ? "scale-[0.95] sm:scale-100"
                  : ""
              }`}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "#1E3250" }}>
              <User size={64} className="text-white/20" />
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #0f1c2e 12%, transparent 10%, transparent 90%, #0f1c2e 90%)" }} />
          <div className="absolute inset-x-0 bottom-0 h-16 sm:hidden pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #0f1c2e)" }} />
          {/* OUR TEAM link — mobile only, overlaid bottom-left of image */}
          <Link
            href="/team"
            className="sm:hidden absolute top-4 left-4 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase z-10"
            style={{ color: "#B8973A" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start px-8 sm:px-12 lg:px-16 pt-6 sm:pt-32 pb-12 sm:pb-16 text-center sm:text-left" style={{ background: "#0f1c2e" }}>
          {/* Back link — desktop only */}
          <Link
            href="/team"
            className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-12 transition-colors duration-200"
            style={{ color: "#B8973A" }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Our Team
          </Link>

          {/* Designation */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#B8973A" }}>
            {member.designation}
          </p>

          {/* Name */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5">
            {member.name}
          </h1>

          {/* Gold rule */}
          <div className="w-12 h-[2px] mb-6 mx-auto sm:mx-0" style={{ background: "#B8973A" }} />

          {/* Tagline */}
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#ffffff", maxWidth: "380px" }}>
            {member.tagline}
          </p>

          {/* Section nav tags */}
          <PracticeTags links={navLinks} />
        </div>
      </section>

      {/* ── Bio / Profile ── */}
      <section id="profile" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Professional Background
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-tight mb-2">
            Profile
          </h2>
          <div className="w-12 h-0.5 bg-gold mb-10" />
          {member.bio.map((para, i) => (
            <p key={i} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify mb-5 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── Representative Experience — Ravi only ── */}
      {member.experience && member.experience.length > 0 && (
        <section id="experience" className="py-20 px-6 bg-cream">
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
                <div key={i} className="py-12 border-b border-navy/10 last:border-0">
                  <h3 className="font-sans font-extrabold text-xl text-navy mb-3">{item.category}</h3>
                  <p className="text-navy/70 text-sm mb-8 leading-relaxed">{item.description}</p>
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
                          <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      ) : (
                        <span key={client.name} className="text-navy text-sm font-semibold tracking-wide">
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

      {/* ── Dispute Practice — Keshav only ── */}
      {member.practiceSection && (
        <section id="practice" className="py-20 px-6 bg-cream">
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

      {/* ── Professional Standing ── */}
      <section id="standing" className="py-20 px-6 bg-white">
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
