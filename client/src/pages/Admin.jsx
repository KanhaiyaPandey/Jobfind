/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData} from 'react-router-dom';
import Wrapper from '../assets/wrappers/StatsContainer';
import StateItem from '../components/StateItem';


const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
    <StateItem
      title='current users'
      count={users}
      color='#e9b949'
      bcg='#fcefc7'
      icon={<FaSuitcaseRolling />}
    />
    <StateItem
      title='total jobs'
      count={jobs}
      color='#647acb'
      bcg='#e0e8f9'
      icon={<FaCalendarCheck />}
    />
  </Wrapper>
  )
};

export default Admin