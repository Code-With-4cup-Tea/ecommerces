import {createSlice} from '@reduxjs/toolkit'
import { getLocalStorage } from './getLocalStorage'



const  fetchLocalStorageData = getLocalStorage()

const initialState = {
    users:fetchLocalStorageData,
}
     


export const userSlice = createSlice({
       name:"user",
       initialState,
       reducers:{
          login(state,action){
                state.users = action.payload
          },
          logout(state,action){
            state.users = action.payload
          }
       }
})

export const{login,logout} = userSlice.actions;
export default userSlice.reducer;

