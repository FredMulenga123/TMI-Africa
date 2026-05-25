import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { licences } from "./data";

const liveAlerts = [
  { country: "DRC", risk: "HIGH", title: "South Kivu Mining Suspensions", desc: "Mwenga and Shabunda remain high-risk gold and coltan zones.", color: "#dc2626" },
  { country: "Burkina Faso", risk: "HIGH", title: "Sovereign Mining Fund", desc: "State-backed mining investment structure signals stronger resource nationalism.", color: "#ea580c" },
  { country: "Zambia", risk: "MODERATE", title: "Strategic Minerals Expansion", desc: "Copper, cobalt and lithium activity accelerating across Zambia.", color: "#eab308" },
  { country: "Angola", risk: "MODERATE", title: "Lobito Corridor Growth", desc: "Rail and logistics investment strengthens copper corridor intelligence.", color: "#38bdf8" },
  { country: "Africa", risk: "WATCH", title: "Resource Nationalism Watch", desc: "Licence reviews, state equity demands and mineral export controls increasing.", color: "#a855f7" }
];

const watchlist = [
  "DRC South Kivu gold and coltan suspension zones",
  "Burkina Faso sovereign mining fund",
  "Zambia Copperbelt and North-Western strategic minerals",
  "Lobito Corridor copper logistics route",
  "Katanga copper-cobalt ownership exposure"
];

