# TMI.AFRICA Data Import Guide

## Purpose
This build is ready for three core proprietary datasets:

1. Zambia cancelled/non-compliant mining rights dataset
2. DRC cancelled/revoked/cadastre reset dataset
3. Zambia PPP and corridor infrastructure dataset

## Recommended import sequence

### Step 1: Load to staging
Use `mining_licences_staging` first. Do not merge duplicates directly into production.

Required columns:
- country
- licence_code
- licence_type
- holder_name
- status
- decision_basis
- notice_date
- appeal_deadline
- source_url
- source_page
- load_status

### Step 2: Validate duplicates
Flag duplicate licence codes and holders with repeat cancellation exposure.

### Step 3: Enrich
Add province, district, commodity, coordinates, corridor proximity, company registration details and beneficial ownership.

### Step 4: Score
Use the opportunity engine:
- licence type value
- commodity value
- corridor proximity
- compliance risk
- holder history

### Step 5: Publish to dashboard
Only publish records after validation into production tables.

## Current Zambia baseline
The current Zambia update summary has 2,604 parsed rows, 2,582 unique licence codes, 44 duplicate rows flagged and 1,718 unique parties.

## Netlify note
Netlify functions included here are API templates. For production data persistence, connect Supabase, Neon, Xata, PlanetScale, or another hosted database.
