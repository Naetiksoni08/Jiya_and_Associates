export default function MaintenancePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A1628 100%)" }}
    >
      {/* Grid lines */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-lg">
        {/* Logo mark */}
        <div className="flex justify-center mb-10">
          <div className="p-2 border border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jiya.png" alt="Jiya & Associates" className="w-14 h-14 object-contain" />
          </div>
        </div>

        {/* Eyebrow */}
        <p className="text-[#C9A84C] text-sm font-semibold tracking-[0.3em] uppercase mb-5">
          Jiya &amp; Associates
        </p>

        {/* Heading */}
        <h1
          className="text-white font-bold text-3xl md:text-4xl leading-tight mb-5"
          style={{ fontFamily: "Georgia, serif" }}
        >
          We&apos;ll Be Back Shortly
        </h1>

        {/* Gold dash */}
        <div className="w-12 h-[2px] bg-[#C9A84C] mx-auto mb-6" />

        {/* Body */}
        <p className="text-white/55 text-base leading-relaxed mb-10">
          Our website is currently undergoing scheduled maintenance.
          We will be back online shortly. Thank you for your patience.
        </p>

        {/* Contact fallback */}
        <p className="text-white/35 text-sm">
          For urgent matters, reach us at{" "}
          <a
            href="mailto:contact@jiyaandassociates.com"
            className="text-[#C9A84C] hover:underline"
          >
            contact@jiyaandassociates.com
          </a>
        </p>
      </div>
    </main>
  );
}
