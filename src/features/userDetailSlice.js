import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { customHeaders } from "../helper/CustomerHeader";
import axios from "axios";
//get all user
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
        // const data2 = data.users.result;
        return data.users.result;
      } catch (error) {
        rejectWithValue(error.response);
      }
    }
  );

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      "http://161.35.218.95:3000/api/admin/all_users",
      {
        method: "GET",
        headers: {
          "Content-Type": customHeaders,
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userD",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {},

  extraReducers: {
    [getallUser.pending]: (state) => {
      state.loading = true;
    },
    [getallUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [getallUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userDetail.reducer;

// export const { searchUser } = userDetail.actions;