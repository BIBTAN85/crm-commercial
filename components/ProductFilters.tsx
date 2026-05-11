"use client";

import { Search } from "lucide-react";

export type FilterState = { search: string; budget: string; type: string; rarity: string; audience: string; sort: string };

export function ProductFilters({ filters, setFilters, types, rarities }: { filters: FilterState; setFilters: (filters: FilterState) => void; types: string[]; rarities: string[] }) {
  const update = (key: keyof FilterState, value: string) => setFilters({ ...filters, [key]: value });
  const selectClass = "rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-gold";
  return (
    <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        <label className="relative md:col-span-3 lg:col-span-2"><span className="sr-only">Recherche</span><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" /><input value={filters.search} onChange={(event) => update("search", event.target.value)} placeholder="Rechercher une box" className="w-full rounded-2xl border border-white/10 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-gold" /></label>
        <select aria-label="Budget" value={filters.budget} onChange={(e) => update("budget", e.target.value)} className={selectClass}><option value="">Budget</option><option value="0-50">Moins de 50 €</option><option value="50-80">50 € à 80 €</option><option value="80-200">80 € et plus</option></select>
        <select aria-label="Type" value={filters.type} onChange={(e) => update("type", e.target.value)} className={selectClass}><option value="">Type</option>{types.map((type) => <option key={type}>{type}</option>)}</select>
        <select aria-label="Rareté" value={filters.rarity} onChange={(e) => update("rarity", e.target.value)} className={selectClass}><option value="">Rareté</option>{rarities.map((rarity) => <option key={rarity}>{rarity}</option>)}</select>
        <select aria-label="Public" value={filters.audience} onChange={(e) => update("audience", e.target.value)} className={selectClass}><option value="">Public</option><option>Adulte</option><option>Enfant</option><option>Tous</option></select>
        <select aria-label="Tri" value={filters.sort} onChange={(e) => update("sort", e.target.value)} className={selectClass}><option value="popularite">Popularité</option><option value="prix-asc">Prix croissant</option><option value="prix-desc">Prix décroissant</option><option value="nouveautes">Nouveautés</option></select>
      </div>
    </div>
  );
}
