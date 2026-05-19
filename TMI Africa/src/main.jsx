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
    <main
      style={{
        fontFamily: "Arial",
        background:"#081426",
        color:"white",
        minHeight:"100vh"
      }}
    >

      <header
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"20px 40px",
          borderBottom:"1px solid #1e293b"
        }}
      >
        <img
          src="/terranova-logo.png"
          alt="TerraNova"
          style={{height:"70px"}}
        />

        <nav style={{display:"flex",gap:"30px"}}>
          <span>Dashboard</span>
          <span>Zambia</span>
          <span>DRC</span>
          <span>PPP</span>
          <span>Investors</span>
          <span>Reports</span>
        </nav>
      </header>

      <section
        style={{
          padding:"70px 40px",
          maxWidth:"1200px"
        }}
      >
        <h1
          style={{
            fontSize:"58px",
            lineHeight:"1.1"
          }}
        >
          Investment Intelligence for Africa
        </h1>

        <p
          style={{
            fontSize:"22px",
            color:"#cbd5e1",
            maxWidth:"900px"
          }}
        >
          TerraNova Mining Intelligence helps investors,
          banks, mining operators and development partners
          identify opportunities, monitor risks and map
          strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div style={{marginTop:"30px"}}>
          <button
            style={{
              padding:"14px 24px",
              borderRadius:"10px",
              marginRight:"15px",
              border:"none",
              fontWeight:"bold"
            }}
          >
            Request Intelligence Brief
          </button>

          <button
            style={{
              padding:"14px 24px",
              borderRadius:"10px",
              background:"transparent",
              color:"white",
              border:"1px solid white"
            }}
          >
            Access Platform
          </button>
        </div>
      </section>

      <section
        style={{
          padding:"20px 40px 80px",
          display:"grid",
          gap:"20px",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))"
        }}
      >
        {modules.map((item)=>(
          <div
            key={item}
            style={{
              background:"#1e293b",
              padding:"25px",
              borderRadius:"18px"
            }}
          >
            <h3>{item}</h3>

            <p style={{color:"#cbd5e1"}}>
              Strategic intelligence module
              for investment and mining
              decision-making.
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}

ReactDOM.createRoot(
 document.getElementById("root")
).render(<App />);
