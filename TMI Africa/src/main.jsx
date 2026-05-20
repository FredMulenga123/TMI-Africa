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


function App(){

return(

<div
style={{
minHeight:"100vh",
fontFamily:"Arial,sans-serif",
background:
"linear-gradient(135deg,#07111f,#0f172a,#123b63)",
color:"white"
}}
>

<header
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"25px 60px",
borderBottom:"1px solid rgba(255,255,255,.08)",
flexWrap:"wrap"
}}
>

<div>

<div
style={{
fontSize:"42px",
fontWeight:"bold",
color:"#ff6b4a"
}}
>
TerraNova
</div>

<div
style={{
letterSpacing:"3px",
fontSize:"13px",
color:"#cbd5e1"
}}
>
MINING INTELLIGENCE & ASSET MANAGEMENT
</div>

</div>


<div
style={{
display:"flex",
gap:"30px",
color:"#cbd5e1",
fontSize:"15px"
}}
>
<span>Dashboard</span>
<span>Zambia</span>
<span>DRC</span>
<span>PPP</span>
<span>Corridors</span>
<span>Reports</span>
</div>

</header>


<section
style={{
padding:"70px 60px",
maxWidth:"1300px",
margin:"auto"
}}
>

<div
style={{
color:"#38bdf8",
fontWeight:"bold",
letterSpacing:"3px",
marginBottom:"20px"
}}
>
TMI.AFRICA
</div>


<h1
style={{
fontSize:"68px",
lineHeight:"1.1",
marginBottom:"20px",
maxWidth:"900px"
}}
>
TerraNova Mining Intelligence
</h1>


<h2
style={{
fontSize:"34px",
fontWeight:"normal",
color:"#dbeafe",
lineHeight:"1.4",
maxWidth:"1000px"
}}
>
Mining, PPP, infrastructure and strategic investment intelligence for Africa.
</h2>


<p
style={{
fontSize:"19px",
lineHeight:"1.8",
color:"#cbd5e1",
maxWidth:"1000px",
marginTop:"30px"
}}
>
TerraNova Mining Intelligence helps investors,
banks, mining operators, development partners
and government-linked stakeholders identify
opportunities, monitor risks and map strategic
assets across Zambia, DRC and regional corridors.
</p>



<div
style={{
display:"flex",
gap:"20px",
marginTop:"40px",
flexWrap:"wrap"
}}
>

<button
style={{
background:"#f97316",
color:"white",
padding:"18px 35px",
border:"none",
borderRadius:"12px",
fontWeight:"bold",
fontSize:"15px",
cursor:"pointer",
boxShadow:"0 4px 15px rgba(249,115,22,.4)"
}}
>
Request Intelligence Brief
</button>


<button
style={{
background:"transparent",
border:"1px solid rgba(255,255,255,.35)",
color:"white",
padding:"18px 35px",
borderRadius:"12px",
fontWeight:"bold",
cursor:"pointer"
}}
>
Access Platform
</button>

</div>



<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(260px,1fr))",
gap:"25px",
marginTop:"80px"
}}
>

{modules.map((m)=>(

<div
key={m.title}

style={{
padding:"28px",
borderRadius:"20px",
background:
"rgba(255,255,255,.05)",

border:
"1px solid rgba(255,255,255,.08)",

backdropFilter:"blur(8px)"
}}
>

<h3
style={{
fontSize:"25px",
marginBottom:"15px"
}}
>
{m.title}
</h3>


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



<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"70px",
paddingBottom:"80px"
}}
>


<div style={metricStyle}>
<h2>2,500+</h2>
<p>Mining licence intelligence records</p>
</div>


<div style={metricStyle}>
<h2>Zambia + DRC</h2>
<p>Priority intelligence markets</p>
</div>


<div style={metricStyle}>
<h2>PPP + Corridors</h2>
<p>Lobito, TAZARA and strategic infrastructure</p>
</div>


</div>

</section>

</div>

)

}



const metricStyle={

padding:"30px",

borderRadius:"20px",

background:
"rgba(15,23,42,.75)",

border:
"1px solid rgba(255,255,255,.08)",

color:"#cbd5e1"

};


ReactDOM.createRoot(
document.getElementById("root")
).render(<App />);
