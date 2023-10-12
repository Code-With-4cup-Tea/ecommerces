import React from "react";
import { createContext,useContext,useReducer } from "react";



export const StateContext = createContext();

export const StateProvider = ({initialState,reducer,children})=>(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
              {children} 
        </StateContext.Provider>
);

//creating custom hooks

export const useStateValue = ()=>{

    return useContext(StateContext);

}