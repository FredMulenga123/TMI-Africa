export const pppProjects = [
  { id: 'PPP-ZM-001', name: 'Lobito Corridor', sector: 'Rail / Logistics', valueUsd: 5000000000, status: 'Strategic corridor', province: 'Copperbelt / North-Western link', miningExposure: 'Very High', localContentScore: 72, risk: 'Medium', opportunity: 'Copper and cobalt export logistics, supplier ecosystem, investor corridor intelligence' },
  { id: 'PPP-ZM-002', name: 'TAZARA Revitalisation', sector: 'Rail', valueUsd: 1400000000, status: 'Pipeline / revitalisation', province: 'Multi-province', miningExposure: 'High', localContentScore: 68, risk: 'Medium-High', opportunity: 'Bulk minerals movement, regional trade, contractor due diligence' },
  { id: 'PPP-ZM-003', name: 'Kasumbalesa Border Modernisation', sector: 'Border / Trade', valueUsd: 110000000, status: 'Active / priority', province: 'Copperbelt', miningExposure: 'Very High', localContentScore: 76, risk: 'Medium', opportunity: 'DRC-Zambia mineral movement monitoring, transporter screening, border intelligence' },
  { id: 'PPP-ZM-004', name: 'Lumwana–Kambimba Road & Border Post', sector: 'Road / Border', valueUsd: 118000000, status: 'Active / priority', province: 'North-Western', miningExposure: 'High', localContentScore: 74, risk: 'Medium', opportunity: 'Mining logistics, local contractors, supplier mapping' },
  { id: 'PPP-ZM-005', name: 'Chingola–Kasumbalesa Road', sector: 'Road', valueUsd: 35000000, status: 'Signed / road corridor', province: 'Copperbelt', miningExposure: 'High', localContentScore: 70, risk: 'Low-Medium', opportunity: 'Transporter verification, route risk, contractor ecosystem' },
  { id: 'PPP-ZM-006', name: 'Lusaka–Ndola Dual Carriageway', sector: 'Road', valueUsd: 649000000, status: 'Signed / implementation', province: 'Lusaka / Central / Copperbelt', miningExposure: 'Medium-High', localContentScore: 73, risk: 'Medium', opportunity: 'Contractor due diligence, local content monitoring, logistics corridor intelligence' }
];

export const pppMetrics = {
  portfolioValue: 14200000000,
  signedProjects: 19,
  signedValue: 9100000000,
  pipelineProjects: 51,
  pipelineValue: 5100000000,
  taxRevenueForecast: 1700000000,
  directJobs: 15000,
  indirectJobs: 30000,
  subcontractingForecast: 900000000
};

export const corridorNodes = [
  { name: 'Kasumbalesa', type: 'Border', country: 'Zambia/DRC', risk: 'Medium', value: 'Cobalt and copper corridor checkpoint' },
  { name: 'Ndola', type: 'Logistics hub', country: 'Zambia', risk: 'Low-Medium', value: 'Copperbelt industrial and supplier base' },
  { name: 'Lumwana', type: 'Mining zone', country: 'Zambia', risk: 'Medium', value: 'North-Western copper ecosystem' },
  { name: 'Kolwezi / Lualaba', type: 'Mining zone', country: 'DRC', risk: 'High', value: 'Cobalt and copper production cluster' },
  { name: 'Lobito link', type: 'Rail corridor', country: 'Angola/DRC/Zambia', risk: 'Medium', value: 'Strategic export route for critical minerals' }
];
