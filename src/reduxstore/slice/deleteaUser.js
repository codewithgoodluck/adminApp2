import { createSlice } from "@reduxjs/toolkit";
import { deleteUser} from "../reducer/allUserReducer";

const deleteUserSlice = createSlice({
    name: "deletUser",
    initialState: {
      data:[],
      loading: false,
      isSuccess: false,
      message: "",
    },
    reducers: {
        deletesingleUser:(state, action)=>{
            state.data = state.data.filter((user) => user.id !== action.payload.id) }
    },

    extraReducers: (builder) => {
      builder.addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      });

      builder.addCase(deleteUser.fulfilled,(state, { payload })=>{
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      });

      builder.addCase(deleteUser.rejected,(state, { payload })=>{
        state.loading = false;
        state.isSuccess = false;
        state.message = "failed";
      } )
    },
  


  
  });
  export const {deletesingleUser} = deleteUserSlice.actions;
  export default deleteUserSlice;