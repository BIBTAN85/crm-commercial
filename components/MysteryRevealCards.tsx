"use client";

import { useState } from "react";
const cards = ["Club européen", "Nation", "Vintage", "Collector", "Édition spéciale", "Pépite surprise"];
export function MysteryRevealCards() {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards.map((card, index) => <button key={card} onClick={() => setOpen(open === index ? null : index)} className="group h-40 [perspective:1000px]" aria-label={`Révéler ${card}`}><span className={`relative block h-full rounded-[2rem] transition duration-500 [transform-style:preserve-3d] ${open === index ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}><span className="absolute inset-0 grid place-items-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-burgundy text-6xl font-black text-white [backface-visibility:hidden]">?</span><span className="absolute inset-0 grid place-items-center rounded-[2rem] border border-gold/40 bg-gold p-6 text-center text-xl font-black uppercase text-black [backface-visibility:hidden] [transform:rotateY(180deg)]">{card}</span></span></button>)}</div>;
}
