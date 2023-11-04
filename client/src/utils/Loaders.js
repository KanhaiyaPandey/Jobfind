// import { get } from "mongoose"
import { toast } from "react-toastify";
import customFetch from "./customUrl"
import { redirect } from "react-router-dom";



export const dashboardLoader = async () =>{
   try {
     const {data} = await customFetch.get("users/current-user");
     return data;
   } catch (error) {
    return redirect("/");
   }
}

export const jobsLoader = async ({request}) =>{
  
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
     const {data} = await customFetch.get("/jobs",{
      params
     });
     return {data, searchValues:{...params}};
  } catch (error) {
     toast.error(error?.response?.data?.msg);
     return (error);
  }
};

export const editLoader = async ({params}) =>{
   try {
      const { data } = await customFetch.get(`/jobs/${params.id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.msg);
      return redirect('/dashboard/all-jobs');
    }
}

export const adminloader = async () => {
   try {
     const response = await customFetch.get('/users/admin/app-stats');
     return response.data;
   } catch (error) {
     toast.error('You are not authorized to view this page');
     return redirect('/dashboard');
   }
 };

 export const StatsLoader = async () =>{
 try {
    const response = await customFetch.get("/jobs/stats");
    return response.data
 } catch (error) {
   return error
 }
 }