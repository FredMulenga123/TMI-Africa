import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { licences } from "./data";

function App() {
  const [country, setCountry] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return licences.filter((item) => {
      const matchesCountry =
        country === "All" || item.country === country;

      const searchable =
        `${item.company} ${item.country} ${item.province} ${item.commodity} ${item.status}`
          .toLowerCase();

      return (
        matchesCountry &&
        searchable.includes(search.toLowerCase())
      );
    });
  }, [country, search]);

  const highRisk = filtered.filter(
    (x) => x.risk === "High"
  ).length;

  const strategic = filtered.filter((x) =>
    x.category.includes("Strategic")
  ).length;

  const avgOpportunity = Math.round(
    filtered.reduce((a, b) => a + b.opportunity, 0) /
      filtered.length
  );

  return (
    <main style={page}>
      {/* HEADER */}

      <header style={header}>
        <div>
          <h1 style={brand}>TerraNova</h1>

          <p style={tagline}>
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </p>
        </div>

        <nav style={nav}>
          <a href="#map" style={navLink}>
            Africa Map
          </a>

          <a href="#analytics" style={navLink}>
            Analytics
          </a>

          <a href="#licences" style={navLink}>
            Licences
          </a>

          <a href="#alerts" style={navLink}>
            Alerts
          </a>

          <a href="#contact" style={navLink}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section style={hero}>
        <div style={breaking}>
          BREAKING INTELLIGENCE: DRC suspensions,
          Burkina Faso sovereign mining fund and
          Lobito Corridor expansion remain active
          watch items.
        </div>

        <p style={eyebrow}>
          TMI.AFRICA COMMAND CENTER
        </p>

        <h1 style={headline}>
          Africa Mining Intelligence Command Center
        </h1>

        <p style={heroText}>
          TerraNova Mining Intelligence monitors
          distressed mining assets, strategic
          minerals, sovereign risk, investor
          exposure, corridor infrastructure and
          resource nationalism across Africa.
        </p>

        <div style={stats}>
          <Stat
            value={filtered.length}
            label="Mining Records"
          />

          <Stat
            value={highRisk}
            label="High Risk Assets"
          />

          <Stat
            value={strategic}
            label="Strategic Minerals"
          />

          <Stat
            value={`${avgOpportunity}/100`}
            label="Opportunity Score"
          />
        </div>
      </section>

      {/* PHASE 5 AFRICA MAP */}

      <section id="map" style={section}>
        <p style={eyebrow}>
          AFRICA INTELLIGENCE MAP
        </p>

        <h2 style={sectionTitle}>
          Africa Sovereign Mining Risk Heatmap
        </h2>

        <p style={sectionText}>
          Monitor sovereign mining risk,
          strategic minerals exposure,
          infrastructure corridors and resource
          nationalism trends across Africa.
        </p>

        <div style={mapGrid}>
          <MapCard
            country="DRC"
            risk="HIGH"
            color="#dc2626"
            text="Conflict minerals, licence suspensions and resource nationalism."
          />

          <MapCard
            country="Burkina Faso"
            risk="HIGH"
            color="#ea580c"
            text="State-backed mining fund and sovereign intervention."
          />

          <MapCard
            country="Zambia"
            risk="MODERATE"
            color="#eab308"
            text="Strategic minerals and corridor expansion."
          />

          <MapCard
            country="Angola"
            risk="MODERATE"
            color="#f97316"
            text="Lobito Corridor infrastructure growth."
          />

          <MapCard
            country="Botswana"
            risk="LOW"
            color="#10b981"
            text="Stable mining governance environment."
          />

          <MapCard
            country="Tanzania"
            risk="WATCH"
            color="#facc15"
            text="Resource nationalism monitoring."
          />
        </div>
      </section>

      {/* CORRIDORS */}

      <section style={section}>
        <p style={eyebrow}>
          REGIONAL CORRIDOR INTELLIGENCE
        </p>

        <h2 style={sectionTitle}>
          Strategic Mining Corridors
        </h2>

        <div style={corridorGrid}>
          <Corridor
            title="Lobito Corridor"
            text="Copper, cobalt and logistics intelligence linking Zambia, DRC and Angola."
          />

          <Corridor
            title="TAZARA Rail"
            text="Strategic mineral transport and sovereign infrastructure monitoring."
          />

          <Corridor
            title="Copperbelt–Katanga"
            text="Cross-border mining concentration and investor exposure."
          />

          <Corridor
            title="West Africa Gold Belt"
            text="Burkina Faso, Mali and regional sovereign mining developments."
          />
        </div>
      </section>

      {/* ANALYTICS */}

      <section id="analytics" style={section}>
        <p style={eyebrow}>
          EXECUTIVE ANALYTICS
        </p>

        <h2 style={sectionTitle}>
          Mining Intelligence Analytics Dashboard
        </h2>

        <div style={analyticsGrid}>
          <AnalyticsCard
            title="High Risk"
            value={`${highRisk}`}
          />

          <AnalyticsCard
            title="Strategic Minerals"
            value={`${strategic}`}
          />

          <AnalyticsCard
            title="Avg Opportunity"
            value={`${avgOpportunity}/100`}
          />

          <AnalyticsCard
            title="Countries"
            value="6"
          />
        </div>
      </section>

      {/* LICENCE TABLE */}

      <section id="licences" style={section}>
        <p style={eyebrow}>
          LIVE LICENCE INTELLIGENCE
        </p>

        <h2 style={sectionTitle}>
          Licence Intelligence Dashboard
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
                      style={riskBadge(item.risk)}
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

      {/* LIVE ALERTS */}

      <section id="alerts" style={section}>
        <p style={eyebrow}>
          LIVE AFRICA INTELLIGENCE
        </p>

        <h2 style={sectionTitle}>
          Sovereign Mining Alerts
        </h2>

        <div style={alertGrid}>
          <Alert
            title="DRC Suspension Alert"
            text="South Kivu and Mwenga remain high-risk mining zones."
          />

          <Alert
            title="Burkina Faso Mining Fund"
            text="Government intensifies sovereign mining participation."
          />

          <Alert
            title="Lobito Corridor Expansion"
            text="Infrastructure investment accelerating corridor intelligence."
          />

          <Alert
            title="Strategic Minerals Demand"
            text="Copper, lithium and cobalt demand continues rising."
          />
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" style={contact}>
        <p style={eyebrow}>
          TMI ACCESS & PARTNERSHIPS
        </p>

        <h2 style={sectionTitle}>
          Request Access
        </h2>

        <p style={sectionText}>
          Request intelligence briefings,
          investor due diligence reports,
          corridor intelligence and sovereign
          mining analytics.
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
        © 2026 TerraNova Mining Intelligence.
      </footer>
    </main>
  );
}

