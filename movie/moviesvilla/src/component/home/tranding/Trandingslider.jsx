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
  const [pageno,setPageno] = useState(1)
 
  
  console.log("page number is",pageno)
  const [trending,setTrending] = useState(null)

  const [state,setState] = useState(null)
  const [noodlelist,setNoodleList]  = useState()
 console.log("trending",trending)
 const dispatch = useDispatch()

  const {data,loading} = useFetch(state)
  
  useEffect(()=>{
       setTrending(data?.results)
      
  },[data,pageno])

 
  useEffect(()=>{
      setState(`/trending/all/day?&page=${pageno}`)
  },[])

  const {items} = useSelector((state)=> state.wishlist)


    const whislistCall = (item)=>{

      if(!items.find((added)=>added.id === item.id)){
        console.log("items",item)
        dispatch(getWhishListConfiguration(item))
     alert("❤️Added to WishLish❤️")
     setNoodleList(item)} 
     else{
       alert("❌Movie all ready Added❌")
     }
    
    
      
 }
 
 useEffect(()=>{
  localStorage.setItem("wishStorage",JSON.stringify(items))
},[noodlelist])

// for checking items is already added in wishlist if yes than heart disabled
    
  // console.log("trending",data) 
  
  // console.log("trendingstate",trending)

  // useselector for access base url
  const {url} =useSelector((state)=>state.home)


  // const [trandingscrollvalue,setTrandingScrollvalue] = useState(0)

  // const traindings = useRef();
  //   // console.log("rwo",rowCategory)
  //   useEffect(()=>{
  //     traindings.current.scrollLeft +=trandingscrollvalue;
  //   },[trandingscrollvalue])

  // if allready then disabled 
  
  return (
       <div>
          <div className='w-full flex justify-center gap-8 flex-wrap'>

          <motion.div 
          whileTap={{scale:0.75}}
          className={`w-20 rounded-full h-10 px-12 hover:bg-black hover:text-white
            font-semibold flex justify-center items-center
           ${
            state ===`/trending/all/day?&page=${pageno}` ? "bg-red-500" : "bg-yellow-400"
           }
          `}
          onClick={()=>setState(`/trending/all/day?&page=${pageno}`)}
          >
          <button>Trending</button>
          </motion.div>

           <motion.div 
          whileTap={{scale:0.75}}
          className={`w-20 rounded-full h-10 px-12 hover:bg-black hover:text-white
            font-semibold flex justify-center items-center
           ${
            state ===`/movie/popular?&page=${pageno}` ? "bg-red-500" : "bg-yellow-400"
           }
          `}
          onClick={()=>setState(`/movie/popular?&page=${pageno}`)
          }
        
          >
          <button>Popular</button>
          </motion.div>

          <motion.div 
          whileTap={{scale:0.75}}
          className={`w-20 rounded-full h-10 px-12 hover:bg-black hover:text-white
            font-semibold flex justify-center items-center
           ${
            state ===`/movie/top_rated?&page=${pageno}` ? "bg-red-500" : "bg-yellow-400"}`}
          onClick={()=>setState(`/movie/top_rated?&page=${pageno}`)}
         
          >
          <button>Top_Rated</button>
          </motion.div>

          <motion.div 
          whileTap={{scale:0.75}}
          className={`w-20 rounded-full h-10 px-12 hover:bg-black hover:text-white
            font-semibold flex justify-center items-center
           ${
            state ===`/movie/upcoming?&page=${pageno}` ? "bg-red-500" : "bg-yellow-400"
           }
          `}
          onClick={()=>setState(`/movie/upcoming?&page=${pageno}`)}
          >
          <button>Upcoming</button>
          </motion.div>

            </div>


          {/* *******************     tranding slider            ************************ */}
  <div
  className=' relative w-full my-5  flex  md:justify-start flex-wrap justify-center gap-5'>

      {
        trending && trending.map((item)=>{
          const posterUrl = item.poster_path ? 
          url.poster+item.poster_path : imagenot;
            return (
              <div key={item.id}
          className='w-225 min-w-[300px] md:min-w-[230px] md:w-40 h-auto shadow-md backdrop-blur-lg 
           hover:shadow-2xl rounded-md flex justify-center items-center flex-col '>
                <div  className='w-full overflow-hidden rounded-md cursor-pointer '>
                  <motion.img 
                     whileHover={{scale:1.1}}
                    src={posterUrl}
                     alt="img" />
                  </div>
                <div className='w-full flex  flex-col'>
                    <p className=' text-white '>{(item.title || item.name).slice(0,20)}</p>
                    <p className='text-gray-500  '>{dayjs(item.release_date).format("MMM D,YYYY")}</p>
                </div>

                <motion.div 
                 whileTap={{scale:0.75}}
                className='absolute top-3 right-0 cursor-pointer '
                onClick={()=>whislistCall(item)}
              
                 >
                <AiTwotoneHeart className={'text-red-500 text-4xl'}/>
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