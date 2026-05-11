"use client";
import { Minus, Plus } from "lucide-react";
export function QuantitySelector({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="inline-flex items-center gap-3 rounded-full border border-white/10 p-2"><button onClick={() => onChange(Math.max(1, value - 1))} className="rounded-full bg-white/10 p-2 text-white" aria-label="Diminuer"><Minus size={16} /></button><span className="min-w-8 text-center font-black text-white">{value}</span><button onClick={() => onChange(value + 1)} className="rounded-full bg-white/10 p-2 text-white" aria-label="Augmenter"><Plus size={16} /></button></div>;
}
