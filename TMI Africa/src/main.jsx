import React, { useMemo, useState } from "react";

export default function TerraNovaAfrica() {
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("ALL");
  const [selectedCountry, setSelectedCountry] = useState("Zambia");

  const intelligenceDatabase = [
    {
      id: "ZM-COP-001",
      company: "Copperbelt Exploration Resources",
      country: "Zambia",
      mineral: "Copper",
      risk: "MODERATE",
      status: "Active",
      score: 88,
    },
    {
      id: "DRC-COL-002",
      company: "South Kivu Artisanal Cluster",
      country: "DRC",
      mineral: "Coltan",
      risk: "HIGH",
      status: "Suspended",
      score: 93,
    },
    {
      id: "ANG-COR-003",
      company: "Lobito Corridor Copper JV",
      country: "Angola",
      mineral: "Copper",
      risk: "MODERATE",
      status: "Expansion",
      score: 84,
    },
    {
      id: "BOT-DIA-004",
      company: "Botswana Diamond Holdings",
      country: "Botswana",
      mineral: "Diamonds",
      risk: "LOW",
      status: "Stable",
      score: 81,
    },
    {
      id: "NAM-URA-005",
      company: "Namibia Uranium Energy",
      country: "Namibia",
      mineral: "Uranium",
      risk: "LOW",
      status: "Operational",
      score: 86,
    },
    {
      id: "TZN-NKL-006",
      company: "East Africa Nickel Resources",
      country: "Tanzania",
      mineral: "Nickel",
      risk: "MODERATE",
      status: "Monitoring",
      score: 76,
    },
    {
      id: "ZM-LIT-007",
      company: "Central Zambia Lithium",
      country: "Zambia",
      mineral: "Lithium",
      risk: "MODERATE",
      status: "Exploration",
      score: 91,
    },
    {
      id: "DRC-GLD-008",
      company: "Mwenga Gold Operations",
      country: "DRC",
      mineral: "Gold",
      risk: "HIGH",
      status: "Under Review",
      score: 95,
    },
  ];

  const countries = [
    {
      name: "DRC",
      risk: "HIGH",
      minerals: "Copper, Cobalt, Coltan",
      summary:
        "Conflict minerals, sovereign intervention and elevated instability.",
      color: "rose",
    },
    {
      name: "Zambia",
      risk: "MODERATE",
      minerals: "Copper, Uranium, Lithium",
      summary:
        "Strategic minerals growth and Lobito Corridor expansion activity.",
      color: "amber",
    },
    {
      name: "Angola",
      risk: "MODERATE",
      minerals: "Oil, Copper Corridor",
      summary:
        "Logistics infrastructure growth and corridor investment activity.",
      color: "orange",
    },
    {
      name: "Botswana",
      risk: "LOW",
      minerals: "Diamonds, Copper",
      summary: "Stable mining governance and investor confidence.",
      color: "emerald",
    },
    {
      name: "Namibia",
      risk: "LOW",
      minerals: "Uranium, Rare Earths",
      summary:
        "Energy transition minerals and strong mining governance systems.",
      color: "cyan",
    },
  ];

  const alerts = [
    "DRC expands strategic mineral suspension monitoring in South Kivu.",
    "Lobito Corridor infrastructure investment discussions intensify.",
    "Strategic uranium licence activity rising across Southern Africa.",
    "Copper demand outlook strengthened by global energy transition.",
  ];

  const filteredData = useMemo(() => {
    return intelligenceDatabase.filter((item) => {
      const matchesSearch =
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase()) ||
        item.mineral.toLowerCase().includes(search.toLowerCase());

      const matchesRisk =
        riskFilter === "ALL" || item.risk === riskFilter;

      return matchesSearch && matchesRisk;
    });
  }, [search, riskFilter]);

  const selected = countries.find(
    (country) => country.name === selectedCountry
  );

  const riskColor = (risk) => {
    if (risk === "HIGH") return "text-rose-400";
    if (risk === "MODERATE") return "text-amber-400";
    return "text-emerald-400";
  };

  const riskBadge = (risk) => {
    if (risk === "HIGH")
      return "bg-rose-500/20 border border-rose-500/30 text-rose-300";

    if (risk === "MODERATE")
      return "bg-amber-500/20 border border-amber-500/30 text-amber-300";

    return "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300";
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_40%)] pointer-events-none" />

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-black text-rose-500">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] text-slate-500 uppercase mt-2">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#database" className="hover:text-cyan-400 transition">
              Database
            </a>

            <a href="#map" className="hover:text-cyan-400 transition">
              Intelligence Map
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-20">
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-6 py-4 text-sm text-rose-200 font-semibold">
          BREAKING INTELLIGENCE:
          <span className="ml-3 text-white/90">
            DRC suspensions, strategic uranium activity and Lobito Corridor
            expansion remain active watch items.
          </span>
        </div>

        <div className="mt-12">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-bold">
            Africa’s Strategic Minerals & Mining Governance Intelligence
            Infrastructure
          </p>

          <h2 className="mt-6 text-6xl lg:text-8xl font-black leading-none max-w-6xl">
            Live Mining Intelligence Database Engine
          </h2>

          <p className="mt-8 text-slate-300 text-lg max-w-4xl leading-relaxed">
            TerraNova Mining Intelligence operates a sovereign mining
            intelligence platform focused on strategic minerals, sovereign
            mining risk, investor monitoring, distressed assets and African
            corridor governance analytics.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            ["15+", "Mining Records"],
            ["6", "High Risk Zones"],
            ["5", "Strategic Minerals"],
            ["90/100", "Opportunity Score"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="text-5xl font-black text-cyan-400">
                {value}
              </div>

              <div className="mt-3 text-sm uppercase tracking-widest text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DATABASE ENGINE */}
      <section
        id="database"
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
              Intelligence Database
            </p>

            <h3 className="text-5xl font-black mt-4">
              Strategic Mining Registry
            </h3>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search company, country or mineral..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none w-full md:w-[320px]"
            />

            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
            >
              <option value="ALL" className="bg-black">
                All Risk Levels
              </option>

              <option value="HIGH" className="bg-black">
                High Risk
              </option>

              <option value="MODERATE" className="bg-black">
                Moderate Risk
              </option>

              <option value="LOW" className="bg-black">
                Low Risk
              </option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/10 text-left text-slate-400 uppercase text-xs tracking-widest">
                <th className="px-6 py-5">Registry ID</th>
                <th className="px-6 py-5">Company</th>
                <th className="px-6 py-5">Country</th>
                <th className="px-6 py-5">Mineral</th>
                <th className="px-6 py-5">Risk</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Score</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="px-6 py-5 text-cyan-400 font-bold">
                    {item.id}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {item.company}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.country}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.mineral}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold ${riskBadge(
                        item.risk
                      )}`}
                    >
                      {item.risk}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {item.status}
                  </td>

                  <td className="px-6 py-5 font-black text-emerald-400">
                    {item.score}/100
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SOVEREIGN MAP */}
      <section
        id="map"
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-24"
      >
        <div className="mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
            Africa Sovereign Intelligence
          </p>

          <h3 className="text-5xl font-black mt-4">
            Strategic Mining Risk Monitor
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* COUNTRY GRID */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setSelectedCountry(country.name)}
                className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left transition hover:scale-[1.02] ${
                  selectedCountry === country.name
                    ? "ring-2 ring-cyan-400"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4
                    className={`text-4xl font-black ${riskColor(
                      country.risk
                    )}`}
                  >
                    {country.name}
                  </h4>

                  <div
                    className={`w-4 h-4 rounded-full ${
                      country.risk === "HIGH"
                        ? "bg-rose-400"
                        : country.risk === "MODERATE"
                        ? "bg-amber-400"
                        : "bg-emerald-400"
                    } animate-pulse`}
                  />
                </div>

                <div className="mt-5">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold ${riskBadge(
                      country.risk
                    )}`}
                  >
                    {country.risk}
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Strategic Minerals
                    </p>

                    <p className="mt-2 font-semibold">
                      {country.minerals}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {country.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* SIDE PANEL */}
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-8 h-fit sticky top-28">
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
              Live Country Intelligence
            </p>

            <h3 className="text-5xl font-black mt-5">
              {selected.name}
            </h3>

            <div className="mt-6">
              <span
                className={`px-4 py-2 rounded-full text-xs font-bold ${riskBadge(
                  selected.risk
                )}`}
              >
                {selected.risk} RISK
              </span>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Strategic Minerals
                </p>

                <p className="mt-3 text-xl font-bold">
                  {selected.minerals}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Intelligence Summary
                </p>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  {selected.summary}
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />

                <p className="font-bold text-emerald-300">
                  ACTIVE MONITORING
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE ALERTS */}
      <section
        id="alerts"
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-24"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
                Live Intelligence Feed
              </p>

              <h3 className="text-4xl font-black mt-4">
                Strategic Alerts
              </h3>
            </div>

            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="space-y-5">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-cyan-500/30 transition"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-rose-400 mt-2 animate-pulse" />

                  <div>
                    <p className="font-semibold text-slate-200">
                      {alert}
                    </p>

                    <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                      TerraNova Intelligence Monitor
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 py-12"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black text-rose-500">
              TerraNova
            </h3>

            <p className="mt-4 text-slate-400 max-w-lg">
              Africa’s Strategic Minerals & Mining Governance Intelligence
              Infrastructure.
            </p>
          </div>

          <div className="space-y-3 text-slate-300">
            <p>fred.mulenga@zerb.co.zm</p>
            <p>(+260) 760 612 073</p>
            <p>0961 863 010</p>
          </div>
        </div>

        <div className="mt-10 text-center text-slate-600 text-sm">
          © 2026 TerraNova Mining Intelligence. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
