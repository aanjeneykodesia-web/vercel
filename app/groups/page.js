import manufacturers from "@/data/manufacturers"
import { groupManufacturers } from "@/lib/group"
export default function Groups(){

const groups = groupManufacturers(manufacturers)

return(

<div style={{padding:40}}>

<h1>Manufacturer Groups</h1>

{Object.keys(groups).map((category)=>(

<div key={category} style={{marginBottom:30}}>

<h2>{category}</h2>

{groups[category].map((m)=>(

<p key={m.id}>{m.name} - {m.city}</p>

))}

</div>

))}

</div>

)

}
