/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from "../assets/images/not-found.svg"

const Error = () => {

  const error = useRouteError();

  if(error.status === 404){
    return(
      <Wrapper>
        <div>
        <img alt='not found' src={img}/>
        <h3>Page not found</h3>
        <p>sorry we can't find the resouce page you are looking for</p>
        <Link to="/dashboard"> Back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
       <h3>Something went wrong</h3>
    </Wrapper>
  )
}

export default Error