import {createSlice} from '@reduxjs/toolkit'






const initialState = {
    imgurl:[],
    items:[]
}
     


export const wishlistslice = createSlice({
       name:"wishlist",
       initialState,
       reducers:{
          getWhishListConfiguration(state,action){
                state.imgurl.push(action.payload)
          },
          whishList(state,action){
            state.items.push(action.payload)
          }
       }
})

export const{getWhishListConfiguration,whishList} = wishlistslice.actions;
export default wishlistslice.reducer;

