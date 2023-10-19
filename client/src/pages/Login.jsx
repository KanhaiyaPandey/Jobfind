/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'
import Logo from '../components/Logo'

const Login = () => {
  return (
     <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>
        <FormRow type = "email" name = "email" />
        <FormRow type = "password" name = "password" />
        <button type='submit' className='btn btn-block'>login</button>
        <button type='button' className='btn btn-block'>Explore the app</button>
        <p>Not a member yet ? <Link to="/register" className='member-btn'>Register</Link></p>
      </form>
      
      </Wrapper>
  )
}

export default Login