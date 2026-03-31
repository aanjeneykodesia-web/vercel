import manufacturers from "@/data/manufacturers"

export default function Manufacturers(){

return(

<div style={{padding:40}}>

<h1>Manufacturers</h1>

{manufacturers.map((m)=>(

<div key={m.id} style={{marginBottom:20}}>

<h3>{m.name}</h3>

<p>Category: {m.category}</p>

<p>City: {m.city}</p>

</div>

))}

</div>

)

}
