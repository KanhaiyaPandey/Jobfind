/* eslint-disable no-unused-vars */
import React from 'react'
import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
     <Logo></Logo>
      </nav>

<div className='container page'>
 <div className='info'>
 <h1>
    Job <span>Tracking</span> app
  </h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt minus optio corrupti
     ipsam dolorem architecto ut praesentium 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magnam obcaecati ab laborum tempora blanditiis nihil repudiandae hic quos sint ducimus impedit minus porro vel.
     Rem vero nostrum velit explicabo!</p>

    <Link to="/register" className='btn register-link'> Register </Link>
    <Link to="/login" className='btn'> Login/demo user </Link>
 </div>

<img alt='img' src={main} className='img main-img'/>

</div>

    </Wrapper>
  )
}

export default Landing