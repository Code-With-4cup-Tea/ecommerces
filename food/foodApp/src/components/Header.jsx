import React from 'react'
import logo from '../image/logo.png'
import avatar from '../image/avatar.png'
import {MdShoppingBasket} from "react-icons/md"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'




const Header = () => {

  const firebaseAuth = getAuth(app); //it will give athutication

  const provider = new GoogleAuthProvider();
  //login form when user will cliked on user icon

  const [{user},dispatch] =useStateValue(); //here dispatch is function

  const login = async ()=>{
        // const response = await signInWithPopup(firebaseAuth,provider);
        // console.log(response) //it give all data 
        
        // console.log(response.user);// we access only user which store in response

        // we docing dsturcring for access data
        //user ke ander se refreshtoken or provider data ko acess kiya

        const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider); 
        //when successfull login
        dispatch({
          type: actionType.SET_USER, //set_user fetch action type function from reducer.jsx whatever state gives by switch this will set
          user:providerData[0]        //user ke value wo set ho jaye jo providerData[0] se milega
                                     //yaha se email id name phone etc milaga 
                                     //now you will see in console add email id details
                                     //now we are fetching data and display on ui
        })

        //when user ek login ho jaye to uska data local storage main store ho jaye
        localStorage.setItem('user', JSON.stringify(providerData[0]));
        // user in information ko json.stringigy(prociderdata[0]) ko object main badal ke store kar dega

  }
  return (
    <header className='fixed w-screen z-50 p-6 px-16'>
                {/* desktop & tablet */ }
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
                                src={user ? user.photoURL: avatar} whileTap={{scale:0.6}} alt="user" 
                                className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full' 
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