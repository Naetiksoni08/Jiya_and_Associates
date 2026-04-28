"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { team } from "@/lib/team";

const founder = team[0];
const rest = team.slice(1);

function MemberCard({ member, dark = false }: { member: typeof team[0]; dark?: boolean }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden" style={{ height: "300px", backgroundColor: dark ? "#1a2a40" : "#E8E2D9" }}>
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" sizes="400px" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"><User size={36} className={dark ? "text-white/20" : "text-[#b8a88c]"} /></div>
        )}
      </div>
      <div className={`pt-4 pb-5 ${dark ? "bg-[#0f1c2e]" : "bg-white"}`}>
        <h3 className={`font-serif text-lg font-semibold leading-tight mb-1 ${dark ? "text-white" : "text-[#0a1628]"}`}>{member.name}</h3>
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-4 text-[#B8973A]">{member.designation}</p>
        <Link href={`/team/${member.slug}`} className={`inline-flex items-center gap-1.5 text-xs tracking-wide uppercase border px-4 py-2 transition-colors duration-200 ${dark ? "border-white/20 text-white/60 hover:border-[#B8973A] hover:text-[#B8973A]" : "border-[#0a1628]/25 text-[#0a1628] hover:border-[#B8973A] hover:text-[#B8973A]"}`}>
          View Profile <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   OPTION A — Cinematic Founder Spotlight
══════════════════════════════════════════════ */
function OptionA() {
  return (
    <section className="mb-32">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option A</p>
      <p className="text-center text-sm text-gray-400 mb-8">Cinematic Founder Spotlight — full-width dramatic hero, team row below</p>

      <Link href={`/team/${founder.slug}`} className="relative block w-full overflow-hidden group" style={{ height: "560px" }}>
        {founder.photo && (
          <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700" sizes="100vw" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.3) 60%, transparent 100%)" }} />
        <div className="absolute bottom-10 left-10 right-10">
          <p className="text-[#B8973A] text-xs font-bold tracking-[0.3em] uppercase mb-2">{founder.designation}</p>
          <h2 className="font-serif text-5xl font-semibold text-white mb-3">{founder.name}</h2>
          <div className="w-10 h-[2px] bg-[#B8973A] mb-4" />
          <p className="text-white/60 text-sm max-w-xl">{founder.tagline}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-[#B8973A] text-xs tracking-[0.2em] uppercase">
            View Profile <ArrowRight size={11} />
          </span>
        </div>
      </Link>

      <div className="bg-[#f7f4ef] px-10 py-12">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A]/70 mb-8">The Team</p>
        <div className="grid grid-cols-3 gap-6">
          {rest.map((m) => <MemberCard key={m.slug} member={m} />)}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OPTION B — Split Founder + Side Panel
══════════════════════════════════════════════ */
function OptionB() {
  return (
    <section className="mb-32">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option B</p>
      <p className="text-center text-sm text-gray-400 mb-8">Split Founder + Side Panel — founder large left, team list on right</p>

      <div className="flex gap-0">
        <Link href={`/team/${founder.slug}`} className="relative flex-shrink-0 group" style={{ width: "55%", height: "680px" }}>
          {founder.photo && (
            <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top" sizes="55vw" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,10,20,0.0) 40%, rgba(5,10,20,0.85) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.85) 0%, transparent 50%)" }} />
          <div className="absolute bottom-8 left-8">
            <p className="text-[#B8973A] text-xs font-bold tracking-[0.25em] uppercase mb-2">{founder.designation}</p>
            <h2 className="font-serif text-4xl font-semibold text-white mb-2">{founder.name}</h2>
            <div className="w-8 h-[2px] bg-[#B8973A]" />
          </div>
        </Link>

        <div className="flex-1 bg-[#0f1c2e] flex flex-col justify-center gap-0 divide-y divide-white/8 px-8 py-6">
          <p className="text-[#B8973A] text-xs font-bold tracking-[0.3em] uppercase mb-6">The Team</p>
          {rest.map((m) => (
            <Link key={m.slug} href={`/team/${m.slug}`} className="flex items-center gap-4 py-5 group hover:bg-white/[0.03] transition-colors -mx-4 px-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#1a2a40] flex-shrink-0">
                {m.photo ? <Image src={m.photo} alt={m.name} fill className="object-cover object-top" sizes="56px" /> : <div className="w-full h-full flex items-center justify-center"><User size={20} className="text-white/20" /></div>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-serif text-base font-medium">{m.name}</p>
                <p className="text-[#B8973A] text-xs tracking-[0.1em] uppercase truncate">{m.designation}</p>
              </div>
              <ArrowRight size={14} className="text-white/20 group-hover:text-[#B8973A] transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OPTION C — Founder Island (Dark, Centred)
══════════════════════════════════════════════ */
function OptionC() {
  return (
    <section className="mb-32 bg-[#060e1a] px-10 py-16">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option C</p>
      <p className="text-center text-sm text-white/30 mb-12">Founder Island — centered gold-framed card on dark bg, team grid below</p>

      <Link href={`/team/${founder.slug}`} className="group relative mx-auto block overflow-hidden" style={{ maxWidth: "780px", height: "460px" }}>
        {founder.photo && (
          <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" sizes="780px" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060e1a 0%, rgba(6,14,26,0.5) 50%, transparent 100%)" }} />
        <div className="absolute inset-3 border border-[#B8973A]/30 pointer-events-none" />
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <div>
            <p className="text-[#B8973A] text-xs font-bold tracking-[0.3em] uppercase mb-1">{founder.designation}</p>
            <h2 className="font-serif text-4xl font-semibold text-white">{founder.name}</h2>
          </div>
          <span className="text-[#B8973A] text-xs tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            View Profile <ArrowRight size={11} />
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-4 my-12 max-w-[780px] mx-auto">
        <div className="flex-1 h-px bg-white/10" />
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase">The Team</p>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-3 gap-5 max-w-[780px] mx-auto">
        {rest.map((m) => <MemberCard key={m.slug} member={m} dark />)}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OPTION D — Asymmetric Grid
══════════════════════════════════════════════ */
function OptionD() {
  return (
    <section className="mb-32">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option D</p>
      <p className="text-center text-sm text-gray-400 mb-8">Asymmetric Grid — founder double-height left, team fills right grid</p>

      <div className="grid grid-cols-2 gap-3 px-6">
        <Link href={`/team/${founder.slug}`} className="relative overflow-hidden group row-span-2" style={{ height: "640px" }}>
          {founder.photo && (
            <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
          )}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.1) 60%)" }} />
          <div className="absolute top-4 left-4 bg-[#B8973A] text-black text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1">
            Founder
          </div>
          <div className="absolute bottom-8 left-8">
            <p className="text-[#B8973A] text-xs font-bold tracking-[0.25em] uppercase mb-2">{founder.designation}</p>
            <h2 className="font-serif text-3xl font-semibold text-white mb-2">{founder.name}</h2>
            <div className="w-8 h-[2px] bg-[#B8973A] mb-3" />
            <p className="text-white/50 text-sm">{founder.tagline}</p>
          </div>
        </Link>

        {rest.slice(0, 2).map((m) => (
          <Link key={m.slug} href={`/team/${m.slug}`} className="relative overflow-hidden group" style={{ height: "314px", backgroundColor: "#E8E2D9" }}>
            {m.photo ? (
              <Image src={m.photo} alt={m.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" sizes="50vw" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#f0ece4]"><User size={36} className="text-[#b8a88c]" /></div>
            )}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.8) 0%, transparent 60%)" }} />
            <div className="absolute bottom-5 left-5">
              <h3 className="font-serif text-xl font-semibold text-white mb-1">{m.name}</h3>
              <p className="text-[#B8973A] text-xs tracking-[0.15em] uppercase">{m.designation}</p>
            </div>
          </Link>
        ))}

        {rest[2] && (
          <Link href={`/team/${rest[2].slug}`} className="relative overflow-hidden group col-start-2" style={{ height: "314px", backgroundColor: "#E8E2D9" }}>
            {rest[2].photo ? (
              <Image src={rest[2].photo} alt={rest[2].name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" sizes="50vw" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#f0ece4]"><User size={36} className="text-[#b8a88c]" /></div>
            )}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,20,0.8) 0%, transparent 60%)" }} />
            <div className="absolute bottom-5 left-5">
              <h3 className="font-serif text-xl font-semibold text-white mb-1">{rest[2].name}</h3>
              <p className="text-[#B8973A] text-xs tracking-[0.15em] uppercase">{rest[2].designation}</p>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OPTION E — Gold Rule Hierarchy
══════════════════════════════════════════════ */
function OptionE() {
  return (
    <section className="mb-32">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option E</p>
      <p className="text-center text-sm text-gray-400 mb-8">Gold Rule Hierarchy — founder horizontal dark band, team as editorial list</p>

      <div className="bg-[#0f1c2e] px-16 flex overflow-hidden" style={{ minHeight: "420px" }}>
        <div className="flex-1 flex flex-col justify-center pr-12 py-16">
          <div className="w-10 h-[3px] bg-[#B8973A] mb-6" />
          <p className="text-[#B8973A] text-xs font-bold tracking-[0.3em] uppercase mb-3">{founder.designation}</p>
          <h2 className="font-serif text-5xl font-semibold text-white leading-tight mb-5">{founder.name}</h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">{founder.tagline}</p>
          <Link href={`/team/${founder.slug}`} className="inline-flex items-center gap-2 text-[#B8973A] text-xs tracking-[0.2em] uppercase border border-[#B8973A]/40 px-6 py-3 hover:bg-[#B8973A]/10 transition-colors w-fit">
            View Profile <ArrowRight size={11} />
          </Link>
        </div>

        <div className="relative flex-shrink-0" style={{ width: "320px" }}>
          {founder.photo && (
            <Image src={founder.photo} alt={founder.name} fill className="object-contain object-bottom" sizes="320px" />
          )}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #0f1c2e 5%, transparent 30%)" }} />
        </div>
      </div>

      <div className="bg-white px-16 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[2px] bg-[#B8973A]" />
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A]">Our Team</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {rest.map((m) => (
            <Link key={m.slug} href={`/team/${m.slug}`} className="group flex gap-5 items-start border-t border-[#0a1628]/10 pt-6">
              <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-[#E8E2D9]">
                {m.photo ? <Image src={m.photo} alt={m.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" sizes="80px" /> : <div className="w-full h-full flex items-center justify-center"><User size={24} className="text-[#b8a88c]" /></div>}
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#0a1628] mb-1 group-hover:text-[#B8973A] transition-colors">{m.name}</h3>
                <p className="text-[#B8973A] text-xs tracking-[0.12em] uppercase mb-3">{m.designation}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#0a1628]/40 group-hover:text-[#B8973A] transition-colors">
                  View Profile <ArrowRight size={10} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OPTION F — Magazine Editorial
══════════════════════════════════════════════ */
function OptionF() {
  return (
    <section className="mb-32">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#B8973A] mb-3">Option F</p>
      <p className="text-center text-sm text-gray-400 mb-8">Magazine Editorial — giant typographic name over photo, team as bylines</p>

      <Link href={`/team/${founder.slug}`} className="group relative block overflow-hidden" style={{ height: "600px" }}>
        {founder.photo && (
          <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top" sizes="100vw" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,10,20,0.95) 45%, rgba(5,10,20,0.2) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-8" style={{ maxWidth: "600px" }}>
          <p className="text-[#B8973A] text-xs font-bold tracking-[0.4em] uppercase mb-4">Leadership</p>
          <h2 className="font-serif text-7xl font-bold text-white leading-none mb-2" style={{ letterSpacing: "-0.02em" }}>
            {founder.name.split(" ").map((w, i) => <span key={i} className="block">{w}</span>)}
          </h2>
          <div className="w-16 h-[2px] bg-[#B8973A] my-6" />
          <p className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-1">{founder.designation}</p>
          <p className="text-white/40 text-sm">{founder.tagline}</p>
          <span className="mt-8 inline-flex items-center gap-2 text-[#B8973A] text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Full Profile <ArrowRight size={11} />
          </span>
        </div>
      </Link>

      <div className="bg-[#f7f4ef] px-16 py-10">
        <div className="grid grid-cols-3 divide-x divide-[#0a1628]/10">
          {rest.map((m) => (
            <Link key={m.slug} href={`/team/${m.slug}`} className="group px-8 first:pl-0 last:pr-0 flex gap-4 items-center">
              <div className="relative w-16 h-20 flex-shrink-0 overflow-hidden bg-[#E8E2D9]">
                {m.photo ? <Image src={m.photo} alt={m.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" sizes="64px" /> : <div className="w-full h-full flex items-center justify-center"><User size={20} className="text-[#b8a88c]" /></div>}
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-[#0a1628] group-hover:text-[#B8973A] transition-colors leading-tight">{m.name}</h3>
                <p className="text-[#B8973A] text-[10px] tracking-[0.15em] uppercase mt-1 mb-2">{m.designation}</p>
                <span className="text-[10px] text-[#0a1628]/35 group-hover:text-[#B8973A] transition-colors flex items-center gap-1 uppercase tracking-wide">
                  Profile <ArrowRight size={9} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PreviewPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#060e1a] py-12 px-10 mb-16 text-center">
        <p className="text-[#B8973A] text-xs font-bold tracking-[0.4em] uppercase mb-3">Preview</p>
        <h1 className="font-serif text-4xl font-semibold text-white mb-3">Team Page Layout Options</h1>
        <p className="text-white/40 text-sm">Founder highlighted separately — 6 layout options</p>
      </div>

      <OptionA />
      <OptionB />
      <OptionC />
      <OptionD />
      <OptionE />
      <OptionF />
    </div>
  );
}
