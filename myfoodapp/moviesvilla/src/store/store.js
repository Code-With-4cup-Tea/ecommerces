import { configureStore } from "@reduxjs/toolkit";
import userReducers from './userSlice'
import homeReducers from './home'



export const store = configureStore({
         reducer:{
            user: userReducers,
            home:homeReducers
         }
})

export default store;