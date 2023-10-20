import { useReducer } from "react";
import React from "react";
import Title from "./Title";
import Reset from "./Reset";
import UserContext from "../context/userContext";


const initialState = [
 
 
];

function init(){
  return initialState;
}

export const ACTION_TYPE={
  ADD_TASK:'add_task',
  DELETE_TASK:'delete_task',
  RESET_TODOS:"reset_todos"
}

function reducer (state,action){
    switch(action.type){
      case ACTION_TYPE.ADD_TASK:
        return[
          ...state,
          {   
              id:state.length,
              name:action.payload,
          }
        ]

       
          

      case ACTION_TYPE.DELETE_TASK:
        return state.filter(d=>d.id!==action.payload)


      case ACTION_TYPE.RESET_TODOS:
        return init(action.payload)


      default: return state;
    }
}

const Addmovie = ()=>{

  const[state,dispatch] = useReducer(reducer,initialState,init)

  const data={
    state,dispatch
  }

  return(
    <UserContext.Provider value={data}>
          <div className="flex justify-center items-center mt-3 flex-col w-[300px] h-[300px] mr-auto text-red-600 ">
             <Title />
             Name:
             <input type="text" onBlur={(e)=>dispatch({type:ACTION_TYPE.ADD_TASK,payload:e.target.value })}/>
             <Reset dispatch={dispatch} initialState={initialState}/>
             {
              state.map((datas)=>
              <li key={datas.id} >{datas.name}
              <span className="text-green-800 ml-3"><button onClick={()=>dispatch({type:ACTION_TYPE.DELETE_TASK,payload:datas.id})}>delete</button></span>
              </li>
              
              
              )
             }
        </div>
        </UserContext.Provider>
  )
  

}

export default Addmovie