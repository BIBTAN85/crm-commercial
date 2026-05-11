"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-store";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Mystery Jersey Box accueil">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-gold to-burgundy font-black text-black shadow-glow">M</span>
          <span><span className="block text-sm font-black uppercase tracking-[0.28em] text-white">Maillot</span><span className="block text-xs uppercase tracking-[0.35em] text-gold">Mystère</span></span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-zinc-300 transition hover:text-white">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={openCart} className="relative rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-gold/70 hover:bg-gold/10" aria-label="Ouvrir le panier">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-black text-black">{count}</span>}
          </button>
          <Link href="/boutique" className="hidden rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-widest text-black transition hover:bg-gold lg:inline-flex">Commander</Link>
          <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/10 p-3 text-white md:hidden" aria-label="Ouvrir le menu">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-black md:hidden">
            <div className="flex flex-col gap-2 px-4 py-4">
              {nav.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-2xl px-4 py-3 font-semibold text-zinc-200 hover:bg-white/10">{item.label}</Link>)}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
