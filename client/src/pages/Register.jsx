/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'

const Register = () => {
  return (
   <Wrapper>
    <form className='form'>
       <Logo/>
       <h4>Register</h4>
       
       <FormRow type="text" name="name"/>
       <FormRow type="text" name = "lastName" labelText="last name"/>
       <FormRow type="text" name = "location"/>
       <FormRow type="email" name = "email"/>
       <FormRow type="password" name = "password"/>


       <button className='btn btn-block' 
       type='submit'> Register 
       </button>

       <p>Already a member ? 
        <Link to="/login" 
        className='member-btn'> login
        </Link>
       </p>

    </form>
   </Wrapper>
  )
}

export default Register