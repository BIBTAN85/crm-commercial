import PageTitle from "@/components/page-title";
import { clients, currency, devis, relances, visites } from "@/lib/data";

const stats = [
  { label: "Clients actifs", value: clients.filter((c) => c.statut === "Client actif").length },
  { label: "Visites cette semaine", value: visites.length },
  { label: "Relances en cours", value: relances.length },
  { label: "CA potentiel", value: currency(clients.reduce((total, client) => total + client.valeur, 0)) },
];

export default function DashboardPage() {
  return (
    <div>
      <PageTitle title="Dashboard" subtitle="Vue rapide de votre activité commerciale." />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="card">
          <h2 className="text-lg font-semibold">Derniers devis</h2>
          <ul className="mt-3 space-y-3">
            {devis.map((quote) => (
              <li key={quote.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
                <span>{quote.client}</span>
                <span className="font-medium">{currency(quote.montant)}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2 className="text-lg font-semibold">Relances prioritaires</h2>
          <ul className="mt-3 space-y-3">
            {relances
              .filter((item) => item.priorite === "Haute")
              .map((item) => (
                <li key={item.id} className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
                  {item.client} — {item.canal} (échéance {item.echeance})
                </li>
              ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
