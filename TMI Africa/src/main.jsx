import React from "react";

const countries = [
  {
    name: "DRC",
    risk: "HIGH",
    color: "from-red-500/30 to-red-900/20",
    border: "border-red-500",
    text: "Conflict minerals, licence suspensions and sovereign intervention.",
  },
  {
    name: "Burkina Faso",
    risk: "HIGH",
    color: "from-orange-500/30 to-red-900/20",
    border: "border-orange-500",
    text: "State mining fund and resource nationalism monitoring.",
  },
  {
    name: "Zambia",
    risk: "MODERATE",
    color: "from-yellow-500/20 to-yellow-900/10",
    border: "border-yellow-400",
    text: "Strategic minerals, Copperbelt intelligence and corridor expansion.",
  },
  {
    name: "Angola",
    risk: "MODERATE",
    color: "from-yellow-500/20 to-orange-900/10",
    border: "border-orange-300",
    text: "Lobito Corridor and rail logistics expansion.",
  },
  {
    name: "Botswana",
    risk: "LOW",
    color: "from-green-500/20 to-green-900/10",
    border: "border-green-400",
    text: "Stable mining governance and investor environment.",
  },
  {
    name: "Tanzania",
    risk: "MODERATE",
    color: "from-yellow-500/20 to-yellow-900/10",
    border: "border-yellow-300",
    text: "Strategic mineral policy monitoring and corridor intelligence.",
  },
];

const alerts = [
  "DRC suspensions continue in South Kivu and Mwenga",
  "Burkina Faso sovereign mining fund expands state participation",
  "Lobito Corridor rail investment negotiations progressing",
  "Strategic lithium assets under increased investor watch",
];

export default function TerraNovaAfrica() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#050816]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] text-slate-500 uppercase mt-1">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#engine" className="hover:text-cyan-400 transition">
              Intelligence Engine
            </a>

            <a href="#heatmap" className="hover:text-cyan-400 transition">
              Heatmap
            </a>

            <a href="#analytics" className="hover:text-cyan-400 transition">
              Analytics
            </a>

            <a href="#licences" className="hover:text-cyan-400 transition">
              Licences
            </a>

            <a href="#alerts" className="hover:text-cyan-400 transition">
              Alerts
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* BREAKING ALERT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        <div className="bg-gradient-to-r from-rose-500/30 to-transparent border border-rose-500/20 rounded-2xl px-6 py-4 overflow-hidden">
          <div className="animate-pulse text-sm lg:text-base font-semibold text-rose-200">
            BREAKING INTELLIGENCE: DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
          </div>
        </div>
      </section>

      {/* HERO */}
      <section
        id="engine"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
      >
        <div className="max-w-4xl">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-6">
            TMI.AFRICA COMMAND CENTER
          </p>

          <h2 className="text-6xl lg:text-8xl font-black leading-none mb-10">
            Africa Mining Intelligence Infrastructure
          </h2>

          <p className="text-slate-300 text-lg lg:text-2xl leading-relaxed max-w-4xl">
            TerraNova Mining Intelligence operates an African sovereign mining intelligence platform monitoring distressed assets, strategic minerals, corridor infrastructure, sovereign risk, resource nationalism and investor exposure across Africa.
          </p>
        </div>
      </section>

      {/* INTERACTIVE AFRICA HEATMAP */}
      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            AFRICA RISK HEATMAP
          </p>

          <h3 className="text-4xl font-black">
            Sovereign Mining Intelligence Zones
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${country.color} border ${country.border} rounded-3xl p-8 backdrop-blur-xl hover:scale-[1.03] transition duration-300 shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-3xl font-black">{country.name}</h4>

                <span className="text-xs font-bold px-4 py-2 rounded-full bg-black/30 border border-white/10">
                  {country.risk}
                </span>
              </div>

              <p className="text-slate-200 text-lg leading-relaxed">
                {country.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE ALERTS */}
      <section
        id="alerts"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            LIVE INTELLIGENCE FEED
          </p>

          <h3 className="text-4xl font-black">
            Strategic Mining Alerts
          </h3>
        </div>

        <div className="space-y-5">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-cyan-400/30 transition"
            >
              <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />

              <p className="text-slate-200 text-lg">
                {alert}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            EXECUTIVE ANALYTICS
          </p>

          <h3 className="text-4xl font-black">
            Mining Intelligence Metrics
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Licence Records", "15+"],
            ["High Risk Assets", "6"],
            ["Strategic Minerals", "5"],
            ["Avg Opportunity", "90/100"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <p className="text-slate-400 text-sm uppercase tracking-wider mb-4">
                {item[0]}
              </p>

              <h4 className="text-5xl font-black text-cyan-400">
                {item[1]}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-[32px] p-10 lg:p-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            REQUEST ACCESS
          </p>

          <h3 className="text-5xl font-black mb-8">
            TerraNova Intelligence Access
          </h3>

          <p className="text-slate-200 text-xl leading-relaxed max-w-4xl mb-10">
            Request pilot access, sovereign mining intelligence reports, investor due diligence, corridor intelligence or strategic mineral analytics.
          </p>

          <div className="space-y-4 text-lg text-slate-200 mb-10">
            <p>fred.mulenga@zerb.co.zm</p>
            <p>(+260) 760 612 073</p>
            <p>0961 863 010</p>
          </div>

          <button className="bg-amber-300 hover:bg-amber-200 text-black font-bold px-8 py-4 rounded-2xl transition">
            Request Intelligence Brief
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        © 2026 TerraNova Mining Intelligence. All rights reserved.
      </footer>
    </main>
  );
}
