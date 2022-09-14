import React from 'react'
import Footer from "../Footer/Footer"
import Topbar from './topbar/Topbar'
import Sidebar from './Sidebar/Sidebar'
import HomeD from "./HomeD/HomeD"
import'./dashboard.css'


const Dashboard = () => {
  return (
    <div>
  <Topbar />
      <div className="containerrrrr">
        <Sidebar />
            <HomeD />
            
          
          


            </div>
<Footer />

    </div>
  )
}

export default Dashboard