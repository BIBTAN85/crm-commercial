"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-white">
            {item.question}<ChevronDown className={`h-5 w-5 transition ${open === index ? "rotate-180 text-gold" : ""}`} />
          </button>
          <AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="px-5 pb-5 leading-7 text-zinc-300">{item.answer}</p></motion.div>}</AnimatePresence>
        </div>
      ))}
    </div>
  );
}
