"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { cartItemKey, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total, toast, dismissToast } = useCart();
  return (
    <>
      <AnimatePresence>
        {toast && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed right-4 top-24 z-[70] rounded-2xl border border-gold/40 bg-zinc-950 px-5 py-4 text-sm font-bold text-white shadow-glow" onClick={dismissToast}>{toast}</motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60]">
            <motion.button aria-label="Fermer le panier" className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeCart} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 26, stiffness: 220 }} className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-zinc-950 p-6 text-white shadow-2xl">
              <div className="mb-6 flex items-center justify-between"><h2 className="text-2xl font-black uppercase">Ton panier</h2><button onClick={closeCart} className="rounded-full border border-white/10 p-2"><X /></button></div>
              <div className="flex-1 space-y-4 overflow-auto">
                {items.length === 0 && <p className="rounded-3xl border border-dashed border-white/15 p-8 text-center text-zinc-400">Ton panier est vide. Le prochain maillot surprise t’attend.</p>}
                {items.map((item) => {
                  const key = cartItemKey(item);
                  return <div key={key} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"><div className="flex justify-between gap-4"><div><p className="font-bold">{item.name}</p><p className="text-sm text-zinc-400">Taille {item.size} · {formatPrice(item.price)}</p></div><button onClick={() => removeItem(key)} className="text-zinc-400 hover:text-red-300" aria-label={`Supprimer ${item.name}`}><Trash2 size={18} /></button></div><div className="mt-4 flex items-center gap-3"><button onClick={() => updateQuantity(key, item.quantity - 1)} className="rounded-full border border-white/10 p-2"><Minus size={14} /></button><span className="font-black">{item.quantity}</span><button onClick={() => updateQuantity(key, item.quantity + 1)} className="rounded-full border border-white/10 p-2"><Plus size={14} /></button></div></div>;
                })}
              </div>
              <div className="border-t border-white/10 pt-5"><div className="mb-4 flex justify-between text-xl font-black"><span>Total</span><span>{formatPrice(total)}</span></div><button onClick={() => alert("Le paiement sera ajouté prochainement. Merci pour ton intérêt !")} className="w-full rounded-full bg-gold px-6 py-4 font-black uppercase tracking-widest text-black">Finaliser la commande</button>{items.length > 0 && <button onClick={clearCart} className="mt-3 w-full text-sm text-zinc-400 hover:text-white">Vider le panier</button>}</div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
