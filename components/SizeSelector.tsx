"use client";
export function SizeSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "8 ans", "10 ans", "12 ans"];
  return <div className="flex flex-wrap gap-2">{sizes.map((size) => <button key={size} onClick={() => onChange(size)} className={`rounded-full border px-4 py-2 text-sm font-bold ${value === size ? "border-gold bg-gold text-black" : "border-white/10 text-white hover:border-gold"}`}>{size}</button>)}</div>;
}
