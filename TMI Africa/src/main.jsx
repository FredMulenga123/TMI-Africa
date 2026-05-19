import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
  {
    title: "Cancelled Licence Tracker",
    text: "Track cancelled and distressed mining licences across Zambia and DRC."
  },
  {
    title: "Zambia + DRC Mining Data",
    text: "Structured mining intelligence for licence, investor and corridor analysis."
  },
  {
    title: "PPP Intelligence",
    text: "Monitor infrastructure and public-private partnership opportunities."
  },
  {
    title: "Corridor Intelligence",
    text: "Track Lobito, TAZARA, Copperbelt, Katanga and border-linked corridors."
  },
  {
    title: "Investor Screening",
    text: "Identify serious investors, financiers, operators and strategic partners."
  },
  {
    title: "Supplier Intelligence",
    text: "Screen contractors, suppliers, logistics firms and mining service providers."
  },
  {
    title: "Risk Heat Maps",
    text: "Map regulatory, ownership, ESG, logistics and project execution risks."
  },
  {
    title: "Premium Reports",
    text: "Generate investor-ready intelligence briefs and opportunity reports."
  }
];

function App() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #081426 0%, #0f172a 45%, #123a63 100%)",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div>
          <h2 style={{ margin: 0, color: "#f97316", fontSize: "30px" }}>
            TerraNova
          </h2>
          <p style={{ margin: 0, color: "#cbd5e1", fontSize: "13px", letterSpacing: "2px" }}>
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </p>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            color: "#e2e8f0",
            fontSize: "14px"
          }}
        >
          <span>Dashboard</span>
          <span>Zambia</span>
          <span>DRC</span>
          <span>PPP</span>
          <span>Corridors</span>
          <span>Reports</span>
        </nav>
      </header>

      <section
        style={{
          padding: "70px 40px 50px",
          maxWidth: "1180px"
        }}
      >
        <p
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "18px"
          }}
        >
          TMI.AFRICA
        </p>

        <h1
          style={{
            fontSize: "48px",
            lineHeight: "1.15",
            maxWidth: "900px",
            margin: "0 0 18px"
          }}
        >
          TerraNova Mining Intelligence
        </h1>

        <h2
          style={{
            fontSize: "28px",
            lineHeight: "1.35",
            color: "#cbd5e1",
            fontWeight: "normal",
            maxWidth: "920px",
            margin: "0 0 24px"
          }}
        >
          Mining, PPP, infrastructure and strategic investment intelligence for Africa.
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#dbeafe",
            maxWidth: "950px"
          }}
        >
          TerraNova Mining Intelligence helps investors, banks, mining operators,
          development partners and government-linked stakeholders identify opportunities,
          monitor risks and map strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div style={{ marginTop: "32px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "none",
              background: "white",
              color: "#0f172a",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Request Intelligence Brief
          </button>

          <button
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.6)",
              background: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Access Platform
          </button>
        </div>
      </section>

      <section
        style={{
          padding: "10px 40px 40px",
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
        }}
      >
        {modules.map((item) => (
          <div
            key={item.title}
            style={{
              background: "rgba(30, 41, 59, 0.86)",
              padding: "24px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.12)",
              minHeight: "150px"
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "22px" }}>{item.title}</h3>
            <p style={{ color: "#cbd5e1", lineHeight: "1.5" }}>{item.text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          padding: "25px 40px 70px",
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
        }}
      >
        <div style={metricStyle}>
          <strong>2,500+</strong>
          <span>Licence records ready for intelligence mapping</span>
        </div>
        <div style={metricStyle}>
          <strong>Zambia + DRC</strong>
          <span>Priority mining intelligence coverage</span>
        </div>
        <div style={metricStyle}>
          <strong>PPP + Corridors</strong>
          <span>Lobito, TAZARA, border and logistics intelligence</span>
        </div>
      </section>
    </main>
  );
}

const metricStyle = {
  background: "rgba(15, 23, 42, 0.75)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "16px",
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "#cbd5e1"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
