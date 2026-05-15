import { Card, Badge } from '../components/Cards';
import { corridorNodes, pppProjects } from '../data/pppData';
import { licenceSummary } from '../data/licenceData';
import { Map, AlertTriangle, Database, Network } from 'lucide-react';

export default function Corridors(){
  const corridorProjects = pppProjects.filter(p=>p.miningExposure.includes('High'));
  return <div className="space-y-6">
    <section className="rounded-3xl bg-white border p-7">
      <p className="text-sm uppercase tracking-widest text-slate-500">Corridor Intelligence Layer</p>
      <h1 className="text-3xl md:text-5xl font-bold mt-2">Mining Logistics, Border Posts & Licence Opportunity Mapping</h1>
      <p className="mt-4 text-slate-600 max-w-3xl">Overlay cancelled licence datasets with strategic corridors, border infrastructure, roads, rail and mining zones to identify investable clusters before the market sees them.</p>
    </section>

    <div className="grid md:grid-cols-4 gap-4">
      <Card><Database className="mb-2"/><div className="text-sm text-slate-500">Zambia parsed records</div><div className="text-2xl font-bold">{licenceSummary.rowsParsed.toLocaleString()}</div></Card>
      <Card><Map className="mb-2"/><div className="text-sm text-slate-500">Corridor nodes</div><div className="text-2xl font-bold">{corridorNodes.length}</div></Card>
      <Card><Network className="mb-2"/><div className="text-sm text-slate-500">Mining-linked PPPs</div><div className="text-2xl font-bold">{corridorProjects.length}</div></Card>
      <Card><AlertTriangle className="mb-2"/><div className="text-sm text-slate-500">Core risk focus</div><div className="text-2xl font-bold">DRC–ZM</div></Card>
    </div>

    <Card>
      <h2 className="text-xl font-bold mb-2">Corridor Nodes</h2>
      <div className="grid md:grid-cols-2 gap-3">{corridorNodes.map(n=><div key={n.name} className="p-4 rounded-2xl bg-slate-50 border"><div className="flex justify-between"><div className="font-semibold">{n.name}</div><Badge tone={n.risk.includes('High')?'High':n.risk.includes('Low')?'Low':'Medium'}>{n.risk}</Badge></div><div className="text-xs text-slate-500 mt-1">{n.type} • {n.country}</div><p className="text-sm mt-2">{n.value}</p></div>)}</div>
    </Card>

    <Card>
      <h2 className="text-xl font-bold">TMI Overlay Logic</h2>
      <div className="grid md:grid-cols-4 gap-3 mt-4 text-sm">
        <div className="p-4 bg-slate-50 rounded-2xl"><b>1. Licence data</b><p className="text-slate-500 mt-1">Cancelled, defaulted and distressed rights.</p></div>
        <div className="p-4 bg-slate-50 rounded-2xl"><b>2. Corridor data</b><p className="text-slate-500 mt-1">Rail, roads, borders and logistics hubs.</p></div>
        <div className="p-4 bg-slate-50 rounded-2xl"><b>3. Supplier data</b><p className="text-slate-500 mt-1">Contractors, transporters and service firms.</p></div>
        <div className="p-4 bg-slate-50 rounded-2xl"><b>4. Investor output</b><p className="text-slate-500 mt-1">Pursue, watch or avoid recommendations.</p></div>
      </div>
    </Card>
  </div>
}
