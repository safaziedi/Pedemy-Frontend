import React from 'react'
import "./profil.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const Profil = () => {
  
  return (
    <div>
<Header />
<div className='containerP'>
</div>
<div className='containerliste'>
<a href ="" style={{color:"black", textDecoration:"none",fontWeight:600,fontSize:20}}>Courses déja regarder</a>
<a href ="" style={{marginLeft:"30px",color:"black",textDecoration:"none",fontWeight:600,fontSize:20}}> Courses en train de regarder</a>

</div>
<div className='containerCOU'>
</div>
<Footer />

    </div>
  )
}

export default Profil