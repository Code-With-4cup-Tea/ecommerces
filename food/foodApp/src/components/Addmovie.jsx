import { useReducer } from "react";
import React from "react";

const initialState = [
 
 
];

function init(){
  return initialState;
}

const ACTION_TYPE={
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

  return(
          <div className="flex justify-center items-center mt-3 flex-col w-[300px] h-[300px] mr-auto text-red-600 ">
             <h1 > ToDo List {state.length}</h1>
             Name:
             <input type="text" onBlur={(e)=>dispatch({type:ACTION_TYPE.ADD_TASK,payload:e.target.value })}/>
             <button onClick={()=>dispatch({type:ACTION_TYPE.RESET_TODOS,payload:initialState})}>RESET</button>
             {
              state.map((datas)=>
              <li key={datas.id} >{datas.name}
              <span className="text-green-800 ml-3"><button onClick={()=>dispatch({type:ACTION_TYPE.DELETE_TASK,payload:datas.id})}>delete</button></span>
              </li>
              
              
              )
             }
        </div>
  )
  

}

export default Addmovie