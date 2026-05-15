# TMI Africa – tmi.africa Client Portal + Licence Intelligence

Netlify-ready React/Vite platform for TerraNova Mining Intelligence (TMI Africa).

## What is included

- Executive dashboard
- Distressed Licence Tracker
- Licence Opportunity Radar
- Zambia + DRC Dataset Import Center
- Verification workflow pages
- Client portal pages
- Reports and governance modules
- Netlify Functions API templates
- PostgreSQL/Supabase-style database schema

## Key licence-intelligence modules

1. **Distressed Licence Tracker** – searchable register and dashboard built around cancelled mining rights.
2. **Opportunity Radar** – scoring and watchlist segmentation for investors, banks and mining firms.
3. **Dataset Import Center** – workflow and CSV template for loading Zambia and DRC cancelled licence datasets.
4. **API templates** – endpoints for licence search, opportunity scoring and import templates.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Deploy the `dist` folder to Netlify, or connect the repository to Netlify.

## Netlify functions

Available templates:

- `/.netlify/functions/licences`
- `/.netlify/functions/opportunity-radar?country=Zambia&suffix=LML`
- `/.netlify/functions/import-template`
- `/.netlify/functions/verification-request`
- `/.netlify/functions/case-status`
- `/.netlify/functions/risk-score`
- `/.netlify/functions/reports`

## Data strategy

Keep raw Zambia and DRC datasets private. Load them into `mining_licences_staging`, clean and deduplicate, then publish approved records to the searchable portal.

Recommended deployment path:

1. Deploy public portal to Netlify.
2. Connect Supabase or Neon Postgres.
3. Apply `database/schema.sql`.
4. Import Zambia and DRC cancelled licence files into staging.
5. Review duplicates and normalize holders.
6. Publish approved records and premium reports.

## Domain

Configured for: https://tmi.africa

## v3 Expansion: PPP + Corridor + Licence Overlay

This version adds PPP Intelligence and Corridor Intelligence to the TMI Africa platform.

New pages:
- `/ppp` via app navigation: Zambia PPP Opportunity Radar
- `/corridors` via app navigation: Corridor and cancelled licence overlay logic

New Netlify functions:
- `/.netlify/functions/ppp-projects`
- `/.netlify/functions/corridor-overlay`

New schema tables:
- `ppp_projects`
- `ppp_contractors`
- `corridor_nodes`
- `corridor_licence_overlays`

Import guidance is included in `docs_DATA_IMPORT_GUIDE.md`.
