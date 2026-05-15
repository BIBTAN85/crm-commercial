import Link from "next/link";
import { RevealOnScroll } from "./RevealOnScroll";

export function CTASection() {
  return (
    <RevealOnScroll className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-[radial-gradient(circle_at_20%_20%,rgba(214,168,79,.24),transparent_35%),linear-gradient(135deg,#151515,#050505_55%,#7A0019)] p-8 text-center md:p-14">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-gold">Dernier coup de sifflet</p>
      <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">Prêt à ouvrir ta première box ?</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-200">Choisis ton coffret, sélectionne ta taille et laisse la magie du football faire le reste.</p>
      <Link href="/boutique" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 font-black uppercase tracking-widest text-black shadow-glow transition hover:scale-105">Commander ma box</Link>
    </RevealOnScroll>
  );
}
