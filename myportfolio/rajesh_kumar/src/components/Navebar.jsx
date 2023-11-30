import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
// import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'

const Navebar = () => {
  return (
    <>
        <div className='flex text-gray-300 justify-between items-center p-4 px-12 font-semibold 
    text-base fixed w-full  h-14  bg-black z-30 '>
    
        <section className='text-white text-2xl'><h1>Rajesh</h1></section>
        <section >
             <ul className='md:flex gap-8 hidden'>
              <Link to='home' smooth duration={500}><li className='cursor-pointer 
              hover:scale-105 duration-200'>Home</li></Link>
               <Link to='skill' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200'>Skills</li></Link>
              <Link to='project' smooth duration={500}><li className='cursor-pointer hover:scale-105 
              duration-200'>Project</li></Link> 
               <Link to='education' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200'>Education</li></Link>
               <Link to='contact' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200'>Contact</li></Link>
            </ul>
        </section>

        {
            // for mobile menu
        }

        <div className='md:hidden'>
             <MdMenu className='text-3xl text-gray-200 cursor-pointer hover:scale-105
              duration-200' 
              onClick={()=>setActive(!active)} />
        </div>

        
    </div>
    </>
  )
}

export default Navebar