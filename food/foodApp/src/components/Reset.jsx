import React from 'react'
import { ACTION_TYPE } from './Addmovie'
import { useContext } from 'react'
import UserContext from '../context/userContext'

const Reset = () => {

    const {dispatch,initialState} = useContext(UserContext)
  return (
    <div><button onClick={()=>dispatch({type:ACTION_TYPE.RESET_TODOS,payload:initialState})}>Reset</button></div>
  )
}

export default Reset