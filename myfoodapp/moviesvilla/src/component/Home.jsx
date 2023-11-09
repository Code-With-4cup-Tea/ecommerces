import React from 'react'

import { useSelector } from 'react-redux'
// import fetchUsersDetails from '../store/userSlice'

const Home = () => {
    

    const{users:userinfo} = useSelector((state)=>state.user)
    console.log(userinfo)


  return (
    <div className='text-textColor '>Home</div>
  )
}

export default Home