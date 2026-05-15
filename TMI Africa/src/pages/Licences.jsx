import { useMemo, useState } from 'react';
import { Card, Badge } from '../components/Cards';
import { licenceSummary, licenceTypeBreakdown, repeatHolders, licenceRecords } from '../data/licenceData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function scoreTone(score){ if(score>=80) return 'High'; if(score>=65) return 'Medium'; return 'Low'; }

export default function Licences(){
  const [query,setQuery]=useState('');
  const [type,setType]=useState('All');
  const [sort,setSort]=useState('opportunityScore');
  const filtered=useMemo(()=>licenceRecords
    .filter(r=>type==='All'||r.suffix===type)
    .filter(r=>`${r.code} ${r.party} ${r.licenceType}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a,b)=>String(sort).includes('Score')?b[sort]-a[sort]:String(a[sort]).localeCompare(String(b[sort]))),[query,type,sort]);
  const types=['All',...licenceTypeBreakdown.map(x=>x.suffix)];
  return <div className="space-y-6">
    <section className="rounded-[2rem] bg-ink text-white p-8">
      <p className="text-gold font-semibold">Proprietary Licence Intelligence</p>
      <h1 className="text-4xl font-bold mt-2">Distressed Licence Tracker</h1>
      <p className="mt-3 max-w-4xl text-slate-300">Zambia cancelled and non-compliant mining rights intelligence module for opportunity discovery, risk screening, repeat-holder analysis and investor watchlists. DRC records can be loaded using the same schema.</p>
    </section>

    <div className="grid md:grid-cols-4 gap-4">
      <Card><div className="text-sm text-slate-500">Rows parsed</div><div className="text-3xl font-bold mt-2">{licenceSummary.rowsParsed.toLocaleString()}</div><div className="text-xs text-slate-500 mt-1">MMMD notice staging universe</div></Card>
      <Card><div className="text-sm text-slate-500">Unique licence codes</div><div className="text-3xl font-bold mt-2">{licenceSummary.uniqueLicenceCodes.toLocaleString()}</div><div className="text-xs text-slate-500 mt-1">after duplicate review</div></Card>
      <Card><div className="text-sm text-slate-500">Unique parties</div><div className="text-3xl font-bold mt-2">{licenceSummary.uniqueParties.toLocaleString()}</div><div className="text-xs text-slate-500 mt-1">holders/entities named</div></Card>
      <Card><div className="text-sm text-slate-500">Duplicate flags</div><div className="text-3xl font-bold mt-2">{licenceSummary.duplicateRowsFlagged}</div><div className="text-xs text-slate-500 mt-1">review before production merge</div></Card>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2"><h2 className="font-bold text-xl mb-4">Licence Type Breakdown</h2><div className="h-80"><ResponsiveContainer><BarChart data={licenceTypeBreakdown}><XAxis dataKey="suffix"/><YAxis/><Tooltip/><Bar dataKey="count" radius={[10,10,0,0]}/></BarChart></ResponsiveContainer></div></Card>
      <Card><h2 className="font-bold text-xl mb-4">Source Metadata</h2><div className="space-y-3 text-sm"><p><b>Notice date:</b> {licenceSummary.noticeDate}</p><p><b>Default notice:</b> {licenceSummary.defaultNoticeDate}</p><p><b>Appeal deadline:</b> {licenceSummary.appealDeadline}</p><p><b>Decision basis:</b> {licenceSummary.decisionBasis}</p><p><b>Appeal basis:</b> {licenceSummary.appealBasis}</p><p className="text-slate-500">{licenceSummary.stagingRecommendation}</p></div></Card>
    </div>

    <Card><div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4"><div><h2 className="font-bold text-xl">Searchable Licence Register</h2><p className="text-sm text-slate-500">Seed records from the TMI staging file. Replace or extend with CSV/DB import for full production data.</p></div><div className="flex gap-2"><input value={query} onChange={e=>setQuery(e.target.value)} className="border rounded-xl p-2" placeholder="Search code or party"/><select value={type} onChange={e=>setType(e.target.value)} className="border rounded-xl p-2">{types.map(t=><option key={t}>{t}</option>)}</select><select value={sort} onChange={e=>setSort(e.target.value)} className="border rounded-xl p-2"><option value="opportunityScore">Opportunity</option><option value="riskScore">Risk</option><option value="party">Party</option><option value="suffix">Type</option></select></div></div><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left text-slate-500"><th className="p-3">Code</th><th>Type</th><th>Party</th><th>Decision</th><th>Page</th><th>Opp.</th><th>Risk</th><th>Status</th></tr></thead><tbody>{filtered.map(r=><tr key={r.code} className="border-t"><td className="p-3 font-semibold">{r.code}</td><td>{r.suffix}</td><td>{r.party}</td><td>{r.decision}</td><td>{r.noticePage}</td><td><Badge tone={scoreTone(r.opportunityScore)}>{r.opportunityScore}</Badge></td><td><Badge tone={scoreTone(r.riskScore)}>{r.riskScore}</Badge></td><td>{r.loadStatus}</td></tr>)}</tbody></table></div></Card>

    <div className="grid lg:grid-cols-2 gap-6">
      <Card><h2 className="font-bold text-xl mb-4">Top Repeat Holders</h2><div className="space-y-3">{repeatHolders.map(h=><div key={h.party} className="flex items-center justify-between border rounded-2xl p-3"><div><div className="font-semibold">{h.party}</div><div className="text-sm text-slate-500">{h.types}</div></div><Badge tone={h.rightsCancelled>=10?'High':'Medium'}>{h.rightsCancelled} rights</Badge></div>)}</div></Card>
      <Card><h2 className="font-bold text-xl mb-4">Commercial Products from this Dataset</h2><ul className="space-y-3 text-slate-700"><li>• Distressed Licence Watchlist for investors</li><li>• Repeat Holder Risk Report</li><li>• Re-entry / Reapplication Opportunity Brief</li><li>• DRC–Zambia Critical Minerals Licence Radar</li><li>• Bankable due diligence packs for target assets</li><li>• API access for premium subscribers</li></ul></Card>
    </div>
  </div>
}
