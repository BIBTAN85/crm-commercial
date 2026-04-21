# instagram-marble-race

Système Node.js + TypeScript qui génère une course de billes en Reel Instagram et publie via l'API officielle Instagram Graph (sans scraping).

## Fonctionnalités

- Sélection du post cible (`TARGET_MEDIA_ID` ou dernier média éligible)
- Lecture des commentaires via API Graph
- Filtrage participants avec mot-clé (`ENTRY_KEYWORD`, par défaut `GO`)
- Déduplication par pseudo
- Génération vidéo verticale 1080x1920 avec Remotion
- Choix du gagnant et écran final
- Génération automatique de légende
- Historisation SQLite
- Publication Instagram avec `dry-run`
- Planification quotidienne avec `node-cron`
- Simulation locale avec `MOCK_PARTICIPANTS`

## Installation

```bash
cd instagram-marble-race
npm install
```

## Configuration

1. Copier `.env.example` en `.env`
2. Renseigner :
   - `INSTAGRAM_BUSINESS_ACCOUNT_ID`
   - `INSTAGRAM_ACCESS_TOKEN`
   - `TARGET_MEDIA_ID` (optionnel)
   - `DATABASE_URL`
   - `OUTPUT_DIR`
   - `ENTRY_KEYWORD` (`GO`, `BILLE`, etc.)
   - `COMMENTS_WINDOW_HOURS` (fenêtre temporelle)
   - `DRY_RUN=true` pour tester sans publier

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run daily
```

Pour exécuter une fois :

```bash
npm run daily -- --once
```

## Comment brancher l'API Instagram

- Utiliser un compte Instagram Business relié à une Page Facebook.
- Créer une app Meta avec permissions Graph adaptées (`instagram_basic`, `instagram_manage_comments`, `instagram_content_publish`, selon votre cas).
- Générer un token d'accès valide et le stocker dans `.env`.

## Choix du post cible

- Si `TARGET_MEDIA_ID` est défini : ce post est utilisé.
- Sinon : le dernier média éligible est récupéré automatiquement.

## Dry-run (sans publication)

- Laissez `DRY_RUN=true`.
- Le rendu vidéo + historique DB se font normalement.
- L'appel de publication est ignoré.

## Automatisation avec cron

La tâche quotidienne est pilotée par `CRON_SCHEDULE` (par défaut `0 9 * * *`).

Exemple système :

```bash
# tous les jours à 09:00 UTC
npm run daily
```

## Flux quotidien

1. Récupérer le média cible
2. Lire les commentaires
3. Extraire les participants
4. Simuler et rendre la course
5. Générer la légende
6. Sauvegarder l'exécution en SQLite
7. Publier (ou dry-run)

