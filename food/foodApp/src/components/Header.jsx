import React from 'react'
import logo from '../image/logo.png'
import avatar from '../image/avatar.png'
import {MdShoppingBasket} from "react-icons/md"

const Header = () => {
  return (
    <header className='fixed w-screen z-50 p-6 px-16'>
                {/* desktop & tablet */}
                    <div className='hidden md:flex h-full w-full items-center justify-between  '>
                        <div className='flex items-center gap-2'>
                                <img src={logo} alt='logo' className='w-8 object-cover '/>
                                <p className='text-headingColor text-xl font-bold'>City</p>
                        </div>
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
                              <img src={avatar} alt="userprofile" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl' />
                        </div>
                    </div>
 
                {/* mobile */}
                <div className='flex md:hidden w-full h-full'></div>
    </header>
    
  )
}

export default Header