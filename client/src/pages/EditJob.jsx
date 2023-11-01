/* eslint-disable no-unused-vars */

import FormRow from '../components/FormRow';
import { FormRowSelection } from '../components/FormRowSelection';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customUrl';


import React from 'react'

const EditJob = () => {
  const {job} = useLoaderData();
  console.log(job);
  return (
    <div>EditJob</div>
  )
}

export default EditJob;