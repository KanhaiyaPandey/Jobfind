/* eslint-disable no-unused-vars */

import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import Stats from "./pages/Stats";
import AllJobs from "./pages/AllJobs";
import Profile from "./pages/Profile";
import EditJob from "./pages/EditJob"; 
import { createJobAction, editAction, loginAction, registrationAction } from "./utils/Actions.js";
import { dashboardLoader, editLoader, jobsLoader } from "./utils/Loaders.js";
import AddJob from "./pages/AddJob";


const checkDefaultTheme = () => {
  const isDarkTheme =
    localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();


const router = createBrowserRouter([  
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error /> ,
    children: [
      {
      index: true,
      element: <Landing/>
      },

      {
        path: "register",
        element: <Register />,
        action: registrationAction  
       },
    
      
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
    
      
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled = {isDarkThemeEnabled}/>,
        loader: dashboardLoader,
        children: [
          {
             index: true,
             element:<AddJob />,
             action: createJobAction
          },

          {
            path: "admin",
            element: <Admin/>
          },
          {
            path:"edit-job/:id",
            element:<EditJob/>,
            loader: editLoader,
            action: editAction

          },
          {
            path: "stats",
            element: <Stats/>
          },
          {
            path: "all-jobs",
            element: <AllJobs/>,
            loader: jobsLoader
          },
          {
              path: "profile",
              element: <Profile/>
          }
        ]
      },

    ]
  },
]);



export const App = () => {
  return (
     <RouterProvider router={router} />
  )
}
export default App;

