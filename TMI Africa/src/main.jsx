<section className="relative z-10 px-6 lg:px-16 py-20">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-12">
      <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
        TMI.AFRICA LIVE INTELLIGENCE ENGINE
      </p>

      <h2 className="text-5xl font-black text-white leading-tight mb-6">
        Africa Mining Intelligence Infrastructure
      </h2>

      <p className="text-slate-300 text-lg max-w-5xl leading-relaxed">
        TerraNova Mining Intelligence operates an African sovereign mining
        intelligence platform monitoring distressed mining assets,
        strategic minerals, corridor infrastructure, sovereign risk,
        resource nationalism, investor exposure and licence governance
        across Africa.
      </p>
    </div>

    {/* LIVE ALERT BAR */}
    <div className="mb-10 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-6 py-4">
      <div className="flex flex-wrap gap-3 items-center">
        <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
          LIVE ALERTS
        </span>

        <p className="text-rose-100 text-sm md:text-base">
          DRC licence suspensions active • Burkina Faso sovereign mining fund operational •
          Lobito Corridor expansion accelerating • Zambia strategic minerals expansion underway •
          South Kivu and Shabunda remain elevated monitoring zones.
        </p>
      </div>
    </div>

    {/* AFRICA RISK GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

      {[
        {
          country: "DRC",
          risk: "HIGH",
          color: "rose",
          text: "Conflict minerals, licence suspensions, resource nationalism and regional instability."
        },
        {
          country: "Burkina Faso",
          risk: "HIGH",
          color: "orange",
          text: "State-backed mining investment fund and sovereign mining intervention."
        },
        {
          country: "Zambia",
          risk: "MODERATE",
          color: "yellow",
          text: "Strategic minerals expansion, corridor growth and copper investment acceleration."
        },
        {
          country: "Angola",
          risk: "MODERATE",
          color: "amber",
          text: "Lobito Corridor logistics and rail-linked mining infrastructure expansion."
        },
        {
          country: "Botswana",
          risk: "LOW",
          color: "emerald",
          text: "Stable mining governance and investor-friendly mineral policy environment."
        },
        {
          country: "Tanzania",
          risk: "MODERATE",
          color: "yellow",
          text: "Strategic minerals monitoring and resource nationalism watch activity."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/30 transition"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-bold text-white">
              {item.country}
            </h3>

            <span
              className={`px-3 py-1 rounded-full text-xs font-bold
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

          <p className="text-slate-300 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* INTELLIGENCE MODULES */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

      {[
        {
          title: "Cancelled Licence Intelligence",
          desc: "Monitor distressed, revoked and suspended mining rights across Zambia and Africa."
        },
        {
          title: "Strategic Minerals Intelligence",
          desc: "Track copper, cobalt, lithium, uranium, nickel, gold and rare earth intelligence."
        },
        {
          title: "Sovereign Risk Analytics",
          desc: "Monitor mining policy shifts, sovereign funds, military intervention and investor risk."
        },
        {
          title: "Investor Due Diligence",
          desc: "Screen investors, operators, suppliers and beneficial ownership exposure."
        },
        {
          title: "Corridor Intelligence",
          desc: "Track Lobito, TAZARA, Walvis Bay, Beira and regional mining logistics corridors."
        },
        {
          title: "Conflict Minerals Monitoring",
          desc: "Monitor high-risk conflict-linked mineral zones and suspension activity."
        },
        {
          title: "Mining Opportunity Radar",
          desc: "Identify distressed assets, acquisition opportunities and strategic mining zones."
        },
        {
          title: "Executive Intelligence Briefs",
          desc: "Generate institutional-grade mining intelligence and sovereign risk reports."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-slate-900/70 to-cyan-950/30 p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            {item.title}
          </h3>

          <p className="text-slate-300 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* ANALYTICS */}
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-14">

      <div className="flex flex-wrap gap-10 mb-10">

        <div>
          <p className="text-slate-400 text-sm uppercase mb-2">
            Records
          </p>
          <h3 className="text-4xl font-black text-white">
            15
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm uppercase mb-2">
            High Risk
          </p>
          <h3 className="text-4xl font-black text-rose-400">
            6
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm uppercase mb-2">
            Strategic Minerals
          </p>
          <h3 className="text-4xl font-black text-cyan-400">
            5
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm uppercase mb-2">
            Avg Opportunity
          </p>
          <h3 className="text-4xl font-black text-emerald-400">
            90/100
          </h3>
        </div>
      </div>

      {/* BARS */}
      <div className="grid lg:grid-cols-2 gap-10">

        <div>
          <h3 className="text-white text-xl font-bold mb-6">
            Commodity Intelligence Distribution
          </h3>

          {[
            ["Copper", "80%"],
            ["Gold", "72%"],
            ["Cobalt", "55%"],
            ["Lithium", "48%"],
            ["Uranium", "35%"],
            ["Nickel", "30%"]
          ].map(([label, width], index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>{label}</span>
                <span>{width}</span>
              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-6">
            Sovereign Risk Distribution
          </h3>

          {[
            ["High Risk", "40%", "bg-rose-500"],
            ["Moderate Risk", "45%", "bg-yellow-400"],
            ["Low Risk", "15%", "bg-emerald-400"]
          ].map(([label, width, color], index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between text-sm text-slate-300 mb-2">
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

    {/* CONTACT */}
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-slate-900/50 p-10">

      <h3 className="text-4xl font-black text-white mb-6">
        Request Intelligence Access
      </h3>

      <p className="text-slate-300 text-lg max-w-4xl mb-8">
        Request pilot access, sovereign mining intelligence briefings,
        investor due diligence reports, corridor intelligence analytics,
        strategic minerals monitoring and partnership discussions.
      </p>

      <div className="space-y-3 mb-8">
        <p className="text-cyan-300 font-semibold">
          fred.mulenga@zerb.co.zm
        </p>

        <p className="text-white">
          (+260) 760 612 073
        </p>

        <p className="text-white">
          0961 863 010
        </p>
      </div>

      <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-slate-900 font-bold hover:scale-105 transition">
        Request Intelligence Brief
      </button>
    </div>

  </div>
</section>
