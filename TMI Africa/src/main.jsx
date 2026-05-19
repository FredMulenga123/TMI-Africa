import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
  "Cancelled Licence Tracker",
  "Zambia + DRC Mining Data",
  "PPP Intelligence",
  "Corridor Intelligence",
  "Investor Screening",
  "Supplier Intelligence",
  "Risk Heat Maps",
  "Premium Reports"
];

function App() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <section style={{ padding: "70px 40px", maxWidth: "1100px" }}>
        <p style={{ color: "#38bdf8", fontWeight: "bold" }}>TMI.AFRICA</p>

        <h1 style={{ fontSize: "48px", lineHeight: "1.1", maxWidth: "900px" }}>
          Mining, Infrastructure & Strategic Investment Intelligence for Africa
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "850px", color: "#cbd5e1" }}>
          TerraNova Mining Intelligence helps investors, banks, mining operators and
          development partners identify opportunities, monitor risks and map strategic
          assets across Zambia, DRC and regional corridors.
        </p>

        <button style={{ padding: "14px 22px", marginTop: "24px", borderRadius: "10px", border: "none", fontWeight: "bold" }}>
          Request Intelligence Brief
        </button>
      </section>

      <section style={{ padding: "20px 40px 60px", display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
        {modules.map((item) => (
          <div key={item} style={{ background: "#1e293b", padding: "24px", borderRadius: "16px", border: "1px solid #334155" }}>
            <h3>{item}</h3>
            <p style={{ color: "#cbd5e1" }}>
              Strategic intelligence module for mining, PPP, corridor and investment decision-making.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
