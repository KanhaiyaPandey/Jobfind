/* eslint-disable no-unused-vars */
import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { data } from 'autoprefixer';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import Navlinks from './Navlinks';

const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useDashboardContext()

  return (
    <Wrapper>
      <div className={ showSidebar? "sidebar-container show-sidebar" :
      "sidebar-container"}>
        <div className='content'>

          <button type='button' className='close-btn'
          onClick={toggleSidebar}>
            <FaTimes/>
          </button>
          <header>
            <Logo/>
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar