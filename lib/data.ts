export type Client = {
  id: string;
  nom: string;
  societe: string;
  segment: "PME" | "Startup" | "Grand compte";
  statut: "Prospect" | "Client actif" | "À relancer";
  valeur: number;
};

export type Visit = {
  id: string;
  date: string;
  client: string;
  contact: string;
  resultat: "Positif" | "Neutre" | "Négatif";
};

export type FollowUp = {
  id: string;
  client: string;
  canal: "Email" | "Téléphone" | "LinkedIn";
  priorite: "Haute" | "Moyenne" | "Basse";
  echeance: string;
};

export type Quote = {
  id: string;
  client: string;
  montant: number;
  statut: "Envoyé" | "Signé" | "En attente";
  date: string;
};

export const clients: Client[] = [
  { id: "C001", nom: "Camille Durand", societe: "Nexa Studio", segment: "Startup", statut: "Client actif", valeur: 12000 },
  { id: "C002", nom: "Hugo Martin", societe: "BatiVision", segment: "PME", statut: "Prospect", valeur: 6800 },
  { id: "C003", nom: "Léa Moreau", societe: "AeroPulse", segment: "Grand compte", statut: "À relancer", valeur: 28500 },
  { id: "C004", nom: "Nora Benali", societe: "Solaria", segment: "PME", statut: "Client actif", valeur: 9800 },
];

export const visites: Visit[] = [
  { id: "V-101", date: "2026-04-09", client: "Nexa Studio", contact: "Camille Durand", resultat: "Positif" },
  { id: "V-102", date: "2026-04-10", client: "BatiVision", contact: "Hugo Martin", resultat: "Neutre" },
  { id: "V-103", date: "2026-04-11", client: "AeroPulse", contact: "Léa Moreau", resultat: "Négatif" },
];

export const relances: FollowUp[] = [
  { id: "R-201", client: "AeroPulse", canal: "Email", priorite: "Haute", echeance: "2026-04-15" },
  { id: "R-202", client: "BatiVision", canal: "Téléphone", priorite: "Moyenne", echeance: "2026-04-17" },
  { id: "R-203", client: "Solaria", canal: "LinkedIn", priorite: "Basse", echeance: "2026-04-20" },
];

export const devis: Quote[] = [
  { id: "D-301", client: "Nexa Studio", montant: 7200, statut: "Signé", date: "2026-04-08" },
  { id: "D-302", client: "AeroPulse", montant: 15400, statut: "En attente", date: "2026-04-10" },
  { id: "D-303", client: "BatiVision", montant: 4300, statut: "Envoyé", date: "2026-04-11" },
];

export const currency = (amount: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
