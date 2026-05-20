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

function App() {
  return (
    <main style={{
      minHeight:"100vh",
      fontFamily:"Arial, sans-serif",
      background:"linear-gradient(135deg,#030712,#07152f,#0b3a67)",
      color:"#fff"
    }}>

      <header style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"22px 60px",
        borderBottom:"1px solid rgba(255,255,255,.08)",
        flexWrap:"wrap",
        gap:"20px"
      }}>
        <div>
          <div style={{fontSize:"42px",fontWeight:"800",color:"#ff6b4a"}}>
            TerraNova
          </div>
          <div style={{letterSpacing:"4px",fontSize:"12px",color:"#d1d5db"}}>
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </div>
        </div>

        <nav style={{
          display:"flex",
          gap:"28px",
          fontSize:"15px",
          color:"#e5e7eb",
          flexWrap:"wrap"
        }}>
          <span>Dashboard</span>
          <span>Zambia</span>
          <span>DRC</span>
          <span>PPP</span>
          <span>Corridors</span>
          <span>Reports</span>
        </nav>
      </header>

      <section style={{padding:"24px 60px 50px",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{color:"#38bdf8",fontWeight:"700",letterSpacing:"2px",marginBottom:"14px"}}>
          TMI.AFRICA
        </div>

        <h1 style={{fontSize:"54px",lineHeight:"1.05",margin:"0 0 18px",maxWidth:"820px"}}>
          TerraNova Mining Intelligence
        </h1>

        <h2 style={{fontSize:"26px",fontWeight:"400",lineHeight:"1.35",color:"#dbeafe",maxWidth:"950px",margin:"0 0 20px"}}>
          Mining, PPP, infrastructure and strategic investment intelligence for Africa.
        </h2>

        <p style={{fontSize:"17px",lineHeight:"1.75",color:"#cbd5e1",maxWidth:"1100px",margin:"0"}}>
          TerraNova Mining Intelligence helps investors, banks, mining operators,
          development partners and government-linked stakeholders identify opportunities,
          monitor risks and map strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div style={{display:"flex",gap:"18px",marginTop:"26px",flexWrap:"wrap"}}>
          <button style={{
            background:"#f97316",
            color:"#fff",
            border:"none",
            padding:"16px 30px",
            borderRadius:"12px",
            fontWeight:"700",
            cursor:"pointer",
            boxShadow:"0 10px 24px rgba(249,115,22,.35)"
          }}>
            Request Intelligence Brief
          </button>

          <button style={{
            background:"transparent",
            color:"#fff",
            border:"1px solid rgba(255,255,255,.45)",
            padding:"16px 30px",
            borderRadius:"12px",
            fontWeight:"700",
            cursor:"pointer"
          }}>
            Access Platform
          </button>
        </div>

        <section style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"45px",
          paddingBottom:"60px"
        }}>
          {modules.map(([title,text]) => (
            <article key={title} style={{
              background:"rgba(255,255,255,.06)",
              border:"1px solid rgba(255,255,255,.1)",
              borderRadius:"18px",
              padding:"24px",
              minHeight:"145px"
            }}>
              <h3 style={{fontSize:"22px",margin:"0 0 14px"}}>{title}</h3>
              <p style={{color:"#cbd5e1",lineHeight:"1.55",margin:0}}>{text}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
