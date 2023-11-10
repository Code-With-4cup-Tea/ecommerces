import { configureStore } from "@reduxjs/toolkit";
import userReducers from './userSlice'
import homeReducers from './home'
import wishlistReducers from './wishlistslice'



export const store = configureStore({
         reducer:{
            user: userReducers,
            home:homeReducers,
            wishlist:wishlistReducers
         }
})

export default store;