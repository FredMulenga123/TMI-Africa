import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
  {
    title: "Cancelled Licence Tracker",
    desc: "Track cancelled and distressed mining licences across Zambia and DRC."
  },
  {
    title: "Zambia + DRC Mining Data",
    desc: "Structured mining intelligence for licence, investor and corridor analysis."
  },
  {
    title: "PPP Intelligence",
    desc: "Monitor infrastructure and public-private partnership opportunities."
  },
  {
    title: "Corridor Intelligence",
    desc: "Track Lobito, TAZARA, Copperbelt, Katanga and border-linked corridors."
  },
  {
    title: "Investor Screening",
    desc: "Identify serious investors, financiers, operators and strategic partners."
  },
  {
    title: "Supplier Intelligence",
    desc: "Screen contractors, suppliers, logistics firms and mining service providers."
  },
  {
    title: "Risk Heat Maps",
    desc: "Map regulatory, ownership, ESG, logistics and project execution risks."
  },
  {
    title: "Premium Reports",
    desc: "Generate investor-ready intelligence briefs and opportunity reports."
  }
];

function App() {
  return (
    <main
      style={{
        background: "radial-gradient(circle at bottom,#0d6efd40,#060b18 60%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        paddingBottom: "40px",
        minHeight: "100vh",
        overflowX: "hidden"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#ff6b6b"
            }}
          >
            TerraNova
          </div>

          <div
            style={{
              letterSpacing: "5px",
              fontSize: "13px",
              color: "#d0d0d0"
            }}
          >
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "17px",
            flexWrap: "wrap"
          }}
        >
          <a href="#dashboard" style={navLink}>Dashboard</a>
          <a href="#modules" style={navLink}>Zambia</a>
          <a href="#modules" style={navLink}>DRC</a>
          <a href="#modules" style={navLink}>PPP</a>
          <a href="#modules" style={navLink}>Corridors</a>
          <a href="#reports" style={navLink}>Reports</a>
          <a href="#contact" style={navLink}>Contact</a>
        </nav>
      </div>

      <section id="dashboard">
        <div
          style={{
            color: "#53b8ff",
            fontWeight: "bold",
            marginBottom: "16px",
            letterSpacing: "2px"
          }}
        >
          TMI.AFRICA
        </div>

        <h1
          style={{
            fontSize: "60px",
            maxWidth: "900px",
            margin: "0 0 18px"
          }}
        >
          TerraNova Mining Intelligence
        </h1>

        <div
          style={{
            fontSize: "26px",
            maxWidth: "1000px",
            marginBottom: "24px",
            color: "#e6e6e6"
          }}
        >
          Mining, PPP, infrastructure and strategic investment intelligence for Africa.
        </div>

        <p
          style={{
            maxWidth: "1150px",
            lineHeight: "1.75",
            fontSize: "18px",
            color: "#cdd7e5"
          }}
        >
          TerraNova Mining Intelligence helps investors, banks, mining operators,
          development partners and government-linked stakeholders identify opportunities,
          monitor risks and map strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            gap: "18px",
            flexWrap: "wrap"
          }}
        >
          <a href="#contact" style={primaryButton}>
            Request Intelligence Brief
          </a>

          <a href="#modules" style={secondaryButton}>
            Access Platform
          </a>
        </div>
      </section>

      <section
        id="modules"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
          marginTop: "55px"
        }}
      >
        {modules.map((m) => (
          <article
            key={m.title}
            style={{
              padding: "30px",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "22px",
              backdropFilter: "blur(12px)"
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: "24px"
              }}
            >
              {m.title}
            </h2>

            <p
              style={{
                lineHeight: "1.65",
                color: "#d0d8e7",
                marginBottom: 0
              }}
            >
              {m.desc}
            </p>
          </article>
        ))}
      </section>

      <section
        id="reports"
        style={{
          marginTop: "50px",
          padding: "32px",
          borderRadius: "20px",
          background: "rgba(60,90,180,.18)",
          border: "1px solid rgba(255,255,255,.08)"
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Featured Intelligence Products
        </h2>

        <p
          style={{
            lineHeight: "1.7",
            color: "#d0d8e7",
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
          padding: "36px",
          borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(34,197,255,.12), rgba(20,30,60,.7))",
          border: "1px solid rgba(255,255,255,.08)"
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginTop: 0,
            marginBottom: "18px"
          }}
        >
          Request Access
        </h2>

        <p
          style={{
            maxWidth: "900px",
            lineHeight: "1.8",
            fontSize: "17px",
            color: "#d0d8e7",
            marginBottom: "28px"
          }}
        >
          Request pilot access, intelligence briefings, investor due diligence reports,
          corridor intelligence or partnership discussions with TerraNova Mining Intelligence.
        </p>

        <div
          style={{
            marginBottom: "28px",
            lineHeight: "2"
          }}
        >
          <div
            style={{
              color: "#53b8ff",
              fontWeight: "bold"
            }}
          >
            fred.mulenga@zerb.co.zm
          </div>

          <div>📞 (+260) 760 612 073</div>
          <div>📱 0961 863 010</div>
        </div>

        <a href="mailto:fred.mulenga@zerb.co.zm" style={primaryButton}>
          Request Intelligence Brief
        </a>
      </section>

      <footer
        style={{
          marginTop: "40px",
          padding: "20px 0",
          textAlign: "center",
          color: "#8fa2b5",
          fontSize: "14px",
          borderTop: "1px solid rgba(255,255,255,.05)"
        }}
      >
        © 2026 TerraNova Mining Intelligence. All rights reserved.
      </footer>
    </main>
  );
}

const navLink = {
  color: "white",
  textDecoration: "none"
};

const primaryButton = {
  display: "inline-block",
  background: "#ffb347",
  color: "#111",
  padding: "16px 32px",
  border: "none",
  borderRadius: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer"
};

const secondaryButton = {
  display: "inline-block",
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "16px 32px",
  borderRadius: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer"
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
