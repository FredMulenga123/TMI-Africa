import { Card, Badge } from '../components/Cards';
import { pppProjects, pppMetrics } from '../data/pppData';
import { Building2, Route, Users, ShieldCheck } from 'lucide-react';

const money = (n) => `$${(n/1000000000).toFixed(n >= 1000000000 ? 1 : 2)}B`;

export default function PPP(){
  const top = pppProjects.slice().sort((a,b)=>b.valueUsd-a.valueUsd);
  return <div className="space-y-6">
    <section className="rounded-3xl bg-ink text-white p-7">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-white/60">TMI.AFRICA PPP INTELLIGENCE</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Zambia PPP, Corridor & Local Content Intelligence</h1>
        <p className="mt-4 text-white/70">Track PPP projects that unlock mining logistics, contractor opportunities, supplier ecosystems, border trade and investment risk across Zambia and the DRC corridor.</p>
      </div>
    </section>

    <div className="grid md:grid-cols-4 gap-4">
      <Card><Building2 className="mb-2"/><div className="text-sm text-slate-500">PPP portfolio</div><div className="text-2xl font-bold">{money(pppMetrics.portfolioValue)}</div></Card>
      <Card><ShieldCheck className="mb-2"/><div className="text-sm text-slate-500">Signed projects</div><div className="text-2xl font-bold">{pppMetrics.signedProjects}</div></Card>
      <Card><Route className="mb-2"/><div className="text-sm text-slate-500">Pipeline projects</div><div className="text-2xl font-bold">{pppMetrics.pipelineProjects}</div></Card>
      <Card><Users className="mb-2"/><div className="text-sm text-slate-500">Direct jobs forecast</div><div className="text-2xl font-bold">{pppMetrics.directJobs.toLocaleString()}+</div></Card>
    </div>

    <Card>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl font-bold">PPP Opportunity Radar</h2>
          <p className="text-sm text-slate-500">Mining-linked infrastructure projects to monitor for contractor, supplier, logistics and investor intelligence.</p>
        </div>
        <Badge tone="Medium">Premium module</Badge>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left border-b"><th className="py-3">Project</th><th>Sector</th><th>Value</th><th>Mining exposure</th><th>Local content</th><th>Risk</th></tr></thead>
          <tbody>{top.map(p=><tr key={p.id} className="border-b last:border-0 hover:bg-slate-50"><td className="py-3 font-medium">{p.name}<div className="text-xs text-slate-500">{p.province}</div></td><td>{p.sector}</td><td>{money(p.valueUsd)}</td><td>{p.miningExposure}</td><td>{p.localContentScore}/100</td><td><Badge tone={p.risk.includes('High')?'High':p.risk.includes('Low')?'Low':'Medium'}>{p.risk}</Badge></td></tr>)}</tbody>
        </table>
      </div>
    </Card>

    <div className="grid md:grid-cols-3 gap-4">
      <Card><h3 className="font-bold">Local Content Monitor</h3><p className="text-sm text-slate-500 mt-2">Track Zambian supplier participation, subcontract allocation, workforce share and local business opportunities.</p></Card>
      <Card><h3 className="font-bold">Contractor Due Diligence</h3><p className="text-sm text-slate-500 mt-2">Screen EPC firms, logistics operators, subcontractors and politically exposed supplier networks.</p></Card>
      <Card><h3 className="font-bold">PPP Risk Scoring</h3><p className="text-sm text-slate-500 mt-2">Score projects by finance risk, delays, procurement complexity, land/community risk and ESG exposure.</p></Card>
    </div>
  </div>
}
