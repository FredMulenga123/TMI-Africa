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

      const text = `${item.company} ${item.commodity} ${item.province} ${item.status} ${item.category} ${item.sovereign}`.toLowerCase();

      return matchesCountry && text.includes(search.toLowerCase());
    });
  }, [country, search]);

  return (
    <main style={page}>
      <header style={header}>
        <div>
          <h1 style={brand}>TerraNova</h1>
          <p style={tagline}>MINING INTELLIGENCE & ASSET MANAGEMENT</p>
        </div>

        <nav style={nav}>
          <a href="#dashboard" style={link}>Dashboard</a>
          <a href="#licences" style={link}>Licences</a>
          <a href="#sovereign" style={link}>Sovereign Risk</a>
          <a href="#alerts" style={link}>Risk Alerts</a>
          <a href="#strategic" style={link}>Strategic Minerals</a>
          <a href="#contact" style={link}>Contact</a>
        </nav>
      </header>

      <section id="dashboard" style={hero}>
        <p style={eyebrow}>TMI.AFRICA</p>

        <h2 style={headline}>
          Distressed Mining Assets & Sovereign Risk Intelligence
        </h2>

        <p style={subtext}>
          TerraNova Mining Intelligence tracks cancelled, suspended, distressed
          and high-risk mining rights across Zambia, DRC and strategic African
          mineral corridors. TMI helps investors, banks, governments and mining
          operators identify opportunities, monitor sovereign risk and map
          strategic mining assets.
        </p>

        <div style={metrics}>
          <Metric title="2,500+" text="Zambia licence records ready for import" />
          <Metric title="Zambia + DRC" text="Priority intelligence markets" />
          <Metric title="High Risk" text="Licence revocation and suspension monitoring" />
          <Metric title="Premium" text="Investor-grade intelligence reports" />
        </div>
      </section>

      <section id="licences" style={panel}>
        <p style={eyebrow}>REAL DATA ENGINE — PHASE 1</p>

        <h2>Licence Intelligence Dashboard</h2>

        <p style={subtext}>
          Search, filter and monitor cancelled, suspended, distressed,
          corridor-linked and strategic mineral mining assets.
        </p>

        <div style={filters}>
          <input
            placeholder="Search company, province, commodity, category or sovereign risk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={input}
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={input}
          >
            <option>All</option>
            <option>Zambia</option>
            <option>DRC</option>
          </select>
        </div>

        <div style={summaryGrid}>
          <Summary title="Records" value={filtered.length} />
          <Summary title="High Risk" value={filtered.filter(x => x.risk === "High").length} />
          <Summary title="Strategic Minerals" value={filtered.filter(x => x.category.includes("Strategic") || x.category.includes("Critical")).length} />
          <Summary title="Avg Opportunity" value={`${Math.round(filtered.reduce((a, b) => a + b.opportunity, 0) / (filtered.length || 1))}/100`} />
        </div>

        <div style={{ overflowX: "auto", marginTop: "25px" }}>
          <table style={table}>
            <thead>
              <tr>
                <Th>Licence ID</Th>
                <Th>Company / Zone</Th>
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

      <section id="sovereign" style={panel}>
        <p style={eyebrow}>AFRICA SOVEREIGN RISK INTELLIGENCE</p>

        <h2>Sovereign Risk & Strategic Minerals Monitor</h2>

        <p style={subtext}>
          Track resource nationalism, mining policy shifts, state mining funds,
          licence revocations and strategic mineral competition across Africa.
        </p>

        <div style={cards}>
          <Card title="Resource Nationalism Monitor" text="Track state intervention, ownership shifts and mining policy changes." />
          <Card title="Strategic Minerals Watch" text="Monitor copper, cobalt, lithium, uranium, rare earths and critical minerals." />
          <Card title="DRC Suspension Monitor" text="Track South Kivu, Mwenga, Shabunda and high-risk mineral zones." />
          <Card title="Investor Due Diligence" text="Screen investors, operators, suppliers and beneficial ownership risk." />
        </div>
      </section>

      <section id="alerts" style={panel}>
        <p style={eyebrow}>LIVE AFRICA RISK ALERTS</p>

        <h2>Strategic Mining Developments</h2>

        <div style={cards}>
          <Card title="DRC Mining Suspensions" text="South Kivu and Mwenga mining suspensions impacting gold and coltan operations." />
          <Card title="Burkina Faso Sovereign Fund" text="Burkina Faso moves to reclaim mining wealth through state-backed investment structures." />
          <Card title="Critical Minerals Competition" text="Global competition intensifies for African strategic minerals." />
          <Card title="Resource Nationalism" text="Monitor sovereign control, export restrictions and mining policy shifts." />
        </div>
      </section>

      <section id="strategic" style={panel}>
        <p style={eyebrow}>STRATEGIC MINERALS & CORRIDORS</p>

        <h2>Critical Minerals, Corridors & Opportunity Mapping</h2>

        <p style={subtext}>
          TMI connects mining assets to strategic mineral demand,
          regional corridors and investor risk signals across Africa.
        </p>

        <div style={cards}>
          <Card title="Copperbelt Intelligence" text="Monitor Copperbelt and Katanga-linked copper and cobalt assets." />
          <Card title="Lobito Corridor Monitor" text="Track logistics, rail, border and mining developments." />
          <Card title="TAZARA & Regional Rail" text="Monitor rail infrastructure, PPPs and regional logistics risk." />
          <Card title="Investor Opportunity Radar" text="Rank distressed assets and strategic mining opportunities." />
        </div>
      </section>

      <section style={panel}>
        <p style={eyebrow}>TERRA NOVA INTELLIGENCE NETWORK</p>

        <h2>Africa Mining Intelligence Infrastructure</h2>

        <p style={subtext}>
          TerraNova Mining Intelligence is building a sovereign mining intelligence
          and distressed asset monitoring platform focused on Zambia, DRC and
          emerging African resource corridors.
        </p>

        <div style={cards}>
          <Card title="Cancelled Licence Intelligence" text="Monitor distressed and revoked mining rights across Zambia and Africa." />
          <Card title="Strategic Minerals Intelligence" text="Track copper, cobalt, lithium, uranium and critical mineral assets." />
          <Card title="Sovereign Risk Analytics" text="Monitor mining policy shifts, sovereign funds and state mining intervention." />
          <Card title="Investor Due Diligence" text="Screen mining investors, operators, suppliers and beneficial ownership risk." />
        </div>
      </section>

      <section
        id="contact"
        style={{
          ...panel,
          marginTop: "40px",
          padding: "40px",
          background:
            "linear-gradient(135deg, rgba(15,23,42,.95), rgba(10,40,80,.95))",
          border: "1px solid rgba(83,184,255,.15)"
        }}
      >
        <p style={eyebrow}>TMI ACCESS & PARTNERSHIPS</p>

        <h2 style={{ fontSize: "42px", marginBottom: "18px" }}>
          Request Access
        </h2>

        <p style={{ ...subtext, maxWidth: "950px", marginBottom: "25px" }}>
          Request pilot access, sovereign mining intelligence briefings,
          investor due diligence reports, corridor intelligence, strategic
          minerals analysis or partnership discussions with TerraNova Mining
          Intelligence.
        </p>

        <div style={contactGrid}>
          <div style={contactCard}>
            <h3 style={contactTitle}>Email</h3>
            <p style={contactText}>fred.mulenga@zerb.co.zm</p>
          </div>

          <div style={contactCard}>
            <h3 style={contactTitle}>Direct Line</h3>
            <p style={contactText}>(+260) 760 612 073</p>
          </div>

          <div style={contactCard}>
            <h3 style={contactTitle}>Mobile</h3>
            <p style={contactText}>0961 863 010</p>
          </div>

          <div style={contactCard}>
            <h3 style={contactTitle}>Coverage</h3>
            <p style={contactText}>Zambia • DRC • Southern Africa</p>
          </div>
        </div>

        <div style={{ marginTop: "35px", display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <a href="mailto:fred.mulenga@zerb.co.zm" style={button}>
            Request Intelligence Brief
          </a>

          <a href="#licences" style={secondaryButton}>
            View Intelligence Dashboard
          </a>
        </div>
      </section>

      <footer style={footer}>
        © 2026 TerraNova Mining Intelligence. All rights reserved.
      </footer>
    </main>
  );
}

function Metric({ title, text }) {
  return (
    <div style={metricCard}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function Summary({ title, value }) {
  return (
    <div style={summaryCard}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Th({ children }) {
  return <th style={th}>{children}</th>;
}

function Td({ children }) {
  return <td style={td}>{children}</td>;
}

const page = {
  background: "linear-gradient(180deg, #050816 0%, #07142b 45%, #0b1f3f 100%)",
  color: "white",
  fontFamily: "Arial, sans-serif",
  padding: "40px",
  minHeight: "100vh",
  overflowX: "hidden"
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "50px",
  gap: "20px"
};

const brand = {
  fontSize: "52px",
  color: "#ff6b6b",
  margin: 0
};

const tagline = {
  letterSpacing: "4px",
  color: "#cbd5e1",
  marginTop: "6px"
};

const nav = {
  display: "flex",
  gap: "22px",
  flexWrap: "wrap"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const hero = {
  marginBottom: "50px"
};

const eyebrow = {
  color: "#53b8ff",
  fontWeight: "bold",
  letterSpacing: "2px"
};

const headline = {
  fontSize: "58px",
  maxWidth: "1050px",
  lineHeight: "1.1"
};

const subtext = {
  maxWidth: "1100px",
  lineHeight: "1.8",
  color: "#d0d8e7",
  fontSize: "18px"
};

const metrics = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginTop: "35px"
};

const metricCard = {
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const panel = {
  marginTop: "45px",
  padding: "40px",
  borderRadius: "24px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  backdropFilter: "blur(10px)"
};

const filters = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  margin: "25px 0"
};

const input = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #334155",
  minWidth: "260px"
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "15px"
};

const summaryCard = {
  background: "rgba(83,184,255,.08)",
  border: "1px solid rgba(83,184,255,.15)",
  borderRadius: "14px",
  padding: "18px",
  display: "flex",
  justifyContent: "space-between",
  gap: "10px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "rgba(15,23,42,.6)"
};

const th = {
  padding: "14px",
  textAlign: "left",
  borderBottom: "1px solid rgba(255,255,255,.12)",
  color: "#93c5fd",
  whiteSpace: "nowrap"
};

const td = {
  padding: "14px",
  borderBottom: "1px solid rgba(255,255,255,.08)",
  whiteSpace: "nowrap"
};

const badge = (risk) => ({
  background: risk === "High" ? "#991b1b" : risk === "Medium" ? "#92400e" : "#065f46",
  color: "white",
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "bold"
});

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginTop: "25px"
};

const card = {
  padding: "20px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  lineHeight: "1.7"
};

const button = {
  display: "inline-block",
  marginTop: "20px",
  background: "#ffb347",
  color: "#111",
  padding: "16px 28px",
  borderRadius: "14px",
  fontWeight: "bold",
  textDecoration: "none"
};

const secondaryButton = {
  display: "inline-block",
  background: "transparent",
  color: "white",
  padding: "16px 28px",
  borderRadius: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,.25)"
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
  marginTop: "25px"
};

const contactCard = {
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  padding: "22px"
};

const contactTitle = {
  color: "#53b8ff",
  marginBottom: "10px"
};

const contactText = {
  fontSize: "18px",
  fontWeight: "600",
  color: "white"
};

const footer = {
  marginTop: "30px",
  padding: "30px 0",
  textAlign: "center",
  color: "#8fa2b5",
  fontSize: "14px",
  borderTop: "1px solid rgba(255,255,255,.08)"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
