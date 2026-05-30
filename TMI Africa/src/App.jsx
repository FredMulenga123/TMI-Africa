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
            {/* PHASE 14 - INTELLIGENCE REQUEST PORTAL */}

      <section className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
          CLIENT INTELLIGENCE DESK
        </p>

        <h2 className="text-5xl font-black mb-6">
          Request Intelligence
        </h2>

        <p className="text-slate-400 max-w-4xl mb-12">
          Submit requests for sovereign risk intelligence, mining due diligence,
          strategic minerals analysis, beneficial ownership investigations,
          infrastructure corridor intelligence and ESG risk assessments.
        </p>

        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all">
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Organisation Name"
              className="bg-[#050816] border border-white/10 rounded-3xl p-4 text-white"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#050816] border border-white/10 rounded-3xl p-4 text-white"
            />

            <input
              type="text"
              placeholder="Country / Region"
              className="bg-[#050816] border border-white/10 rounded-3xl p-4 text-white"
            />

            <select
              className="bg-[#050816] border border-white/10 rounded-3xl p-4 text-white"
            >
              <option>Select Intelligence Product</option>
              <option>Sovereign Risk Assessment</option>
              <option>Mining Asset Due Diligence</option>
              <option>Strategic Minerals Intelligence</option>
              <option>ESG Risk Assessment</option>
              <option>Beneficial Ownership Investigation</option>
              <option>Political Risk Intelligence</option>
              <option>Infrastructure Corridor Intelligence</option>
            </select>

          </div>

          <textarea
            rows="6"
            placeholder="Describe your intelligence requirement..."
            className="w-full mt-6 bg-[#050816] border border-white/10 rounded-3xl p-4 text-white"
          ></textarea>

          <button
            className="mt-6 bg-rose-500 hover:bg-rose-600 transition px-8 py-4 rounded-xl font-bold"
          >
            Submit Intelligence Request
          </button>
        </div>
      </section>

      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
  AFRICA RISK HEATMAP
</p>

<h2 className="text-5xl font-black mb-6">
  Sovereign Mining Intelligence Zones
</h2>

<p className="text-slate-400 max-w-4xl mb-12">
  Monitor sovereign mining risk, strategic minerals exposure, mining corridor developments and intervention activity across Africa.
</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

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

          <div className="bg-orange-500/10 border border-orange-500 rounded-3xl p-8-cyan-400/40 transition-all">
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

          <div className="bg-yellow-500/10 border border-yellow-400 rounded-3xl p-8-cyan-400/40 transition-all">
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
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8-cyan-400/40 transition-all">
            <p className="text-slate-400 mb-4">
              Licence Records
            </p>

            <h4 className="text-5xl font-black text-cyan-400">
              15+
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8-cyan-400/40 transition-all">
            <p className="text-slate-400 mb-4">
              High Risk Assets
            </p>

            <h4 className="text-5xl font-black text-rose-400">
              6
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8-cyan-400/40 transition-all">
            <p className="text-slate-400 mb-4">
              Strategic Minerals
            </p>

            <h4 className="text-5xl font-black text-cyan-400">
              5
            </h4>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8-cyan-400/40 transition-all">
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
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-[32px] p-12-cyan-400/40 transition-all">

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
      {/* PHASE 15 - LICENCES DATABASE */}

<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="mb-12">

  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
    LICENCES & CONCESSIONS DATABASE
  </p>

  <h2 className="text-5xl font-black mb-6">
    Strategic Mining Assets
  </h2>

  <p className="text-slate-400 max-w-4xl mb-12">
    Monitor mining licences, concessions, ownership structures, strategic mineral exposure, sovereign risk and asset status across Africa.
  </p>

