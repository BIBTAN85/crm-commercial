import Link from "next/link";
import { ShieldCheck, Gift, Truck, Headphones, Ruler, Sparkles } from "lucide-react";
import { AnimatedBanner } from "@/components/AnimatedBanner";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MysteryRevealCards } from "@/components/MysteryRevealCards";
import { ProductCard } from "@/components/ProductCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionTitle } from "@/components/SectionTitle";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { faqs } from "@/data/faq";
import { products } from "@/data/products";

const trust = [
  { icon: ShieldCheck, title: "Maillots sélectionnés", text: "Chaque pièce est contrôlée pour offrir une réception propre, crédible et premium." },
  { icon: Sparkles, title: "Surprise garantie", text: "Tu ne sais pas ce qui arrive, mais tu sais que l’ouverture sera mémorable." },
  { icon: Gift, title: "Idéal à offrir", text: "Un cadeau prêt à déclencher débat, émotion et envie de recommander." },
  { icon: Ruler, title: "Tailles au choix", text: "Tu choisis la taille, nous gardons le suspense sur le maillot." },
  { icon: Truck, title: "Expédition rapide", text: "Préparation fluide pour recevoir ton drop sans attendre le mercato." },
  { icon: Headphones, title: "Support réactif", text: "Une question sur une box, une taille ou un cadeau ? On répond vite." },
];

export default function Home() {
  return <><HeroSection /><AnimatedBanner /><section id="concept" className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Le concept" title="Tu choisis la taille, on s’occupe du suspense" text="Chaque coffret est une nouvelle histoire de foot : club mythique, nation iconique, édition rétro ou surprise collector." /><HowItWorksSection /></div></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Choisis ta box" title="Des formules pour tous les fans" text="Teste le concept, vise l’Europe, chasse le vintage ou pars sur le coffret ultime." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div><div className="mt-8 text-center"><Link href="/boutique" className="rounded-full border border-gold/40 px-6 py-3 font-black uppercase tracking-widest text-gold hover:bg-gold hover:text-black">Voir toute la boutique</Link></div></div></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Tirage surprise" title="Ce que tu peux recevoir" text="Retourne les cartes et imagine le maillot qui pourrait sortir de ta prochaine box." /><MysteryRevealCards /></div></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><StatsSection /></div></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Confiance" title="Pourquoi commander chez nous ?" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{trust.map((item, index) => <RevealOnScroll key={item.title} delay={index * 0.05} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><item.icon className="mb-4 h-9 w-9 text-gold" /><h3 className="text-xl font-black text-white">{item.title}</h3><p className="mt-3 leading-7 text-zinc-300">{item.text}</p></RevealOnScroll>)}</div></div></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Best drops" title="Box les plus populaires" /><div className="grid gap-6 md:grid-cols-3">{products.filter((p) => ["box-premium", "box-duo", "box-collector"].includes(p.slug)).map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section><section className="py-20"><SectionTitle eyebrow="Avis clients" title="Ils ont vécu l’ouverture" /><TestimonialSlider /></section><section className="px-4 py-20 sm:px-6 lg:px-8"><SectionTitle eyebrow="FAQ" title="Les questions avant le coup d’envoi" /><FAQAccordion items={faqs.slice(0, 6)} /></section><section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><CTASection /></div></section></>;
}
