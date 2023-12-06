import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {IoArrowForwardSharp} from 'react-icons/io5'
import { useSelector,useDispatch } from 'react-redux'
import { getFilteredWhishListConfiguration,getCloseWhishList} from '../../store/wishlistslice'
import imagenot from '../../images/no.png'
let filteredItems = []


const Wishlistpage = () => {
    const{users:userinfo} = useSelector((state)=>state.user)
    const {items,cut} = useSelector((state)=> state.wishlist)
    console.log("items",items)
    console.log("cut",cut)
    
// this function call when click on delete , this function help to filter remain item
    const filterFunction = (id)=>{
      filteredItems = items.filter((wishItemList) =>
                wishItemList.id !== id      
     )
     filterdfunction(filteredItems)
 }
    

  const dispatch = useDispatch()

const filterdfunction = (filteredItems)=>{

    dispatch(getFilteredWhishListConfiguration(filteredItems))
    localStorage.setItem("wishStorage",JSON.stringify(filteredItems))
   
}




  return (
<motion.div 
         initial={{opacity:0,x:200}}
         animate={{opacity:1,x:0}}
        exit={{opacity:0,x:200}}
         className='w-full md:w-375 h-screen bg-slate-950 opacity-95 drop-shadow-md flex flex-col 
          fixed top-0 right-0 z-50'>
    <div className='flex w-full p-4 justify-between items-center '>
        <motion.div
               
                 whileTap={{scale:0.75}}
                 onClick={()=>dispatch(getCloseWhishList(!cut))}
                 className='w-24 h-7 p-2 text-red-500 font-extrabold  flex justify-start 
                text-4xl items-center cursor-pointer hover:text-white '
                >
                <IoArrowForwardSharp />
        </motion.div>
                
            <div className='w-20 h-7 text-white font-semibold '>
                    <p>Whishlist</p>
            </div>

            <motion.div 
                whileTap={{scaleX:3}}
                className='w-24 h-7 px-2 text-base font-semibold rounded-full cursor-pointer
                text-white bg-red-600'>
                    <button>Clear_All</button>
            </motion.div>
    </div>

{/* bottom section ********************************************/}
        <div className='w-full h-full bg-black    rounded-t-[2rem]  flex flex-col'>
            <div className='w-full h-510 md:h-510 px-6 py-10 flex flex-col gap-3 
                    overflow-y-scroll scrollbar-none'>
                          {/* for cart product */}




                          {
                            items && items.map((wishitems)=>(
                                <div className='w-full p-1 px-2 rounded-lg bg-slate-800 flex justify-start 
                        items-start gap-3' key={wishitems.id} >
                   
                        <img src={`https://image.tmdb.org/t/p/original${wishitems.poster_path}`}
                        alt="" className='w-full h-36 max-w-[150px] rounded-semi object-contain'/>

                    <div className='flex flex-col item  h-36'>
                            <p className='text-base text-white font-semibold'>
                            {(wishitems.title || wishitems.name)}
                            </p>
                        <motion.div 
                             whileTap={{scale:0.75}}
                             className='text-base font-semibold bg-red-500 text-white p-1
                                  text-center  rounded-md w-20'
                                  onClick={()=>filterFunction(wishitems.id)}>
                                     <button>Delete</button>
                        </motion.div>
                    </div>      
                </div>
                            ))
                          }
                
            </div>
                  
                    
        </div>

</motion.div>
     
  )
}

export default Wishlistpage