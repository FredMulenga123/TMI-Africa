import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

const licences = [
  {
    id: "ZM-CAN-001",
    company: "Sample Copper Exploration Ltd",
    country: "Zambia",
    province: "Copperbelt",
    commodity: "Copper",
    status: "Cancelled",
    reason: "Non-compliance / inactivity",
    date: "2026",
    risk: "High",
    score: 82
  },
  {
    id: "ZM-CAN-002",
    company: "North-West Minerals Ltd",
    country: "Zambia",
    province: "North-Western",
    commodity: "Copper",
    status: "Cancelled",
    reason: "Licence default",
    date: "2026",
    risk: "Medium",
    score: 74
  },
  {
    id: "DRC-SUS-001",
    company: "South Kivu Artisanal Cluster",
    country: "DRC",
    province: "South Kivu",
    commodity: "Gold / Coltan",
    status: "Suspended",
    reason: "Government mining suspension",
    date: "2026",
    risk: "High",
    score: 88
  },
  {
    id: "DRC-SUS-002",
    company: "Mwenga Mining Zone",
    country: "DRC",
    province: "Mwenga",
    commodity: "Gold",
    status: "Suspended",
    reason: "Illegal mining control operation",
    date: "2026",
    risk: "High",
    score: 90
  }
];

function App() {
  const [country, setCountry] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return licences.filter((item) => {
      const matchesCountry = country === "All" || item.country === country;
      const matchesSearch =
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.commodity.toLowerCase().includes(search.toLowerCase()) ||
        item.province.toLowerCase().includes(search.toLowerCase()) ||
        item.status.toLowerCase().includes(search.toLowerCase());

      return matchesCountry && matchesSearch;
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
        <p style={eyebrow}>DISTRESSED LICENCE INTELLIGENCE</p>

        <h2>Licence Intelligence Dashboard</h2>

        <p style={subtext}>
          Search, filter and monitor cancelled, suspended and distressed mining
          licences. This module becomes the foundation for investor opportunity
          mapping and acquisition-target intelligence.
        </p>

        <div style={filters}>
          <input
            placeholder="Search company, province, status or commodity..."
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

        <div style={{ overflowX: "auto" }}>
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
                  <Td>
                    <span style={badge(item.risk)}>{item.risk}</span>
                  </Td>
                  <Td>{item.score}/100</Td>
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
          licence revocations, mineral export controls, local content rules and
          strategic mineral competition across Africa.
        </p>

        <div style={cards}>
          <Card
            title="Resource Nationalism Monitor"
            text="Tracks government intervention, state participation, forced joint ventures, export controls and resource sovereignty moves."
          />

          <Card
            title="Strategic Minerals Watch"
            text="Monitors copper, cobalt, lithium, uranium, graphite, manganese, rare earths and other critical minerals."
          />

          <Card
            title="State Mining Funds"
            text="Tracks sovereign mining funds, national mining companies, state investment vehicles and strategic mineral reserves."
          />

          <Card
            title="DRC Suspension Monitor"
            text="Tracks South Kivu, Mwenga, Shabunda, cobalt, coltan, gold and other high-risk mining zones."
          />

          <Card
            title="Burkina Faso Sovereign Fund Watch"
            text="Monitors sovereign mining wealth capture, strategic state funds and resource nationalism trends in West Africa."
          />

          <Card
            title="Mining Policy Alerts"
            text="Tracks mining code changes, royalty shifts, licence reviews, local ownership rules and investor risk signals."
          />
        </div>
      </section>

      <section id="strategic" style={panel}>
        <p style={eyebrow}>STRATEGIC MINERALS & CORRIDORS</p>

        <h2>Critical Minerals, Corridors & Opportunity Mapping</h2>

        <p style={subtext}>
          TMI connects mining assets to strategic mineral demand, regional corridors,
          PPP infrastructure and investor risk signals across Africa.
        </p>

        <div style={cards}>
          <Card
            title="Copperbelt Intelligence"
            text="Monitor Copperbelt and Katanga-linked copper and cobalt assets, corridor routes and investor exposure."
          />

          <Card
            title="Lobito Corridor Monitor"
            text="Track mining logistics, rail, port, border and investment developments linked to the Lobito Corridor."
          />

          <Card
            title="TAZARA & Regional Rail"
            text="Monitor rail infrastructure, PPPs, mineral transport routes and regional logistics risk."
          />

          <Card
            title="Investor Opportunity Radar"
            text="Rank distressed assets and strategic mining opportunities using risk and opportunity scoring."
          />
        </div>
      </section>

      <section id="reports" style={panel}>
        <p style={eyebrow}>PREMIUM INTELLIGENCE PRODUCTS</p>

        <h2>Featured Intelligence Products</h2>

        <p style={subtext}>
          Distressed Licence Tracker • Zambia–DRC Mining Opportunity Radar •
          PPP Corridor Monitor • Africa Mining Sovereignty Watch • Investor &
          Supplier Due Diligence Briefs
        </p>
      </section>

      <section id="contact" style={panel}>
        <h2>Request Access</h2>

        <p style={subtext}>
          Request pilot access, licence intelligence reports, investor briefs,
          corridor intelligence or partnership discussions.
        </p>

        <p style={{ color: "#53b8ff", fontWeight: "bold" }}>
          fred.mulenga@zerb.co.zm
        </p>

        <p>📞 (+260) 760 612 073</p>
        <p>📱 0961 863 010</p>

        <a href="mailto:fred.mulenga@zerb.co.zm" style={button}>
          Request Intelligence Brief
        </a>
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
  background: "radial-gradient(circle at bottom,#0d6efd40,#060b18 60%)",
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
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "50px"
};

const brand = {
  fontSize: "48px",
  color: "#ff6b6b",
  margin: 0
};

const tagline = {
  letterSpacing: "4px",
  color: "#d0d0d0",
  margin: 0
};

const nav = {
  display: "flex",
  gap: "22px",
  flexWrap: "wrap"
};

const link = {
  color: "white",
  textDecoration: "none"
};

const hero = {
  marginBottom: "50px"
};

const eyebrow = {
  color: "#53b8ff",
  fontWeight: "bold",
  letterSpacing: "1.5px"
};

const headline = {
  fontSize: "54px",
  maxWidth: "1050px",
  marginBottom: "20px"
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
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const panel = {
  marginTop: "45px",
  padding: "34px",
  borderRadius: "22px",
  background: "rgba(255,255,255,.055)",
  border: "1px solid rgba(255,255,255,.08)"
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

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "rgba(15,23,42,.6)"
};

const th = {
  padding: "14px",
  textAlign: "left",
  borderBottom: "1px solid rgba(255,255,255,.12)",
  color: "#93c5fd"
};

const td = {
  padding: "14px",
  borderBottom: "1px solid rgba(255,255,255,.08)"
};

const badge = (risk) => ({
  background: risk === "High" ? "#7f1d1d" : "#78350f",
  color: "white",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px"
});

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",
  marginTop: "25px"
};

const card = {
  padding: "24px",
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: "18px",
  lineHeight: "1.6"
};

const button = {
  display: "inline-block",
  marginTop: "15px",
  background: "#ffb347",
  color: "#111",
  padding: "16px 30px",
  borderRadius: "14px",
  fontWeight: "bold",
  textDecoration: "none"
};

const footer = {
  marginTop: "40px",
  padding: "20px 0",
  textAlign: "center",
  color: "#8fa2b5",
  fontSize: "14px"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
