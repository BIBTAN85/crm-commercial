# Maillot Mystère

Site e-commerce vitrine premium pour une marque de coffrets mystères de maillots de football. Le projet est construit avec Next.js, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form et Zod.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Scripts utiles

```bash
npm run dev
npm run build
npm run lint
```

## Architecture principale

```text
app/
  page.tsx
  boutique/page.tsx
  boutique/[slug]/page.tsx
  a-propos/page.tsx
  contact/page.tsx
  faq/page.tsx
  mentions-legales/page.tsx
  politique-confidentialite/page.tsx
components/
  Header.tsx
  Footer.tsx
  HeroSection.tsx
  ProductGrid.tsx
  ProductCard.tsx
  CartDrawer.tsx
  FAQAccordion.tsx
  ContactForm.tsx
  BoxOpeningAnimation.tsx
  MysteryRevealCards.tsx
data/
  products.ts
  testimonials.ts
  faq.ts
lib/
  cart-store.tsx
  utils.ts
```

## Fonctionnalités

- Landing page immersive avec hero animé, bandeau défilant, cartes mystères et CTA premium.
- Boutique filtrable avec recherche, budget, type, rareté, public et tri.
- Page produit dynamique pour chaque box avec tailles, quantité et ajout au panier.
- Panier front avec localStorage, modification de quantité, suppression, total et mini drawer.
- Pages À propos, Contact, FAQ, Mentions légales et Politique de confidentialité.
- SEO via Metadata Next.js, contenu français complet et structure sémantique.
