import { Card, Badge } from '../components/Cards';
import { opportunityRules, watchlistSegments, premiumReports } from '../data/licenceProducts';
import { licenceRecords } from '../data/licenceData';

const topTargets = [...licenceRecords]
  .sort((a,b)=>b.opportunityScore-a.opportunityScore)
  .slice(0,8);

function tone(v){ return v>=82?'High':v>=70?'Medium':'Low'; }

export default function Opportunities(){
  return <div className="space-y-6">
    <section className="rounded-[2rem] bg-ink text-white p-8">
      <p className="text-gold font-semibold">Commercial Intelligence Layer</p>
      <h1 className="text-4xl font-bold mt-2">Licence Opportunity Radar</h1>
      <p className="mt-3 max-w-4xl text-slate-300">Converts Zambia and DRC cancelled licence datasets into ranked investor targets, risk alerts, repeat-holder intelligence and paid reports for tmi.africa subscribers.</p>
    </section>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2"><h2 className="text-xl font-bold mb-4">Top Seed Opportunity Targets</h2><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left text-slate-500"><th className="p-3">Licence</th><th>Type</th><th>Holder</th><th>Opportunity</th><th>Next action</th></tr></thead><tbody>{topTargets.map(r=><tr className="border-t" key={r.code}><td className="p-3 font-semibold">{r.code}</td><td>{r.suffix}</td><td>{r.party}</td><td><Badge tone={tone(r.opportunityScore)}>{r.opportunityScore}</Badge></td><td>Prepare asset snapshot</td></tr>)}</tbody></table></div></Card>
      <Card><h2 className="text-xl font-bold mb-4">Scoring Logic</h2><div className="space-y-3">{opportunityRules.map(rule=><div key={rule.name} className="border rounded-2xl p-3"><div className="flex justify-between"><b>{rule.name}</b><Badge tone={rule.weight>10?'High':rule.weight>0?'Medium':'Low'}>{rule.weight}</Badge></div><p className="text-sm text-slate-500 mt-1">{rule.rationale}</p></div>)}</div></Card>
    </div>

    <Card><h2 className="text-xl font-bold mb-4">Watchlist Segments</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{watchlistSegments.map(w=><div key={w.segment} className="border rounded-2xl p-4"><h3 className="font-bold">{w.segment}</h3><p className="text-sm text-slate-500 mt-2">{w.criteria}</p><p className="text-sm font-semibold mt-3">Output: {w.product}</p></div>)}</div></Card>

    <Card><h2 className="text-xl font-bold mb-4">Premium Report Products</h2><div className="grid md:grid-cols-2 gap-4">{premiumReports.map(p=><div className="border rounded-2xl p-4" key={p.title}><div className="flex justify-between gap-3"><h3 className="font-bold">{p.title}</h3><Badge tone="High">{p.price}</Badge></div><p className="text-sm text-slate-500 mt-2">Audience: {p.audience}</p><p className="text-sm mt-2">Deliverable: {p.output}</p></div>)}</div></Card>
  </div>
}
