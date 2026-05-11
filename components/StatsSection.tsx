"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);
  useEffect(() => { if (inView) animate(count, value, { duration: 1.8 }); }, [count, inView, value]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  const stats = [{ value: 12000, label: "box expédiées", suffix: "+" }, { value: 42, label: "pays & ligues", suffix: "+" }, { value: 96, label: "clients conquis", suffix: "%" }];
  return <div className="grid gap-4 md:grid-cols-3">{stats.map((stat) => <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center"><p className="text-4xl font-black text-gold md:text-5xl"><Counter value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 uppercase tracking-[0.25em] text-zinc-400">{stat.label}</p></div>)}</div>;
}
