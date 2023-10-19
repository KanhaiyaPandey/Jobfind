/* eslint-disable no-unused-vars */
import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'
import links from '../utils/Links'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
   const {toggleSidebar, user} = useDashboardContext();
  return (
    <div className="nav-links">
    {links.map((link) => {
      const {text, path, icon} = link
      return <NavLink to = {path} key ={text}
      className="nav-link"
      onClick={toggleSidebar}
      end >
        <span className='icon'>{icon}
        </span>{text}
      </NavLink>
    })}
   </div>
  )
}

export default Navlinks