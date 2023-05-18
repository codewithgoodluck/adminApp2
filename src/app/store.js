import { configureStore } from "@reduxjs/toolkit";
import {user} from "../api/apiSlice"
import {countries} from "../api/apiSlice"
import { persistReducer, persistStore } from 'redux-persist';



export const store = configureStore({
   
    reducer:{
        [user.reducerPath]: user.reducer,
        [countries.reducerPath]: countries.reducer,
    },
    
    middleware: (getDefault) => getDefault().concat(user.middleware),
    middleware: (getDefault) => getDefault().concat(countries.middleware),
})