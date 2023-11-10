import React,{useRef}from 'react'
import { motion } from 'framer-motion'
import {MdOutlineNavigateBefore,MdNavigateNext }from 'react-icons/md'
import {AiTwotoneHeart} from 'react-icons/ai'
import { useState,useEffect } from 'react'


const Trandingslider = () => {
  const [trandingscrollvalue,setTrandingScrollvalue] = useState(0)

  const traindings = useRef();
    // console.log("rwo",rowCategory)
    useEffect(()=>{
      traindings.current.scrollLeft +=trandingscrollvalue;
    },[trandingscrollvalue])
  return (
       <div>
          <div className='w-full flex justify-between items-center'>

           <p className='text-2xl font-semibold capitalize relative text-white before:absolute 
           before:rounded-lg before:w-16 before:h-1 before:-bottom-2 before:left-0  
           before:bg-gradient-to-tr from-yellow-200 to-yellow-600 before:content '>Trending</p>

          <div className='md:flex  items-center flex gap-3 '>
            <div className='hidden md:flex gap-3'>

               <motion.div 
               onClick={()=>setTrandingScrollvalue(-600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-yellow-600 to-yellow-300  text-white font-extrabold cursor-pointer
                '>
               <MdOutlineNavigateBefore />
              </motion.div>

               <motion.div 
               onClick={()=>setTrandingScrollvalue(600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-yellow-300 to-yellow-600  text-white font-extrabold cursor-pointer
                '>
                <MdNavigateNext/>
               </motion.div>
            </div>
               </div>
                 </div>


          {/* *******************     tranding slider            ************************ */}
  <div  ref={traindings}
  className=' relative w-full my-5 overflow-x-scroll scrollbar-none scroll-smooth flex items-center gap-2'>

    <div 
          className='w-225 min-w-[200px] md:min-w-[200px] md:w-40 h-auto shadow-md backdrop-blur-lg 
           hover:shadow-2xl rounded-md flex justify-center items-center flex-col '>
                <div  className='w-full overflow-hidden rounded-md cursor-pointer '>
                  <motion.img 
                     whileHover={{scale:1.1}}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/72be5232039857.566bcebd62cb8.jpg"
                     alt="img"   />
                  </div>
                <div className='w-full flex  flex-col'>
                    <p className=' text-white '>The Last Of Us</p>
                    <p className='text-gray-500  '>jan 24 ,2023</p>
                </div>

                <motion.div 
                 whileTap={{scale:0.75}}
                className='absolute top-0 right-0 cursor-pointer ' >
                <AiTwotoneHeart className='text-red-500 text-4xl hover:text-yellow-400'/>
                </motion.div>
                
            </div>

            
              </div>


             
       </div>
  )
}

export default Trandingslider