import { Card, Badge } from '../components/Cards';
import { importChecklist } from '../data/licenceProducts';

export default function DataImport(){
  return <div className="space-y-6">
    <section className="rounded-[2rem] bg-ink text-white p-8">
      <p className="text-gold font-semibold">Data Operations</p>
      <h1 className="text-4xl font-bold mt-2">Zambia & DRC Dataset Import Center</h1>
      <p className="mt-3 max-w-4xl text-slate-300">A production workflow for turning raw cancelled licence files into clean, scored and searchable TMI intelligence records.</p>
    </section>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card><h2 className="font-bold text-xl mb-3">Supported Inputs</h2><ul className="space-y-2 text-sm text-slate-700"><li>• XLSX / CSV licence registers</li><li>• MMMD notices</li><li>• DRC Mining Cadastre exports</li><li>• field notes and source URLs</li><li>• company registry enrichments</li></ul></Card>
      <Card><h2 className="font-bold text-xl mb-3">Required Fields</h2><ul className="space-y-2 text-sm text-slate-700"><li>• country</li><li>• licence_code</li><li>• licence_type</li><li>• holder_name</li><li>• status / decision</li><li>• decision_date / source_url</li></ul></Card>
      <Card><h2 className="font-bold text-xl mb-3">Production Controls</h2><ul className="space-y-2 text-sm text-slate-700"><li>• staging before production</li><li>• duplicate review</li><li>• source audit trail</li><li>• role-based access</li><li>• premium/private data split</li></ul></Card>
    </div>

    <Card><h2 className="font-bold text-xl mb-4">Import Workflow</h2><div className="grid md:grid-cols-2 gap-3">{importChecklist.map((item,i)=><div key={item} className="border rounded-2xl p-4 flex gap-3"><Badge tone={i<3?'High':'Medium'}>{i+1}</Badge><p className="text-sm text-slate-700">{item}</p></div>)}</div></Card>

    <Card><h2 className="font-bold text-xl mb-4">CSV Template</h2><pre className="bg-slate-950 text-slate-100 rounded-2xl p-4 overflow-x-auto text-xs">country,licence_code,licence_type,holder_name,status,decision_date,appeal_deadline,commodity,province,coordinates,source_url,comments\nZambia,14666-HQ-LML,Large-scale Mining Licence,Safearth Mining Limited,Cancelled,2024-04-02,2024-05-01,,,,https://www.mmmd.gov.zm/?p=2787,Non Compliant\nDRC,DRC-SAMPLE-001,Cobalt Exploration Licence,Example Holder,Cancelled,,,,Cobalt,Katanga,,source pending,Load via DRC staging</pre></Card>
  </div>
}
