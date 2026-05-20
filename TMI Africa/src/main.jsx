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

function Card({title,text}) {
return(
<div style={{
background:"rgba(255,255,255,0.05)",
padding:"25px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,0.1)",
minHeight:"160px",
backdropFilter:"blur(10px)"
}}>
<h3 style={{
fontSize:"28px",
marginBottom:"15px"
}}>
{title}
</h3>

<p style={{
color:"#cfd6e4",
lineHeight:"1.6"
}}>
{text}
</p>
</div>
)
}

function App(){

return(

<div style={{
fontFamily:"Arial,sans-serif",
background:"linear-gradient(135deg,#050b17,#081c3d,#0b2e63)",
color:"white",
minHeight:"100vh"
}}>

{/* NAVBAR */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 45px",
borderBottom:"1px solid rgba(255,255,255,0.08)"
}}>

<div>

<div style={{
color:"#ff6b6b",
fontSize:"36px",
fontWeight:"bold"
}}>
TerraNova
</div>

<div style={{
letterSpacing:"4px",
fontSize:"13px",
color:"#d5d9e3"
}}>
MINING INTELLIGENCE & ASSET MANAGEMENT
</div>

</div>

<div style={{
display:"flex",
gap:"30px",
fontSize:"15px",
color:"#d7dbe8"
}}>
<div>Dashboard</div>
<div>Zambia</div>
<div>DRC</div>
<div>PPP</div>
<div>Reports</div>
</div>

</div>


{/* HERO */}

<div style={{
padding:"30px 45px",
maxWidth:"1300px"
}}>

<div style={{
color:"#5ab3ff",
fontWeight:"bold",
letterSpacing:"2px"
}}>
TMI.AFRICA
</div>


<h1 style={{
fontSize:"46px",
maxWidth:"700px",
marginTop:"15px",
marginBottom:"20px"
}}>
TerraNova Mining Intelligence
</h1>

<div style={{
fontSize:"22px",
color:"#dce3ee",
marginBottom:"20px",
maxWidth:"900px"
}}>
Mining, PPP, infrastructure and strategic investment intelligence for Africa.
</div>


<p style={{
maxWidth:"1100px",
fontSize:"16px",
lineHeight:"1.8",
color:"#cfd6e4"
}}>
TerraNova Mining Intelligence helps investors, banks,
mining operators, development partners and
government-linked stakeholders identify opportunities,
monitor risks and map strategic assets across Zambia,
DRC and regional corridors.
</p>


<div style={{
display:"flex",
gap:"20px",
marginTop:"22px"
}}>

<button style={{
background:"#ffb347",
border:"none",
padding:"18px 38px",
borderRadius:"14px",
fontWeight:"bold",
fontSize:"16px"
}}>
Request Intelligence Brief
</button>

<button style={{
background:"transparent",
border:"1px solid #a8b0c0",
padding:"18px 38px",
borderRadius:"14px",
color:"white",
fontWeight:"bold",
fontSize:"16px"
}}>
Access Platform
</button>

</div>


<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
gap:"20px",
marginTop:"50px"
}}>

{modules.map((m)=>(
<Card
title={m.title}
text={m.text}
/>
))}

</div>

</div>

</div>

)
}

ReactDOM.createRoot(
document.getElementById("root")
).render(<App />);
