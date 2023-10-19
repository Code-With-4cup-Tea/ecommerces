import React from "react";
import { createContext,useContext,useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./initialState";
// import reducer from "./reducer";
// import { Initialstate } from "./Initialstate";

export const StateContext  = createContext();
console.log("inside stateprovider");
console.log("outside of stateprovider" ,"reducer", reducer ,"initialstate",initialState)

export const StateProvider = ({reducer,initialState,children})=>(

       
     <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        {
            console.log("reducer is" ,reducer,"initialstate is" , initialState)
        }
    </StateContext.Provider>

)

//custome hooks
export const useStatevalue = ()=>{
    return useContext(StateContext);
   
}