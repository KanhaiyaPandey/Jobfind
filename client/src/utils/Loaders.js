// import { get } from "mongoose"
import customFetch from "./customUrl"
import { redirect } from "react-router-dom";



export const loader = async () =>{
   try {
     const {data} = await customFetch.get("users/current-user");
     return data;
   } catch (error) {
    return redirect("/");
   }
}