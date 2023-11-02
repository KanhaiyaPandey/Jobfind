/* eslint-disable no-unused-vars */

import React from 'react'
import FormRow from '../components/FormRow';
import { FormRowSelection } from '../components/FormRowSelection';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form } from 'react-router-dom';
import SubmitBtn from '../components/SubmitBtn';
// import { toast } from 'react-toastify';
// import customFetch from '../utils/customUrl';

const AddJob = () => {
  const {user} = useOutletContext();
  return (
    <Wrapper>
    <Form method='post' className='form'>
        <h4 className='form-title'>add job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            defaultValue = {user.location}
          />

      <FormRowSelection
            labelText='job status'
                   name='jobStatus'
                       defaultValue={JOB_STATUS.PENDING}
                      list={Object.values(JOB_STATUS)}
                  />
          <FormRowSelection
               name='jobType'
               labelText='job type'
               defaultValue={JOB_TYPE.FULL_TIME}
              list={Object.values(JOB_TYPE)} />

         <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

export default AddJob;