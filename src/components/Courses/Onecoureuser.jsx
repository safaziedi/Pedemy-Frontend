import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Quiz from "../Courses/QUIZ/Quiz"
import Rating from "../Courses/Rating/Rating"
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assests/images/react.png";
import { useState } from 'react';
import ReactPlayer from "react-player";
import  "./onecoureuser.css";
import Comments from "../Courses/comment/Comments"
import CourseCard from "../Courses-section/CourseCard";
import courseImg12 from "../../assests/images/nest.png";
import courseImg5 from "../../assests/images/node.png";
import courseImg6 from "../../assests/images/mongo.png";
import {
     
     MenuBook ,
    
      LooksOneTwoTone,
       LooksTwoTwoTone,
        Looks3TwoTone,
         Looks4TwoTone,
         Looks5TwoTone,
  } from "@material-ui/icons";
const Onecoureuser = () => {
  const data = [
   
    {
      id: "5",
      title: "Node JS",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg5,
      category:"development"
    },
    {
      id: "6",
      title: "MongoDB",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg6,
      category:"development"
    },
 

    {
      id: "12",
      title: "nest JS",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg12,
      category:"development"
    },
  ];
 
   
        const [showVideo, setShowVideo] = useState(false);
  return (
    <div>
<Header/>
<div className='titreCat'>Categorie:Development</div>
<div className='titreC'>Reactjs</div>

<section>
      <Container>
        <Row>
          <Col lg="8" md="8">
            <div className="choose__imgC">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=f0X1Tl8aHtA&ab_channel=FromScratch-D%C3%A9veloppementWeb"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__iconC">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
          
                <Col  lg="4" md="4">
                <Quiz/>

       </Col>      
       </Row>
       <Row>
            <Col lg="8" md="8">
            <div className='pragraphe1'> Hello everyone , in This course you will learn how to develop application from scratch with react , 
                  through this course we will discover the core concepts of react like component JSX and the virtual Dom , 
                  next parts we will deal with API interaction and add some routing for our application
                </div>
                <div className='CardCour5'>
                 <Comments/>
                </div>
        
                </Col> 
                <Col  lg="4" md="4">
                 
                  <div className="CardCour3">
                    <div className='titreCat'> < MenuBook  className="sidebarIcon" />Les chapitres</div>
  

 <li >
     <LooksOneTwoTone className="sidebarIcon" />
    Présentation and installation(0:00)
   </li>
   <li >
     < LooksTwoTwoTone  className="sidebarIcon" />
     Router and navigation(32:14)
   </li>
   <li >
     <Looks3TwoTone  className="sidebarIcon" />
     Axios "useEffect,useState" (59:53)
   </li>
   <li >
     <Looks4TwoTone  className="sidebarIcon" />
    Map and Props (1:13:13)
   </li>
   <li >
     < Looks5TwoTone  className="sidebarIcon" />
   Les Filtres "slice,filtre,sort"(1:31:12)
   </li>
     </div>
     <div className="CardCour4">
     <Rating/>
     </div>
             <div>
                <button
        className='btnC'
      >
        passer le teste
      
      </button>
                </div>
       </Col>  
       
        </Row>
      

        <Row>
        
          <div className='suite'>Tous les cours de la catégorie Développement  </div>
          
          <hr className="t_border my-4 ml-0 text-left" />
            <Row>
          {data.map((item,) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
            ))}
            </Row>   
           
          
        </Row>
      </Container>
    </section>
<Footer/>
    </div>
  )
}

export default Onecoureuser