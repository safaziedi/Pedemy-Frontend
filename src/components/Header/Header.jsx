import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";


const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1 className=" d-flex align-items-center gap-1">
            <i className="ri-pantone-line"></i>Pedemy.
            </h1>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
             
                
    
   <nav >
        <a href ="http://localhost:3000" style={{marginRight:"15px",color:"black", textDecoration:"none",fontWeight:600,fontSize:20}}>Home  </a>
        <a href ="http://localhost:3000/courses" style={{marginRight:"15px",color:"black",textDecoration:"none",fontWeight:600,fontSize:20}}> Courses </a>
        <a href ="http://localhost:3000/contact" style={{marginRight:"15px",color:"black",textDecoration:"none",fontWeight:600,fontSize:20}}> Contact </a>
        <a href ="http://localhost:3000/login" style={{marginRight:"15px",color:"black",textDecoration:"none",fontWeight:600,fontSize:20}}> Sign IN </a>
    </nav>
              </ul>
            </div>

            
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
