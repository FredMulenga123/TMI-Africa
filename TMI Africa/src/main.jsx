import React from "react";
import ReactDOM from "react-dom/client";

const modules = [
{
title:"Cancelled Licence Tracker",
desc:"Track cancelled and distressed mining licences across Zambia and DRC."
},
{
title:"Zambia + DRC Mining Data",
desc:"Structured mining intelligence for licence, investor and corridor analysis."
},
{
title:"PPP Intelligence",
desc:"Monitor infrastructure and public-private partnership opportunities."
},
{
title:"Corridor Intelligence",
desc:"Track Lobito, TAZARA, Copperbelt, Katanga and border-linked corridors."
},
{
title:"Investor Screening",
desc:"Identify serious investors, financiers, operators and strategic partners."
},
{
title:"Supplier Intelligence",
desc:"Screen contractors, suppliers, logistics firms and mining service providers."
},
{
title:"Risk Heat Maps",
desc:"Map regulatory, ownership, ESG, logistics and project execution risks."
},
{
title:"Premium Reports",
desc:"Generate investor-ready intelligence briefs and opportunity reports."
}
];

function App(){

return(

<main
style={{
background:
"radial-gradient(circle at bottom,#0d6efd40,#060b18 60%)",
color:"white",
fontFamily:"Arial,sans-serif",
padding:"40px",
minHeight:"100vh"
}}
>

{/* NAVBAR */}

<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"60px",
flexWrap:"wrap"
}}
>

<div>

<div
style={{
fontSize:"58px",
fontWeight:"bold",
color:"#ff6b6b"
}}
>
TerraNova
</div>

<div
style={{
letterSpacing:"6px",
fontSize:"15px",
color:"#d0d0d0"
}}
>
MINING INTELLIGENCE & ASSET MANAGEMENT
</div>

</div>

<div
style={{
display:"flex",
gap:"25px",
fontSize:"18px",
marginTop:"15px"
}}
>
<span>Dashboard</span>
<span>Zambia</span>
<span>DRC</span>
<span>PPP</span>
<span>Corridors</span>
<span>Reports</span>
</div>

</div>


{/* HERO */}

<div>

<div
style={{
color:"#53b8ff",
fontWeight:"bold",
marginBottom:"20px"
}}
>
TMI.AFRICA
</div>


<h1
style={{
fontSize:"72px",
maxWidth:"900px",
marginBottom:"20px"
}}
>
TerraNova Mining Intelligence
</h1>

<div
style={{
fontSize:"28px",
maxWidth:"1000px",
marginBottom:"30px",
color:"#e6e6e6"
}}
>
Mining, PPP, infrastructure and strategic investment intelligence for Africa.
</div>


<p
style={{
maxWidth:"1200px",
lineHeight:"1.8",
fontSize:"20px",
color:"#cdd7e5"
}}
>

TerraNova Mining Intelligence helps investors,
banks,
mining operators,
development partners and government-linked stakeholders identify opportunities,
monitor risks and map strategic assets across Zambia,
DRC and regional corridors.

</p>


<div
style={{
marginTop:"40px",
display:"flex",
gap:"20px",
flexWrap:"wrap"
}}
>

<button
style={{
background:"#ffb347",
padding:"18px 35px",
border:"none",
borderRadius:"14px",
fontWeight:"bold",
fontSize:"18px"
}}
>
Request Intelligence Brief
</button>


<button
style={{
background:"transparent",
border:"1px solid white",
color:"white",
padding:"18px 35px",
borderRadius:"14px",
fontWeight:"bold",
fontSize:"18px"
}}
>
Access Platform
</button>

</div>

</div>



{/* MODULES */}

<div
style={{
display:"grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(300px,1fr))",

gap:"25px",

marginTop:"60px"
}}
>

{modules.map((m)=>(

<div

key={m.title}

style={{
padding:"35px",
background:"rgba(255,255,255,.05)",
border:"1px solid rgba(255,255,255,.08)",
borderRadius:"22px",
backdropFilter:"blur(12px)"
}}
>

<h2>{m.title}</h2>

<p
style={{
lineHeight:"1.7",
color:"#d0d8e7"
}}
>
{m.desc}
</p>

</div>

))}

</div>



{/* FEATURED */}

<section
style={{
marginTop:"60px",
padding:"35px",
borderRadius:"20px",
background:
"rgba(60,90,180,.18)"
}}
>

<h2>
Featured Intelligence Products
</h2>

<p>
Distressed Licence Tracker • Zambia–DRC Mining Opportunity Radar • PPP Corridor Monitor • Investor & Supplier Due Diligence Briefs
</p>

</section>



{/* REQUEST ACCESS */}

<section
style={{
marginTop:"60px",
padding:"40px",
borderRadius:"24px",
background:
"linear-gradient(135deg, rgba(34,197,255,.12), rgba(20,30,60,.7))",
border:"1px solid rgba(255,255,255,.08)"
}}
>

<h2
style={{
fontSize:"42px",
marginBottom:"20px"
}}
>
Request Access
</h2>

<p
style={{
maxWidth:"900px",
lineHeight:"1.8",
fontSize:"18px",
color:"#d0d8e7",
marginBottom:"30px"
}}
>

Request pilot access, intelligence briefings,
investor due diligence reports,
corridor intelligence or partnership discussions
with TerraNova Mining Intelligence.

</p>


<div
style={{
marginBottom:"30px",
lineHeight:"2"
}}
>

<div
style={{
color:"#53b8ff",
fontWeight:"bold"
}}
>
fred.mulenga@zerb.co.zm
</div>

<div>
📞 (+260) 760 612 073
</div>

<div>
📱 0961 863 010
</div>

</div>


<button
style={{
background:"#ffb347",
color:"#111",
padding:"18px 35px",
border:"none",
borderRadius:"14px",
fontWeight:"bold",
cursor:"pointer"
}}
>
Request Intelligence Brief
</button>

</section>



<footer
style={{
marginTop:"80px",
padding:"30px",
borderTop:"1px solid rgba(255,255,255,.08)",
textAlign:"center",
color:"#8fa2b5"
}}
>

© 2026 TerraNova Mining Intelligence. All rights reserved.

</footer>

</main>

)

}

ReactDOM.createRoot(
document.getElementById("root")
).render(<App />);
