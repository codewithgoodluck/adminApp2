import { createSlice } from "@reduxjs/toolkit";
import { getallUser } from "../reducer/allUserReducer";

const getallUserSlice = createSlice({
    name: "data",
    initialState: {
      data: [],
      loading: false,
      isSuccess: false,
      message: "",
    },
    reducers: {
       
    },
    extraReducers: {
      [getallUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getallUser.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      },
      [getallUser.rejected]: (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.message = "failed";
      },
    },
  });

//   export const {deleteUser} = getallUserSlice.actions;
  
  export default getallUserSlice;