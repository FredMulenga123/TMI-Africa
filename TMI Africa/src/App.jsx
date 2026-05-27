import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-black text-rose-500">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.4em] uppercase text-slate-500 mt-2">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-slate-300 font-semibold">
            <a href="#engine">Intelligence Engine</a>
            <a href="#heatmap">Heatmap</a>
            <a href="#analytics">Analytics</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-rose-500/20 border border-rose-500/20 rounded-2xl px-6 py-4">
          <p className="text-rose-200 font-semibold">
            BREAKING INTELLIGENCE: DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
          </p>
        </div>
      </section>

      <section
        id="engine"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-6">
          TMI.AFRICA COMMAND CENTER
        </p>

        <h2 className="text-6xl lg:text-8xl font-black leading-none mb-10">
          Africa Mining Intelligence Infrastructure
        </h2>

        <p className="text-slate-300 text-xl max-w-5xl leading-relaxed">
          TerraNova Mining Intelligence operates an African sovereign mining intelligence platform monitoring distressed assets, strategic minerals, corridor infrastructure, sovereign risk and investor exposure across Africa.
        </p>
      </section>

      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            AFRICA RISK HEATMAP
          </p>

          <h3 className="text-4xl font-black">
            Sovereign Mining Intelligence Zones
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-red-500/10 border border-red-500 rounded-3xl p-8">
            <div className="flex justify-between mb-6">
              <h4 className="text-3xl font-black">DRC</h4>

              <span className="bg-red-500 text-white text-xs px-4 py-2 rounded-full font-bold">
                HIGH
              </span>
            </div>

            <p className="text-slate-200 text-lg">
              Conflict minerals, licence suspensions and sovereign intervention.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500 rounded-3xl p-8">
            <div className="flex justify-between mb-6">
              <h4 className="text-3xl font-black">
                Burkina Faso
              </h4>

              <span className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full font-bold">
                HIGH
              </span>
            </div>

            <p className="text-slate-200 text-lg">
              State mining fund and sovereign intervention monitoring.
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-400 rounded-3xl p-8">
            <div className="flex justify-between mb-6">
              <h4 className="text-3xl font-black">
                Zambia
              </h4>

              <span className="bg-yellow-400 text-black text-xs px-4 py-2 rounded-full font-bold">
                MODERATE
              </span>
            </div>

            <p className="text-slate-200 text-lg">
              Strategic minerals and Copperbelt intelligence expansion.
            </p>
          </div>

        </div>
      </section>

      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-4">
              Licence Records
            </p>

            <h4 className="text-5xl font-black text-cyan-400">
              15+
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-4">
              High Risk Assets
            </p>

            <h4 className="text-5xl font-black text-rose-400">
              6
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-4">
              Strategic Minerals
            </p>

            <h4 className="text-5xl font-black text-cyan-400">
              5
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 mb-4">
              Avg Opportunity
            </p>

            <h4 className="text-5xl font-black text-green-400">
              90/100
            </h4>
          </div>

        </div>
      </section>

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-[32px] p-12">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            REQUEST ACCESS
          </p>

          <h3 className="text-5xl font-black mb-8">
            TerraNova Intelligence Access
          </h3>

          <div className="space-y-4 text-lg text-slate-200 mb-10">
            <p>fred.mulenga@zerb.co.zm</p>
            <p>(+260) 760 612 073</p>
            <p>0961 863 010</p>
          </div>

          <button className="bg-amber-300 text-black font-bold px-8 py-4 rounded-2xl">
            Request Intelligence Brief
          </button>

        </div>
      </section>
    </main>
  );
}
