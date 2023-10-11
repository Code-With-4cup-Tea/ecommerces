import React from 'react'
import logo from '../image/logo.png'
import avatar from '../image/avatar.png'
import {MdShoppingBasket} from "react-icons/md"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'


const Header = () => {

  const firebaseAuth = getAuth(app); //it will give athutication

  const provider = new GoogleAuthProvider();
  //login form when user will cliked on user icon
  const login = async ()=>{
        const response = await signInWithPopup(firebaseAuth,provider);
        console.log(response);
  }
  return (
    <header className='fixed w-screen z-50 p-6 px-16'>
                {/* desktop & tablet */}
                    <div className='hidden md:flex h-full w-full items-center justify-between  '>
                        <Link to='/' className='flex items-center gap-2'>
                                <img src={logo} alt='logo' className='w-8 object-cover '/>
                                <p className='text-headingColor text-xl font-bold'>City</p>
                        </Link>
                        <div className='flex  items-center gap-8'>
                        <ul className='flex items-center gap-8 '>
                            <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                            <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                            <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
                            <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
                        </ul>
                        <div className='relative flex items-center justify-center'>
                             <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer'/>
                              <div className='w-5 h-5 bg-cartNumBg  rounded-full flex items-center justify-center absolute -top-2 -right-2'> 
                               <p className='text-sm  text-white font-semibold '>2</p>
                              </div>
                        </div>
                              {/* when ever we clicking on user image  a pop window for credential will apear */}
                                <div className='relative'>
                                <motion.img 
                                src={avatar} whileTap={{scale:0.6}} alt="userprofile" 
                                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer' 
                                onClick={login}
                                />
                        
                                </div>
                        </div>
                    </div>
 
                {/* mobile */}
                <div className='flex md:hidden w-full h-full'></div>
    </header>
    
  )
}

export default Header