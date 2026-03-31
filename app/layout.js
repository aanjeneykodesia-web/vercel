import Navbar from "../components/Navbar"
import "./globals.css"
export const metadata = {
title: "Manufacturer Network"
}

export default function RootLayout({ children }) {

return (

<html>

<body style={{fontFamily:"Arial"}}>

<Navbar/>

<div style={{padding:"30px"}}>

{children}

</div>

</body>

</html>

)

}
