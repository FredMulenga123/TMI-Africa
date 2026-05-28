import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function TerraNovaAfrica() {
  const database = [
    {
      country: "Zambia",
      mineral: "Copper",
      risk: "MODERATE",
      score: "88/100",
    },
    {
      country: "DRC",
      mineral: "Coltan",
      risk: "HIGH",
      score: "95/100",
    },
    {
      country: "Namibia",
      mineral: "Uranium",
      risk: "LOW",
      score: "82/100",
    },
    {
      country: "Botswana",
      mineral: "Diamonds",
      risk: "LOW",
      score: "80/100",
    },
  ];

  const alerts = [
    "DRC expands strategic mineral monitoring.",
    "Lobito Corridor investment activity rising.",
    "Copper demand increases from EV markets.",
    "Southern Africa uranium activity accelerating.",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-black text-rose-500">
          TerraNova
        </h1>

        <p className="text-slate-400 tracking-[0.4em] uppercase text-sm mt-2">
          Mining Intelligence & Asset Management
        </p>

        <div className="mt-10 border border-rose-500/30 bg-rose-500/10 rounded-2xl p-4 text-rose-200">
          BREAKING INTELLIGENCE:
          <span className="ml-2 text-white">
            DRC suspensions and Lobito Corridor expansion remain active.
          </span>
        </div>

        <div className="mt-16">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
            Africa’s Strategic Minerals & Mining Governance Intelligence Infrastructure
          </p>

          <h2 className="text-7xl font-black mt-6 leading-none">
            Mining Intelligence Database Engine
          </h2>

          <p className="text-slate-300 mt-8 max-w-4xl text-lg">
            TerraNova Mining Intelligence monitors sovereign mining risk,
            strategic minerals, distressed assets and infrastructure corridors
            across Africa.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {[
          ["15+", "Mining Records"],
          ["6", "High Risk Zones"],
          ["5", "Strategic Minerals"],
          ["90/100", "Opportunity Score"],
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-5xl font-black text-cyan-400">
              {item[0]}
            </h3>

            <p className="mt-3 text-slate-400 uppercase tracking-widest text-sm">
              {item[1]}
            </p>
          </div>
        ))}
      </section>

      {/* DATABASE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
          Intelligence Database
        </p>

        <h3 className="text-5xl font-black mt-4">
          Strategic Mining Registry
        </h3>

        <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-left">
                <th className="p-5">Country</th>
                <th className="p-5">Mineral</th>
                <th className="p-5">Risk</th>
                <th className="p-5">Score</th>
              </tr>
            </thead>

            <tbody>
              {database.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5"
                >
                  <td className="p-5">{item.country}</td>

                  <td className="p-5">{item.mineral}</td>

                  <td
                    className={`p-5 font-bold ${
                      item.risk === "HIGH"
                        ? "text-rose-400"
                        : item.risk === "MODERATE"
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {item.risk}
                  </td>

                  <td className="p-5 text-cyan-400 font-bold">
                    {item.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ALERTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">
          Live Intelligence Feed
        </p>

        <h3 className="text-5xl font-black mt-4">
          Strategic Alerts
        </h3>

        <div className="mt-10 space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-rose-400 animate-pulse"></div>

                <p>{alert}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-500">
        © 2026 TerraNova Mining Intelligence
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TerraNovaAfrica />
  </React.StrictMode>
);
