"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  return (
    <div className="overflow-hidden">
      <motion.div className="flex gap-5" animate={{ x: [0, -520, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }}>
        {[...testimonials, ...testimonials].map((item, index) => (
          <article key={`${item.name}-${index}`} className="min-w-[300px] rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 md:min-w-[420px]">
            <div className="mb-4 flex text-gold">{Array.from({ length: item.rating }).map((_, star) => <Star key={star} size={18} fill="currentColor" />)}</div>
            <p className="text-lg font-semibold leading-8 text-white">“{item.text}”</p>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-zinc-400">{item.name} · {item.city}</p>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
