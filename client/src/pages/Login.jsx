/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Form, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import FormRow from '../components/FormRow'
import Logo from '../components/Logo'
import SubmitBtn from '../components/SubmitBtn'
import customFetch from "../utils/customUrl";
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'dummy@gmail.com',
      password: '123456789',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
     <Wrapper>
      <Form className='form' method='post'>
        <Logo />
        <h4>Login</h4>
        <FormRow type = "email" name = "email" />
        <FormRow type = "password" name = "password" />
       <SubmitBtn/>
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>Explore the app</button>
        <p>Not a member yet ? <Link to="/register" className='member-btn'>Register</Link></p>
      </Form>
      
      </Wrapper>
  )
}

export default Login