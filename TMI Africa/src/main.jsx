import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { licences } from "./data";

const sovereignAlerts = [
  {
    country: "DRC",
    level: "HIGH",
    title: "South Kivu Suspensions",
    text: "Mwenga and Shabunda gold and coltan zones remain under elevated sovereign and security risk."
  },

  {
    country: "Burkina Faso",
    level: "HIGH",
    title: "State Mining Fund",
    text: "Government-backed sovereign mining investment structure increases resource nationalism exposure."
  },

  {
    country: "Zambia",
    level: "MODERATE",
    title: "Strategic Minerals Expansion",
    text: "Copper, cobalt and lithium exploration activity continues expanding."
  },

  {
    country: "Angola",
    level: "MODERATE",
    title: "Lobito Corridor",
    text: "Regional rail and logistics investment accelerating corridor-linked mining exposure."
  }
];

const commodityFeed = [
  { mineral: "Copper", price: "$10,842/t", change: "+2.4%" },
  { mineral: "Cobalt", price: "$31,400/t", change: "+1.8%" },
  { mineral: "Lithium", price: "$14,900/t", change: "-0.6%" },
  { mineral: "Gold", price: "$2,390/oz", change: "+1.2%" },
  { mineral: "Uranium", price: "$91/lb", change: "+3.5%" }
];

