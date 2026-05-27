import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#050816]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-rose-500">
              TerraNova
            </h1>

            <p className="text-[11px] uppercase tracking-[0.4em] text-slate-400 mt-1">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#engine" className="hover:text-cyan-400">Intelligence Engine</a>
            <a href="#heatmap" className="hover:text-cyan-400">Heatmap</a>
            <a href="#analytics" className="hover:text-cyan-400">Analytics</a>
            <a href="#licences" className="hover:text-cyan-400">Licences</a>
            <a href="#alerts" className="hover:text-cyan-400">Alerts</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="engine"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >

        {/* ALERT BAR */}
        <div className="mb-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 px-6 py-4">
          <div className="flex flex-wrap gap-4 items-center">

            <span className="bg-rose-500 text-white text-xs font-black px-4 py-2 rounded-full animate-pulse">
              BREAKING INTELLIGENCE
            </span>

            <p className="text-rose-100 text-sm">
              DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
            </p>

          </div>
        </div>

        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-6">
          TMI.AFRICA COMMAND CENTER
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-none max-w-5xl mb-8">
          Africa Mining Intelligence Infrastructure
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-5xl mb-14">
          TerraNova Mining Intelligence operates an African sovereign mining
          intelligence platform monitoring distressed assets,
          strategic minerals, sovereign risk, corridor infrastructure,
          investor exposure and resource nationalism across Africa.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Cancelled Licence Intelligence",
              desc: "Monitor distressed and revoked mining rights across Zambia and Africa."
            },
            {
              title: "Strategic Minerals Intelligence",
              desc: "Track copper, cobalt, lithium, uranium and critical mineral assets."
            },
            {
              title: "Sovereign Risk Analytics",
              desc: "Monitor mining policy shifts, sovereign funds and state intervention."
            },
            {
              title: "Investor Due Diligence",
              desc: "Screen mining investors, suppliers and beneficial ownership risk."
            }
          ].map((card, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-black mb-5">
                {card.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* HEATMAP */}
      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="mb-12">

          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-4">
            AFRICA SOVEREIGN RISK MONITOR
          </p>

          <h2 className="text-5xl font-black mb-6">
            Africa Mining Risk Heatmap
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            ["DRC", "HIGH", "Conflict minerals, suspensions and resource nationalism"],
            ["Burkina Faso", "HIGH", "State-backed sovereign mining investment activity"],
            ["Zambia", "MODERATE", "Strategic minerals and corridor expansion"],
            ["Angola", "MODERATE", "Lobito Corridor infrastructure expansion"],
            ["Botswana", "LOW", "Stable mining governance environment"],
            ["Tanzania", "MODERATE", "Strategic minerals monitoring"]
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 p-8"
            >

              <div className="flex items-center justify-between mb-6">

                <h3 className="text-3xl font-black">
                  {item[0]}
                </h3>

                <span className="px-4 py-2 rounded-full bg-rose-500/20 text-rose-300 text-xs font-black">
                  {item[1]}
                </span>

              </div>

              <p className="text-slate-300 leading-relaxed">
                {item[2]}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="mb-10">
          <h2 className="text-5xl font-black">
            Mining Intelligence Analytics Dashboard
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-10">

          {/* METRICS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">

            {[
              ["Records", "15"],
              ["High Risk", "6"],
              ["Strategic Minerals", "5"],
              ["Avg Opportunity", "90/100"]
            ].map((metric, index) => (
              <div key={index}>
                <p className="text-slate-400 uppercase text-sm mb-2">
                  {metric[0]}
                </p>

                <h3 className="text-5xl font-black">
                  {metric[1]}
                </h3>
              </div>
            ))}

          </div>

          {/* BARS */}
          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <h3 className="text-2xl font-bold mb-8">
                Commodity Intelligence Distribution
              </h3>

              {[
                ["Copper", "80%"],
                ["Gold", "72%"],
                ["Cobalt", "55%"],
                ["Lithium", "48%"],
                ["Uranium", "35%"]
              ].map((item, index) => (
                <div key={index} className="mb-6">

                  <div className="flex justify-between mb-2">
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 rounded-full"
                      style={{ width: item[1] }}
                    />
                  </div>

                </div>
              ))}

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-8">
                Sovereign Risk Distribution
              </h3>

              {[
                ["High Risk", "40%", "bg-rose-500"],
                ["Moderate Risk", "45%", "bg-yellow-400"],
                ["Low Risk", "15%", "bg-emerald-400"]
              ].map((item, index) => (
                <div key={index} className="mb-6">

                  <div className="flex justify-between mb-2">
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item[2]}`}
                      style={{ width: item[1] }}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* LICENCE TABLE */}
      <section
        id="licences"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="mb-10">

          <h2 className="text-5xl font-black mb-6">
            Strategic Mining Asset Registry
          </h2>

        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">

          <table className="w-full min-w-[1200px]">

            <thead className="border-b border-white/10 text-cyan-300">
              <tr>

                {[
                  "Licence ID",
                  "Company / Zone",
                  "Country",
                  "Province",
                  "Commodity",
                  "Status",
                  "Risk",
                  "Opportunity"
                ].map((header, index) => (
                  <th key={index} className="text-left px-6 py-5">
                    {header}
                  </th>
                ))}

              </tr>
            </thead>

            <tbody>

              {[
                ["ZM-CAN-001","Copperbelt Exploration Resources","Zambia","Copperbelt","Copper","Cancelled","High","88/100"],
                ["ZM-CAN-002","Northwest Gold Ventures","Zambia","North-Western","Gold","Cancelled","Medium","79/100"],
                ["DRC-SUS-001","South Kivu Artisanal Cluster","DRC","South Kivu","Gold / Coltan","Suspended","High","91/100"],
                ["DRC-SUS-002","Mwenga Mining Zone","DRC","Mwenga","Gold","Suspended","High","93/100"]
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5"
                >

                  {row.map((cell, i) => (
                    <td key={i} className="px-6 py-5 text-slate-200">
                      {cell}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ALERTS */}
      <section
        id="alerts"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="mb-10">

          <h2 className="text-5xl font-black">
            Strategic Intelligence Alerts
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            ["DRC Suspension Alert","South Kivu and Mwenga remain elevated monitoring zones."],
            ["Burkina Faso Sovereign Fund","State-backed mining fund activity increasing."],
            ["Lobito Corridor Expansion","Regional rail and copper logistics infrastructure expanding."],
            ["Strategic Minerals Watch","Lithium, cobalt and uranium activity increasing."]
          ].map((alert, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h3 className="text-2xl font-black mb-4">
                {alert[0]}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {alert[1]}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-950/20 p-10">

          <h2 className="text-5xl font-black mb-6">
            Request Access
          </h2>

          <p className="text-slate-300 text-lg max-w-4xl mb-10">
            Request pilot access, intelligence briefings,
            investor due diligence reports and corridor intelligence.
          </p>

          <div className="space-y-4 mb-10">

            <p className="text-cyan-300 text-xl font-bold">
              fred.mulenga@zerb.co.zm
            </p>

            <p className="text-white text-lg">
              (+260) 760 612 073
            </p>

            <p className="text-white text-lg">
              0961 863 010
            </p>

          </div>

          <button className="px-8 py-4 rounded-2xl bg-yellow-300 text-black font-black hover:scale-105 transition">
            Request Intelligence Brief
          </button>

        </div>

        <footer className="text-center text-slate-500 mt-12">
          © 2026 TerraNova Mining Intelligence. All rights reserved.
        </footer>

      </section>

    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
