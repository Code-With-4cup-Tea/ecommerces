import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext';




const Title = () => {
    const {state}= useContext(UserContext);
  return (
    <div>
         <h1 >ToDo List{state.length}</h1>
    </div>
  )
}

export default Title