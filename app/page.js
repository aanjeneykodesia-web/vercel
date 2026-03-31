import Link from "next/link"

export default function Home(){

return(

<div>

<h1>Manufacturer Network</h1>

<p>Find nearby manufacturers from different industries.</p>

<ul>

<li>
<Link href="/add">Add Manufacturer</Link>
</li>

<li>
<Link href="/manufacturers">View Manufacturers</Link>
</li>

<li>
<Link href="/groups">Nearest Industrial Groups</Link>
</li>

</ul>

</div>

)

}
