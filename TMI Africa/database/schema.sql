-- TMI Africa starter database schema
create table clients (id uuid primary key default gen_random_uuid(), name text not null, email text unique, country text, created_at timestamptz default now());
create table verification_cases (id uuid primary key default gen_random_uuid(), case_ref text unique not null, client_id uuid references clients(id), subject_name text not null, country text, verification_type text, status text default 'Submitted', risk_level text default 'Pending', created_at timestamptz default now());
create table evidence_files (id uuid primary key default gen_random_uuid(), case_id uuid references verification_cases(id), file_name text, file_url text, uploaded_by text, created_at timestamptz default now());
create table risk_findings (id uuid primary key default gen_random_uuid(), case_id uuid references verification_cases(id), category text, severity text, finding text, recommendation text, created_at timestamptz default now());
create table intelligence_reports (id uuid primary key default gen_random_uuid(), title text, period text, report_type text, summary text, file_url text, created_at timestamptz default now());
create table audit_logs (id uuid primary key default gen_random_uuid(), actor text, action text, entity text, entity_id text, created_at timestamptz default now());


-- TMI Distressed Licence Intelligence Schema
create table mining_licence_sources (
  id uuid primary key default gen_random_uuid(),
  country text not null,
  source_title text not null,
  source_url text,
  notice_date date,
  default_notice_date date,
  appeal_deadline date,
  decision_basis text,
  appeal_basis text,
  rows_parsed integer,
  unique_codes integer,
  unique_parties integer,
  created_at timestamptz default now()
);

create table mining_licences (
  id uuid primary key default gen_random_uuid(),
  country text not null default 'Zambia',
  serial_no integer,
  licence_code text,
  code_suffix text,
  licence_type text,
  party text,
  mlc_decision text,
  comments text,
  notice_page integer,
  notice_date date,
  default_notice_date date,
  appeal_deadline date,
  decision_basis text,
  appeal_basis text,
  duplicate_code_flag text,
  tmi_load_status text default 'Staging',
  source_url text,
  source_note text,
  risk_score integer,
  opportunity_score integer,
  province text,
  district text,
  commodity text,
  coordinates jsonb,
  created_at timestamptz default now()
);

create index idx_mining_licences_code on mining_licences(licence_code);
create index idx_mining_licences_party on mining_licences(party);
create index idx_mining_licences_country_type on mining_licences(country, code_suffix);

create table licence_watchlists (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id),
  licence_id uuid references mining_licences(id),
  watch_reason text,
  status text default 'Watching',
  created_at timestamptz default now()
);

create table licence_risk_events (
  id uuid primary key default gen_random_uuid(),
  licence_id uuid references mining_licences(id),
  event_type text,
  severity text,
  event_date date,
  description text,
  source_url text,
  created_at timestamptz default now()
);

-- TMI Africa licence intelligence extensions
create table if not exists mining_licences_staging (
  id bigserial primary key,
  country text not null,
  licence_code text not null,
  licence_type text,
  licence_type_code text,
  holder_name text,
  status text,
  decision_date date,
  appeal_deadline date,
  commodity text,
  province text,
  coordinates text,
  source_url text,
  comments text,
  duplicate_flag boolean default false,
  load_status text default 'staging',
  created_at timestamptz default now()
);

create table if not exists mining_licence_watchlists (
  id bigserial primary key,
  client_id text,
  watchlist_name text not null,
  country text,
  commodity text,
  province text,
  min_opportunity_score int default 70,
  created_at timestamptz default now()
);

create table if not exists mining_licence_scores (
  id bigserial primary key,
  licence_code text not null,
  country text not null,
  opportunity_score int,
  risk_score int,
  scoring_notes text,
  scored_at timestamptz default now()
);

create table if not exists intelligence_report_orders (
  id bigserial primary key,
  client_name text,
  report_type text not null,
  country text,
  commodity text,
  requested_scope text,
  status text default 'new',
  created_at timestamptz default now()
);

create index if not exists idx_staging_country_code on mining_licences_staging(country, licence_code);
create index if not exists idx_staging_holder on mining_licences_staging(holder_name);
create index if not exists idx_scores_country_code on mining_licence_scores(country, licence_code);

-- PPP and corridor intelligence expansion for tmi.africa
CREATE TABLE IF NOT EXISTS ppp_projects (
  id TEXT PRIMARY KEY,
  project_name TEXT NOT NULL,
  sector TEXT,
  province TEXT,
  project_value_usd NUMERIC,
  status TEXT,
  lead_ministry TEXT,
  ppp_structure TEXT,
  mining_exposure TEXT,
  local_content_score INTEGER,
  risk_rating TEXT,
  opportunity_note TEXT,
  source_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS corridor_nodes (
  id TEXT PRIMARY KEY,
  node_name TEXT NOT NULL,
  node_type TEXT,
  country TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  risk_rating TEXT,
  strategic_value TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS corridor_licence_overlays (
  id TEXT PRIMARY KEY,
  corridor_node_id TEXT REFERENCES corridor_nodes(id),
  licence_code TEXT,
  distance_km NUMERIC,
  infrastructure_score INTEGER,
  opportunity_score INTEGER,
  recommendation TEXT CHECK (recommendation IN ('PURSUE','WATCH','AVOID')),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ppp_contractors (
  id TEXT PRIMARY KEY,
  project_id TEXT REFERENCES ppp_projects(id),
  company_name TEXT NOT NULL,
  role TEXT,
  country TEXT,
  beneficial_ownership_status TEXT,
  due_diligence_status TEXT,
  risk_rating TEXT,
  local_content_flag BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
