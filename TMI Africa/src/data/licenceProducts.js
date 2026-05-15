export const opportunityRules = [
  { name: 'Large-scale mining licence', weight: 20, rationale: 'Higher investor interest and faster commercial screening potential.' },
  { name: 'Large-scale exploration licence', weight: 16, rationale: 'Useful for junior explorers and farm-in opportunity mapping.' },
  { name: 'Small-scale exploration licence', weight: 10, rationale: 'Good aggregation and portfolio opportunity potential.' },
  { name: 'Mineral processing licence', weight: 14, rationale: 'Useful for value-chain and processing capacity intelligence.' },
  { name: 'Artisanal mining right', weight: 6, rationale: 'Important for ESG and formalisation, lower direct asset value.' },
  { name: 'Repeat holder discount', weight: -10, rationale: 'Multiple cancellations by the same party can signal compliance risk.' },
  { name: 'Appeal period expired', weight: 8, rationale: 'A closed appeal window can improve opportunity certainty, subject to legal checks.' }
];

export const watchlistSegments = [
  { segment: 'Tier 1 Investor Targets', criteria: 'LML/LEL records with opportunity score above 80 and no duplicate flag', product: 'Investor Opportunity Brief' },
  { segment: 'Repeat Holder Risk', criteria: 'Parties with 7+ cancelled rights or multiple licence classes', product: 'Counterparty Risk Memo' },
  { segment: 'Artisanal Formalisation', criteria: 'AMR records and cooperative-linked entities', product: 'ESG / formalisation pipeline' },
  { segment: 'Processing & Value Chain', criteria: 'MPL records and entities linked to plants or export routes', product: 'Processing Capacity Watch' },
  { segment: 'DRC–Zambia Corridor', criteria: 'DRC cobalt/copper records mapped against Zambia Copperbelt logistics', product: 'Cross-border Mineral Radar' }
];

export const importChecklist = [
  'Keep raw Zambia and DRC datasets in /data/raw or a private database bucket.',
  'Load cleaned records into mining_licences_staging first, not production.',
  'Standardise licence code, country, licence type, holder name, status, date and source URL.',
  'Deduplicate by country + licence code + holder + decision date.',
  'Run opportunity score and risk score rules.',
  'Approve records into production mining_licences table.',
  'Publish only safe commercial intelligence; keep raw source files/private notes restricted.'
];

export const premiumReports = [
  { title: 'Zambia Cancelled Rights Investor Radar', price: 'USD 750–2,500', audience: 'junior miners, banks, investors', output: 'ranked opportunity list + risk notes' },
  { title: 'DRC Cobalt Distressed Licence Watch', price: 'USD 1,500–5,000', audience: 'traders, ESG firms, battery supply chain', output: 'cobalt/copper watchlist + compliance flags' },
  { title: 'Repeat Holder & Counterparty Risk Report', price: 'USD 500–2,000', audience: 'banks, mining houses, suppliers', output: 'entity profile + network risk indicators' },
  { title: 'DRC–Zambia Corridor Risk Bulletin', price: 'USD 300–1,500/month', audience: 'logistics firms, insurers, traders', output: 'monthly route, licence and compliance alerts' }
];
