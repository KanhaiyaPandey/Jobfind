/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import {useDashboardContext} from "../pages/DashboardLayout"

const LogoutContainer = () => {
    const [showLogout,setShowLogout] = useState(false);
    const {user,logoutUser} = useDashboardContext();

  return (
   <Wrapper>
    <button type='button' className='btn logout-btn'
    onClick={() =>setShowLogout(!showLogout) }>
     {
  user.avatar ? (
    <img src={user.avatar} alt='avatar' className='img' />
  ) : (
    <FaUserCircle />
  )
}
     {user?.name}
     <FaCaretDown/>
    </button>
    <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button className='dropdown-btn' type='button' onClick={logoutUser}>logout</button>
    </div>
   </Wrapper>
  )
}

export default LogoutContainer