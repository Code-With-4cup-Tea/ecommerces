import React from 'react'
import my from '../../public/OIP.jpg'
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
  return (
    
        <>
             <div id='home' className='pt-32  md:flex  px-24' >
                  <div className='flex flex-col gap-4'>
                      <div>
                          <h1 className=' text-gray-300 font-extrabold text-5xl'>
                          I Am A Front End Developer</h1>
                      </div>
                      <div>
                      <p className=' text-gray-200 text-xl font-semibold '>
                         I have a knowledge of building and designing web application, i love to work 
                         on web application using technologies like React javascript tailwind css framer motion..
                      </p>
                      </div>
                      <div id='project'>
                         <button className=' group text-white bg-gradient-to-r from-yellow-400
                          to-red-600 p-2 px-4 text-base 
                         font-semibold rounded-md cursor-pointer flex  justify-center items-center gap-2'
                       

                         >Portfolio <IoIosArrowForward  className='group-hover:rotate-90 duration-200' /></button>
                      </div>
                  </div>

                  <div className='flex justify-center items-center mt-4'>
                        <img src={my} alt="my picture" className='rounded-full w-full h-full'/>
                  </div>
         
             </div>
        </>
   
  )
}

export default Home