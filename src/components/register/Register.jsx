import React from 'react'
import Header from '../Header/Header'
import images from "../../assests/images/pcc.jpg"
import "./register.css" 
import { Formik, Form ,Field} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import axios from "axios"
import{Radio}from "@material-ui/core"
function Register() {
 
  const validate = Yup.object({
   nom: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    prenom: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'number must be at least 6 charaters')
      .required('Password is required'),
      phoneNumber: Yup.string()
      .min(8, 'phoneNumber must be at least 8 charaters')
      .required(' required'),
      role: Yup.string ().required("required")
  })

  return (
    <div>
     <Header /> 
     <div className='cardcontainerr'>
     <Formik
      initialValues={{
       nom: '',
        prenom: '',
        email: '',
        password: '',
        phoneNumber:'',
        role:'',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
          try {
          axios.post('http://localhost:8000/auth/singup', values).then(r => console.log(r)).catch(e => console.log(e))
        } catch (error) {
         
        }
      }}
      >
            {formik => (
        <div >
         
          <Form className='formS'>
          <p className="WelcomeTextS">Sign UP</p>
            <TextField placeholder="nom" name="nom" type="text" className="inputS" />
            <TextField placeholder="prenom" name="prenom" type="text" className="inputS"/>
            <TextField placeholder="email"name="email" type="email" className="inputS"/>
            <TextField placeholder="password" name="password" type="password" className="inputS"/>
            <TextField placeholder="phoneNumber" name="phoneNumber" type="tel"  className="inputS"/>
            <div> <h6>role</h6></div>
            <label><h6 className='radio'>ADMIN</h6></label>
            <Field name="role" type="radio" value="ADMIN" as={Radio}/>
            <label><h6 className='radio'>STUDENT</h6></label>
            <Field name="role" type="radio" value="STUDENT" as={Radio}/>
            <label><h6 className='radio'>TRAINER</h6></label>
            <Field name="role" type="radio" value="TRAINER" as={Radio}/>

            <div className="text-center pt-1 mb-12 pb-1">
                          <button className='btn'
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            
                          >
                            Register
                          </button>
                          <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">If you have a account?<a className="text-gray-500" href="http://localhost:3000/login">Sign IN </a></p>
                        </div>
                        
                        </div>
          
          </Form>
        </div>
      )}
    </Formik>

     <div className='sides'>
     <img src={images} alt="" />
      </div>
     </div>
  </div> 

  )}

export default Register