import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const licenceData = [
  {
    id: "ZM-CAN-001",
    company: "Copperbelt Exploration Resources",
    country: "Zambia",
    province: "Copperbelt",
    commodity: "Copper",
    status: "Cancelled",
    risk: "High",
    score: "88/100",
  },
  {
    id: "DRC-SUS-002",
    company: "Mwenga Mining Zone",
    country: "DRC",
    province: "South Kivu",
    commodity: "Gold",
    status: "Suspended",
    risk: "High",
    score: "93/100",
  },
  {
    id: "BF-SOV-003",
    company: "Burkina Strategic Minerals",
    country: "Burkina Faso",
    province: "Ouagadougou",
    commodity: "Gold",
    status: "State Review",
    risk: "High",
    score: "91/100",
  },
  {
    id: "ANG-COR-004",
    company: "Lobito Copper Logistics",
    country: "Angola",
    province: "Benguela",
    commodity: "Copper",
    status: "Active",
    risk: "Moderate",
    score: "84/100",
  },
];

function RiskBadge({ risk }) {
  const styles = {
    High: "bg-rose-500/20 text-rose-300 border border-rose-500/30",
    Moderate:
      "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    Low: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold ${styles[risk]}`}
    >
      {risk}
    </span>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.06),transparent_35%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#050816]/90">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] uppercase tracking-[0.45em] text-slate-400 mt-1">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#engine" className="hover:text-cyan-400">
              Intelligence Engine
            </a>

            <a href="#heatmap" className="hover:text-cyan-400">
              Heatmap
            </a>

            <a href="#analytics" className="hover:text-cyan-400">
              Analytics
            </a>

            <a href="#licences" className="hover:text-cyan-400">
              Licences
            </a>

            <a href="#alerts" className="hover:text-cyan-400">
              Alerts
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="engine"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >

        {/* LIVE ALERT */}
        <div className="mb-10 rounded-2xl bg-rose-500/10 border border-rose-500/20 px-6 py-4 animate-pulse">

          <div className="flex items-center gap-4 flex-wrap">

            <span className="bg-rose-500 text-white text-xs font-black px-4 py-2 rounded-full">
              BREAKING INTELLIGENCE
            </span>

            <p className="text-rose-100 text-sm">
              DRC suspensions, Burkina Faso sovereign mining fund and Lobito
              Corridor expansion remain active watch items.
            </p>

          </div>
        </div>

        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-6">
          TMI.AFRICA COMMAND CENTER
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-none max-w-6xl mb-8">
          Africa Mining Intelligence Infrastructure
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-5xl mb-16">
          TerraNova Mining Intelligence operates an African sovereign mining
          intelligence platform monitoring distressed assets, strategic
          minerals, corridor infrastructure, sovereign risk, investor exposure
          and resource nationalism across Africa.
        </p>

        {/* COMMAND CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Cancelled Licence Intelligence",
              desc:
                "Monitor distressed and revoked mining rights across Zambia and Africa.",
            },
            {
              title: "Strategic Minerals Intelligence",
              desc:
                "Track copper, cobalt, lithium, uranium and critical mineral assets.",
            },
            {
              title: "Sovereign Risk Analytics",
              desc:
                "Monitor mining policy shifts, sovereign funds and state mining intervention.",
            },
            {
              title: "Investor Due Diligence",
              desc:
                "Screen mining investors, operators, suppliers and beneficial ownership risk.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black mb-5">{card.title}</h3>

              <p className="text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SOVEREIGN HEATMAP */}
      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
      >

        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm mb-4">
            AFRICA SOVEREIGN RISK MONITOR
          </p>

          <h2 className="text-5xl font-black">
            Africa Mining Risk Heatmap
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            ["DRC", "High", "Conflict minerals and licence suspensions"],
            ["Burkina Faso", "High", "Sovereign mining intervention"],
            ["Zambia", "Moderate", "Strategic minerals expansion"],
            ["Angola", "Moderate", "Lobito Corridor logistics growth"],
            ["Botswana", "Low", "Stable mining governance"],
            ["Tanzania", "Moderate", "Strategic minerals monitoring"],
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/5 border border-white/10 p-8"
            >
              <div className="flex items-center justify-between mb-6">

                <h3 className="text-3xl font-black">
                  {item[0]}
                </h3>

                <RiskBadge risk={item[1]} />

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

        <h2 className="text-5xl font-black mb-12">
          Mining Intelligence Analytics Dashboard
        </h2>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {[
              ["Records", "15"],
              ["High Risk", "6"],
              ["Strategic Minerals", "5"],
              ["Avg Opportunity", "90/100"],
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

          <div className="grid lg:grid-cols-2 gap-16">

            {/* COMMODITY DISTRIBUTION */}
            <div>
              <h3 className="text-2xl font-black mb-8">
                Commodity Intelligence Distribution
              </h3>

              {[
                ["Copper", "80%"],
                ["Gold", "72%"],
                ["Cobalt", "55%"],
                ["Lithium", "48%"],
                ["Uranium", "35%"],
              ].map((item, index) => (
                <div key={index} className="mb-6">

                  <div className="flex justify-between mb-2">
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: item[1] }}
                    />
                  </div>

                </div>
              ))}
            </div>

            {/* RISK DISTRIBUTION */}
            <div>

              <h3 className="text-2xl font-black mb-8">
                Sovereign Risk Distribution
              </h3>

              {[
                ["High Risk", "40%", "bg-rose-500"],
                ["Moderate Risk", "45%", "bg-yellow-400"],
                ["Low Risk", "15%", "bg-emerald-400"],
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

        <div className="mb-12">
          <h2 className="text-5xl font-black">
            Strategic Mining Asset Registry
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">

          <table className="w-full min-w-[1200px]">

            <thead className="border-b border-white/10">
              <tr className="text-cyan-300">

                {[
                  "Licence ID",
                  "Company",
                  "Country",
                  "Province",
                  "Commodity",
                  "Status",
                  "Risk",
                  "Opportunity",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="text-left px-6 py-5 font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              {licenceData.map((licence, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5"
                >

                  <td className="px-6 py-5">{licence.id}</td>
                  <td className="px-6 py-5">{licence.company}</td>
                  <td className="px-6 py-5">{licence.country}</td>
                  <td className="px-6 py-5">{licence.province}</td>
                  <td className="px-6 py-5">{licence.commodity}</td>
                  <td className="px-6 py-5">{licence.status}</td>

                  <td className="px-6 py-5">
                    <RiskBadge risk={licence.risk} />
                  </td>

                  <td className="px-6 py-5 font-bold">
                    {licence.score}
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
