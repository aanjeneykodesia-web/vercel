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

<div>

<h1>Nearest Manufacturer Groups</h1>

{groups.map((group,i)=>(
<div key={i}>

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
