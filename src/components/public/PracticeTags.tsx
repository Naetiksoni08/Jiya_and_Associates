"use client";

export default function PracticeTags({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-xs px-4 py-2 border font-medium transition-all duration-200 cursor-pointer hover:bg-gold/10 hover:border-gold"
          style={{ borderColor: "rgba(184,151,58,0.35)", color: "#B8973A", textDecoration: "none" }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
