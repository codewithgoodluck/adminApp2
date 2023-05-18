import { configureStore } from "@reduxjs/toolkit";
import getallUserSlice from "./slice/alluserSlice";
import getSingleUser from "./slice/singleUserSlice";
const store = configureStore({
  reducer:{
    app: getallUserSlice.reducer,
},
});

export default store;




//   reducer: {
//     app: getallUserSlice.reducer,
//     // app2:getSingleUser.reducer,
//   },
