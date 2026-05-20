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
background:"rgba(255,255,255,0.06)",
padding:"28px",
borderRadius:"18px",
border:"1px solid rgba(255,255,255,.08)",
minHeight:"180px"
}}>

<h3 style={{
fontSize:"22px",
marginBottom:"18px"
}}>
{title}
</h3>

<p style={{
lineHeight:"1.7",
color:"#d0d8e8"
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
background:"linear-gradient(135deg,#020617,#06142e,#0a2959)",
minHeight:"100vh",
color:"white"

}}>

{/* NAV */}

<div style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"30px 70px"

}}>

<div>

<div style={{
fontSize:"50px",
fontWeight:"bold",
color:"#ff6a6a"
}}>
TerraNova
</div>

<div style={{
letterSpacing:"5px",
fontSize:"14px",
marginTop:"4px",
color:"#d8dce7"
}}>
MINING INTELLIGENCE & ASSET MANAGEMENT
</div>

</div>


<div style={{
display:"flex",
gap:"35px",
fontSize:"17px"
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

padding:"20px 70px",
maxWidth:"1400px"

}}>

<div style={{
color:"#5db5ff",
fontWeight:"bold",
marginBottom:"15px"
}}>
TMI.AFRICA
</div>

<h1 style={{

fontSize:"68px",
maxWidth:"900px",
margin:"0"

}}>
TerraNova Mining Intelligence
</h1>


<h2 style={{
fontWeight:"normal",
fontSize:"34px",
marginTop:"25px",
maxWidth:"1000px",
color:"#d8deea"
}}>
Mining, PPP, infrastructure and strategic investment intelligence for Africa.
</h2>


<p style={{
marginTop:"25px",
fontSize:"20px",
lineHeight:"1.9",
maxWidth:"1200px",
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
marginTop:"35px"
}}>

<button style={{
background:"#ffc34d",
padding:"18px 40px",
border:"none",
borderRadius:"12px",
fontSize:"16px",
fontWeight:"bold"
}}>
Request Intelligence Brief
</button>


<button style={{
background:"transparent",
border:"1px solid #8da3c8",
padding:"18px 40px",
borderRadius:"12px",
color:"white",
fontWeight:"bold"
}}>
Access Platform
</button>

</div>


<div style={{

display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px",
marginTop:"70px",
paddingBottom:"70px"

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
