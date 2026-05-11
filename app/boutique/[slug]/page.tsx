import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, Shield, Truck, Trophy } from "lucide-react";
import { BoxOpeningAnimation } from "@/components/BoxOpeningAnimation";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProductBuyPanel } from "@/components/ProductBuyPanel";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { formatPrice, getProductBySlug, products } from "@/data/products";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProductBySlug(slug); return { title: product?.name ?? "Box", description: product?.description }; }

const productFaq = [
  { question: "La Box Premium garantit-elle un maillot rare ?", answer: "Elle augmente fortement le niveau de sélection et les chances d’éditions recherchées, tout en conservant l’effet mystère." },
  { question: "Quelles tailles sont disponibles ?", answer: "XS à XXL pour adulte et plusieurs tailles junior selon les stocks. Le sélecteur permet de préparer le bon format." },
  { question: "Quels clubs ou ligues puis-je recevoir ?", answer: "Des clubs européens, nations, championnats majeurs et éditions spéciales peuvent entrer dans la sélection selon la box." },
];

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><span className="rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-widest text-black">{product.badge}</span><h1 className="mt-6 text-5xl font-black uppercase text-white md:text-7xl">{product.name}</h1><p className="mt-5 text-2xl font-black text-gold">{formatPrice(product.price)}</p><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{product.description} Une formule pensée pour vivre une vraie montée d’adrénaline au moment d’ouvrir le coffret.</p><div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><ProductBuyPanel product={product} /></div></div><div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6"><BoxOpeningAnimation /></div></div></section><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2"><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-white">Ce qui est inclus</h2><ul className="mt-5 space-y-3">{product.content.map((item) => <li key={item} className="flex gap-3 text-zinc-300"><CheckCircle className="h-5 w-5 text-gold" /> {item}</li>)}</ul></div><div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-2xl font-black text-white">Clubs & ligues possibles</h2><p className="mt-5 leading-8 text-zinc-300">Premier League, Liga, Serie A, Bundesliga, Ligue 1, grandes nations, éditions européennes, drops lifestyle et pièces plus confidentielles selon arrivage.</p></div></div></section><section className="px-4 py-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Garanties" title="Une expérience premium de bout en bout" /><div className="grid gap-4 md:grid-cols-3">{[{ icon: Shield, title: "Sélection contrôlée" }, { icon: Truck, title: "Expédition rapide" }, { icon: Trophy, title: "Rareté travaillée" }].map((item) => <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center"><item.icon className="mx-auto mb-4 h-9 w-9 text-gold" /><h3 className="font-black text-white">{item.title}</h3></div>)}</div></div></section><section className="py-16"><SectionTitle eyebrow="Avis" title="La communauté valide" /><TestimonialSlider /></section><section className="px-4 py-16 sm:px-6 lg:px-8"><SectionTitle eyebrow="FAQ produit" title="Avant d’ajouter au panier" /><FAQAccordion items={productFaq} /></section></>;
}
