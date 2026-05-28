import React from "react";

export default function TerraNovaAfrica() {
  const alerts = [
    "DRC suspends additional artisanal gold operations in South Kivu.",
    "Lobito Corridor expansion financing discussions continue.",
    "Zambia uranium exploration activity rising.",
  ];

  const sovereignRisk = [
    {
      country: "DRC",
      level: "HIGH",
      detail: "Conflict minerals and sovereign mining intervention.",
      color: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    },
    {
      country: "Zambia",
      level: "MODERATE",
      detail: "Strategic minerals and corridor expansion.",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    },
    {
      country: "Botswana",
      level: "LOW",
      detail: "Stable mining governance environment.",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    },
  ];

  const minerals = [
    {
      name: "Copper",
      value: "92%",
      width: "92%",
      color: "bg-cyan-400",
    },
    {
      name: "Gold",
      value: "81%",
      width: "81%",
      color: "bg-amber-400",
    },
    {
      name: "Cobalt",
      value: "76%",
      width: "76%",
      color: "bg-blue-400",
    },
    {
      name: "Lithium",
      value: "69%",
      width: "69%",
      color: "bg-violet-400",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

          <div>
            <h1 className="text-5xl font-black text-rose-500">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.4em] uppercase text-slate-500 mt-2">
              Mining Intelligence & Asset Management
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300 font-semibold">
            <a href="#engine">Intelligence Engine</a>
            <a href="#heatmap">Heatmap</a>
            <a href="#analytics">Analytics</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* HERO */}

      <section
        id="engine"
        className="max-w-7xl mx-auto px-6 py-16"
      >

        {/* ALERT BAR */}

        <div className="mb-10 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-rose-200 text-sm font-semibold">
            BREAKING INTELLIGENCE: DRC suspensions and Lobito Corridor expansion remain active watch items.
          </p>
        </div>

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-bold mb-6">
          TMI.AFRICA COMMAND CENTER
        </p>

        <h2 className="text-6xl lg:text-8xl font-black leading-none mb-8">
          Africa Mining Intelligence Infrastructure
        </h2>

        <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
          TerraNova Mining Intelligence operates an African sovereign mining intelligence platform monitoring distressed assets, strategic minerals, corridor infrastructure, sovereign risk and investor exposure across Africa.
        </p>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
            <div className="text-5xl font-black text-cyan-400 mb-3">
              15+
            </div>

            <p className="text-slate-300">
              Strategic Mining Records
            </p>
          </div>

          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8">
            <div className="text-5xl font-black text-rose-400 mb-3">
              6
            </div>

            <p className="text-slate-300">
              High Risk Jurisdictions
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8">
            <div className="text-5xl font-black text-cyan-400 mb-3">
              5
            </div>

            <p className="text-slate-300">
              Strategic Minerals
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">
            <div className="text-5xl font-black text-emerald-400 mb-3">
              90/100
            </div>

            <p className="text-slate-300">
              Avg Opportunity Score
            </p>
          </div>

        </div>
      </section>

      {/* LIVE FEED */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="flex justify-between items-center mb-8">

            <div>
              <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-3">
                LIVE INTELLIGENCE
              </p>

              <h3 className="text-3xl font-black">
                Active Monitoring Feed
              </h3>
            </div>

            <div className="h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-4">

            {alerts.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-slate-200"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SOVEREIGN RISK */}

      <section
        id="heatmap"
        className="max-w-7xl mx-auto px-6 pb-20"
      >

        <div className="mb-10">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-4">
            AFRICA SOVEREIGN RISK MATRIX
          </p>

          <h3 className="text-4xl font-black">
            Strategic Mining Risk
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {sovereignRisk.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 ${item.color}`}
            >

              <div className="flex justify-between items-center mb-6">

                <h4 className="text-2xl font-black">
                  {item.country}
                </h4>

                <span className="text-xs font-bold px-4 py-2 rounded-full bg-black/30">
                  {item.level}
                </span>

              </div>

              <p className="text-sm leading-relaxed">
                {item.detail}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* STRATEGIC MINERALS */}

      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="mb-10">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-4">
            STRATEGIC MINERALS COMMAND GRID
          </p>

          <h3 className="text-4xl font-black">
            Africa Strategic Minerals Intelligence
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="space-y-8">

            {minerals.map((item, index) => (
              <div key={index}>

                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-slate-200">
                    {item.name}
                  </span>

                  <span className="font-bold text-cyan-300">
                    {item.value}
                  </span>
                </div>

                <div className="h-4 bg-white/10 rounded-full overflow-hidden">

                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: item.width }}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-4">
            REQUEST ACCESS
          </p>

          <h3 className="text-5xl font-black mb-8">
            TerraNova Intelligence Access
          </h3>

          <div className="space-y-4 text-slate-300 text-lg">

            <p>fred.mulenga@zerb.co.zm</p>

            <p>(+260) 760 612 073</p>

            <p>0961 863 010</p>

          </div>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-black hover:scale-105 transition">
            Request Intelligence Brief
          </button>

        </div>

      </section>

    </main>
  );
}