function App() {
  const [country, setCountry] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return licences.filter((item) => {
      const matchesCountry = country === "All" || item.country === country;
      const text = `${item.company} ${item.commodity} ${item.province} ${item.category} ${item.status} ${item.sovereign}`.toLowerCase();
      return matchesCountry && text.includes(search.toLowerCase());
    });
  }, [country, search]);

  const highRisk = filtered.filter((x) => x.risk === "High").length;
  const strategic = filtered.filter((x) => x.category.includes("Strategic") || x.category.includes("Critical")).length;
  const avgOpportunity = Math.round(filtered.reduce((a, b) => a + b.opportunity, 0) / (filtered.length || 1));

  const commodityStats = {};
  filtered.forEach((item) => {
    commodityStats[item.minerals] = (commodityStats[item.minerals] || 0) + 1;
  });

  return (
    <main style={page}>
      <header style={header}>
        <div>
          <h1 style={brand}>TerraNova</h1>
          <p style={tagline}>MINING INTELLIGENCE & ASSET MANAGEMENT</p>
        </div>

        <nav style={nav}>
          <a href="#command" style={link}>Command Center</a>
          <a href="#heatmap" style={link}>Heatmap</a>
          <a href="#analytics" style={link}>Analytics</a>
          <a href="#licences" style={link}>Licences</a>
          <a href="#alerts" style={link}>Alerts</a>
          <a href="#contact" style={link}>Contact</a>
        </nav>
      </header>

      <section id="command" style={hero}>
        <div style={breakingBanner}>
          <strong>BREAKING INTELLIGENCE:</strong> DRC suspensions, Burkina Faso sovereign mining fund and Lobito Corridor expansion remain active watch items.
        </div>

        <p style={eyebrow}>TMI.AFRICA COMMAND CENTER</p>

        <h1 style={headline}>
          Africa Mining Intelligence Command Center
        </h1>

        <p style={subtext}>
          TerraNova Mining Intelligence monitors distressed mining assets,
          strategic minerals, sovereign risk, investor exposure, corridor
          infrastructure and resource nationalism across Africa.
        </p>

        <div style={metrics}>
          <Metric title={licences.length} text="Mining Intelligence Records" />
          <Metric title={highRisk} text="High-Risk Mining Assets" />
          <Metric title={strategic} text="Strategic Minerals Assets" />
          <Metric title={`${avgOpportunity}/100`} text="Average Opportunity Score" />
        </div>
      </section>

      <section style={panel}>
        <p style={eyebrow}>EXECUTIVE WATCHLIST</p>
        <h2>Priority Intelligence Watchlist</h2>

        <div style={watchGrid}>
          {watchlist.map((item, index) => (
            <div key={index} style={watchCard}>
              <span style={watchNumber}>0{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="heatmap" style={panel}>
        <p style={eyebrow}>AFRICA SOVEREIGN RISK HEATMAP</p>
        <h2>Sovereign Mining Risk Monitor</h2>

        <div style={heatmapGrid}>
          <HeatCard country="DRC" risk="HIGH" color="#dc2626" note="Conflict minerals, suspensions and resource nationalism" />
          <HeatCard country="Burkina Faso" risk="HIGH" color="#ea580c" note="State mining fund and sovereign intervention" />
          <HeatCard country="Zambia" risk="MODERATE" color="#eab308" note="Strategic minerals and corridor expansion" />
          <HeatCard country="Angola" risk="MODERATE" color="#f59e0b" note="Lobito corridor investment activity" />
          <HeatCard country="Botswana" risk="LOW" color="#16a34a" note="Stable mining governance environment" />
          <HeatCard country="Tanzania" risk="MODERATE" color="#f59e0b" note="Resource nationalism monitoring" />
        </div>
      </section>

      <section id="analytics" style={panel}>
        <p style={eyebrow}>EXECUTIVE ANALYTICS</p>
        <h2>Mining Intelligence Analytics Dashboard</h2>

        <div style={summaryGrid}>
          <Summary title="Records" value={filtered.length} />
          <Summary title="High Risk" value={highRisk} />
          <Summary title="Strategic Minerals" value={strategic} />
          <Summary title="Avg Opportunity" value={`${avgOpportunity}/100`} />
        </div>

        <div style={charts}>
          <div style={chartCard}>
            <h3>Commodity Intelligence Distribution</h3>
            {Object.entries(commodityStats).map(([name, value]) => (
              <div key={name} style={{ marginBottom: "15px" }}>
                <div style={chartLabel}>
                  <span>{name}</span>
                  <span>{value}</span>
                </div>
                <div style={barBg}>
                  <div style={{ ...barFill, width: `${value * 20}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={chartCard}>
            <h3>Sovereign Risk Distribution</h3>
            <RiskRow label="High Risk" value="40%" color="#dc2626" />
            <RiskRow label="Moderate Risk" value="45%" color="#f59e0b" />
            <RiskRow label="Low Risk" value="15%" color="#16a34a" />
          </div>
        </div>
      </section>

      <section id="licences" style={panel}>
        <p style={eyebrow}>LIVE LICENCE INTELLIGENCE</p>
        <h2>Licence Intelligence Dashboard</h2>

        <div style={filters}>
          <input
            placeholder="Search company, commodity, province, status or risk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={input}
          />

          <select value={country} onChange={(e) => setCountry(e.target.value)} style={input}>
            <option>All</option>
            <option>Zambia</option>
            <option>DRC</option>
            <option>Angola</option>
            <option>Burkina Faso</option>
          </select>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                <Th>Licence ID</Th>
                <Th>Company</Th>
                <Th>Country</Th>
                <Th>Province</Th>
                <Th>Commodity</Th>
                <Th>Status</Th>
                <Th>Risk</Th>
                <Th>Opportunity</Th>
                <Th>Category</Th>
                <Th>Sovereign</Th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.company}</Td>
                  <Td>{item.country}</Td>
                  <Td>{item.province}</Td>
                  <Td>{item.commodity}</Td>
                  <Td>{item.status}</Td>
                  <Td><span style={badge(item.risk)}>{item.risk}</span></Td>
                  <Td>{item.opportunity}/100</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.sovereign}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="alerts" style={livePanel}>
        <div style={liveHeader}>
          <div>
            <p style={eyebrow}>LIVE AFRICA INTELLIGENCE</p>
            <h2 style={{ marginTop: 0 }}>Real-Time Sovereign Mining Alerts</h2>
          </div>

          <div style={liveBadge}>
            <span style={pulseDot}></span>
            LIVE
          </div>
        </div>

        <p style={subtext}>
          Monitor major sovereign mining developments, licence interventions,
          strategic mineral policy shifts and infrastructure risk developments.
        </p>

        <div style={alertGrid}>
          {liveAlerts.map((alert, index) => (
            <div key={index} style={alertCard}>
              <div style={alertTop}>
                <strong>{alert.country}</strong>
                <span style={{ ...alertRisk, background: `${alert.color}30`, color: alert.color, border: `1px solid ${alert.color}70` }}>
                  {alert.risk}
                </span>
              </div>

              <h3>{alert.title}</h3>
              <p style={alertText}>{alert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={panel}>
        <p style={eyebrow}>EXECUTIVE REPORTING</p>
        <h2>Investor-Ready Intelligence Reports</h2>

        <div style={cards}>
          <ReportCard title="Africa Mining Sovereignty Watch" text="Monthly sovereign mining risk report covering policy, state intervention and licence reviews." />
          <ReportCard title="Distressed Mining Assets Brief" text="Investor-focused report on cancelled, revoked and distressed mining licences." />
          <ReportCard title="Strategic Minerals Outlook" text="Copper, cobalt, lithium, uranium, coltan and battery minerals intelligence." />
          <ReportCard title="Corridor Intelligence Report" text="Lobito, TAZARA, Copperbelt-Katanga and regional mining logistics corridors." />
        </div>
      </section>

      <section id="contact" style={contactSection}>
        <p style={eyebrow}>TMI ACCESS & PARTNERSHIPS</p>
        <h2>Request Access</h2>

        <p style={subtext}>
          Request intelligence briefings, sovereign mining reports,
          investor due diligence, strategic minerals analysis and corridor intelligence.
        </p>

        <div style={contactGrid}>
          <Contact title="Email" value="fred.mulenga@zerb.co.zm" />
          <Contact title="Direct Line" value="(+260) 760 612 073" />
          <Contact title="Mobile" value="0961 863 010" />
          <Contact title="Coverage" value="Zambia • DRC • Africa" />
        </div>

        <div style={{ marginTop: "30px" }}>
          <a href="mailto:fred.mulenga@zerb.co.zm" style={button}>
            Request Intelligence Brief
          </a>
        </div>
      </section>

      <footer style={footer}>
        © 2026 TerraNova Mining Intelligence.
      </footer>
    </main>
  );
}

function Metric({ title, text }) {
  return <div style={metricCard}><h3>{title}</h3><p>{text}</p></div>;
}

function Summary({ title, value }) {
  return <div style={summaryCard}><span>{title}</span><strong>{value}</strong></div>;
}

function HeatCard({ country, risk, color, note }) {
  return (
    <div style={{ ...heatCard, borderTop: `5px solid ${color}` }}>
      <h3>{country}</h3>
      <div style={{ background: color, color: "white", display: "inline-block", padding: "6px 12px", borderRadius: "999px", fontWeight: "bold", marginBottom: "15px" }}>
        {risk}
      </div>
      <p>{note}</p>
    </div>
  );
}

function RiskRow({ label, value, color }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div style={chartLabel}><span>{label}</span><span>{value}</span></div>
      <div style={barBg}><div style={{ ...barFill, background: color, width: value }} /></div>
    </div>
  );
}

function ReportCard({ title, text }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button style={smallButton}>Coming Soon</button>
    </div>
  );
}

function Contact({ title, value }) {
  return <div style={contactCard}><h3>{title}</h3><p>{value}</p></div>;
}

function Th({ children }) {
  return <th style={th}>{children}</th>;
}

function Td({ children }) {
  return <td style={td}>{children}</td>;
}

const page = { background: "linear-gradient(180deg,#020617,#071226,#0b1e3d)", color: "white", fontFamily: "Arial, sans-serif", padding: "40px", minHeight: "100vh" };
const header = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "50px", flexWrap: "wrap", gap: "20px" };
const brand = { fontSize: "52px", color: "#ff6b6b", margin: 0 };
const tagline = { color: "#cbd5e1", letterSpacing: "4px" };
const nav = { display: "flex", gap: "20px", flexWrap: "wrap" };
const link = { color: "white", textDecoration: "none", fontWeight: "bold" };
const hero = { marginBottom: "50px" };
const eyebrow = { color: "#38bdf8", letterSpacing: "2px", fontWeight: "bold" };
const headline = { fontSize: "62px", maxWidth: "1000px", lineHeight: "1.1" };
const subtext = { color: "#d0d8e7", lineHeight: "1.8", maxWidth: "1000px" };
const breakingBanner = { background: "linear-gradient(90deg,#7f1d1d,#0f172a)", border: "1px solid rgba(255,255,255,.12)", padding: "16px 20px", borderRadius: "16px", marginBottom: "30px", color: "#fecaca" };
const metrics = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "18px", marginTop: "30px" };
const metricCard = { background: "rgba(255,255,255,.05)", padding: "25px", borderRadius: "18px", border: "1px solid rgba(255,255,255,.08)" };
const panel = { background: "rgba(255,255,255,.04)", borderRadius: "24px", padding: "40px", marginTop: "40px", border: "1px solid rgba(255,255,255,.08)" };
const watchGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "18px", marginTop: "25px" };
const watchCard = { background: "rgba(56,189,248,.08)", border: "1px solid rgba(56,189,248,.16)", padding: "20px", borderRadius: "18px" };
const watchNumber = { color: "#38bdf8", fontWeight: "bold" };
const heatmapGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px", marginTop: "25px" };
const heatCard = { background: "rgba(255,255,255,.05)", borderRadius: "18px", padding: "22px" };
const summaryGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "18px", marginTop: "25px" };
const summaryCard = { background: "rgba(83,184,255,.08)", border: "1px solid rgba(83,184,255,.15)", padding: "20px", borderRadius: "14px", display: "flex", justifyContent: "space-between" };
const charts = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "20px", marginTop: "30px" };
const chartCard = { background: "rgba(255,255,255,.05)", borderRadius: "18px", padding: "25px" };
const chartLabel = { display: "flex", justifyContent: "space-between", marginBottom: "8px" };
const barBg = { width: "100%", height: "12px", background: "rgba(255,255,255,.08)", borderRadius: "999px" };
const barFill = { height: "100%", background: "#38bdf8", borderRadius: "999px" };
const filters = { display: "flex", gap: "15px", margin: "25px 0", flexWrap: "wrap" };
const input = { padding: "14px", borderRadius: "10px", border: "1px solid #334155", minWidth: "260px" };
const table = { width: "100%", borderCollapse: "collapse" };
const th = { padding: "14px", textAlign: "left", color: "#38bdf8", borderBottom: "1px solid rgba(255,255,255,.08)", whiteSpace: "nowrap" };
const td = { padding: "14px", borderBottom: "1px solid rgba(255,255,255,.06)", whiteSpace: "nowrap" };
const badge = (risk) => ({ background: risk === "High" ? "#dc2626" : risk === "Medium" ? "#f59e0b" : "#16a34a", padding: "6px 12px", borderRadius: "999px", color: "white", fontWeight: "bold", fontSize: "12px" });
const livePanel = { marginTop: "50px", borderRadius: "28px", border: "1px solid rgba(255,255,255,.10)", background: "linear-gradient(135deg,rgba(15,23,42,.95),rgba(8,47,73,.55))", padding: "40px", boxShadow: "0 0 40px rgba(14,165,233,.10)" };
const liveHeader = { display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", flexWrap: "wrap" };
const liveBadge = { display: "flex", alignItems: "center", gap: "10px", color: "#f87171", fontWeight: "bold" };
const pulseDot = { width: "12px", height: "12px", borderRadius: "999px", background: "#ef4444", display: "inline-block", boxShadow: "0 0 20px #ef4444" };
const alertGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "20px", marginTop: "28px" };
const alertCard = { background: "rgba(255,255,255,.055)", border: "1px solid rgba(255,255,255,.10)", borderRadius: "20px", padding: "24px" };
const alertTop = { display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center" };
const alertRisk = { padding: "6px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "bold" };
const alertText = { color: "#cbd5e1", lineHeight: "1.7" };
const cards = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px", marginTop: "25px" };
const card = { background: "rgba(255,255,255,.05)", borderRadius: "18px", padding: "22px", border: "1px solid rgba(255,255,255,.08)" };
const smallButton = { marginTop: "12px", background: "rgba(255,255,255,.08)", color: "white", border: "1px solid rgba(255,255,255,.15)", padding: "10px 14px", borderRadius: "10px" };
const contactSection = { marginTop: "50px", padding: "40px", borderRadius: "24px", background: "linear-gradient(135deg,rgba(15,23,42,.95),rgba(10,40,80,.95))" };
const contactGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "18px", marginTop: "25px" };
const contactCard = { background: "rgba(255,255,255,.05)", borderRadius: "18px", padding: "20px" };
const button = { display: "inline-block", background: "#ffb347", color: "#111", padding: "16px 28px", borderRadius: "14px", fontWeight: "bold", textDecoration: "none" };
const footer = { textAlign: "center", padding: "40px 0", color: "#94a3b8" };

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
