import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
  {
    title:"Cancelled Licence Tracker",
    text:"Track cancelled and distressed mining licences across Zambia and DRC."
  },
  {
    title:"Zambia + DRC Mining Data",
    text:"Structured mining intelligence for licence, investor and corridor analysis."
  },
  {
    title:"PPP Intelligence",
    text:"Monitor infrastructure and public-private partnership opportunities."
  },
  {
    title:"Corridor Intelligence",
    text:"Track Lobito, TAZARA, Copperbelt, Katanga and border-linked corridors."
  },
  {
    title:"Investor Screening",
    text:"Identify serious investors, financiers, operators and strategic partners."
  },
  {
    title:"Supplier Intelligence",
    text:"Screen contractors, suppliers, logistics firms and mining service providers."
  },
  {
    title:"Risk Heat Maps",
    text:"Map regulatory, ownership, ESG, logistics and project execution risks."
  },
  {
    title:"Premium Reports",
    text:"Generate investor-ready intelligence briefs and opportunity reports."
  }
];

function App() {
  return (
    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#08111f,#0f172a,#123b63)",
        color:"white",
        fontFamily:"Arial,sans-serif"
      }}
    >

      <header
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"20px 50px",
          flexWrap:"wrap",
          borderBottom:"1px solid rgba(255,255,255,.08)"
        }}
      >
        <div>
          <div
            style={{
              fontSize:"34px",
              fontWeight:"bold",
              color:"#ff6b4a"
            }}
          >
            TerraNova
          </div>

          <div
            style={{
              color:"#cbd5e1",
              fontSize:"12px",
              letterSpacing:"3px"
            }}
          >
            MINING INTELLIGENCE & ASSET MANAGEMENT
          </div>
        </div>

        <div
          style={{
            display:"flex",
            gap:"25px",
            color:"#cbd5e1",
            fontSize:"14px",
            flexWrap:"wrap"
          }}
        >
          <span>Dashboard</span>
          <span>Zambia</span>
          <span>DRC</span>
          <span>PPP</span>
          <span>Reports</span>
        </div>
      </header>

      <section
        style={{
          maxWidth:"1200px",
          margin:"auto",
          padding:"50px"
        }}
      >

        <div
          style={{
            color:"#38bdf8",
            fontWeight:"bold",
            marginBottom:"20px"
          }}
        >
          TMI.AFRICA
        </div>

        <h1
          style={{
            fontSize:"60px",
            lineHeight:"1.1",
            marginBottom:"20px",
            maxWidth:"800px"
          }}
        >
          TerraNova Mining Intelligence
        </h1>

        <div
          style={{
            fontSize:"28px",
            color:"#dbeafe",
            maxWidth:"850px",
            lineHeight:"1.5"
          }}
        >
          Mining, PPP, infrastructure and strategic investment intelligence for Africa.
        </div>

        <p
          style={{
            marginTop:"25px",
            color:"#cbd5e1",
            maxWidth:"900px",
            lineHeight:"1.8",
            fontSize:"18px"
          }}
        >
          TerraNova Mining Intelligence helps investors, banks,
          mining operators, development partners and government-linked
          stakeholders identify opportunities, monitor risks and map
          strategic assets across Zambia, DRC and regional corridors.
        </p>

        <div
          style={{
            display:"flex",
            gap:"20px",
            marginTop:"35px",
            flexWrap:"wrap"
          }}
        >

          <button
            style={{
              background:"#f97316",
              color:"white",
              border:"none",
              padding:"18px 30px",
              borderRadius:"12px",
              fontWeight:"bold",
              cursor:"pointer"
            }}
          >
            Request Intelligence Brief
          </button>

          <button
            style={{
              background:"transparent",
              color:"white",
              border:"1px solid #64748b",
              padding:"18px 30px",
              borderRadius:"12px",
              fontWeight:"bold"
            }}
          >
            Access Platform
          </button>

        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
            gap:"20px",
            marginTop:"70px",
            paddingBottom:"80px"
          }}
        >
          {modules.map((m)=>(

            <div
              key={m.title}
              style={{
                background:"rgba(255,255,255,.05)",
                border:"1px solid rgba(255,255,255,.08)",
                padding:"25px",
                borderRadius:"18px"
              }}
            >
              <h3>{m.title}</h3>

              <p
                style={{
                  color:"#cbd5e1",
                  lineHeight:"1.7"
                }}
              >
                {m.text}
              </p>
            </div>

          ))}
        </div>

      </section>

    </div>
  )
}

ReactDOM.createRoot(
document.getElementById("root")
).render(<App />);
