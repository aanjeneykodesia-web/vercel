"use client"

import { useState } from "react"

function distance(a,b){

const R = 6371

const dLat = (b.lat-a.lat)*Math.PI/180
const dLon = (b.lng-a.lng)*Math.PI/180

const lat1 = a.lat*Math.PI/180
const lat2 = b.lat*Math.PI/180

const x =
Math.sin(dLat/2)*Math.sin(dLat/2)+
Math.sin(dLon/2)*Math.sin(dLon/2)*
Math.cos(lat1)*Math.cos(lat2)

const c = 2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))

return R*c

}

export default function MyGroup(){

const [category,setCategory]=useState("")
const [results,setResults]=useState([])
const [location,setLocation]=useState(null)

function getLocation(){

navigator.geolocation.getCurrentPosition((pos)=>{

setLocation({
lat:pos.coords.latitude,
lng:pos.coords.longitude
})

})

}

function findGroup(e){

e.preventDefault()

let manufacturers = JSON.parse(localStorage.getItem("manufacturers")) || []

let user={
category,
lat:location.lat,
lng:location.lng
}

let nearest = manufacturers
.filter(m=>m.category!==category)
.map(m=>({

...m,
dist:distance(user,m)

}))
.sort((a,b)=>a.dist-b.dist)
.slice(0,5)

setResults(nearest)

}

return(

<div>

<h1>Find My Industrial Group</h1>

<button onClick={getLocation}>
Detect My Location
</button>

{location && (
<p>
Location detected: {location.lat} , {location.lng}
</p>
)}

<form onSubmit={findGroup}>

<br/>

<input
placeholder="Your Category"
onChange={(e)=>setCategory(e.target.value)}
required
/>

<br/><br/>

<button type="submit">
Find Nearest Manufacturers
</button>

</form>

<h2>Nearest Manufacturers</h2>

{results.map(m=>(
<p key={m.id}>
{m.name} - {m.category} - {m.city}
</p>
))}

</div>

)

}
