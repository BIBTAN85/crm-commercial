"use client";

import { motion } from "framer-motion";
import { Shirt, Sparkles } from "lucide-react";

export function BoxOpeningAnimation() {
  return (
    <div className="relative mx-auto h-80 w-full max-w-md overflow-visible">
      <motion.div className="absolute left-1/2 top-20 h-28 w-64 -translate-x-1/2 rounded-2xl border border-gold/40 bg-gradient-to-br from-zinc-900 to-burgundy shadow-[0_0_70px_rgba(214,168,79,.25)]" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.div className="absolute left-1/2 top-10 h-16 w-72 origin-bottom -translate-x-1/2 rounded-2xl border border-gold/50 bg-gradient-to-r from-burgundy to-zinc-950" animate={{ rotateX: [0, -24, 0], y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }} />
      <motion.div className="absolute left-1/2 top-28 -translate-x-1/2 rounded-full bg-gold/20 p-8 blur-2xl" animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ repeat: Infinity, duration: 2.8 }} />
      <motion.div className="absolute left-1/2 top-16 -translate-x-1/2 rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur" animate={{ y: [34, -14, 34], rotate: [-5, 4, -5] }} transition={{ repeat: Infinity, duration: 4.2 }}>
        <Shirt className="h-20 w-20 text-white" />
      </motion.div>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span key={i} className="absolute left-1/2 top-24 text-gold" animate={{ x: [0, (i - 2) * 46], y: [0, -70 - i * 8], opacity: [0, 1, 0], scale: [0.5, 1.1, 0.2] }} transition={{ repeat: Infinity, duration: 2.6, delay: i * 0.25 }}><Sparkles size={18} /></motion.span>
      ))}
    </div>
  );
}
