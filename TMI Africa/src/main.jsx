import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0f172a", color: "white", minHeight: "100vh" }}>
      <section style={{ padding: "60px 40px" }}>
        <h1>TerraNova Mining Intelligence</h1>
        <p style={{ fontSize: "20px", maxWidth: "850px" }}>
          Mining, infrastructure, PPP and strategic investment intelligence for Zambia, DRC and Africa.
        </p>

        <button style={{ padding: "12px 20px", marginTop: "20px" }}>
          Request Intelligence Brief
        </button>
      </section>

      <section style={{ padding: "40px", display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[
          "Cancelled Licence Tracker",
          "Zambia + DRC Mining Data",
          "PPP Intelligence",
          "Corridor Intelligence",
          "Investor Screening",
          "Supplier Intelligence",
          "Risk Heat Maps",
          "Premium Reports"
        ].map((item) => (
          <div key={item} style={{ background: "#1e293b", padding: "24px", borderRadius: "14px" }}>
            <h3>{item}</h3>
            <p>Strategic intelligence module for mining investors, banks, DFIs and operators.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
