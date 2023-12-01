import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'


const Navebar = () => {
    const [active,setActive] = useState(false)
    
         
    
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
               duration-200'>Curriculum vitae</li></Link>
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
        {
            // mobile menu benar

        }

       {
         active && (
            <div className='md:hidden w-full h-screen bg-black flex justify-start gap-10
         items-center mt-3
        fixed top-0 z-40 flex-col'>
            <section><h1 className='text-white text-2xl'>Rajesh</h1></section>
           
            <section >
             <ul className='flex gap-8 flex-col text-white justify-center items-center'>
             <Link to='home' smooth duration={500}><li className='cursor-pointer 
              hover:scale-105 duration-200' onClick={()=>setActive(!active)}>Home</li></Link>
               <Link to='skill' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200' onClick={()=>setActive(!active)}>Skills</li></Link>
              <Link to='project' smooth duration={500}><li className='cursor-pointer hover:scale-105 
              duration-200' onClick={()=>setActive(!active)}>Project</li></Link> 
               <Link to='education' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200' onClick={()=>setActive(!active)}>Education</li></Link>
               <Link to='contact' smooth duration={500}><li className='cursor-pointer hover:scale-105 
               duration-200' onClick={()=>setActive(!active)}>Contact</li></Link>
                
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