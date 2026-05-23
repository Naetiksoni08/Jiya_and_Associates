import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { getServiceBySlug, services } from "@/lib/services";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const keywordsMap: Record<string, string[]> = {
    "corporate-commercial-advisory": [
      "corporate lawyer Delhi",
      "commercial contracts India",
      "business structuring lawyer",
      "joint venture agreement India",
      "shareholders agreement lawyer Delhi",
      "NDA drafting India",
      "Companies Act lawyer India",
    ],
    "regulatory-compliance": [
      "regulatory compliance lawyer India",
      "statutory compliance Delhi",
      "Companies Act compliance lawyer",
      "compliance advisory India",
      "regulatory filings lawyer Delhi",
    ],
    "tax-litigation-advisory": [
      "tax litigation lawyer Delhi",
      "GST lawyer India",
      "income tax lawyer Delhi",
      "ITAT lawyer India",
      "DGGI lawyer",
      "tax notice response lawyer Delhi",
      "GST advisory India",
    ],
    "intellectual-property-law": [
      "trademark registration India",
      "trademark lawyer Delhi",
      "IP lawyer India",
      "brand registration lawyer",
      "trademark objection reply India",
      "logo registration India",
    ],
    "real-estate-advisory": [
      "real estate lawyer Delhi",
      "property lawyer India",
      "RERA lawyer Delhi",
      "title verification lawyer",
      "property due diligence India",
      "sale deed lawyer Delhi",
    ],
    "licensing-approvals": [
      "licensing lawyer India",
      "GST registration Delhi",
      "FSSAI registration lawyer",
      "business license India",
      "MSME registration lawyer Delhi",
      "trade license lawyer India",
    ],
  };

  return {
    title: `${service.title} | Jiya & Associates`,
    description: service.brief,
    keywords: keywordsMap[params.slug] || [],
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <main>
      <Navbar />

      {/* Hero band — Option 6: Horizontal Lines Grid */}
      <div className="relative bg-navy pt-32 pb-16 px-6 overflow-hidden">
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Directional gold glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={14} /> Back to All Areas
          </Link>
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Our Expertise
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
            {service.title}
          </h1>
          <div className="w-12 h-[2px] bg-gold mt-4" />
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* Intro paragraphs */}
          {service.intro && service.intro.length > 0 && (
            <div className="mb-14">
              {service.intro.map((para, i) => (
                <p key={i} className="text-navy/65 text-base md:text-lg leading-relaxed text-justify mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Sections */}
          {service.sections && service.sections.map((section, i) => (
            <div key={i} className="mb-12 last:mb-0">
              {/* Section divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <h2 className="font-serif text-xl md:text-2xl text-navy font-semibold">
                  {section.heading}
                </h2>
              </div>
              <div className="pl-6 border-l border-gold/20 space-y-4">
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-navy/65 text-base leading-relaxed text-justify">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Fallback if no content yet */}
          {!service.intro && !service.sections && (
            <div>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="text-navy/60 text-lg leading-relaxed">{service.brief}</p>
              <p className="text-navy/40 text-sm mt-12 italic">Full service details coming soon.</p>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
