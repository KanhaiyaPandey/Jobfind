/* eslint-disable no-unused-vars */
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

export const createJobAction = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
      await customFetch.post('/jobs', data);
      toast.success('job added successfully');
      return redirect("all-jobs")
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
}

export const editAction = async ({request,params}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
     await customFetch.patch(`/jobs/${params.id}`, data);
     toast.success("job edited successfully");
     return redirect("/dashboard/all-jobs")
  } catch (error) {
    toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-jobs');
  }
}

export const deleteAction = async({params}) => {
  try {
     await customFetch.delete(`/jobs/${params.id}`);
     toast.success("job deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("../all-jobs")
};

export const profileAction = async ({ request }) =>{
  const formData = await request.formData();

  const file = formData.get("avatar");
   if(file && file.size > 50000){
    toast.error("please choose file of size in range 500kb");
    return null;
   }

   try {
    await customFetch.patch('/users/update-user', formData);
    toast.success('Profile updated successfully');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
  return null;
}