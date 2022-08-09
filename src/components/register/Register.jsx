import React from 'react'
import Header from '../Header/Header'
import images from "../../assests/images/pcc.jpg"
import "./register.css" 
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

function Register() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <div>
     <Header /> 
     <div className='cardcontainerr'>
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
      >
            {formik => (
        <div >
         
          <Form className='formS'>
          <p className="WelcomeTextS">Sign UP</p>
            <TextField placeholder="firstName" name="firstName" type="text" className="inputS" />
            <TextField placeholder="lastName" name="lastName" type="text" className="inputS"/>
            <TextField placeholder="email"name="email" type="email" className="inputS"/>
            <TextField placeholder="password" name="password" type="password" className="inputS"/>
            <TextField placeholder="confirmPassword"name="confirmPassword" type="password"className="inputS" />
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