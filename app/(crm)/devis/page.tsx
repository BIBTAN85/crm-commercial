import PageTitle from "@/components/page-title";
import { currency, devis } from "@/lib/data";

const statusClass: Record<string, string> = {
  Signé: "text-emerald-700 bg-emerald-100",
  "En attente": "text-amber-700 bg-amber-100",
  Envoyé: "text-sky-700 bg-sky-100",
};

export default function DevisPage() {
  return (
    <div>
      <PageTitle title="Devis" subtitle="Pipeline des propositions commerciales envoyées aux clients." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {devis.map((quote) => (
          <article key={quote.id} className="card">
            <p className="text-xs uppercase tracking-wider text-slate-400">{quote.id}</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{quote.client}</p>
            <p className="mt-3 text-2xl font-bold">{currency(quote.montant)}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusClass[quote.statut]}`}>
                {quote.statut}
              </span>
              <span className="text-xs text-slate-500">{quote.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
