import { redirect } from "react-router-dom";
import customFetch from "./customUrl";
import { toast } from 'react-toastify';

export const registrationAction = async ({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        await customFetch.post('/auth/register', data);
        toast.success('Registration successful');
        return redirect('/login');
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
      }
 };

 export const loginAction = async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
      await customFetch.post('/auth/login', data);
      toast.success('Logged in successful');
      return redirect('/dashboard');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
};