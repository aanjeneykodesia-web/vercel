import Link from "next/link"

export default function Home(){

return(

<div style={{padding:40}}>

<h1>Manufacturer Network</h1>

<p>Industrial manufacturer grouping platform</p>

<ul>

<li>
<Link href="/manufacturers">
View Manufacturers
</Link>
</li>

<li>
<Link href="/groups">
View Groups
</Link>
</li>

</ul>

</div>

)

}
