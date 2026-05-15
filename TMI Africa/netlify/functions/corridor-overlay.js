export async function handler(event) {
  const query = event.queryStringParameters || {};
  return {
    statusCode: 200,
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      country: query.country || 'Zambia/DRC',
      layers: ['cancelled_licences','ppp_projects','border_posts','rail_corridors','supplier_registry','investor_watchlists'],
      scoring: {
        infrastructureProximity: 30,
        licenceTypeValue: 25,
        complianceRisk: 20,
        holderHistory: 15,
        commodityExposure: 10
      },
      output: 'pursue_watch_avoid'
    })
  }
}
