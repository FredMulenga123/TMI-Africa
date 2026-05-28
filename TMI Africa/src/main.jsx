import React, { useState } from "react";

export default function TerraNovaAfrica() {
  const [selectedCountry, setSelectedCountry] = useState("Zambia");

  const countries = [
    {
      name: "DRC",
      risk: "HIGH",
      minerals: "Copper, Cobalt, Coltan, Gold",
      corridor: "Central Africa Copper Belt",
      color: "rose",
      summary:
        "Conflict minerals, sovereign mining intervention and artisanal disruption risk.",
    },
    {
      name: "Zambia",
      risk: "MODERATE",
      minerals: "Copper, Uranium, Cobalt",
      corridor: "Lobito Corridor",
      color: "amber",
      summary:
        "Strategic minerals expansion and corridor infrastructure investment activity.",
    },
    {
      name: "Angola",
      risk: "MODERATE",
      minerals: "Oil, Copper Corridor",
      corridor: "Atlantic Export Route",
      color: "orange",
      summary:
        "Lobito infrastructure investment and sovereign logistics positioning.",
    },
    {
      name: "Botswana",
      risk: "LOW",
      minerals: "Copper, Diamonds",
      corridor: "Southern Stability Zone",
      color: "emerald",
      summary:
        "Stable governance environment with investor-friendly mining policies.",
    },
    {
      name: "Namibia",
      risk: "LOW",
      minerals: "Uranium, Rare Earths",
      corridor: "Walvis Bay Corridor",
      color: "cyan",
      summary:
        "Energy transition mineral growth and strong mining governance.",
    },
    {
      name: "Tanzania",
      risk: "MODERATE",
      minerals: "Gold, Nickel",
      corridor: "East Africa Resource Belt",
      color: "sky",
      summary:
        "Resource nationalism monitoring and strategic export corridor growth.",
    },
  ];

  const alerts = [
    "DRC suspends additional artisanal gold operations in South Kivu.",
    "Lobito Corridor financing discussions intensify across Zambia and Angola.",
    "Strategic uranium exploration licences increase in Southern Africa.",
    "African copper demand outlook strengthened by energy transition markets.",
  ];

  const selected = countries.find((c) => c.name === selectedCountry);

  const colorClasses = {
    rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
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
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] text-slate-500 uppercase mt-2">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300 font-semibold">
            <a href="#dashboard" className="hover:text-cyan-400 transition">
              Dashboard
            </a>

            <a href="#map" className="hover:text-cyan-400 transition">
              Intelligence Map
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
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24"
      >
        <div className="mb-10 overflow-hidden rounded-2xl border border-rose-500/20 bg-rose-500/10">
          <div className="animate-pulse px-6 py-4 text-rose-200 text-sm font-semibold tracking-wide">
            BREAKING INTELLIGENCE:
            <span className="ml-3 text-white/90">
              DRC suspensions, Lobito Corridor expansion and strategic uranium
              activity remain active watch items.
            </span>
          </div>
        </div>

        <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-bold mb-6">
          Africa’s Strategic Minerals & Mining Governance Intelligence
          Infrastructure
        </p>

        <h2 className="text-6xl lg:text-8xl font-black leading-none max-w-5xl">
          Interactive Africa Mining Intelligence Platform
        </h2>

        <p className="mt-10 text-slate-300 text-lg max-w-4xl leading-relaxed">
          TerraNova Mining Intelligence monitors sovereign mining risk,
          strategic minerals, distressed mining assets, investor exposure,
          infrastructure corridors and African resource governance.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            ["15+", "Mining Records"],
            ["6", "High Risk Zones"],
            ["5", "Strategic Minerals"],
            ["90/100", "Opportunity Score"],
          ].map(([value, label], idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <div className="text-5xl font-black text-cyan-400">{value}</div>

              <div className="mt-3 text-slate-400 text-sm uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTELLIGENCE MAP */}
      <section
        id="map"
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-24"
      >
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm font-bold mb-5">
            Africa Intelligence Map
          </p>

          <h3 className="text-5xl font-black">
            Sovereign Mining Risk Monitoring
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT COUNTRY GRID */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setSelectedCountry(country.name)}
                className={`rounded-3xl border p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                  colorClasses[country.color]
                } ${
                  selectedCountry === country.name
                    ? "ring-2 ring-cyan-400"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-4xl font-black">{country.name}</h4>

                    <div className="mt-4 inline-flex px-4 py-1 rounded-full border border-white/10 text-xs font-bold tracking-widest">
                      {country.risk}
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-current opacity-80 animate-pulse" />
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">
                      Minerals
                    </p>

                    <p className="mt-1 font-semibold">
                      {country.minerals}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60">
                      Corridor
                    </p>

                    <p className="mt-1 font-semibold">
                      {country.corridor}
                    </p>
                  </div>

                  <p className="text-sm opacity-80 leading-relaxed">
                    {country.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-8 h-fit sticky top-28">
            <p className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
              Live Sovereign Intelligence
            </p>

            <h3 className="text-5xl font-black mt-5">
              {selected.name}
            </h3>

            <div className="mt-6 inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-bold">
              {selected.risk} RISK
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Strategic Minerals
                </p>

                <p className="mt-2 text-xl font-bold">
                  {selected.minerals}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Infrastructure Corridor
                </p>

                <p className="mt-2 text-xl font-bold">
                  {selected.corridor}
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

            <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-black/30 p-6">
              <p className="text-xs uppercase tracking-widest text-cyan-400">
                Intelligence Status
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />

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

              <h3 className="text-4xl font-black mt-3">
                Strategic Alerts
              </h3>
            </div>

            <div className="flex items-center gap-3 text-emerald-400 font-bold">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              LIVE
            </div>
          </div>

          <div className="space-y-5">
            {alerts.map((alert, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-cyan-500/30 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-rose-400 mt-2 animate-pulse" />

                  <div>
                    <p className="font-semibold text-slate-200">
                      {alert}
                    </p>

                    <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest">
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
