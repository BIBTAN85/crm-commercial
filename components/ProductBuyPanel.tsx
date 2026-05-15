"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-store";
import { SizeSelector } from "./SizeSelector";
import { QuantitySelector } from "./QuantitySelector";

export function ProductBuyPanel({ product }: { product: Product }) {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  return <div className="space-y-6"><div><p className="mb-3 font-black uppercase tracking-widest text-zinc-300">Taille</p><SizeSelector value={size} onChange={setSize} /></div><div><p className="mb-3 font-black uppercase tracking-widest text-zinc-300">Quantité</p><QuantitySelector value={quantity} onChange={setQuantity} /></div><button onClick={() => addItem(product, size, quantity)} className="w-full rounded-full bg-gold px-8 py-4 font-black uppercase tracking-widest text-black shadow-glow transition hover:scale-[1.02]">Ajouter au panier</button></div>;
}
