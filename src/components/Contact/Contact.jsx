import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./contact.css";
import axios from "axios"
import{useState} from 'react'
import { Container, Row, Col } from "reactstrap";
const Contact = () => {
  const [nom,setNom]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  console.log({nom,email,message})
  const handleNom=(e)=>{
    setNom(e.target.value)
   }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleMessage=(e)=>{
    setMessage(e.target.value)
   }
   const handleApi=()=>{
    console.log({nom,email,message})
    axios.post('http://localhost:8000/contacts',{nom:nom,email:email,
   message:message}).then(result=>{
    console.log(result)
   })
   .catch(error=>{
    console.log(error)
   })
   }
   const handleSubmit = event => {
    event.preventDefault();
    console.log('form submitted ');
  };
  return (
    <div>
<Header />
<div className='containerC'>
<Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <p className="ContactMe">Contact US</p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <p>Address: Lac1,tunis</p>
            <p> Phone: +216 23680343 </p>
            <p>Email: hello@pepolls.com</p>
            <p>********************</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100" onSubmit={handleSubmit}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="inputC"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                    value={nom}
                    onChange={handleNom}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="inputC"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                    value={email}
                    onChange={handleEmail}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
                value={message}
                onChange={handleMessage}
              ></textarea>
             
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" onClick={handleApi}
                          > 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  
</div>
<Footer />

    </div>
  )
}

export default Contact