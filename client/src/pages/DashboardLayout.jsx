/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react'
import Wrapper from '../assets/wrappers/Dashboard'
import SmallSidebar from '../components/SmallSidebar'
import BigSidebar from '../components/BigSidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DashboardContext = createContext()

const DashboardLayout = ({ isDarkThemeEnabled }) => {

  const user = {name: "john"};
  const  [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () =>{
    setShowSidebar(!showSidebar);
  };

  const logoutUser = () => {
        console.log("logout user");
  }


  return (
  <DashboardContext.Provider value={{
    user,
    showSidebar,
    isDarkTheme,
    toggleSidebar,
    toggleDarkTheme,
    logoutUser,
  }}>
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar/>
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext (DashboardContext);
export default DashboardLayout