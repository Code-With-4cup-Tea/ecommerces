import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {IoArrowForwardSharp} from 'react-icons/io5'
import { useSelector,useDispatch } from 'react-redux'
import { getWhishListConfiguration } from '../../store/wishlistslice'
import imagenot from '../../images/no.png'


const Wishlistpage = () => {
    const {url} =useSelector((state)=>state.home)
    const {items} = useSelector((state)=> state.wishlist)
    // console.log("items",items)
    const [afterdelete,setAfterDelete] = useState([])
    console.log("after deletess",afterdelete)

    console.log("itemsss",items)


//for filter 
    const filterFunction = (id)=>{
           setAfterDelete(items.filter((wishItemList)=>
                              wishItemList.id !== id
           ))
           console.log("id",id)
           filterd()
        
        
    }
    
//for update
  const dispatch = useDispatch()

//   useEffect(()=>{
//        dispatch( getWhishListConfiguration(afterdelete))
//   },[afterdelete])

const filterd = ()=>{
    dispatch( getWhishListConfiguration(afterdelete))
   
}


useEffect(()=>{
    localStorage.setItem("wishStorage",JSON.stringify(items))
  },[afterdelete])

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
                 className='w-24 h-7 p-2 text-red-500 font-extrabold  flex justify-start 
                text-4xl items-center cursor-pointer hover:text-white '>
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
                    items && items.map((wishitems)=>{
                        const posterUrl = wishitems.poster_path ? 
                        url.poster+wishitems.poster_path : imagenot;
                        return (
                            <div className='w-full p-1 px-2 rounded-lg bg-slate-800 flex justify-start 
                        items-start gap-3' key={wishitems.id} >
                   
                        <img src={posterUrl}
                        alt="" className='w-full h-36 max-w-[150px] rounded-semi object-contain'/>

                    <div className='flex flex-col item  h-36'>
                            <p className='text-base text-white font-semibold'>
                            {(wishitems.title || wishitems.name)}
                            </p>
                        <motion.div 
                             whileTap={{scale:0.75}}
                             className='text-base font-semibold bg-red-500 text-white p-1
                                  text-center  rounded-md '
                                  onClick={()=>filterFunction(wishitems.id)}>
                                     <button>Delete</button>
                        </motion.div>
                    </div>      
                </div>
                        )
                    })
                }
            </div>
                  
                    
        </div>

</motion.div>
     
  )
}

export default Wishlistpage