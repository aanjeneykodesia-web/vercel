"use client"

import { useEffect, useState } from "react"

const ADMIN_PASSWORD = "admin//@//234"

export default function Admin(){

const [authorized,setAuthorized]=useState(false)
const [password,setPassword]=useState("")
const [data,setData]=useState([])

useEffect(()=>{

let stored = JSON.parse(localStorage.getItem("manufacturers")) || []
setData(stored)

},[])

function login(e){

e.preventDefault()

if(password === ADMIN_PASSWORD){

setAuthorized(true)

}else{

alert("Wrong password")

}

}

function deleteManufacturer(id){

let updated = data.filter(m=>m.id !== id)

localStorage.setItem("manufacturers",JSON.stringify(updated))

setData(updated)

}

if(!authorized){

return(

<div className="container">

<h1>Admin Login</h1>

<form onSubmit={login}>

<input
type="password"
placeholder="Enter Admin Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>

</form>

</div>

)

}

return(

<div className="container">

<h1>Admin Dashboard</h1>

<h3>Total Manufacturers: {data.length}</h3>

{data.map(m=>(

<div key={m.id} className="card">

<h3>{m.name}</h3>

<p>Category: {m.category}</p>

<p>City: {m.city}</p>

<button
className="delete-btn"
onClick={()=>deleteManufacturer(m.id)}
>
Delete
</button>

</div>

))}

</div>

)

}
