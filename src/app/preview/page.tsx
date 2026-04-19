"use client";

const designs = [
  {
    id: 1,
    label: "Option 1 — Large Watermark Text",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center px-16" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A1628 100%)" }}>
        {/* Giant watermark */}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-bold text-white/[0.03] select-none leading-none pointer-events-none" style={{ fontFamily: "Georgia, serif" }}>
          LAW
        </span>
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Option 2 — Diagonal Gold Stripes",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center px-16" style={{ background: "#060E1A" }}>
        {/* Diagonal stripes */}
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.04) 40px, rgba(201,168,76,0.04) 41px)",
        }} />
        {/* Gold right accent block */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#C9A84C]" />
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Option 3 — Corner Ornamental Frame",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center px-16" style={{ background: "linear-gradient(135deg, #060E1A 0%, #0A1628 100%)" }}>
        {/* Corner ornaments */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#C9A84C]/40" />
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#C9A84C]/40" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#C9A84C]/40" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#C9A84C]/40" />
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Option 4 — Dot Grid + Gold Glow",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center px-16" style={{ background: "#060E1A" }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        {/* Radial gold glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }} />
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    label: "Option 5 — Vertical Gold Line + Split",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center" style={{ background: "#060E1A" }}>
        {/* Gold vertical left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C9A84C]" />
        {/* Right side lighter panel */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5" style={{ background: "linear-gradient(to left, #C9A84C, transparent)" }} />
        <div className="relative z-10 px-16">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Option 6 — Horizontal Lines Grid",
    render: () => (
      <div className="relative w-full h-64 overflow-hidden flex items-center px-16" style={{ background: "#060E1A" }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />
        <div className="relative z-10">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Our Expertise</p>
          <h1 className="text-white text-4xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Tax Litigation &amp; Advisory</h1>
          <div className="w-10 h-0.5 bg-[#C9A84C] mt-4" />
        </div>
      </div>
    ),
  },
];

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Hero Banner Design Options</h1>
      <p className="text-gray-500 text-sm mb-10">Pick a style for image-less hero sections (practice areas, about, team, etc.)</p>
      <div className="flex flex-col gap-8">
        {designs.map((d) => (
          <div key={d.id}>
            <p className="text-sm font-semibold text-gray-600 mb-2">{d.label}</p>
            <div className="rounded overflow-hidden shadow-lg">
              {d.render()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
