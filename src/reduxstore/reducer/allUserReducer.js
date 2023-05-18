import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { customHeaders } from "../../helper/CustomerHeader";

export const getallUser = createAsyncThunk(
  "user",
  async (array, { getState, rejectWithValue }) => {
    // console.log(getState());
    try {
      const { data } = await axios.get(
        "http://161.35.218.95:3000/api/admin/all_users",{
            headers:customHeaders
        }
      );
      const data2 = data.users.result;
      return data2;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

export const getSingleUser = createAsyncThunk(
    "singleuser",
    async (id, { getState, rejectWithValue }) => {

      //   const result = axios.get(`https:////yourapi/?id=${id}`, {
//       params: {id},
//       headers: 
//     } )
      try {
        const { data } = await axios.get(
          `http://161.35.218.95:3000/api/admin/user?id=${id}`,{
              headers:customHeaders
          }
        );
      
        const data2 = data.user;
        return data2;
      } catch (error) {
        rejectWithValue(error.response);
      }
    }
  );


  export const deleteUser = createAsyncThunk(
    "deleteuser",
    async (id, { getState, rejectWithValue }) => {
      try {
        return await axios.delete(
          `http://161.35.218.95:3000/api/admin/user?id=${id}`,{
              headers:customHeaders
          }
        );
      } catch (error) {
        rejectWithValue(error.response);
      }
    }
  );
  




