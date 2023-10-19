/* eslint-disable no-unused-vars */
import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {

  const {isDarkTheme, toggleDarkTheme} =  useDashboardContext();

  return (
    <div>
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme? (
                <BsFillSunFill className='toggle-icon'/>
            ) : (
                <BsFillMoonFill />
            ) }
        </Wrapper>
    </div>
  )
}

export default ThemeToggle