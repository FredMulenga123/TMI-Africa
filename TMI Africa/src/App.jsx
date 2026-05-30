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
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      CLIENT PORTAL
    </p>

    <h2 className="text-5xl font-black mb-6">
      Intelligence Operations Dashboard
    </h2>

    <p className="text-slate-400 max-w-4xl">
      Monitor sovereign risk, strategic minerals, political developments, distressed mining assets and intelligence alerts from a unified command center.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-6">
        Watchlists
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li>• Zambia Copperbelt</li>
        <li>• DRC Strategic Minerals</li>
        <li>• Burkina Faso Sovereign Risk</li>
        <li>• Lobito Corridor</li>
      </ul>
    </div>

    <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-6">
        Active Intelligence Alerts
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li>• Licence Suspension Alerts</li>
        <li>• Political Risk Alerts</li>
        <li>• ESG Compliance Alerts</li>
        <li>• Strategic Mineral Alerts</li>
      </ul>
    </div>

  </div>

</section>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      REPORT LIBRARY
    </p>

    <h2 className="text-5xl font-black mb-6">
      Strategic Intelligence Reports
    </h2>

    <p className="text-slate-400 max-w-4xl">
      Access premium intelligence reports covering sovereign risk, strategic minerals, mining transactions, ESG exposure and infrastructure corridors across Africa.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">
        Zambia Copper Intelligence Report
      </h3>

      <p className="text-slate-300 mb-6">
        Copper production outlook, strategic investments and sovereign risk trends.
      </p>

      <button className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl">
        Download Report
      </button>
    </div>

    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">
        DRC Strategic Minerals Brief
      </h3>

      <p className="text-slate-300 mb-6">
        Cobalt, lithium, copper and regulatory developments.
      </p>

      <button className="bg-amber-400 text-black font-bold px-6 py-3 rounded-xl">
        Download Report
      </button>
    </div>

    <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-4">
        Africa Sovereign Risk Monitor
      </h3>

      <p className="text-slate-300 mb-6">
        Political risk, investment climate and intervention analysis.
      </p>

      <button className="bg-rose-400 text-black font-bold px-6 py-3 rounded-xl">
        Download Report
      </button>
    </div>

  </div>

</section>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      INTELLIGENCE BRIEFING CENTER
    </p>

    <h2 className="text-5xl font-black mb-6">
      Latest Intelligence Briefings
    </h2>

    <p className="text-slate-400 max-w-4xl">
      Daily and weekly intelligence updates covering strategic minerals, sovereign risk, mining investments, political developments and infrastructure corridors across Africa.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
      <div className="flex justify-between mb-6">
        <span className="text-cyan-400 font-bold">Copper Intelligence</span>
        <span className="bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          LOW RISK
        </span>
      </div>

      <h3 className="text-2xl font-black mb-4">
        Zambia Copperbelt Weekly Brief
      </h3>

      <p className="text-slate-300 mb-4">
        Updated analysis of copper production, investment activity and strategic developments.
      </p>

      <p className="text-slate-500 mb-6">
        Published: 29 May 2026
      </p>

      <button className="bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl">
        Read Brief
      </button>
    </div>

    <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8">
      <div className="flex justify-between mb-6">
        <span className="text-rose-400 font-bold">Strategic Minerals</span>
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          HIGH RISK
        </span>
      </div>

      <h3 className="text-2xl font-black mb-4">
        DRC Strategic Minerals Alert
      </h3>

      <p className="text-slate-300 mb-4">
        Regulatory interventions, licence suspensions and strategic minerals exposure assessment.
      </p>

      <p className="text-slate-500 mb-6">
        Published: 29 May 2026
      </p>

      <button className="bg-rose-400 text-black font-bold px-6 py-3 rounded-xl">
        Read Brief
      </button>
    </div>

    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8">
      <div className="flex justify-between mb-6">
        <span className="text-amber-400 font-bold">Infrastructure</span>
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
          MODERATE
        </span>
      </div>

      <h3 className="text-2xl font-black mb-4">
        Lobito Corridor Intelligence Update
      </h3>

      <p className="text-slate-300 mb-4">
        Corridor expansion, logistics intelligence and strategic transport developments.
      </p>

      <p className="text-slate-500 mb-6">
        Published: 28 May 2026
      </p>

      <button className="bg-amber-400 text-black font-bold px-6 py-3 rounded-xl">
        Read Brief
      </button>
    </div>

    <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-8">
      <div className="flex justify-between mb-6">
        <span className="text-purple-400 font-bold">Political Risk</span>
        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          WATCH
        </span>
      </div>

      <h3 className="text-2xl font-black mb-4">
        Africa Political Risk Watch
      </h3>

      <p className="text-slate-300 mb-4">
        Elections, regulatory changes and sovereign risk developments affecting investors.
      </p>

      <p className="text-slate-500 mb-6">
        Published: 28 May 2026
      </p>

      <button className="bg-purple-400 text-black font-bold px-6 py-3 rounded-xl">
        Read Brief
      </button>
    </div>

  </div>

