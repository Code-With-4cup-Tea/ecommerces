import {createSlice} from '@reduxjs/toolkit'






const initialState = {
    url:{},
    catag:{}
}
     


export const homeSlice = createSlice({
       name:"home",
       initialState,
       reducers:{
          getApiConfiguration(state,action){
                state.url = action.payload
          },
          getCatog(state,action){
            state.catag = action.payload
          }
       }
})

export const{getApiConfiguration,getCatog} = homeSlice.actions;
export default homeSlice.reducer;

