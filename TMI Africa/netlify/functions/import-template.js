exports.handler = async () => {
  const template = [
    'country,licence_code,licence_type,holder_name,status,decision_date,appeal_deadline,commodity,province,coordinates,source_url,comments',
    'Zambia,14666-HQ-LML,Large-scale Mining Licence,Safearth Mining Limited,Cancelled,2024-04-02,2024-05-01,,,,https://www.mmmd.gov.zm/?p=2787,Non Compliant',
    'DRC,DRC-SAMPLE-001,Cobalt Exploration Licence,Example Holder,Cancelled,,,,Cobalt,Katanga,,source pending,Load via DRC staging'
  ].join('\n');
  return { statusCode: 200, headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="tmi-licence-import-template.csv"' }, body: template };
};