</div>
  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-slate-900 border border-white/10 rounded-3xl p-6-cyan-400/40 transition-all">
      <h3 className="text-xl font-bold text-amber-300">
        ZM-CU-2026-014
      </h3>

      <p className="mt-4 text-slate-300">
        Country: Zambia
      </p>

      <p className="text-slate-300">
        Commodity: Copper
      </p>

      <p className="text-slate-300">
        Status: Active
      </p>

      <p className="text-green-400 font-bold mt-4">
        Risk Score: Low
      </p>
    </div>

    <div className="bg-slate-900 border border-white/10 rounded-3xl p-6-cyan-400/40 transition-all">
      <h3 className="text-xl font-bold text-yellow-300">
        DRC-AU-2026-102
      </h3>

      <p className="mt-4 text-slate-300">
        Country: DRC
      </p>

      <p className="text-slate-300">
        Commodity: Gold
      </p>

      <p className="text-slate-300">
        Status: Under Review
      </p>

      <p className="text-yellow-400 font-bold mt-4">
        Risk Score: Moderate
      </p>
    </div>

    <div className="bg-slate-900 border border-white/10 rounded-3xl p-6-cyan-400/40 transition-all">
      <h3 className="text-xl font-bold text-rose-300">
        BF-LI-2026-008
      </h3>

      <p className="mt-4 text-slate-300">
        Country: Burkina Faso
      </p>

      <p className="text-slate-300">
        Commodity: Lithium
      </p>

      <p className="text-slate-300">
        Status: Suspended
      </p>

      <p className="text-rose-400 font-bold mt-4">
        Risk Score: High
      </p>
    </div>

  </div>
</section>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      INTELLIGENCE PRODUCTS
    </p>

    <h2 className="text-5xl font-black mb-6">
      TerraNova Intelligence Marketplace
    </h2>

    <p className="text-slate-400 max-w-4xl">
      Access premium intelligence products covering sovereign risk, strategic minerals, ESG exposure, political instability, beneficial ownership and infrastructure corridor monitoring across Africa.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400 transition-all">
      <h3 className="text-2xl font-black mb-4">
        Sovereign Risk Assessment
      </h3>

      <p className="text-slate-300 mb-6">
        Political stability, regulatory intervention, sovereign exposure and investment risk monitoring.
      </p>

      <div className="text-cyan-400 font-bold">
        Premium Intelligence
      </div>
    </div>

    <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8 hover:border-rose-400 transition-all">
      <h3 className="text-2xl font-black mb-4">
        Mining Asset Due Diligence
      </h3>

      <p className="text-slate-300 mb-6">
        Ownership investigations, licence verification, compliance reviews and risk scoring.
      </p>

      <div className="text-rose-400 font-bold">
        Institutional Product
      </div>
    </div>

    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 hover:border-amber-400 transition-all">
      <h3 className="text-2xl font-black mb-4">
        Strategic Minerals Intelligence
      </h3>

      <p className="text-slate-300 mb-6">
        Copper, cobalt, lithium, uranium, rare earths and battery mineral intelligence.
      </p>

      <div className="text-amber-400 font-bold">
        Investor Intelligence
      </div>
    </div>

  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      SUBSCRIPTION ACCESS
    </p>

    <h2 className="text-5xl font-black mb-6">
      Intelligence Membership Plans
    </h2>
  </div>

  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">Explorer</h3>
      <p className="text-slate-400 mb-6">Basic market monitoring</p>
      <div className="text-4xl font-black text-cyan-400">$99</div>
      <p className="text-slate-500 mt-2">per month</p>
    </div>

    <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">Professional</h3>
      <p className="text-slate-400 mb-6">Advanced intelligence access</p>
      <div className="text-4xl font-black text-cyan-400">$299</div>
      <p className="text-slate-500 mt-2">per month</p>
    </div>

    <div className="bg-slate-900 border border-amber-500 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">Enterprise</h3>
      <p className="text-slate-400 mb-6">Corporate monitoring suite</p>
      <div className="text-4xl font-black text-amber-400">$999</div>
      <p className="text-slate-500 mt-2">per month</p>
    </div>

    <div className="bg-slate-900 border border-rose-500 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">Government & DFI</h3>
      <p className="text-slate-400 mb-6">Custom institutional package</p>
      <div className="text-4xl font-black text-rose-400">
        Custom
      </div>
      <p className="text-slate-500 mt-2">contact sales</p>
    </div>

  </div>

</section>
    </main>
  );
}
