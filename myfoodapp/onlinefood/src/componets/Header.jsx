import React from 'react'
import logo from '../images/logo.png'
import {BiCart} from 'react-icons/bi'
import user from '../images/user.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
const Header = () => {
  return (
   <>
            <div className='fixed w-screen z-50 p-6 px-16 '>
                    <div className='hidden md:flex h-full w-full items-center justify-between' >
                            <Link to='/' className='flex justify-center items-center gap-2'>
                                <img src={logo} alt="logo" className='w-12 object-cover'/>
                                <p className= 'text-orange-500 font-bold'>Foddy<span className='text-yellow-500'>Boy</span></p>
                            </Link>
                            <div className='flex items-center gap-8 '>
                                <ul className='flex items-center gap-8'>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Home</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Menu</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >About</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Service</li>

                                </ul>
                                <div className='flex items-center relative'>
                                     <BiCart className=' text-2xl'/>
                                     <p className='text-sm  text-white font-semibold bg-orange-500 rounded-full w-4 text-center absolute -top-2 -right-0.5'>2</p>
                                </div>

                                <div>
                                    <motion.img  whileTap={{scale:0.6}} src={user} alt="user"  className='w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-2xl cursor-pointer rounded-full'/>
                                </div>
                            </div>
                    </div>
              
            </div>
   </>
  )
}

export default Header