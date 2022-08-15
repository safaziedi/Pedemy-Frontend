import React from 'react'
import "./sidebare.css"
const Sidebare = () => {
  return (
    <div className="sidenav">
  <a href="http://localhost:3000" style={{marginTop:"50px"}}>Home</a>
  <a href=""style={{marginTop:"20px"}}>Coures</a>
  <a href="http://localhost:3000/contact"style={{marginTop:"20px"}}>Contact</a>
  <a href="#clients"style={{marginTop:"20px"}}>déconnecter</a>
</div>
  )
}

export default Sidebare