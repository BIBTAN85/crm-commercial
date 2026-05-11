"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { BoxOpeningAnimation } from "./BoxOpeningAnimation";

function FloatingJerseyCards() {
  const cards = ["PSG ?", "Brasil ?", "Retro ?", "UCL ?"];
  return <>{cards.map((card, index) => <motion.div key={card} className="absolute hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-black text-white backdrop-blur md:block" style={{ left: `${index % 2 ? 72 : 7}%`, top: `${18 + index * 16}%` }} animate={{ y: [0, -16, 0], rotate: [index - 2, index + 3, index - 2] }} transition={{ repeat: Infinity, duration: 4 + index, delay: index * 0.2 }}>{card}</motion.div>)}</>;
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(122,0,25,.55),transparent_30%),radial-gradient(circle_at_70%_35%,rgba(214,168,79,.18),transparent_28%)]" />
      <div className="field-lines absolute inset-x-0 bottom-0 h-64 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-gold">Nouveau drop disponible</span>
          <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-7xl xl:text-8xl">Découvre le maillot mystère qui t’attend</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">Commande ta box, choisis ta taille, ouvre ton coffret et découvre un maillot de foot surprise parmi une sélection de clubs, nations et éditions rares.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/boutique" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-black uppercase tracking-widest text-black shadow-glow transition hover:scale-105">Découvrir les box <ArrowRight size={18} /></Link><a href="#concept" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-black uppercase tracking-widest text-white hover:border-gold"><PlayCircle size={18} /> Voir le concept</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <FloatingJerseyCards />
          <BoxOpeningAnimation />
        </motion.div>
      </div>
    </section>
  );
}
