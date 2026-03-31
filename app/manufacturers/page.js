"use client"

import { useEffect,useState } from "react"
import defaultManufacturers from "../../data/manufacturers"

export default function Manufacturers(){

const [data,setData]=useState([])

useEffect(()=>{

let stored = JSON.parse(localStorage.getItem("manufacturers")) || []

setData([...defaultManufacturers,...stored])

},[])

return(

<div>

<h1>Manufacturers</h1>

{data.map(m=>(
<div key={m.id}>

<h3>{m.name}</h3>
<p>{m.category}</p>
<p>{m.city}</p>

</div>
))}

</div>

)

}
