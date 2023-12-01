import {createSlice} from '@reduxjs/toolkit'
import { getWishLocalStorage } from './getLocalStorage'

const wishStorgeList = getWishLocalStorage()




const initialState = {
   
    items:wishStorgeList,
    cut:false
}
     


export const wishlistslice = createSlice({
       name:"wishlist",
       initialState,
       reducers:{
          getWhishListConfiguration(state,action){
            state.items.push(action.payload)
          },
            getFilteredWhishListConfiguration(state,action){
              state.items=action.payload
                
            },
            getCloseWhishList(state,action){
                state.cut = action.payload
            }
          }
          
       }
)

export const{getWhishListConfiguration,whishList, getFilteredWhishListConfiguration, getCloseWhishList} = wishlistslice.actions;
export default wishlistslice.reducer;

