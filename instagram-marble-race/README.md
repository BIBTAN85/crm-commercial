# instagram-marble-race

Système Node.js + TypeScript qui génère une course de billes et publie un Reel Instagram avec l'API officielle Instagram Graph (sans scraping).

## Fonctionnalités

- Sélection du post cible (`TARGET_MEDIA_ID` ou dernier média éligible)
- Lecture des commentaires via API Graph
- Filtrage participants avec mot-clé (`ENTRY_KEYWORD`)
- Déduplication des pseudos
- Rendu vertical 1080x1920 (Remotion) ou mode simulation local
- Écran gagnant + légende dynamique
- Historisation SQLite
- Publication Instagram (optionnelle) avec `DRY_RUN`
- Exécution unique ou planification via cron

## Installation

```bash
cd instagram-marble-race
npm install
```

## Configuration `.env`

Copier `.env.example` vers `.env` puis renseigner :

- `INSTAGRAM_BUSINESS_ACCOUNT_ID`
- `INSTAGRAM_ACCESS_TOKEN`
- `TARGET_MEDIA_ID` (optionnel)
- `DATABASE_URL`
- `OUTPUT_DIR`
- `ENTRY_KEYWORD` (`GO`, `BILLE`, etc.)
- `COMMENTS_WINDOW_HOURS`
- `MAX_PARTICIPANTS`
- `MOCK_PARTICIPANTS` (ex: `alice,bob,charlie`)
- `RENDER_MODE=simulation|remotion`
- `PUBLIC_VIDEO_URL` (obligatoire pour publication réelle)
- `DRY_RUN=true|false`

> En pratique: pour tester localement sans Instagram/Chrome, utilise `MOCK_PARTICIPANTS` + `DRY_RUN=true` + `RENDER_MODE=simulation`.

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run daily
```

Exécution ponctuelle:

```bash
npm run daily -- --once
```

## Publication Instagram (important)

L’endpoint Instagram Graph attend une URL vidéo publique (`video_url`).
Le chemin local (`./renders/race.mp4`) ne peut pas être publié directement.

Flux recommandé:
1. rendre la vidéo localement,
2. l’uploader sur un stockage public (S3/R2/CDN),
3. mettre l’URL dans `PUBLIC_VIDEO_URL`,
4. lancer avec `DRY_RUN=false`.

## Flux quotidien

1. Choisir le media cible
2. Lire commentaires (ou mock)
3. Filtrer/dupliquer participants
4. Générer course + rendu
5. Construire légende
6. Sauvegarder en DB
7. Publier (si `DRY_RUN=false`)
