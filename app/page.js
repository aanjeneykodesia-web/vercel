import Link from "next/link"

export default function Home(){

return(

<div className="container">

<section className="hero">

<h1>Industrial Manufacturer Network</h1>

<p>
Connect with nearby manufacturers from different industries 
and build powerful supply-chain ecosystems.
</p>

<div className="hero-buttons">

<Link href="/add">
<button>Register Manufacturer</button>
</Link>

<Link href="/mygroup">
<button className="secondary-btn">Find My Group</button>
</Link>

</div>

</section>


<section className="features">

<h2>Platform Features</h2>

<div className="grid">

<div className="card">
<h3>Smart Grouping</h3>
<p>
Manufacturers are grouped automatically based on nearest distance and different categories.
</p>
</div>

<div className="card">
<h3>Location Detection</h3>
<p>
Automatic location detection helps find the closest industrial partners instantly.
</p>
</div>

<div className="card">
<h3>Industrial Ecosystem</h3>
<p>
Create supply-chain ecosystems by connecting metal, plastic, electronics, and more.
</p>
</div>

<div className="card">
<h3>Admin Dashboard</h3>
<p>
Admins can manage manufacturers and monitor the network.
</p>
</div>

</div>

</section>

</div>

)

}
