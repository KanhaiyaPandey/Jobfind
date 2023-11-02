/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Form } from 'react-router-dom'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'
import SubmitBtn from '../components/SubmitBtn'

const Register = () => {
  return (
   <Wrapper>
    <Form method='post' className='form'>
       <Logo/>
       <h4>Register</h4>
       <FormRow type="text" name="name"/>
       <FormRow type="text" name = "lastName" labelText="last name"/>
       <FormRow type="text" name = "location"/>
       <FormRow type="email" name = "email"/>
       <FormRow type="password" name = "password"/>
      <SubmitBtn/>
        <p>Already a member ? 
        <Link to="/login" 
        className='member-btn'> login
        </Link>
       </p>

    </Form>
   </Wrapper>
  )
}

export default Register