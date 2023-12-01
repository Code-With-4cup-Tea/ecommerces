import React, { useEffect, useState,useRef} from 'react'
import {MdOutlineNavigateBefore,MdNavigateNext }from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import { UseUserContext } from '../context/Usercontex'
import { ACTION_TYPE } from '../reducer/Userrreducer'

import { motion } from 'framer-motion'

const Wraps = () => {
    const [burgerscrollvalue,setBurgerScrollvalue] = useState(0)
    const {user,foodItems,dispatch,cartItems} = UseUserContext();
    const [wrapslist,setWrapsList]  = useState()

   
    const wrapss = foodItems?.filter((c)=>c.category ==="wraps")
    
     //for update cart value
     const addToCart = (wrapsDetail)=>{
      if(!cartItems.find((added)=>added.id === wrapsDetail.id)){
        dispatch({
          type:ACTION_TYPE.SET_CART_ITEMS,
          cartItems:[...cartItems,wrapsDetail]
        });
        setWrapsList(cartItems)
      }else{
        alert("🥫This wrap Already Added🥫")
      }

        
    }
// for local storage update
 //when setCartlist update than local storage update 
 useEffect(()=>{
    localStorage.setItem("cartitem",JSON.stringify(cartItems))
},[wrapslist])



//for scroll 
const rowBurger = useRef();
    // console.log("rwo",rowCategory)
    useEffect(()=>{
        rowBurger.current.scrollLeft += burgerscrollvalue;
    },[burgerscrollvalue])

  return (
    <div className='w-full my-6'>
            <div className='w-full flex justify-between items-center'>
            <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute 
            before:rounded-lg 
            before:w-16 before:h-1 before:-bottom-2 before:left-0  before:bg-gradient-to-tr
             from-orange-200 to-orange-600 before:content  '>Wraps</p>
            <div className='md:flex  items-center flex gap-3 '>
            <div className='hidden md:flex gap-3'>
               <motion.div 
               onClick={()=>setBurgerScrollvalue(-600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-orange-600 to-orange-300  text-white font-extrabold cursor-pointer
                 hover:bg-orange-700'>
                       <MdOutlineNavigateBefore />
               </motion.div>
               <motion.div 
               onClick={()=>setBurgerScrollvalue(600)}
               whileTap={{scale:0.75}}
               className='w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br
                from-orange-300 to-orange-600  text-white font-extrabold cursor-pointer
                 hover:bg-orange-700'>
                       <MdNavigateNext/>
               </motion.div>
            </div>
               
         
            </div>
            
        </div>
        {
            /*burger scroller    */
        }

        <div ref={rowBurger}
        className='w-full my-12 overflow-x-scroll scrollbar-none  
                    scroll-smooth flex items-center gap-2'>
            
            {
               wrapss && wrapss.map((wrapsDetail)=>
                
                <div key={wrapsDetail.id}
            className='w-300 min-w-[250px] md:min-w-[300px] md:w-40 h-auto 
             shadow-md backdrop-blur-lg border border-1 hover:shadow-2xl
            border-gray-200 rounded-md flex justify-center items-center flex-col '>
                    <div  className='w-full overflow-hidden rounded-md cursor-pointer '>
                    <motion.img 
                     whileHover={{scale:1.1}}
                    src={wrapsDetail.imageURL}
                     alt={wrapsDetail.title} 
                    
                     />
                    </div>
                    <div className='w-full flex justify-center items-center flex-col'>
                    <p className='text-lg font-semibold my-3'>{wrapsDetail.title}</p>
                    <p className='text-base font-semibold my-3'>{wrapsDetail.description}</p>
                    
                    </div>
                    <div className='w-full flex justify-between'>
                    <p className='text-lg font-semibold my-3 flex items-center'>
                    <FaRupeeSign/>{wrapsDetail.price}</p>
                    <motion.button 
                     whileTap={{scale:0.75}}
                    className=' bg-gradient-to-br from-orange-600 to-orange-300 text-white px-10 
                     rounded-md font-semibold'
                    onClick={()=>addToCart(wrapsDetail)}
                    >ADD</motion.button>
                    </div>
            </div>
                
                )
            }
           
            
            
        
      </div>
    </div>
  )
}

export default Wraps