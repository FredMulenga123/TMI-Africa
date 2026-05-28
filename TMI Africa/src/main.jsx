import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function TerraNovaAfrica() {
  const alerts = [
    "DRC suspends additional artisanal gold operations in South Kivu.",
    "Burkina Faso sovereign mining fund expanding strategic control.",
    "Lobito Corridor copper logistics expansion remains active.",
    "Zambia uranium exploration activity increasing.",
  ];

  const sovereignRisk = [
    {
      country: "DRC",
      level: "HIGH",
      detail: "Conflict minerals and sovereign mining intervention.",
      color: "border-rose-500/40 bg-rose-500/10 text-rose-300",
    },
    {
      country: "Burkina Faso",
      level: "HIGH",
      detail: "State mining fund and resource nationalism.",
      color: "border-orange-500/40 bg-orange-500/10 text-orange-300",
    },
    {
      country: "Zambia",
      level: "MODERATE",
      detail: "Strategic minerals expansion and corridor investment.",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-200",
    },
    {
      country: "Botswana",
      level: "LOW",
      detail: "Stable mining governance environment.",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    },
  ];

  const licences = [
    {
      id: "ZM-CAN-001",
      company: "Copperbelt Exploration Resources",
      country: "Zambia",
      mineral: "Copper",
      status: "Cancelled",
      risk: "High",
      score: "88/100",
    },
    {
      id: "DRC-SUS-002",
      company: "Mwenga Mining Zone",
      country: "DRC",
      mineral: "Gold",
      status: "Suspended",
      risk: "High",
      score: "93/100",
    },
    {
      id: "ZM-URA-006",
      company: "Zambezi Uranium Holdings",
      country: "Zambia",
      mineral: "Uranium",
      status: "Pending",
      risk: "Medium",
      score: "86/100",
    },
    {
      id: "BOT-COP-004",
      company: "Kalahari Copper JV",
      country: "Botswana",
      mineral: "Copper",
      status: "Active",
      risk: "Low",
      score: "90/100",
    },
  ];

  const commodityData = [
    { mineral: "Copper", value: 92 },
    { mineral: "Gold", value: 85 },
    { mineral: "Cobalt", value: 70 },
    { mineral: "Lithium", value: 68 },
    { mineral: "Uranium", value: 55 },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] uppercase text-slate-500 mt-2">
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

      {/* HERO */}
      <section
        id="engine"
        className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-24"
      >
        <div className="inline-flex items-center gap-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-full px-5 py-2 text-sm font-semibold mb-10">
          BREAKING INTELLIGENCE
          <span className="text-slate-300 font-normal">
            DRC suspensions, Burkina Faso sovereign mining fund and Lobito
            Corridor expansion remain active watch items.
          </span>
        </div>

        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-5">
          TMI.AFRICA COMMAND CENTER
        </p>

        <h2 className="text-6xl lg:text-8xl font-black leading-none max-w-5xl">
          Africa Mining Intelligence Infrastructure
        </h2>

        <p className="mt-10 text-slate-300 text-xl leading-relaxed max-w-4xl">
          TerraNova Mining Intelligence operates Africa’s Strategic Minerals &
          Mining Governance Intelligence Infrastructure monitoring distressed
          mining assets, strategic minerals, sovereign risk, corridor
          infrastructure, resource nationalism and investor exposure across
          Africa.
        </p>

        {/* KPI CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Intelligence Records
            </p>

            <h3 className="text-6xl font-black mt-4 text-cyan-400">15+</h3>
          </div>

          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              High Risk Zones
            </p>

            <h3 className="text-6xl font-black mt-4 text-rose-400">6</h3>
          </div>

          <div className="rounded-3xl border border-sky-500/20 bg-sky-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Strategic Minerals
            </p>

            <h3 className="text-6xl font-black mt-4 text-sky-400">5</h3>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Opportunity Score
            </p>

            <h3 className="text-6xl font-black mt-4 text-emerald-400">
              90/100
            </h3>
          </div>
        </div>
      </section>

      {/* LIVE ALERTS */}
      <section
        id="alerts"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold">
                LIVE INTELLIGENCE ALERTS
              </p>

              <h3 className="text-4xl font-black mt-4">
                Strategic Monitoring Feed
              </h3>
            </div>

            <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-2xl bg-black/30 px-6 py-5 text-slate-300"
              >
                {alert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOVEREIGN RISK */}
      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-20"
      >
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-4">
          AFRICA SOVEREIGN RISK MATRIX
        </p>

        <h3 className="text-5xl font-black mb-12">
          Strategic Mining Governance Risk
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sovereignRisk.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 ${item.color}`}
            >
              <h4 className="text-3xl font-black">{item.country}</h4>

              <div className="mt-5 inline-flex px-4 py-2 rounded-full text-sm font-bold border border-white/10 bg-black/30">
                {item.level}
              </div>

              <p className="mt-6 leading-relaxed text-slate-200">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold">
                EXECUTIVE ANALYTICS
              </p>

              <h3 className="text-5xl font-black mt-4">
                Commodity Intelligence Distribution
              </h3>
            </div>

            <div className="text-right">
              <p className="text-slate-500 text-sm uppercase">
                Intelligence Engine
              </p>

              <h4 className="text-4xl font-black text-cyan-400">
                ACTIVE
              </h4>
            </div>
          </div>

          <div className="space-y-8">
            {commodityData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">{item.mineral}</span>

                  <span className="text-slate-400">{item.value}%</span>
                </div>

                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-cyan-400"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENCE TABLE */}
      <section
        id="licences"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-4">
          DISTRESSED ASSETS REGISTRY
        </p>

        <h3 className="text-5xl font-black mb-10">
          Strategic Minerals Intelligence Registry
        </h3>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full min-w-[1000px]">
            <thead className="border-b border-white/10 bg-black/30">
              <tr className="text-left text-slate-400 text-sm uppercase">
                <th className="px-6 py-5">Licence ID</th>
                <th className="px-6 py-5">Company</th>
                <th className="px-6 py-5">Country</th>
                <th className="px-6 py-5">Mineral</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Risk</th>
                <th className="px-6 py-5">Score</th>
              </tr>
            </thead>

            <tbody>
              {licences.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-5 font-semibold text-cyan-400">
                    {item.id}
                  </td>

                  <td className="px-6 py-5">{item.company}</td>

                  <td className="px-6 py-5">{item.country}</td>

                  <td className="px-6 py-5">{item.mineral}</td>

                  <td className="px-6 py-5">{item.status}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold ${
                        item.risk === "High"
                          ? "bg-rose-500/20 text-rose-300"
                          : item.risk === "Medium"
                          ? "bg-yellow-500/20 text-yellow-200"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {item.risk}
                    </span>
                  </td>

                  <td className="px-6 py-5 font-bold text-emerald-400">
                    {item.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold">
            REQUEST ACCESS
          </p>

          <h3 className="text-5xl font-black mt-5">
            TerraNova Intelligence Access
          </h3>

          <p className="mt-8 text-slate-300 text-lg max-w-3xl">
            Request pilot access, sovereign mining intelligence briefings,
            investor due diligence reports, strategic minerals analytics and
            mining governance intelligence.
          </p>

          <div className="mt-10 space-y-4 text-xl">
            <p className="text-cyan-400 font-semibold">
              fred.mulenga@zerb.co.zm
            </p>

            <p>(+260) 760 612 073</p>

            <p>0961 863 010</p>
          </div>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
            Request Intelligence Brief
          </button>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TerraNovaAfrica />
  </React.StrictMode>
);
