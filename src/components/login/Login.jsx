import React from 'react'
import{useState} from 'react'
import Header from '../Header/Header'
import imagee from "../../assests/images/pcc.jpg"
import "./login.css"
import axios from "axios"
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  console.log({email,password})
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
   }
   const handleApi=()=>{
    console.log({email,password})
    axios.post('http://localhost:8000/auth/signin',{email:email,
   password:password}).then(result=>{
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
    <div >
      <Header />
      <div className='containerr'>
      <form  onSubmit={handleSubmit} className="form" >
                        <p className="WelcomeText">Sign IN</p>
                        <div className="mb-4">
                          <input className="input"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            id="email-address"
                            placeholder="email"
                         value={email}
                         onChange={handleEmail}
                          />
                        </div>
                        <div className="mb-4">
                          <input className="input"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            id="password"
                            placeholder="Password"
                           value={password}
                           onChange={handlePassword}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button className='btn'
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                             onClick={handleApi}
                          >
                            Log in
                          </button>
                        </div>
                       <div>
                       <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                       </div>
                       <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?<a className="text-gray-500" href="http://localhost:3000/register">Sign UP </a></p>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2"> Or Login With</p>
                        </div>
                        <div className='social-icons'>
                          <div className='social-icon-facebook'style={{marginRight:"10px"}}>
                          <i className="ri-facebook-fill"></i> 
                          </div>
                          <div className='social-icon-google'>
                          <i className="ri-google-fill"></i> 
                          </div>
                        </div>
                      </form>
                      <div className='side'>
                      <img src={imagee} alt="" />
                      </div>
                      </div>
                     
                      </div>
  )}
export default Login