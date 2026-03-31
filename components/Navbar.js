"use client"

import Link from "next/link"

export default function Navbar(){

return(

<div style={{
display:"flex",
gap:"20px",
padding:"15px",
background:"#111",
color:"#fff"
}}>

<Link href="/" style={{color:"white"}}>Home</Link>

<Link href="/add" style={{color:"white"}}>
Register Manufacturer
</Link>

<Link href="/manufacturers" style={{color:"white"}}>
Manufacturers
</Link>

<Link href="/mygroup" style={{color:"white"}}>
Find My Group
</Link>

<Link href="/admin" style={{color:"white"}}>
Admin
</Link>

</div>

)

}
