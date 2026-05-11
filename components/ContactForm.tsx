"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({ subject: z.string().min(2, "Choisis un sujet."), name: z.string().min(2, "Ton nom est requis."), email: z.string().email("Email invalide."), message: z.string().min(10, "Ajoute au moins 10 caractères.") });
type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = () => reset();
  const input = "mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-gold";
  return <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><div className="grid gap-4 md:grid-cols-2"><label className="text-sm font-bold text-zinc-200">Sujet<select {...register("subject")} className={input}><option value="">Sélectionner</option><option>Commande</option><option>Taille</option><option>Partenariat</option><option>Retour</option></select>{errors.subject && <span className="text-red-300">{errors.subject.message}</span>}</label><label className="text-sm font-bold text-zinc-200">Nom<input {...register("name")} className={input} placeholder="Ton nom" />{errors.name && <span className="text-red-300">{errors.name.message}</span>}</label><label className="text-sm font-bold text-zinc-200 md:col-span-2">Email<input {...register("email")} className={input} placeholder="toi@email.com" />{errors.email && <span className="text-red-300">{errors.email.message}</span>}</label><label className="text-sm font-bold text-zinc-200 md:col-span-2">Message<textarea {...register("message")} className={`${input} min-h-36`} placeholder="Dis-nous comment on peut t’aider." />{errors.message && <span className="text-red-300">{errors.message.message}</span>}</label></div><button className="mt-5 rounded-full bg-gold px-7 py-4 font-black uppercase tracking-widest text-black" type="submit">Envoyer</button>{isSubmitSuccessful && <p className="mt-4 text-sm font-bold text-green-300">Message prêt à être envoyé. La connexion backend sera ajoutée prochainement.</p>}</form>;
}
