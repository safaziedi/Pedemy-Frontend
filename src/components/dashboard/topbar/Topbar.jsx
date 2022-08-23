import React from 'react'
import "./topbar.css"
import { NotificationsNone ,Person,Settings} from "@material-ui/icons";

const Topbar = () => {
 
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      
      <div className="topLeft">
       
        <span className="logo"> <h1 className=" d-flex align-items-center gap-1">
            <i className="ri-pantone-line"></i>Pedemy.
            </h1></span>
           
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNone />
          <span className="topIconBadge">2</span>
        </div>
        
        <div className="topbarIconContainer">
          <Settings />
        </div>
        <div className="topbarIconContainer">
          <Person/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topbar