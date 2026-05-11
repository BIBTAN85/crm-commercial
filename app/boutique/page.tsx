import type { Metadata } from "next";
import { AnimatedBanner } from "@/components/AnimatedBanner";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata: Metadata = { title: "Boutique", description: "Découvrez toutes les box mystères de maillots de football : découverte, Europe, premium, vintage, nation, enfant, duo et collector." };

export default function BoutiquePage() {
  return <><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.35em] text-gold">Boutique</p><h1 className="mt-4 text-5xl font-black uppercase text-white md:text-7xl">Choisis ton prochain drop</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">Filtre par budget, type de box, rareté ou public. Le paiement n’est pas encore relié, mais l’expérience panier est prête pour une vraie boutique.</p></div></section><AnimatedBanner /><section className="px-4 py-14 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><ProductGrid /></div></section></>;
}
