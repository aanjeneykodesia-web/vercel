"use client"

import { useState } from "react"

export default function AddManufacturer(){

const [name,setName]=useState("")
const [category,setCategory]=useState("")
const [city,setCity]=useState("")
const [lat,setLat]=useState("")
const [lng,setLng]=useState("")

function detectLocation(){

if(!navigator.geolocation){
alert("Geolocation not supported")
return
}

navigator.geolocation.getCurrentPosition((pos)=>{

setLat(pos.coords.latitude)
setLng(pos.coords.longitude)

})

}

function saveManufacturer(e){

e.preventDefault()

let manufacturers = JSON.parse(localStorage.getItem("manufacturers")) || []

let newManufacturer = {

id: Date.now(),
name,
category,
city,
lat: parseFloat(lat),
lng: parseFloat(lng)

}

manufacturers.push(newManufacturer)

localStorage.setItem("manufacturers",JSON.stringify(manufacturers))

alert("Manufacturer Registered")

setName("")
setCategory("")
setCity("")

}

return(

<div style={{padding:40}}>

<h1>Register Manufacturer</h1>

<button onClick={detectLocation}>
Detect My Location
</button>

<br/><br/>

<form onSubmit={saveManufacturer}>

<input
placeholder="Manufacturer Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<br/><br/>

<input
placeholder="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
required
/>

<br/><br/>

<input
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
required
/>

<br/><br/>

<input
placeholder="Latitude"
value={lat}
readOnly
/>

<br/><br/>

<input
placeholder="Longitude"
value={lng}
readOnly
/>

<br/><br/>

<button type="submit">
Register
</button>

</form>

</div>

)

}
