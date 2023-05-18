import { createSlice } from "@reduxjs/toolkit";
import { getSingleUser } from "../reducer/allUserReducer";

const getSingleUserSlice = createSlice({
    name: "singleUser",
    initialState: {
      data:undefined,
      loading: false,
      isSuccess: false,
      message: "",
    },
    reducers: {},

    extraReducers: (builder) => {
      builder.addCase(getSingleUser.pending, (state, action) => {
        state.loading = true;
      });

      builder.addCase(getSingleUser.fulfilled,(state, { payload })=>{
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      });

      builder.addCase(getSingleUser.rejected,(state, { payload })=>{
        state.loading = false;
        state.isSuccess = false;
        state.message = "failed";
      } )
    },
  


    // extraReducers: {
    //   [getSingleUser.pending]: (state, action) => {
    //     state.loading = true;
    //   },
    //   [getSingleUser.fulfilled]: (state, { payload }) => {
    //     state.loading = false;
    //     state.data = payload;
    //     state.isSuccess = true;
    //   },
    //   [getSingleUser.rejected]: (state, { payload }) => {
    //     state.loading = false;
    //     state.isSuccess = false;
    //     state.message = "failed";
    //   },
    // },
  });
  
  export default getSingleUserSlice;