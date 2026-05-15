import { PackageCheck, Ruler, Sparkles, Trophy } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
const steps = [
  { icon: PackageCheck, title: "Choisis ta box", text: "Découverte, Europe, Premium ou Collector : sélectionne le niveau de suspense." },
  { icon: Ruler, title: "Sélectionne ta taille", text: "Du junior à l’adulte, tu choisis le fit qui te convient." },
  { icon: Sparkles, title: "On prépare le coffret", text: "Chaque box est assemblée pour créer un moment d’ouverture mémorable." },
  { icon: Trophy, title: "Découvre ton maillot", text: "Ouvre ta box, révèle le club ou la nation, puis vis l’émotion." },
];
export function HowItWorksSection() {
  return <div className="grid gap-4 md:grid-cols-4">{steps.map((step, index) => <RevealOnScroll key={step.title} delay={index * 0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><step.icon className="mb-5 h-9 w-9 text-gold" /><h3 className="text-xl font-black text-white">{index + 1}. {step.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-300">{step.text}</p></RevealOnScroll>)}</div>;
}
