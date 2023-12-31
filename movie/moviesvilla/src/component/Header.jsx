import React, { useState } from 'react'
import logo from '../images/movies.png'
import {AiTwotoneHeart} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import { Link, json } from 'react-router-dom'
import Userimage from './Userimage'
import { motion } from "framer-motion"
// import {  createContext, useContext,useReducer, useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../fireBaseConfig'
import { useDispatch } from 'react-redux'
import { login,logout } from '../store/userSlice'
import { getCloseWhishList } from '../store/wishlistslice'
import { useSelector } from 'react-redux'

const Header = () => {
    const {items,cut} = useSelector((state)=> state.wishlist)
    const firebaseauth = getAuth(app);
    const provider = new GoogleAuthProvider();
    

    const dispatch = useDispatch()

    const [active,setActive] = useState(false)
    const{users:userinfo} = useSelector((state)=>state.user)

    const loginHandler =async ()=>{
        if(!userinfo){
    //    console.log(details.user.providerData)
      const {user:{providerData}} = await signInWithPopup(firebaseauth,provider)
    //   console.log(providerData[0])

      dispatch(login(providerData[0]))

       //*********for local storage******************************** */
       //************************************************************** */
          
        localStorage.setItem("movie",JSON.stringify(providerData[0]))

       //****************************************************************** */
       /******************************************************************** */
        }
        else {
            setActive(!active)
        }
    }

    // for logout function
    const logoutHandler = ()=>{
        setActive(false)
        localStorage.clear()
        dispatch(logout())

    }
  return (
    <header className='fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16 '>
        <div className='hidden md:flex h-full w-full items-center justify-between' >
             <Link to='/' className='flex justify-center items-center gap-2'>
                 <img src={logo} alt="logo" className='w-12 object-cover'/>
                 <p className= 'text-orange-500 font-bold'>Movies<span className='text-yellow-500'>villa
                 </span></p>
             </Link>
        <div className='flex items-center gap-8 '>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all 
                ease-in-out cursor-pointer' >Home</li>
                <Link to='/About'><li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all 
                ease-in-out cursor-pointer' >About_Me</li></Link>
                
            </ul>
                                
        <div className='flex items-center relative'>
             <AiTwotoneHeart 
              onClick={()=>dispatch(getCloseWhishList(!cut))}
             className=' text-2xl text-red-600 cursor-pointer '/>
             {
                items && (
                    <p className='text-sm  text-white font-semibold bg-red-500 rounded-full w-4 text-center 
             absolute -top-2 -right-0.5'>{items.length}</p>
                )
             }
        </div>

        <div className='relative'>
            <Userimage  loginHandler = {loginHandler}/>
                                            
                                                
        {
            active && (
                <motion.div 
           initial={{opacity:0, scale:0.6}}
           animate={{opacity:1, scale:1}}
          exit={{opacity:0, scale:0.6}}
          className='bg-gray-50 rounded-xl flex flex-col gap-4 px-3 py-2 absolute shadow-xl 
           -right-10 top-9'>
                                                        
                                                        
        <Link to={"/home"}>
           <button className='flex justify-center items-center gap-1  hover:text-orange-500' >
           {userinfo.displayName}
            
           </button>

        </Link>
           <button className='flex justify-center items-center gap-1  hover:text-orange-500' 
           onClick={logoutHandler}
           >Logout
          <AiOutlineLogout/>
          </button>
        </motion.div>
            )
        }
    </div>
        </div>        
            </div>
                    {  /* mobile menu*/ }


    <div className='flex items-center justify-between md:hidden w-full h-full'>
        <Link to='/home' className='flex justify-center items-center gap-2'>
            <img src={logo} alt="logo" className='w-12 object-cover'/>
            <p className= 'text-orange-500 font-bold'>Movies<span className='text-yellow-500'>villa
            </span></p>
        </Link>

    <div className='flex gap-6'>
        <div className='flex items-center relative'>
            <AiTwotoneHeart 
             onClick={()=>dispatch(getCloseWhishList(!cut))}
            className=' text-2xl  text-red-600 cursor-pointer'/>
            {
                items && (
                    <p className='text-sm  text-white font-semibold bg-orange-500 rounded-full w-4 text-center
             absolute -top-2 -right-0.5'>{items.length}</p>
                )
            }
        </div>
    <div className='relative'>
        <Userimage loginHandler = {loginHandler} />                                        
           {
            active && (
                <motion.div 
           initial={{opacity:0, scale:0.6}}
           animate={{opacity:1, scale:1}}
           exit={{opacity:0, scale:0.6}}
           className='bg-bodyColor rounded-xl flex flex-col gap-4 px-3 py-2 absolute shadow-xl 
            -right-1 top-9'>                                                   
        <Link to={"/createitem"}>
              <button className='flex justify-center items-center gap-1 
              text-textColor hover:text-orange-500' >{userinfo.displayName}
              </button>
        </Link>                                              
             <ul className='flex  gap-8 flex-col'>
             <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all
              ease-in-out cursor-pointer' >Home</li>
             <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all
              ease-in-out cursor-pointer' >Menu</li>
             <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all
              ease-in-out cursor-pointer' >About</li>
             <li className='text-base text-textColor hover:text-orange-500 duration-100 transition-all
              ease-in-out cursor-pointer' >Service</li>

            </ul>
            <button className='flex justify-center items-center gap-1  hover:text-black bg-orange-500
             text-white hover:rounded-md transition-all ease-in-out duration-200 px-3 py-1'
             onClick={logoutHandler}
              >Logout 

             <AiOutlineLogout/>
             </button>
        </motion.div>
            )
           }
                                        
                                    
        </div>
          </div>
            </div>
              </header>
  )
}

export default Header