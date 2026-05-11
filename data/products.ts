export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
  content: string[];
  rarity: "Classique" | "Intermédiaire" | "Premium" | "Rare" | "Variable" | "Très rare";
  audience: "Adulte" | "Enfant" | "Tous";
  badge: string;
  type: string;
  popularity: number;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    slug: "box-decouverte",
    name: "Box Découverte",
    price: 39.9,
    description: "Parfaite pour tester le concept avec un maillot surprise accessible et une vraie dose de suspense.",
    content: ["1 maillot officiel surprise", "Carte mystère", "Packaging signature"],
    rarity: "Classique",
    audience: "Tous",
    badge: "Idéal pour commencer",
    type: "Découverte",
    popularity: 78,
  },
  {
    slug: "box-europe",
    name: "Box Europe",
    price: 54.9,
    description: "Un maillot mystère issu d’un club européen, des grands championnats aux pépites inattendues.",
    content: ["1 maillot club européen", "Sélection anti-doublon", "Sticker drop"],
    rarity: "Intermédiaire",
    audience: "Adulte",
    badge: "Populaire",
    type: "Europe",
    popularity: 91,
  },
  {
    slug: "box-premium",
    name: "Box Premium",
    price: 74.9,
    description: "Sélection plus exclusive avec chances de recevoir un maillot rare, recherché ou édition spéciale.",
    content: ["1 maillot premium", "Packaging renforcé", "Surprise collector"],
    rarity: "Premium",
    audience: "Adulte",
    badge: "Best-seller",
    type: "Premium",
    popularity: 98,
    isNew: true,
  },
  {
    slug: "box-vintage",
    name: "Box Vintage",
    price: 89.9,
    description: "Pour les fans de maillots rétro, de détails iconiques et d’éditions anciennes qui racontent une époque.",
    content: ["1 maillot rétro", "Fiche histoire", "Housse collector"],
    rarity: "Rare",
    audience: "Adulte",
    badge: "Collector",
    type: "Vintage",
    popularity: 83,
  },
  {
    slug: "box-nation",
    name: "Box Nation",
    price: 59.9,
    description: "Un maillot mystère d’une sélection nationale pour vibrer comme lors des grandes compétitions.",
    content: ["1 maillot de nation", "Carte drapeau", "Packaging cadeau"],
    rarity: "Intermédiaire",
    audience: "Tous",
    badge: "International",
    type: "Nation",
    popularity: 86,
  },
  {
    slug: "box-enfant",
    name: "Box Enfant",
    price: 34.9,
    description: "Coffret adapté aux jeunes fans de football, avec tailles junior et expérience d’ouverture ludique.",
    content: ["1 maillot junior", "Carte surprise", "Stickers foot"],
    rarity: "Classique",
    audience: "Enfant",
    badge: "Junior",
    type: "Enfant",
    popularity: 72,
  },
  {
    slug: "box-duo",
    name: "Box Duo",
    price: 99.9,
    description: "Deux maillots mystères dans un seul coffret, idéal pour partager, offrir ou doubler les émotions.",
    content: ["2 maillots surprises", "Tailles personnalisables", "Double packaging"],
    rarity: "Variable",
    audience: "Tous",
    badge: "Meilleure valeur",
    type: "Duo",
    popularity: 88,
  },
  {
    slug: "box-collector",
    name: "Box Collector",
    price: 129.9,
    description: "Coffret haut de gamme avec maillot rare, packaging premium et surprise supplémentaire pour collectionneur.",
    content: ["1 maillot très rare", "Certificat de sélection", "Surprise premium"],
    rarity: "Très rare",
    audience: "Adulte",
    badge: "Stock limité",
    type: "Collector",
    popularity: 95,
    isNew: true,
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
