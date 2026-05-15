import { licenceSummary, licenceTypeBreakdown, repeatHolders, licenceRecords } from '../../src/data/licenceData.js';

export async function handler(event){
  const q=(event.queryStringParameters?.q||'').toLowerCase();
  const type=event.queryStringParameters?.type||'All';
  const records=licenceRecords.filter(r=>(type==='All'||r.suffix===type) && `${r.code} ${r.party} ${r.licenceType}`.toLowerCase().includes(q));
  return {statusCode:200,headers:{'Content-Type':'application/json'},body:JSON.stringify({summary:licenceSummary, breakdown:licenceTypeBreakdown, repeatHolders, records})};
}
