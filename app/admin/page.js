"use client"

import { useEffect,useState } from "react"

export default function Admin(){

const [data,setData]=useState([])

useEffect(()=>{

let stored = JSON.parse(localStorage.getItem("manufacturers")) || []

setData(stored)

},[])

function deleteManufacturer(id){

let updated = data.filter(m=>m.id!==id)

localStorage.setItem("manufacturers",JSON.stringify(updated))

setData(updated)

}

return(

<div>

<h1>Admin Dashboard</h1>

<h3>Total Manufacturers: {data.length}</h3>

{data.map(m=>(

<div key={m.id} style={{
border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px"
}}>

<h3>{m.name}</h3>

<p>{m.category}</p>

<p>{m.city}</p>

<button onClick={()=>deleteManufacturer(m.id)}>
Delete
</button>

</div>

))}

</div>

)

}
