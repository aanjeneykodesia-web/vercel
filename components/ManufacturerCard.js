export default function ManufacturerCard({m}){

return(

<div style={{
border:"1px solid #ddd",
padding:"20px",
borderRadius:"8px",
marginBottom:"15px"
}}>

<h3>{m.name}</h3>

<p>Category: {m.category}</p>

<p>City: {m.city}</p>

</div>

)

}
