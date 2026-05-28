import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function TerraNovaAfrica() {
  const licences = [
    {
      id: "ZM-CAN-001",
      company: "Copperbelt Exploration Resources",
      country: "Zambia",
      province: "Copperbelt",
      mineral: "Copper",
      status: "Cancelled",
      risk: "High",
      score: "88/100",
    },
    {
      id: "ZM-URA-006",
      company: "Zambezi Uranium Holdings",
      country: "Zambia",
      province: "Southern",
      mineral: "Uranium",
      status: "Pending",
      risk: "Medium",
      score: "86/100",
    },
    {
      id: "DRC-SUS-002",
      company: "Mwenga Mining Zone",
      country: "DRC",
      province: "South Kivu",
      mineral: "Gold",
      status: "Suspended",
      risk: "High",
      score: "93/100",
    },
    {
      id: "BOT-COP-004",
      company: "Kalahari Copper JV",
      country: "Botswana",
      province: "Gaborone",
      mineral: "Copper",
      status: "Active",
      risk: "Low",
      score: "90/100",
    },
    {
      id: "NAM-REE-008",
      company: "Namib Rare Earth Resources",
      country: "Namibia",
      province: "Erongo",
      mineral: "Rare Earths",
      status: "Exploration",
      risk: "Low",
      score: "89/100",
    },
    {
      id: "ANG-OIL-009",
      company: "Lobito Energy Corridor",
      country: "Angola",
      province: "Benguela",
      mineral: "Copper Corridor",
      status: "Strategic",
      risk: "Medium",
      score: "91/100",
    },
  ];

  const alerts = [
    "DRC expands mining suspension monitoring in South Kivu.",
    "Lobito Corridor investment activity increasing.",
    "Zambia uranium exploration activity accelerating.",
    "Rare earth strategic investment interest rising in Namibia.",
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
            <a href="#dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </a>

            <a href="#database" className="hover:text-cyan-400 transition">
              Intelligence Database
            </a>

            <a href="#analytics" className="hover:text-cyan-400 transition">
              Analytics
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
        id="dashboard"
        className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-24"
      >
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-6">
          AFRICA’S STRATEGIC MINERALS & MINING GOVERNANCE INTELLIGENCE
          INFRASTRUCTURE
        </p>

        <h2 className="text-6xl lg:text-8xl font-black leading-none max-w-5xl">
          Mining Intelligence Database Engine
        </h2>

        <p className="mt-10 text-slate-300 text-xl leading-relaxed max-w-4xl">
          TerraNova Mining Intelligence operates a sovereign mining intelligence,
          strategic minerals and distressed asset monitoring platform focused on
          Zambia, DRC and emerging African resource corridors.
        </p>

        {/* KPI GRID */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Records
            </p>

            <h3 className="text-6xl font-black mt-4 text-cyan-400">
              {licences.length}
            </h3>
          </div>

          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              High Risk
            </p>

            <h3 className="text-6xl font-black mt-4 text-rose-400">2</h3>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Strategic Minerals
            </p>

            <h3 className="text-6xl font-black mt-4 text-yellow-300">
              5
            </h3>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">
            <p className="text-slate-400 text-sm uppercase tracking-widest">
              Avg Opportunity
            </p>

            <h3 className="text-6xl font-black mt-4 text-emerald-400">
              90/100
            </h3>
          </div>
        </div>
      </section>

      {/* ALERTS */}
      <section
        id="alerts"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-20"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-10">
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
                className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-slate-300"
              >
                {alert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATABASE */}
      <section
        id="database"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold mb-4">
              DISTRESSED ASSET INTELLIGENCE REGISTRY
            </p>

            <h3 className="text-5xl font-black">
              Strategic Mining Intelligence Database
            </h3>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search company, mineral, country..."
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 w-full md:w-80"
            />

            <select className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400">
              <option>All Countries</option>
              <option>Zambia</option>
              <option>DRC</option>
              <option>Botswana</option>
              <option>Namibia</option>
              <option>Angola</option>
            </select>

            <select className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400">
              <option>All Minerals</option>
              <option>Copper</option>
              <option>Gold</option>
              <option>Uranium</option>
              <option>Rare Earths</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full min-w-[1200px]">
            <thead className="border-b border-white/10 bg-black/30">
              <tr className="text-left text-slate-400 text-sm uppercase">
                <th className="px-6 py-5">Licence ID</th>
                <th className="px-6 py-5">Company</th>
                <th className="px-6 py-5">Country</th>
                <th className="px-6 py-5">Province</th>
                <th className="px-6 py-5">Mineral</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Risk</th>
                <th className="px-6 py-5">Opportunity</th>
              </tr>
            </thead>

            <tbody>
              {licences.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-5 font-bold text-cyan-400">
                    {item.id}
                  </td>

                  <td className="px-6 py-5">{item.company}</td>

                  <td className="px-6 py-5">{item.country}</td>

                  <td className="px-6 py-5">{item.province}</td>

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

      {/* ANALYTICS */}
      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold">
                INTELLIGENCE ENGINE
              </p>

              <h3 className="text-5xl font-black mt-4">
                Strategic Minerals Analytics
              </h3>
            </div>

            <h4 className="text-5xl font-black text-cyan-400">ACTIVE</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Corridor Intelligence
              </p>

              <h4 className="text-3xl font-black mt-5">
                Lobito Expansion Active
              </h4>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Strategic logistics and copper export corridor expansion
                continues across Angola, Zambia and DRC.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8">
              <p className="text-slate-400 uppercase tracking-widest text-sm">
                Sovereign Monitoring
              </p>

              <h4 className="text-3xl font-black mt-5">
                DRC Risk Escalation
              </h4>

              <p className="mt-5 text-slate-300 leading-relaxed">
                Continued sovereign mining intervention and artisanal mining
                suspensions remain under active monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-12">
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-bold">
            REQUEST INTELLIGENCE ACCESS
          </p>

          <h3 className="text-5xl font-black mt-5">
            TerraNova Intelligence Access
          </h3>

          <p className="mt-8 text-slate-300 text-lg max-w-3xl">
            Request institutional access, strategic mineral intelligence,
            sovereign mining analytics, corridor intelligence and investor due
            diligence reports.
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
