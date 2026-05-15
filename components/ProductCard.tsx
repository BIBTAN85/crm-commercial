"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <motion.article whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-5 shadow-card backdrop-blur">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(214,168,79,.22),transparent_45%)]" />
      <div className="relative mb-5 h-44 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#181818,#050505_55%,#7A0019)] p-5">
        <span className="rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wider text-black">{product.badge}</span>
        <div className="absolute bottom-5 left-5 right-5"><div className="h-16 rounded-2xl border border-white/15 bg-black/40 shadow-glow" /><div className="mx-auto -mt-12 grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-white/10 text-4xl font-black text-white">?</div></div>
      </div>
      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-3"><h3 className="text-2xl font-black text-white">{product.name}</h3><span className="text-xl font-black text-gold">{formatPrice(product.price)}</span></div>
        <p className="min-h-16 text-sm leading-6 text-zinc-300">{product.description}</p>
        <div className="my-4 flex flex-wrap gap-2"><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{product.rarity}</span><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">{product.audience}</span><span className="inline-flex items-center gap-1 rounded-full border border-gold/30 px-3 py-1 text-xs text-gold"><Star size={12} /> {product.popularity}%</span></div>
        <div className="flex gap-2"><button onClick={() => addItem(product)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:bg-gold"><ShoppingBag size={16} /> Ajouter</button><Link href={`/boutique/${product.slug}`} className="rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-gold">Détails</Link></div>
      </div>
    </motion.article>
  );
}
