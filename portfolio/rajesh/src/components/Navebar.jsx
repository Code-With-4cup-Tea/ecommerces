import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Navebar = () => {
    const [active,setActive] = useState(false)
    
         
    
  return (
    <>
 <div className='flex text-gray-300 justify-between items-center p-4 px-12 font-semibold 
    text-base fixed w-full  h-14  bg-black z-30 '>
    
        <section className='text-white text-2xl'><h1>Rajesh</h1></section>
        <section >
             <ul className='md:flex gap-8 hidden'>
               <li id='home' className='cursor-pointer hover:scale-105 duration-200'>Home</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Skills</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Project</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Education</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Contact</li>
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
        {
            // mobile menu benar

        }

       {
         active && (
            <div className='md:hidden w-full h-screen bg-black flex justify-start gap-10
         items-center mt-3
        absolute top-0 z-40 flex-col'>
            <section><h1 className='text-white text-2xl'>Rajesh</h1></section>
           
            <section >
             <ul className='flex gap-8 flex-col text-white justify-center items-center'>
               <li className='cursor-pointer hover:scale-105 duration-200'>Home</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Skills</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Project</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Education</li>
               <li className='cursor-pointer hover:scale-105 duration-200'>Contact</li>
                
             </ul>
           </section>

        <div>
             <IoMdClose  className='text-4xl text-gray-200 cursor-pointer hover:scale-105
              duration-200' 
              onClick={()=>setActive(!active)}
              />
        </div>

        </div>
         )
       }
    </>
   
  )
}

export default Navebar