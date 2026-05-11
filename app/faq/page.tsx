import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faq";
export const metadata: Metadata = { title: "FAQ", description: "Réponses aux questions fréquentes sur les box mystères de maillots de football." };
export default function FAQPage() {
  return <section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl text-center"><p className="text-sm font-black uppercase tracking-[0.35em] text-gold">FAQ</p><h1 className="mt-4 text-5xl font-black uppercase text-white md:text-7xl">Tout savoir avant d’ouvrir</h1><p className="mt-5 text-lg leading-8 text-zinc-300">Maillots officiels, choix du club, tailles, retours, cadeaux et éditions rares : voici les réponses essentielles.</p></div><div className="mt-12"><FAQAccordion items={faqs} /></div></section>;
}
