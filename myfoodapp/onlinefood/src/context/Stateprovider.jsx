import React from "react";
import { createContext,useContext,useReducer } from "react";
// import reducer from "./reducer";
// import { initialState } from "./initialState";
// import reducer from "./reducer";
// import { Initialstate } from "./Initialstate";

export const StateContext  = createContext();

export const StateProvider = ({reducer,initialState,children})=>(

       
     <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
       
    </StateContext.Provider>

)

//custome hooks
export const useStatevalue = ()=>{
    return useContext(StateContext);
   
}