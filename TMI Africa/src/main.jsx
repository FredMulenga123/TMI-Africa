import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <main
      style={{
        padding: "40px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      <h1>TerraNova Mining Intelligence (TMI)</h1>

      <p>tmi.africa is live.</p>
      <p>Deployment test successful.</p>

      <h3>Core Modules</h3>

      <ul>
        <li>Cancelled Licence Intelligence</li>
        <li>Zambia + DRC datasets</li>
        <li>PPP Intelligence</li>
        <li>Corridor Intelligence</li>
        <li>Investor Screening</li>
        <li>Mining Opportunity Mapping</li>
      </ul>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