/* COMPONENTS */

function Stat({ value, label }) {
  return (
    <div style={statCard}>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

function MapCard({
  country,
  risk,
  text,
  color
}) {
  return (
    <div
      style={{
        ...mapCard,
        borderTop: `5px solid ${color}`
      }}
    >
      <h3>{country}</h3>

      <span
        style={{
          ...riskPill,
          background: color
        }}
      >
        {risk}
      </span>

      <p>{text}</p>
    </div>
  );
}

function Corridor({ title, text }) {
  return (
    <div style={corridorCard}>
      <h3>{title}</h3>
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
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

function Alert({ title, text }) {
  return (
    <div style={alertCard}>
      <h3>{title}</h3>
      <p>{text}</p>
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
    "linear-gradient(180deg,#020617,#081224,#0b1e3d)",
  color: "white",
  minHeight: "100vh",
  padding: "40px",
  fontFamily: "Arial"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  flexWrap: "wrap"
};

const brand = {
  fontSize: "58px",
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
  borderRadius: "14px",
  marginBottom: "30px",
  color: "#fecaca"
};

const eyebrow = {
  color: "#38bdf8",
  letterSpacing: "3px",
  fontWeight: "bold"
};

const headline = {
  fontSize: "72px",
  maxWidth: "900px",
  lineHeight: "1.1"
};

const heroText = {
  maxWidth: "900px",
  color: "#cbd5e1",
  lineHeight: "1.8"
};

const stats = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "40px"
};

const statCard = {
  background: "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px",
  border: "1px solid rgba(255,255,255,.08)"
};

const section = {
  marginTop: "50px",
  background: "rgba(255,255,255,.04)",
  borderRadius: "24px",
  padding: "40px",
  border: "1px solid rgba(255,255,255,.08)"
};

const sectionTitle = {
  fontSize: "38px"
};

const sectionText = {
  color: "#cbd5e1",
  lineHeight: "1.7",
  maxWidth: "900px"
};

const mapGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(240px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const mapCard = {
  background: "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const riskPill = {
  padding: "6px 14px",
  borderRadius: "999px",
  display: "inline-block",
  fontWeight: "bold",
  marginBottom: "15px"
};

const corridorGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(240px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const corridorCard = {
  background: "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px"
};

const analyticsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const analyticsCard = {
  background: "rgba(56,189,248,.08)",
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
  minWidth: "260px"
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

const alertGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
  marginTop: "30px"
};

const alertCard = {
  background: "rgba(255,255,255,.05)",
  padding: "25px",
  borderRadius: "18px",
  border:
    "1px solid rgba(255,255,255,.08)"
};

const contact = {
  marginTop: "50px",
  background:
    "linear-gradient(135deg,#0f172a,#0c4a6e)",
  padding: "40px",
  borderRadius: "24px"
};

const contactBox = {
  marginTop: "20px",
  lineHeight: "2"
};

const button = {
  marginTop: "25px",
  background: "#ffb347",
  color: "#111827",
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
