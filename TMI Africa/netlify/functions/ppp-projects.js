export async function handler(event) {
  const projects = [
    { id:'PPP-ZM-001', name:'Lobito Corridor', sector:'Rail / Logistics', valueUsd:5000000000, miningExposure:'Very High', risk:'Medium' },
    { id:'PPP-ZM-002', name:'TAZARA Revitalisation', sector:'Rail', valueUsd:1400000000, miningExposure:'High', risk:'Medium-High' },
    { id:'PPP-ZM-003', name:'Kasumbalesa Border Modernisation', sector:'Border / Trade', valueUsd:110000000, miningExposure:'Very High', risk:'Medium' }
  ];
  return { statusCode: 200, headers: {'content-type':'application/json'}, body: JSON.stringify({ total: projects.length, projects }) };
}
