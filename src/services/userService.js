import axiosInstance from "../axious/axiosInstance";
import { customHeaders } from "../helper/CustomerHeader";

 
 const getAllUser = () => {
    return axiosInstance.get("/api/admin/all_users", {
      headers:customHeaders
    });
 }

 export  const userService = {getAllUser};