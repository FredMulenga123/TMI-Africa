import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
  ["Cancelled Licence Tracker", "Track cancelled and distressed mining licences across Zambia and DRC."],
  ["Zambia + DRC Mining Data", "Structured mining intelligence for licence, investor and corridor analysis."],
  ["PPP Intelligence", "Monitor infrastructure and public-private partnership opportunities."],
  ["Corridor Intelligence", "Track Lobito, TAZARA, Copperbelt, Katanga and border-linked corridors."],
  ["Investor Screening", "Identify serious investors, financiers, operators and strategic partners."],
  ["Supplier Intelligence", "Screen contractors, suppliers, logistics firms and mining service providers."],
  ["Risk Heat Maps", "Map regulatory, ownership, ESG, logistics and project execution risks."],
  ["Premium Reports", "Generate investor-ready intelligence briefs and opportunity reports."]
];

const metrics = [
  ["2,500+", "Licence intelligence records"],
  ["Zambia + DRC", "Priority mining intelligence markets"],
  ["PPP + Corridors", "Infrastructure and logistics intelligence"],
  ["TMI.AFRICA", "Live strategic intelligence platform"]
];

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg,#030712,#07152f,#0b3a67)",
        color: "#fff"
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 60px",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div>
          <div
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#ff6b4a"
            }}
          >
            TerraNova
          </div>

          <div
            style={{
              letterSpacing: "4px",
              fontSize: "12px",
              color: "#d1d5db"
            }}
          >
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "15px",
            color: "#e5e7eb",
            flexWrap: "wrap"
          }}
        >
          <a href="#dashboard" style={link}>Dashboard</a>
          <a href="#modules" style={link}>Zambia</a>
          <a href="#modules" style={link}>DRC</a>
          <a href="#reports" style={link}>Reports</a>
          <a href="#contact" style={link}>Contact</a>
        </nav>
      </header>

      <section
        id="dashboard"
        style={{
          padding: "24px 60px 40px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            color: "#38bdf8",
            fontWeight: "700",
            letterSpacing: "2px",
            marginBottom: "14px"
          }}
        >
          TMI.AFRICA
        </div>

        <h1
          style={{
            fontSize: "54px",
            lineHeight: "1.05",
            margin: "0 0 18px",
            maxWidth: "820px"
          }}
        >
          TerraNova Mining Intelligence
        </h1>

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "400",
            lineHeight: "1.35",
            color: "#dbeafe",
            maxWidth: "950px",
            margin: "0 0 20px"
          }}
        >
          Mining, PPP, infrastructure and strategic investment intelligence for Africa.
        </h2>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.75",
            color: "#cbd5e1",
            maxWidth: "1100px",
            margin: "0"
          }}
        >
          TerraNova Mining Intelligence helps investors, banks, mining operators,
          development partners and government-linked stakeholders identify opportunities,
          monitor risks and map strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "26px",
            flexWrap: "wrap"
          }}
        >
          <a href="#contact" style={orangeButton}>
            Request Intelligence Brief
          </a>

          <a href="#modules" style={outlineButton}>
            Access Platform
          </a>
        </div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "16px",
            marginTop: "38px"
          }}
        >
          {metrics.map(([big, small]) => (
            <div key={big} style={metricCard}>
              <strong style={{ fontSize: "24px", color: "#fff" }}>
                {big}
              </strong>
              <span style={{ color: "#cbd5e1" }}>
                {small}
              </span>
            </div>
          ))}
        </section>

        <section
          id="modules"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >
          {modules.map(([title, text]) => (
            <article key={title} style={card}>
              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px"
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.55",
                  margin: 0
                }}
              >
                {text}
              </p>
            </article>
          ))}
        </section>

        <section
          id="reports"
          style={{
            marginTop: "55px",
            padding: "34px",
            borderRadius: "22px",
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.1)"
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Featured Intelligence Products
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
              marginBottom: 0
            }}
          >
            Distressed Licence Tracker • Zambia–DRC Mining Opportunity Radar •
            PPP Corridor Monitor • Investor & Supplier Due Diligence Briefs
          </p>
        </section>

        <section
          id="contact"
          style={{
            marginTop: "50px",
            padding: "40px",
            background: "rgba(255,255,255,.06)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "70px"
          }}
        >
          <div>
            <h2
              style={{
                marginTop: 0,
                fontSize: "36px"
              }}
            >
              Request Access
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                maxWidth: "700px",
                marginBottom: 0
              }}
            >
              Request pilot access, intelligence briefings, investor due
              diligence reports, corridor intelligence or partnership
              discussions with TerraNova Mining Intelligence.
            </p>
          </div>

          <a href="mailto:fred.mulenga@zerb.co.zm" style={orangeButton}>
            Contact TerraNova
          </a>
        </section>
      </section>
    </main>
  );
}

const link = {
  color: "#e5e7eb",
  textDecoration: "none"
};

const orangeButton = {
  display: "inline-block",
  background: "#f97316",
  color: "#fff",
  border: "none",
  padding: "16px 30px",
  borderRadius: "12px",
  fontWeight: "700",
  textDecoration: "none",
  boxShadow: "0 10px 24px rgba(249,115,22,.35)"
};

const outlineButton = {
  display: "inline-block",
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,.45)",
  padding: "16px 30px",
  borderRadius: "12px",
  fontWeight: "700",
  textDecoration: "none"
};

const card = {
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "18px",
  padding: "24px",
  minHeight: "145px"
};

const metricCard = {
  background: "rgba(15,23,42,.7)",
  border: "1px solid rgba(255,255,255,.1)",
  borderRadius: "16px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
