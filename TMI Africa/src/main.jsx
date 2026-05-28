import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function TerraNovaAfrica() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-6xl font-black text-cyan-400">
        TerraNova Working
      </h1>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TerraNovaAfrica />
  </React.StrictMode>
);
