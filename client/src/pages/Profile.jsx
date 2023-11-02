/* eslint-disable no-unused-vars */
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form } from 'react-router-dom';
import SubmitBtn from '../components/SubmitBtn';


const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>profile</h4>

        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='image' className='form-label'>
              Select an image file (max 0.5 MB):
            </label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow type='text' name='name' defaultValue={name} />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            defaultValue={lastName}
          />
          <FormRow type='email' name='email' defaultValue={email} />
          <FormRow type='text' name='location' defaultValue={location} />
          <SubmitBtn formBtn/>
        </div>
      </Form>
    </Wrapper>
  )
}

export default Profile