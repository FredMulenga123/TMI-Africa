const typeWeights = { LML: 20, LEL: 16, MPL: 14, SEL: 10, SML: 9, AMR: 6 };

exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const suffix = params.suffix || 'LML';
  const base = typeWeights[suffix] || 8;
  const sample = {
    country: params.country || 'Zambia',
    licence_code: params.code || '14666-HQ-LML',
    licence_type_code: suffix,
    opportunity_score: Math.min(95, 60 + base),
    risk_score: Math.max(35, 70 - base),
    recommended_product: suffix === 'AMR' ? 'ESG / formalisation profile' : 'Investor asset snapshot',
    next_steps: [
      'confirm current cadastre status',
      'check appeal/legal restrictions',
      'profile previous holder and directors',
      'map coordinates against infrastructure and active mines'
    ]
  };
  return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sample) };
};
