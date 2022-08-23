import React from 'react'
import "./profil.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import{useEffect , useState} from 'react';
import axios from "axios";
const Profil = () => {
    const [userNAme,setUserName]=useState([])
    useEffect(()=>{
        var accessTokenObj = localStorage.getItem("token");

        const config = {
            headers: { Authorization: `Bearer ${accessTokenObj}` }
        };
        
    axios.get('http://localhost:8000/users/getinfouser' , config ).then(res=>{
        setUserName(res.data.nom)
        console.log(userNAme);
      
    })}
    
    ,[])
    


  
  return (
    <div>
<Header />
<div className="containerP">

<div  className="container emp-profile">
            <form method="post">
                <div  className="row">
                    <div  className="col-md-4">
                        <div  className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div  className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                  
                    <div  className="col-md-6">
                        <div  className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li  className="nav-item">
                                    <a  className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li  className="nav-item">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div  className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            
                                        <div className="row">
                                        <table className='table table-bordered-none' >
        <thead >
        <tr>
          <th>nom</th>
          <th>prenom</th>
          <th>email</th>
          <th>password</th>
          <th>phoneNumber</th>
          
        </tr>
        </thead>
        <tbody>
          {/* {
            config?.map((data,index)=>(
              <tr > 
                <td>{data.nom} </td>
                <td>{data.prenom}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.phoneNumber}</td>
                
                 
              </tr>
            ))
          } */}
        </tbody>
      </table>
                                        </div>
                                       
                                        
                                        

                                       
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
  


  
  </div> 
          



<Footer />

    </div>
  )
}

export default Profil