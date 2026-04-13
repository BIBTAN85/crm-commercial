import PageTitle from "@/components/page-title";
import { relances } from "@/lib/data";

const priorityClass: Record<string, string> = {
  Haute: "text-rose-700 bg-rose-100",
  Moyenne: "text-amber-700 bg-amber-100",
  Basse: "text-emerald-700 bg-emerald-100",
};

export default function RelancesPage() {
  return (
    <div>
      <PageTitle title="Relances" subtitle="Actions de suivi prévues pour sécuriser les opportunités." />
      <div className="card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="pb-3 pr-4 font-medium">Client</th>
              <th className="pb-3 pr-4 font-medium">Canal</th>
              <th className="pb-3 pr-4 font-medium">Priorité</th>
              <th className="pb-3 font-medium">Échéance</th>
            </tr>
          </thead>
          <tbody>
            {relances.map((item) => (
              <tr key={item.id} className="border-b border-slate-100 last:border-none">
                <td className="py-3 pr-4 font-medium text-slate-700">{item.client}</td>
                <td className="py-3 pr-4">{item.canal}</td>
                <td className="py-3 pr-4">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityClass[item.priorite]}`}>
                    {item.priorite}
                  </span>
                </td>
                <td className="py-3">{item.echeance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
