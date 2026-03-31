"use client"

import { useState } from "react"

export default function Add(){

const [name,setName]=useState("")
const [category,setCategory]=useState("")
const [city,setCity]=useState("")
const [lat,setLat]=useState("")
const [lng,setLng]=useState("")

function submit(e){

e.preventDefault()

const newManufacturer={
id:Date.now(),
name,
category,
city,
lat:parseFloat(lat),
lng:parseFloat(lng)
}

let data = JSON.parse(localStorage.getItem("manufacturers")) || []

data.push(newManufacturer)

localStorage.setItem("manufacturers",JSON.stringify(data))

alert("Manufacturer Added!")

}

return(

<div>

<h1>Add Manufacturer</h1>

<form onSubmit={submit}>

<input placeholder="Name" onChange={(e)=>setName(e.target.value)} required />

<br/><br/>

<input placeholder="Category" onChange={(e)=>setCategory(e.target.value)} required />

<br/><br/>

<input placeholder="City" onChange={(e)=>setCity(e.target.value)} required />

<br/><br/>

<input placeholder="Latitude" onChange={(e)=>setLat(e.target.value)} required />

<br/><br/>

<input placeholder="Longitude" onChange={(e)=>setLng(e.target.value)} required />

<br/><br/>

<button type="submit">Submit</button>

</form>

</div>

)

}