function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");

  const filtered = useMemo(() => {
    return licences.filter((item) => {
      const matchesCountry =
        country === "All" ||
        item.country === country;

      const searchable =
        `${item.company} ${item.country} ${item.province} ${item.commodity} ${item.status}`
          .toLowerCase();

      return (
        matchesCountry &&
        searchable.includes(search.toLowerCase())
      );
    });
  }, [search, country]);

  const highRisk = filtered.filter(
    (x) => x.risk === "High"
  ).length;

  const avgOpportunity = Math.round(
    filtered.reduce(
      (a, b) => a + b.opportunity,
      0
    ) / filtered.length
  );

  return (
    <main style={page}>
      {/* HEADER */}

      <header style={header}>
        <div>
          <h1 style={brand}>TerraNova</h1>

          <p style={tagline}>
            MINING INTELLIGENCE &
            ASSET MANAGEMENT
          </p>
        </div>

        <nav style={nav}>
          <a href="#engine" style={navLink}>
            Intelligence Engine
          </a>

          <a href="#heatmap" style={navLink}>
            Heatmap
          </a>

          <a href="#analytics" style={navLink}>
            Analytics
          </a>

          <a href="#licences" style={navLink}>
            Licences
          </a>

          <a href="#contact" style={navLink}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section style={hero}>
        <div style={breaking}>
          BREAKING INTELLIGENCE:
          DRC suspensions, Burkina Faso
          sovereign mining fund and
          Lobito Corridor expansion remain
          active watch items.
        </div>

        <p style={eyebrow}>
          TMI.AFRICA COMMAND CENTER
        </p>

        <h1 style={headline}>
          Africa Mining Intelligence
          Infrastructure
        </h1>

        <p style={heroText}>
          TerraNova Mining Intelligence
          operates an African sovereign
          mining intelligence platform
          monitoring distressed assets,
          strategic minerals, corridor
          infrastructure, sovereign risk,
          resource nationalism and
          investor exposure across Africa.
        </p>

        <div style={statsGrid}>
          <Stat
            value={filtered.length}
            label="Mining Records"
          />

          <Stat
            value={highRisk}
            label="High-Risk Assets"
          />

          <Stat
            value={`${avgOpportunity}/100`}
            label="Opportunity Score"
          />

          <Stat
            value="LIVE"
            label="Intelligence Engine"
          />
        </div>
      </section>

      {/* PHASE 6 ENGINE */}

      <section id="engine" style={section}>
        <p style={eyebrow}>
          PHASE 6 — REAL INTELLIGENCE ENGINE
        </p>

        <h2 style={sectionTitle}>
          Africa Sovereign Mining
          Intelligence Engine
        </h2>

        <div style={engineGrid}>
          <EngineCard
            title="Gazette Intelligence"
            text="Monitor Zambia Gazette mining licence changes, revocations and strategic mineral notices."
          />

          <EngineCard
            title="DRC Suspension Engine"
            text="Track South Kivu, Mwenga, Shabunda and conflict-linked mining suspension zones."
          />

          <EngineCard
            title="Strategic Minerals Engine"
            text="Monitor copper, cobalt, lithium, uranium and critical minerals exposure."
          />

          <EngineCard
            title="Sovereign Risk Engine"
            text="Track mining code shifts, sovereign intervention and resource nationalism."
          />

          <EngineCard
            title="Corridor Intelligence"
            text="Monitor Lobito, TAZARA and Copperbelt logistics infrastructure."
          />

          <EngineCard
            title="Investor Due Diligence"
            text="Screen investors, operators, suppliers and beneficial ownership exposure."
          />
        </div>
      </section>

      {/* HEATMAP */}

      <section
        id="heatmap"
        style={section}
      >
        <p style={eyebrow}>
          AFRICA SOVEREIGN HEATMAP
        </p>

        <h2 style={sectionTitle}>
          Sovereign Mining Risk Monitor
        </h2>

        <div style={heatmapGrid}>
          <HeatCard
            country="DRC"
            risk="HIGH"
            color="#dc2626"
            text="Conflict minerals and suspensions"
          />

          <HeatCard
            country="Burkina Faso"
            risk="HIGH"
            color="#ea580c"
            text="State mining fund and intervention"
          />

          <HeatCard
            country="Zambia"
            risk="MODERATE"
            color="#facc15"
            text="Strategic minerals expansion"
          />

          <HeatCard
            country="Angola"
            risk="MODERATE"
            color="#fb923c"
            text="Lobito corridor expansion"
          />

          <HeatCard
            country="Botswana"
            risk="LOW"
            color="#10b981"
            text="Stable mining governance"
          />
        </div>
      </section>

      {/* COMMODITY FEED */}

      <section style={section}>
        <p style={eyebrow}>
          LIVE COMMODITY INTELLIGENCE
        </p>

        <h2 style={sectionTitle}>
          Strategic Minerals Feed
        </h2>

        <div style={commodityGrid}>
          {commodityFeed.map((item) => (
            <div
              key={item.mineral}
              style={commodityCard}
            >
              <h3>{item.mineral}</h3>

              <h2>{item.price}</h2>

              <p
                style={{
                  color:
                    item.change.includes("+")
                      ? "#10b981"
                      : "#f87171"
                }}
              >
                {item.change}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ANALYTICS */}

      <section
        id="analytics"
        style={section}
      >
        <p style={eyebrow}>
          EXECUTIVE ANALYTICS
        </p>

        <h2 style={sectionTitle}>
          Intelligence Analytics Dashboard
        </h2>

        <div style={analyticsGrid}>
          <AnalyticsCard
            title="High Risk"
            value={`${highRisk}`}
          />

          <AnalyticsCard
            title="Strategic Minerals"
            value="5"
          />

          <AnalyticsCard
            title="Sovereign Alerts"
            value="12"
          />

          <AnalyticsCard
            title="Corridor Watch"
            value="3"
          />
        </div>
      </section>

      {/* LICENCE TABLE */}

      <section
        id="licences"
        style={section}
      >
        <p style={eyebrow}>
          LIVE LICENCE INTELLIGENCE
        </p>

        <h2 style={sectionTitle}>
          Mining Licence Dashboard
        </h2>

        <div style={filters}>
          <input
            style={input}
            placeholder="Search licences..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            style={input}
            value={country}
            onChange={(e) =>
              setCountry(e.target.value)
            }
          >
            <option>All</option>
            <option>Zambia</option>
            <option>DRC</option>
            <option>Angola</option>
          </select>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                <TH>ID</TH>
                <TH>Company</TH>
                <TH>Country</TH>
                <TH>Province</TH>
                <TH>Commodity</TH>
                <TH>Status</TH>
                <TH>Risk</TH>
                <TH>Opportunity</TH>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <TD>{item.id}</TD>

                  <TD>{item.company}</TD>

                  <TD>{item.country}</TD>

                  <TD>{item.province}</TD>

                  <TD>{item.commodity}</TD>

                  <TD>{item.status}</TD>

                  <TD>
                    <span
                      style={riskBadge(
                        item.risk
                      )}
                    >
                      {item.risk}
                    </span>
                  </TD>

                  <TD>
                    {item.opportunity}/100
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ALERTS */}

      <section style={section}>
        <p style={eyebrow}>
          LIVE SOVEREIGN ALERTS
        </p>

        <h2 style={sectionTitle}>
          Africa Mining Intelligence Feed
        </h2>

        <div style={alertsGrid}>
          {sovereignAlerts.map(
            (alert, index) => (
              <div
                key={index}
                style={alertCard}
              >
                <div
                  style={alertTop}
                >
                  <h3>
                    {alert.country}
                  </h3>

                  <span
                    style={{
                      ...pill,
                      background:
                        alert.level ===
                        "HIGH"
                          ? "#dc2626"
                          : "#facc15"
                    }}
                  >
                    {alert.level}
                  </span>
                </div>

                <h4>{alert.title}</h4>

                <p>{alert.text}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        style={contact}
      >
        <p style={eyebrow}>
          TMI ACCESS & PARTNERSHIPS
        </p>

        <h2 style={sectionTitle}>
          Request Intelligence Access
        </h2>

        <p style={heroText}>
          Request intelligence briefings,
          sovereign mining reports,
          investor due diligence and
          strategic minerals intelligence.
        </p>

        <div style={contactBox}>
          <p>fred.mulenga@zerb.co.zm</p>

          <p>(+260) 760 612 073</p>

          <p>0961 863 010</p>
        </div>

        <button style={button}>
          Request Intelligence Brief
        </button>
      </section>

      <footer style={footer}>
        © 2026 TerraNova Mining
        Intelligence.
      </footer>
    </main>
  );
}

/* COMPONENTS */

function Stat({
  value,
  label
}) {
  return (
    <div style={statCard}>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}

function EngineCard({
  title,
  text
}) {
  return (
    <div style={engineCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function HeatCard({
  country,
  risk,
  color,
  text
}) {
  return (
    <div
      style={{
        ...heatCard,
        borderTop: `5px solid ${color}`
      }}
    >
      <h3>{country}</h3>

      <span
        style={{
          ...pill,
          background: color
        }}
      >
        {risk}
      </span>

      <p>{text}</p>
    </div>
  );
}

function AnalyticsCard({
  title,
  value
}) {
  return (
    <div style={analyticsCard}>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

function TH({ children }) {
  return <th style={th}>{children}</th>;
}

function TD({ children }) {
  return <td style={td}>{children}</td>;
}

/* STYLES */

const page = {
  background:
    "linear-gradient(180deg,#020617,#081224,#0f172a)",
  color: "white",
  minHeight: "100vh",
  padding: "40px",
  fontFamily: "Arial"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "40px"
};

const brand = {
  fontSize: "60px",
  color: "#ff6b6b",
  margin: 0
};

const tagline = {
  color: "#94a3b8",
  letterSpacing: "4px"
};

const nav = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const hero = {
  marginBottom: "50px"
};

const breaking = {
  background:
    "linear-gradient(90deg,#7f1d1d,#111827)",
  padding: "16px",
  borderRadius: "12px",
  marginBottom: "30px",
  color: "#fecaca"
};

const eyebrow = {
  color: "#38bdf8",
  fontWeight: "bold",
  letterSpacing: "3px"
};

const headline = {
  fontSize: "72px",
  lineHeight: "1.1",
  maxWidth: "900px"
};

const heroText = {
  color: "#cbd5e1",
  lineHeight: "1.8",
  maxWidth: "900px"
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "40px"
};

const statCard = {
  background:
    "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px",
  border:
    "1px solid rgba(255,255,255,.08)"
};

const section = {
  marginTop: "50px",
  background:
    "rgba(255,255,255,.04)",
  padding: "40px",
  borderRadius: "24px",
  border:
    "1px solid rgba(255,255,255,.08)"
};

const sectionTitle = {
  fontSize: "38px"
};

const engineGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const engineCard = {
  background:
    "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const heatmapGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const heatCard = {
  background:
    "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const commodityGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(180px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const commodityCard = {
  background:
    "rgba(56,189,248,.08)",
  padding: "25px",
  borderRadius: "18px",
  textAlign: "center"
};

const analyticsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const analyticsCard = {
  background:
    "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const filters = {
  display: "flex",
  gap: "20px",
  marginBottom: "30px",
  flexWrap: "wrap"
};

const input = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  minWidth: "240px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const th = {
  padding: "16px",
  textAlign: "left",
  color: "#38bdf8",
  borderBottom:
    "1px solid rgba(255,255,255,.08)"
};

const td = {
  padding: "16px",
  borderBottom:
    "1px solid rgba(255,255,255,.05)"
};

const riskBadge = (risk) => ({
  background:
    risk === "High"
      ? "#dc2626"
      : risk === "Medium"
      ? "#f59e0b"
      : "#10b981",

  padding: "6px 12px",
  borderRadius: "999px",
  fontWeight: "bold"
});

const alertsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const alertCard = {
  background:
    "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const alertTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const pill = {
  padding: "6px 12px",
  borderRadius: "999px",
  fontWeight: "bold"
};

const contact = {
  marginTop: "50px",
  background:
    "linear-gradient(135deg,#0f172a,#0c4a6e)",
  padding: "40px",
  borderRadius: "24px"
};

const contactBox = {
  lineHeight: "2",
  marginTop: "20px"
};

const button = {
  marginTop: "25px",
  background: "#ffb347",
  border: "none",
  padding: "16px 28px",
  borderRadius: "12px",
  fontWeight: "bold",
  cursor: "pointer"
};

const footer = {
  textAlign: "center",
  padding: "40px",
  color: "#94a3b8"
};

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);
