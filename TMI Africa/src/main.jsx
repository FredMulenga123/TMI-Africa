import React from "react";

export default function TerraNovaAfrica() {
  const alerts = [
    "DRC suspends additional artisanal gold operations in South Kivu.",
    "Lobito Corridor expansion financing discussions continue.",
    "Zambia strategic uranium exploration licences increase.",
    "Burkina Faso sovereign mining fund expansion under review.",
    "Copperbelt infrastructure investment activity rising.",
  ];

  const sovereignRisk = [
    {
      country: "DRC",
      level: "HIGH",
      detail: "Conflict minerals, suspensions and resource nationalism",
      color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    },
    {
      country: "Burkina Faso",
      level: "HIGH",
      detail: "State mining fund and sovereign intervention",
      color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    },
    {
      country: "Zambia",
      level: "MODERATE",
      detail: "Strategic minerals and corridor expansion",
      color: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      country: "Angola",
      level: "MODERATE",
      detail: "Lobito corridor investment activity",
      color: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      country: "Botswana",
      level: "LOW",
      detail: "Stable mining governance environment",
      color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
  ];

  const commodities = [
    { name: "Copper", value: 92 },
    { name: "Gold", value: 81 },
    { name: "Cobalt", value: 76 },
    { name: "Lithium", value: 69 },
    { name: "Uranium", value: 54 },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* BACKGROUND FX */}

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_40%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,0,100,0.08),transparent_35%)] pointer-events-none" />

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-rose-500 tracking-tight">
              TerraNova
            </h1>

            <p className="text-[11px] tracking-[0.45em] text-slate-500 uppercase mt-2">
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

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}

      <section
        id="engine"
        className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20"
      >

        {/* LIVE ALERT */}

        <div className="mb-10 overflow-hidden rounded-2xl border border-rose-500/20 bg-rose-500/10 backdrop-blur-xl">
          <div className="animate-pulse px-6 py-4 text-sm font-semibold text-rose-200 whitespace-nowrap">
            BREAKING INTELLIGENCE: DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
          </div>
        </div>

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-bold mb-6">
            TMI.AFRICA COMMAND CENTER
          </p>

          <h2 className="text-6xl lg:text-8xl font-black leading-none mb-8">
            Africa Mining Intelligence Infrastructure
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            TerraNova Mining Intelligence operates an African sovereign mining intelligence platform monitoring distressed assets, strategic minerals, corridor infrastructure, sovereign risk, investor exposure and resource nationalism across Africa.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-14">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 backdrop-blur-xl">
            <div className="text-6xl font-black text-cyan-400 mb-2">
              15+
            </div>

            <p className="text-slate-300 font-semibold">
              Strategic Mining Records
            </p>
          </div>

          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/10 p-8 backdrop-blur-xl">
            <div className="text-6xl font-black text-rose-400 mb-2">
              6
            </div>

            <p className="text-slate-300 font-semibold">
              High Risk Jurisdictions
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8 backdrop-blur-xl">
            <div className="text-6xl font-black text-cyan-400 mb-2">
              5
            </div>

            <p className="text-slate-300 font-semibold">
              Strategic Minerals
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 backdrop-blur-xl">
            <div className="text-6xl font-black text-emerald-400 mb-2">
              90/100
            </div>

            <p className="text-slate-300 font-semibold">
              Avg Opportunity Score
            </p>
          </div>

        </div>
      </section>

      {/* LIVE FEED */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <div className="flex items-center justify-between mb-8">

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
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >

        <div className="mb-10">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-4">
            AFRICA SOVEREIGN RISK MATRIX
          </p>

          <h3 className="text-4xl font-black">
            Resource Nationalism & Strategic Risk
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {sovereignRisk.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-8 backdrop-blur-xl ${item.color}`}
            >

              <div className="flex items-center justify-between mb-6">

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

      {/* COMMODITY ANALYTICS */}

      <section
        id="analytics"
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >

        <div className="mb-10">

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs font-bold mb-4">
            EXECUTIVE ANALYTICS
          </p>

          <h3 className="text-4xl font-black">
            Strategic Commodity Intelligence
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          <div className="space-y-8">

            {commodities.map((item, index) => (
              <div key={index}>

                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-slate-200">
                    {item.name}
                  </span>

                  <span className="text-cyan-300 font-bold">
                    {item.value}%
                  </span>
                </div>

                <div className="h-4 bg-white/10 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{ width: `${item.value}%` }}
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
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

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

          <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black hover:scale-105 transition">
            Request Intelligence Brief
          </button>

        </div>
      </section>

    </main>
  );
}
