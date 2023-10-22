import React, { useState } from 'react'
import logo from '../images/logo.png'
import {BiCart} from 'react-icons/bi'
import users from '../images/users.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {LiaUserEditSolid} from 'react-icons/lia'
import {AiOutlineLogout} from 'react-icons/ai'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStatevalue } from '../context/Stateprovider'
import { actionType } from '../context/reducer'


console.log("this is header.jsx")
const Header = () => {

    const firebaseauth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const [{user},dispatch] = useStatevalue()

    console.log("user before login function");

    const[ismenu ,isSetmenu] = useState(false);

    

    const login = async ()=>{
       if(!user){
         // const response = await signInWithPopup(firebaseauth,provider);
        // console.log(response); //give user information 
        // below we d structred of user
        console.log("inside login function")
        const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseauth,provider);
        dispatch({
            type:actionType.SET_USER,
            user:providerData[0]
           
        })
        console.log("outside dispatch")

        localStorage.setItem("user",JSON.stringify(providerData[0]))
       } else {
        isSetmenu(!ismenu);
       }

       

    }

    const logout = ()=>{
           isSetmenu(false);
           localStorage.clear();
           dispatch({
            type:actionType.SET_USER,
            user:null
           })
    }
  return (
   <>
            <header className='fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16 '>
                    <div className='hidden md:flex h-full w-full items-center justify-between' >
                            <Link to='/' className='flex justify-center items-center gap-2'>
                                <img src={logo} alt="logo" className='w-12 object-cover'/>
                                <p className= 'text-orange-500 font-bold'>Bhukha<span className='text-yellow-500'> शेर</span></p>
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

                                <div className='relative'>
                                    <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : users} alt="user"  
                                    className='w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-2xl cursor-pointer rounded-full' 
                                    onClick={login} />

                                    {
                                        ismenu && (
                                            <motion.div 
                                            initial={{opacity:0, scale:0.6}}
                                            animate={{opacity:1, scale:1}}
                                            exit={{opacity:0, scale:0.6}}
                                            className='bg-gray-50 rounded-xl flex flex-col gap-4 px-3 py-2 absolute shadow-xl  -right-10 top-9'>
                                                {
                                                    user && user.email === "itshakti2017@gmail.com" && (
                                                        <Link to={"/createitem"}>
                                                        <button className='flex justify-center items-center gap-1  hover:text-orange-500'>Add_Item <LiaUserEditSolid/></button>
                                                        </Link>
                                                    )
                                                }
                                                <button className='flex justify-center items-center gap-1  hover:text-orange-500' onClick={logout}>Logout <AiOutlineLogout/></button>
                                    </motion.div>
                                        )
                                    }
                                </div>

                            </div>
                    </div>
            {/* for mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
            
                            <div className='flex items-center relative'>
                                     <BiCart className=' text-2xl'/>
                                     <p className='text-sm  text-white font-semibold bg-orange-500 rounded-full w-4 text-center absolute -top-2 -right-0.5'>2</p>
                                </div>

                            <Link to='/' className='flex justify-center items-center gap-2'>
                                <img src={logo} alt="logo" className='w-12 object-cover'/>
                                <p className= 'text-orange-500 font-bold'>Bhukha<span className='text-yellow-500'> शेर</span></p>
                            </Link>
                            <div className='relative'>
                                    <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : users} alt="user"  
                                    className='w-8 min-w-[32px] h-8 min-h-[32px] drop-shadow-2xl cursor-pointer rounded-full' 
                                    onClick={login} />

                                    {
                                        ismenu && (
                                            <motion.div 
                                            initial={{opacity:0, scale:0.6}}
                                            animate={{opacity:1, scale:1}}
                                            exit={{opacity:0, scale:0.6}}
                                            className='bg-gray-50 rounded-xl flex flex-col gap-4 px-3 py-2 absolute shadow-xl  -right-1 top-9'>
                                                {
                                                    user && user.email === "itshakti2017@gmail.com" && (
                                                        <Link to={"/createitem"}>
                                                        <button className='flex justify-center items-center gap-1  hover:text-orange-500'>Add_Item <LiaUserEditSolid/></button>
                                                        </Link>
                                                    )
                                                }
                                                <ul className='flex  gap-8 flex-col'>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Home</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Menu</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >About</li>
                                    <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all ease-in-out cursor-pointer' >Service</li>

                                </ul>
                                                <button className='flex justify-center items-center gap-1  hover:text-black bg-orange-500 text-white hover:rounded-md transition-all ease-in-out duration-200 px-3 py-1' onClick={logout}>Logout <AiOutlineLogout/></button>
                                    </motion.div>
                                        )
                                    }
                                </div>
            </div>
              
            </header>
   </>
  )
}

export default Header