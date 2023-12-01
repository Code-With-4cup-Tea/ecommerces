import React from 'react'
import my from '../images/OIP.png'
import { IoIosArrowForward } from "react-icons/io";
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'


const Home = () => {
  return (
    
        <>
             <div id='home' className='pt-32  md:flex  md:px-24 md:h-screen h-auto
             bg-gradient-to-b from-gray-800 to-black px-10 ' >
                  <div className='flex flex-col gap-4'>
                      <div>
                          {/* <motion.h1 className=' text-gray-300 font-extrabold text-5xl'>
                          I Am A Front End Developer</motion.h1> */}
                          <motion.h1 
                          className=' text-gray-300 font-extrabold text-5xl'
                           initial={{
                             x:"-100%",
                             opacity:0,
                           }}
                           whileInView={{
                            x:0,
                            opacity:1,
                           }}
                          >
                              Hi, I Am <br/> Rajesh Kumar
                          </motion.h1>
                      </div>
                      <div>
                      <h2 className=' text-gray-200 text-xl font-semibold '>
                         <Typewriter 
                           options={{
                              strings:["A Developer","A Designer","A Creator"],
                              autoStart:true,
                              loop:true,
                              wrapperClassName:"typewriterpara"
                           }}
                         />
                     </h2>
                     <p className=' text-white text-base font-semibold mt-10 '>
                        I am a front end developer, i like to building and desgining web application.
                        i like work on web application using technologies like React, java-script, 
                        Tailwindcss,  Framer-motion, html5, css3 etc..
                       
                       </p>
                      </div>
                      <div id='project' className='flex gap-3'>
                         <button className=' group text-white bg-gradient-to-r from-yellow-400
                          to-red-600 p-2 px-4 text-base mt-10
                         font-semibold rounded-md cursor-pointer flex  justify-center items-center gap-2'
                       

                         >Curriculum vitae <IoIosArrowForward  className='group-hover:rotate-90
                          duration-200' />
                         </button>

                        
                      </div>
                  </div>

                  <div className='flex justify-center items-start  '>
                        <motion.img
                        initial={{
                              y:0
                        }}
                        animate={{
                          y:[-10 ,10,-10 ]
                        }}
                        transition={{
                          repeat:Infinity,
                          duration:6,
                          ease:'linear'
                        }}
                         src={my} alt="my picture" className='rounded-full mt-10 w-auto h-auto
                         object-contain'/>
                  </div>
         
             </div>
        </>
   
  )
}

export default Home