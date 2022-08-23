import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Container, Row, Col } from "reactstrap";
import { useState } from 'react';
import "./courC.css"
import "../Courses-section/courses.css";
import CourseCard from "../Courses-section/CourseCard";
import categorie from './categorie';

const Courses = () => {
  const[data,setData]=useState(categorie);
  const filterResultat=(catItem)=>{
    const resultat= categorie.filter((curData)=>{
      return curData.category  ===catItem
    });
    setData(resultat)
  }
  return (
    <div>
<Header />
<section>
      <Container>
        <Row>
        <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="categorie">
              <button className='btnCat'onClick={()=>setData(categorie)}style={{marginRight:"30px"}}>ALL</button>
             <button className='btnCat' onClick={()=>filterResultat("Design")}style={{marginRight:"30px"}}>Design</button>
             <button className='btnCat' onClick={()=>filterResultat("development")}style={{marginRight:"30px"}}>development</button>
             <button className='btnCat' onClick={()=>filterResultat("IT & software")}>IT and software</button>

             
             </div>
              </div>
           
          </Col>
        
          {data.map((item,) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>

<Footer />
    </div>
  )
}

export default Courses