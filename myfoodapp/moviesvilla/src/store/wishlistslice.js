import {createSlice} from '@reduxjs/toolkit'
import { getWishLocalStorage } from './getLocalStorage'

const wishStorgeList = getWishLocalStorage()




const initialState = {
   
    items:wishStorgeList
}
     


export const wishlistslice = createSlice({
       name:"wishlist",
       initialState,
       reducers:{
          getWhishListConfiguration(state,action){
            state.items.push(action.payload)
          },
          
       }
})

export const{getWhishListConfiguration,whishList} = wishlistslice.actions;
export default wishlistslice.reducer;

