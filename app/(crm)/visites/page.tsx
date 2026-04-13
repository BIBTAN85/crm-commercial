import PageTitle from "@/components/page-title";
import { visites } from "@/lib/data";

const badgeColor: Record<string, string> = {
  Positif: "bg-emerald-100 text-emerald-700",
  Neutre: "bg-slate-100 text-slate-700",
  Négatif: "bg-rose-100 text-rose-700",
};

export default function VisitesPage() {
  return (
    <div>
      <PageTitle title="Visites" subtitle="Suivi des rendez-vous terrain et comptes-rendus." />
      <div className="grid gap-4">
        {visites.map((visit) => (
          <article key={visit.id} className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">{visit.date}</p>
              <p className="font-semibold text-slate-900">{visit.client}</p>
              <p className="text-sm text-slate-600">Contact: {visit.contact}</p>
            </div>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeColor[visit.resultat]}`}>
              {visit.resultat}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
