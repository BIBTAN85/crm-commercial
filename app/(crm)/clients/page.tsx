import PageTitle from "@/components/page-title";
import { clients, currency } from "@/lib/data";

export default function ClientsPage() {
  return (
    <div>
      <PageTitle title="Clients" subtitle="Liste des comptes, segments et potentiel commercial." />
      <div className="card overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="pb-3 pr-4 font-medium">Contact</th>
              <th className="pb-3 pr-4 font-medium">Société</th>
              <th className="pb-3 pr-4 font-medium">Segment</th>
              <th className="pb-3 pr-4 font-medium">Statut</th>
              <th className="pb-3 font-medium">Valeur</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b border-slate-100 last:border-none">
                <td className="py-3 pr-4 font-medium text-slate-700">{client.nom}</td>
                <td className="py-3 pr-4">{client.societe}</td>
                <td className="py-3 pr-4">{client.segment}</td>
                <td className="py-3 pr-4">{client.statut}</td>
                <td className="py-3">{currency(client.valeur)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
