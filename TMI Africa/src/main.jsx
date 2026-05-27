import React from "react";

export default function TerraNovaAfrica() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* BACKGROUND FX */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="relative z-50 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] text-slate-400 uppercase mt-1">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#engine" className="hover:text-cyan-300 transition">
              Intelligence Engine
            </a>

            <a href="#heatmap" className="hover:text-cyan-300 transition">
              Heatmap
            </a>

            <a href="#analytics" className="hover:text-cyan-300 transition">
              Analytics
            </a>

            <a href="#licences" className="hover:text-cyan-300 transition">
              Licences
            </a>

            <a href="#alerts" className="hover:text-cyan-300 transition">
              Alerts
            </a>

            <a href="#contact" className="hover:text-cyan-300 transition">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="engine"
        className="relative z-10 px-6 lg:px-16 py-16"
      >
        <div className="max-w-7xl mx-auto">

          {/* BREAKING BAR */}
          <div className="mb-10 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-6 py-4">
            <div className="flex flex-wrap items-center gap-3">

              <span className="bg-rose-500 text-white text-xs font-black px-4 py-1 rounded-full animate-pulse">
                BREAKING INTELLIGENCE
              </span>

              <p className="text-rose-100 text-sm md:text-base">
                DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
              </p>

            </div>
          </div>

          <p className="text-cyan-400 tracking-[0.35em] uppercase text-sm mb-5 font-bold">
            TMI.AFRICA COMMAND CENTER
          </p>

          <h2 className="text-6xl md:text-7xl font-black leading-none mb-8 max-w-5xl">
            Africa Mining Intelligence Infrastructure
          </h2>

          <p className="text-slate-300 text-lg max-w-5xl leading-relaxed mb-14">
            TerraNova Mining Intelligence operates an African sovereign mining
            intelligence platform monitoring distressed mining assets,
            strategic minerals, corridor infrastructure, sovereign risk,
            investor exposure, logistics disruption and resource nationalism
            across Africa.
          </p>

          {/* COMMAND CARDS */}
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
                desc: "Monitor mining policy shifts, sovereign funds and state mining intervention."
              },
              {
                title: "Investor Due Diligence",
                desc: "Screen mining investors, operators, suppliers and beneficial ownership risk."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-slate-900/70 to-cyan-950/20 p-8 hover:border-cyan-400/30 transition"
              >
                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AFRICA HEATMAP */}
      <section
        id="heatmap"
        className="relative z-10 px-6 lg:px-16 py-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">

            <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-3">
              AFRICA SOVEREIGN RISK MONITOR
            </p>

            <h2 className="text-5xl font-black mb-6">
              Africa Mining Risk Heatmap
            </h2>

            <p className="text-slate-300 text-lg max-w-4xl">
              Monitor sovereign mining intervention, licence suspensions,
              strategic corridor exposure and investor risk signals across Africa.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                country: "DRC",
                risk: "HIGH",
                color: "rose",
                desc: "Conflict minerals, suspensions and resource nationalism"
              },
              {
                country: "Burkina Faso",
                risk: "HIGH",
                color: "orange",
                desc: "State-backed mining investment fund and sovereign intervention"
              },
              {
                country: "Zambia",
                risk: "MODERATE",
                color: "yellow",
                desc: "Strategic minerals and corridor expansion"
              },
              {
                country: "Angola",
                risk: "MODERATE",
                color: "amber",
                desc: "Lobito corridor infrastructure expansion"
              },
              {
                country: "Botswana",
                risk: "LOW",
                color: "emerald",
                desc: "Stable mining governance environment"
              },
              {
                country: "Tanzania",
                risk: "MODERATE",
                color: "yellow",
                desc: "Strategic minerals monitoring and policy watch"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div className="flex items-center justify-between mb-6">

                  <h3 className="text-3xl font-black">
                    {item.country}
                  </h3>

                  <span
                    className={`px-4 py-2 rounded-full text-xs font-black
                    ${
                      item.color === "rose"
                        ? "bg-rose-500/20 text-rose-300"
                        : item.color === "orange"
                        ? "bg-orange-500/20 text-orange-300"
                        : item.color === "yellow"
                        ? "bg-yellow-500/20 text-yellow-200"
                        : item.color === "amber"
                        ? "bg-amber-500/20 text-amber-200"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {item.risk}
                  </span>

                </div>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="relative z-10 px-6 lg:px-16 py-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">
            <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-3">
              EXECUTIVE ANALYTICS
            </p>

            <h2 className="text-5xl font-black">
              Mining Intelligence Analytics Dashboard
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            {/* METRICS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">

              {[
                ["Records", "15"],
                ["High Risk", "6"],
                ["Strategic Minerals", "5"],
                ["Avg Opportunity", "90/100"]
              ].map((item, index) => (
                <div key={index}>

                  <p className="text-slate-400 uppercase text-sm mb-2">
                    {item[0]}
                  </p>

                  <h3 className="text-5xl font-black">
                    {item[1]}
                  </h3>

                </div>
              ))}

            </div>

            {/* DISTRIBUTION */}
            <div className="grid lg:grid-cols-2 gap-16">

              {/* COMMODITY */}
              <div>

                <h3 className="text-2xl font-bold mb-8">
                  Commodity Intelligence Distribution
                </h3>

                {[
                  ["Copper", "80%"],
                  ["Gold", "72%"],
                  ["Cobalt", "55%"],
                  ["Lithium", "48%"],
                  ["Uranium", "35%"],
                  ["Nickel", "30%"],
                  ["Coltan", "25%"]
                ].map(([label, width], index) => (
                  <div key={index} className="mb-6">

                    <div className="flex justify-between mb-2 text-sm text-slate-300">
                      <span>{label}</span>
                      <span>{width}</span>
                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 rounded-full"
                        style={{ width }}
                      />
                    </div>

                  </div>
                ))}

              </div>

              {/* RISK */}
              <div>

                <h3 className="text-2xl font-bold mb-8">
                  Sovereign Risk Distribution
                </h3>

                {[
                  ["High Risk", "40%", "bg-rose-500"],
                  ["Moderate Risk", "45%", "bg-yellow-400"],
                  ["Low Risk", "15%", "bg-emerald-400"]
                ].map(([label, width, color], index) => (
                  <div key={index} className="mb-6">

                    <div className="flex justify-between mb-2 text-sm text-slate-300">
                      <span>{label}</span>
                      <span>{width}</span>
                    </div>

                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width }}
                      />
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* LICENCE TABLE */}
      <section
        id="licences"
        className="relative z-10 px-6 lg:px-16 py-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">

            <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-3">
              LICENCE INTELLIGENCE
            </p>

            <h2 className="text-5xl font-black mb-5">
              Strategic Mining Asset Registry
            </h2>

            <p className="text-slate-300 text-lg max-w-4xl">
              Search, filter and monitor cancelled, suspended, distressed,
              corridor-linked and strategic mineral mining assets.
            </p>

          </div>

          {/* SEARCH */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <input
              type="text"
              placeholder="Search company, province, commodity..."
              className="w-full rounded-2xl bg-white text-black px-5 py-4 outline-none"
            />

            <select className="w-full rounded-2xl bg-white text-black px-5 py-4 outline-none">
              <option>All</option>
              <option>High Risk</option>
              <option>Cancelled</option>
              <option>Suspended</option>
              <option>Strategic Minerals</option>
            </select>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <table className="w-full min-w-[1200px]">

              <thead className="border-b border-white/10">
                <tr className="text-left text-cyan-300">

                  {[
                    "Licence ID",
                    "Company / Zone",
                    "Country",
                    "Province",
                    "Commodity",
                    "Status",
                    "Risk",
                    "Opportunity"
                  ].map((item, index) => (
                    <th key={index} className="px-6 py-5 text-sm uppercase tracking-wider">
                      {item}
                    </th>
                  ))}

                </tr>
              </thead>

              <tbody>

                {[
                  ["ZM-CAN-001","Copperbelt Exploration Resources","Zambia","Copperbelt","Copper","Cancelled","High","88/100"],
                  ["ZM-CAN-002","Northwest Gold Ventures","Zambia","North-Western","Gold","Cancelled","Medium","79/100"],
                  ["ZM-EXP-003","Strategic Cobalt Zambia","Zambia","Copperbelt","Cobalt","Under Review","Medium","83/100"],
                  ["ZM-LIT-004","Lobito Corridor Copper JV","Zambia","North-Western","Copper","Active","Low","95/100"],
                  ["ZM-RARE-005","Critical Minerals Zambia","Zambia","Central","Lithium / Rare Earths","Exploration","Medium","92/100"],
                  ["ZM-URA-006","Zambezi Uranium Holdings","Zambia","Southern","Uranium","Pending","Medium","86/100"],
                  ["DRC-SUS-001","South Kivu Artisanal Cluster","DRC","South Kivu","Gold / Coltan","Suspended","High","91/100"],
                  ["DRC-SUS-002","Mwenga Mining Zone","DRC","Mwenga","Gold","Suspended","High","93/100"],
                  ["DRC-COP-003","Katanga Copper Holdings","DRC","Katanga","Copper / Cobalt","Revoked","High","90/100"],
                  ["DRC-SHB-004","Shabunda Coltan Network","DRC","Shabunda","Coltan","Suspended","High","94/100"]
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition"
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
        </div>
      </section>

      {/* LIVE ALERTS */}
      <section
        id="alerts"
        className="relative z-10 px-6 lg:px-16 py-20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-10">

            <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-3">
              LIVE ALERT SYSTEM
            </p>

            <h2 className="text-5xl font-black">
              Strategic Intelligence Alerts
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "DRC Suspension Alert",
                text: "South Kivu and Mwenga monitoring zones elevated due to mineral suspension activity.",
                color: "rose"
              },
              {
                title: "Burkina Faso Sovereign Fund",
                text: "Government-backed mining investment structure increasing sovereign intervention risk.",
                color: "orange"
              },
              {
                title: "Lobito Corridor Expansion",
                text: "Rail and logistics infrastructure expansion increasing strategic copper corridor exposure.",
                color: "cyan"
              },
              {
                title: "Strategic Minerals Watch",
                text: "Lithium, cobalt and uranium exploration activity increasing across Southern Africa.",
                color: "emerald"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div className="flex items-center gap-4 mb-5">

                  <div
                    className={`w-4 h-4 rounded-full animate-pulse
                    ${
                      item.color === "rose"
                        ? "bg-rose-500"
                        : item.color === "orange"
                        ? "bg-orange-400"
                        : item.color === "cyan"
                        ? "bg-cyan-400"
                        : "bg-emerald-400"
                    }`}
                  />

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <p className="text-slate-300 leading-relaxed text-lg">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-6 lg:px-16 py-24"
      >
        <div className="max-w-7xl mx-auto">

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-slate-900/70 p-10">

            <h2 className="text-5xl font-black mb-6">
              Request Access
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl mb-10">
              Request pilot access, intelligence briefings, investor due diligence reports,
              corridor intelligence or partnership discussions with TerraNova Mining Intelligence.
            </p>

            <div className="space-y-4 mb-10">

              <p className="text-cyan-300 font-bold text-xl">
                fred.mulenga@zerb.co.zm
              </p>

              <p className="text-white text-lg">
                (+260) 760 612 073
              </p>

              <p className="text-white text-lg">
                0961 863 010
              </p>

            </div>

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-slate-900 font-black hover:scale-105 transition">
              Request Intelligence Brief
            </button>

          </div>

          <footer className="text-center text-slate-500 mt-12 text-sm">
            © 2026 TerraNova Mining Intelligence. All rights reserved.
          </footer>

        </div>
      </section>

    </main>
  );
}
