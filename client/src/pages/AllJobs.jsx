/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';
import JobsContainer from '../components/JobsContainer';
import SearchContainer from '../components/SearchContainer';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import React from 'react'

const AllJobsContext = createContext();
const AllJobs = () => {
  const {data} = useLoaderData();
  return (
    <AllJobsContext.Provider value={{data}}>
    <SearchContainer/>
    <JobsContainer/>
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext)

export default AllJobs;