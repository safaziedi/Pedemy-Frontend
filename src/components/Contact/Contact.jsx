import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./contact.css";
import { Container, Row, Col } from "reactstrap";
const Contact = () => {
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
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="inputC"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
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
              ></textarea>
             
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
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