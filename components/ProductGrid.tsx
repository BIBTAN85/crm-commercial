"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductFilters, FilterState } from "./ProductFilters";

const initialFilters: FilterState = { search: "", budget: "", type: "", rarity: "", audience: "", sort: "popularite" };

export function ProductGrid() {
  const [filters, setFilters] = useState(initialFilters);
  const types = [...new Set(products.map((product) => product.type))];
  const rarities = [...new Set(products.map((product) => product.rarity))];
  const filtered = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(filters.search.toLowerCase()) || product.description.toLowerCase().includes(filters.search.toLowerCase()))
      .filter((product) => !filters.type || product.type === filters.type)
      .filter((product) => !filters.rarity || product.rarity === filters.rarity)
      .filter((product) => !filters.audience || product.audience === filters.audience)
      .filter((product) => {
        if (!filters.budget) return true;
        const [min, max] = filters.budget.split("-").map(Number);
        return product.price >= min && product.price <= max;
      })
      .sort((a, b) => filters.sort === "prix-asc" ? a.price - b.price : filters.sort === "prix-desc" ? b.price - a.price : filters.sort === "nouveautes" ? Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)) : b.popularity - a.popularity);
  }, [filters]);
  return <><ProductFilters filters={filters} setFilters={setFilters} types={types} rarities={rarities} /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div>{filtered.length === 0 && <p className="rounded-3xl border border-white/10 p-8 text-center text-zinc-300">Aucune box ne correspond aux filtres.</p>}</>;
}