</section>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="mb-12">
    <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
      DATA PRODUCTS & API ACCESS
    </p>

    <h2 className="text-5xl font-black mb-6">
      TerraNova Intelligence Infrastructure
    </h2>

    <p className="text-slate-400 max-w-4xl">
      Connect directly to TerraNova intelligence feeds, sovereign risk datasets, strategic minerals monitoring systems and mining asset databases through enterprise-grade API access.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 mb-16">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-6">
        Strategic Minerals API
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li>• Copper Intelligence</li>
        <li>• Cobalt Intelligence</li>
        <li>• Lithium Monitoring</li>
        <li>• Uranium Intelligence</li>
        <li>• Rare Earth Tracking</li>
      </ul>
    </div>

    <div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-6">
        Sovereign Risk API
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li>• Country Risk Scores</li>
        <li>• Political Risk Alerts</li>
        <li>• Regulatory Monitoring</li>
        <li>• Election Intelligence</li>
        <li>• Stability Indicators</li>
      </ul>
    </div>

    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8">
      <h3 className="text-2xl font-black mb-6">
        Mining Asset Database API
      </h3>

      <ul className="space-y-3 text-slate-300">
        <li>• Mining Licences</li>
        <li>• Concessions Database</li>
        <li>• Beneficial Ownership</li>
        <li>• Asset Risk Scores</li>
        <li>• Due Diligence Records</li>
      </ul>
    </div>

  </div>

  <div className="mb-12">
    <h3 className="text-4xl font-black mb-6">
      Client Integrations
    </h3>

    <div className="grid md:grid-cols-5 gap-6">

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
        Banks
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
        DFIs
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
        Mining Companies
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
        Governments
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 text-center">
        Investors
      </div>

    </div>
  </div>

  <div>
    <h3 className="text-4xl font-black mb-8">
      API Access Plans
    </h3>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
        <h4 className="text-2xl font-black mb-4">
          API Starter
        </h4>

        <div className="text-4xl font-black text-cyan-400 mb-2">
          $499
        </div>

        <p className="text-slate-500">
          per month
        </p>
      </div>

      <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-8">
        <h4 className="text-2xl font-black mb-4">
          Professional API
        </h4>

        <div className="text-4xl font-black text-cyan-400 mb-2">
          $1,999
        </div>

        <p className="text-slate-500">
          per month
        </p>
      </div>

      <div className="bg-slate-900 border border-amber-500 rounded-3xl p-8">
        <h4 className="text-2xl font-black mb-4">
          Enterprise API
        </h4>

        <div className="text-4xl font-black text-amber-400 mb-2">
          Custom
        </div>

        <p className="text-slate-500">
          enterprise pricing
        </p>
      </div>

      <div className="bg-slate-900 border border-rose-500 rounded-3xl p-8">
        <h4 className="text-2xl font-black mb-4">
          Government & DFI
        </h4>

        <div className="text-4xl font-black text-rose-400 mb-2">
          Custom
        </div>

        <p className="text-slate-500">
          institutional pricing
        </p>
      </div>

    </div>
  </div>
<div className="mt-24">

  <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
    CLIENT PORTAL
  </p>

  <h2 className="text-5xl font-black mb-6">
    Intelligence Request Tracking
  </h2>

  <p className="text-slate-400 max-w-4xl mb-12">
    Track intelligence requests, due diligence investigations, sovereign risk assessments and report delivery status in real time.
  </p>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8">
      <p className="text-slate-500 mb-2">Open Requests</p>
      <h3 className="text-5xl font-black text-cyan-400">24</h3>
    </div>

    <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8">
      <p className="text-slate-500 mb-2">In Review</p>
      <h3 className="text-5xl font-black text-amber-400">11</h3>
    </div>

    <div className="bg-slate-900 border border-green-500/30 rounded-3xl p-8">
  <p className="text-slate-500 mb-2">Completed</p>
  <h3 className="text-5xl font-black text-green-400">187</h3>
</div>

<div className="bg-slate-900 border border-rose-500/30 rounded-3xl p-8">
  <p className="text-slate-500 mb-2">Urgent Cases</p>
  <h3 className="text-5xl font-black text-rose-400">4</h3>
</div>

  </div>

</div>

</section>

</main>
  );
}
