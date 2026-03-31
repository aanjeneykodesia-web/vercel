"use client"

import { useEffect,useState } from "react"
import defaultManufacturers from "../../data/manufacturers"
import {groupManufacturers} from "../../lib/group"

export default function Groups(){

const [groups,setGroups]=useState([])

useEffect(()=>{

let stored = JSON.parse(localStorage.getItem("manufacturers")) || []

let all=[...defaultManufacturers,...stored]

setGroups(groupManufacturers(all))

},[])

return(

<div style={{padding:40}}>

<h1>Nearest Manufacturer Clusters</h1>

{groups.map((group,i)=>(
<div key={i} style={{marginBottom:30}}>

<h2>Cluster {i+1}</h2>

{group.map(m=>(
<p key={m.id}>
{m.name} - {m.category} - {m.city}
</p>
))}

</div>
))}

</div>

)

}
