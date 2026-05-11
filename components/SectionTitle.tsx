import { RevealOnScroll } from "./RevealOnScroll";

export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <RevealOnScroll className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>}
      <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{text}</p>}
    </RevealOnScroll>
  );
}
