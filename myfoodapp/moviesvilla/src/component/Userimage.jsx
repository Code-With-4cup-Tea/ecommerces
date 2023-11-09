import React from 'react'
import users from '../images/users.png'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'

const Userimage = ({loginHandler}) => {
  const{users:userinfo} = useSelector((state)=>state.user)
  return (
    <div>
    <motion.img whileTap={{scale:0.6}} src={ userinfo ? userinfo.photoURL : users } alt="user"  
             className='w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-2xl cursor-pointer rounded-full' 
             onClick={loginHandler} />
    </div>
  )
}

export default Userimage