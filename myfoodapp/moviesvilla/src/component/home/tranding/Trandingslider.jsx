import React,{useRef}from 'react'
import { motion } from 'framer-motion'
import {MdOutlineNavigateBefore,MdNavigateNext }from 'react-icons/md'
import {AiTwotoneHeart} from 'react-icons/ai'
import { useState,useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import imagenot from '../../../images/no.png'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { getWhishListConfiguration } from '../../../store/wishlistslice'
import { whishList } from '../../../store/wishlistslice'


const Trandingslider = () => {
  //for fetching api data
  const [trending,setTrending] = useState(null)
 
 const dispatch = useDispatch()

  const {data,loading} = useFetch(`/trending/all/day`)
  
  useEffect(()=>{
       setTrending(data?.results)
      
  },[data])

  
    const whislistCall = (posterUrl,items)=>{
      dispatch(getWhishListConfiguration(posterUrl))
      dispatch(whishList(items))
 }
 

  // console.log("trending",data) 
  
  // console.log("trendingstate",trending)

  // useselector for access base url
  const {url} =useSelector((state)=>state.home)


  const [trandingscrollvalue,setTrandingScrollvalue] = useState(0)

  // const traindings = useRef();
  //   // console.log("rwo",rowCategory)
  //   useEffect(()=>{
  //     traindings.current.scrollLeft +=trandingscrollvalue;
  //   },[trandingscrollvalue])
  return (
       <div>
          <div className='w-full flex justify-start'>

           <p className='text-2xl font-semibold capitalize relative text-white before:absolute 
           before:rounded-lg before:w-16 before:h-1 before:-bottom-2 before:left-0  
           before:bg-gradient-to-tr from-yellow-200 to-yellow-600 before:content cursor-pointer'
            >Trending</p>

         
            </div>


          {/* *******************     tranding slider            ************************ */}
  <div
  className=' relative w-full my-5  flex  md:justify-start flex-wrap justify-center gap-5'>

      {
        trending && trending.map((items)=>{
          const posterUrl = items.poster_path ? 
          url.poster+items.poster_path : imagenot;
            return (
              <div key={items.id}
          className='w-225 min-w-[300px] md:min-w-[230px] md:w-40 h-auto shadow-md backdrop-blur-lg 
           hover:shadow-2xl rounded-md flex justify-center items-center flex-col '>
                <div  className='w-full overflow-hidden rounded-md cursor-pointer '>
                  <motion.img 
                     whileHover={{scale:1.1}}
                    src={posterUrl}
                     alt="img" />
                  </div>
                <div className='w-full flex  flex-col'>
                    <p className=' text-white '>{(items.title || items.name).slice(0,20)}</p>
                    <p className='text-gray-500  '>{dayjs(items.release_Date).format("MMM D,YYYY")}</p>
                </div>

                <motion.div 
                 whileTap={{scale:0.75}}
                className='absolute top-3 right-0 cursor-pointer '
                onClick={()=>whislistCall(posterUrl,items)}
                 >
                <AiTwotoneHeart className='text-red-500 text-4xl hover:text-yellow-400'/>
                </motion.div>
                
            </div>
            )
        })
      }

            
              </div>


             
       </div>
  )
}

export default Trandingslider