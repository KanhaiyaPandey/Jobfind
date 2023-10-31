/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, redirect, Form, useNavigation } from 'react-router-dom'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
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


       <button className='btn btn-block' 
       type='submit' disabled = {isSubmitting}> 
       {isSubmitting ? 'submitting...' : 'submit'}
       </button>

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