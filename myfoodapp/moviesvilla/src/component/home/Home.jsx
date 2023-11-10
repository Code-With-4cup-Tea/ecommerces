import React from 'react'
import Herobaner from './Herobaner'
import { useSelector } from 'react-redux'
import Trandingslider from './tranding/trandingslider'
// import fetchUsersDetails from '../store/userSlice'

const Home = () => {
    

    const{users:userinfo} = useSelector((state)=>state.user)
    console.log(userinfo)


  return (
    <div>

    <Herobaner/>
    <Trandingslider/>
    </div>
  )
}

export default Home