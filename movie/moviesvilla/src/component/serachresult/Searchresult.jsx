import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataApi } from '../../utils/api'
import imagenot from '../../images/no.jpg'
import { useSelector } from 'react-redux'
import {AiTwotoneHeart} from 'react-icons/ai'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { getWhishListConfiguration } from '../../store/wishlistslice'
import { useDispatch } from 'react-redux'
import { FaArrowRight,FaArrowLeft} from "react-icons/fa";
let disabled;

const Searchresult = () => {
    const [noodlelist,setNoodleList]  = useState()
    const [data,setData] =useState(null)
    const [pageno,setPageno] = useState(1)
    const {url} =useSelector((state)=>state.home)
    //which query we searched in search box
    const {query}  = useParams();

    // fetchIniData using for call api of search ing 
    const fetchInitialData = ()=>{
          fetchDataApi(`/search/multi?query=${query}&page=${pageno}`).then((res)=>
          setData(res))
    }
// whenever query than fetchInitaialdata function will call
    useEffect(()=>{
         fetchInitialData()
    },[query,pageno])

    console.log("data is ",data?.results)

    // for wihshlish
    const dispatch = useDispatch()
    
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
    
// for pagnation disabled

useEffect(()=>{
     if(pageno ==1){
      disabled= 'hidden'
      console.log(disabled)
     } else{
        disabled = ''
     }
},[pageno])

  return (
    <div className='w-full h-auto mt-24'>
          <div className='w-full h-7 bg-black   flex justify-center items-center 
          text-xl font-semibold text-white p-4 gap-3'>
                 <p>Serach Result For: <span className='text-green-700'>{query}</span></p>
                 </div>
          


                 <div
  className=' relative w-full my-5  flex  md:justify-center flex-wrap justify-center gap-5'>

      {
        data?.results.map((item)=>{
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
                <AiTwotoneHeart className={'text-red-500 text-4xl hover:text-yellow-400'}/>
                </motion.div>
                
            </div>
            )
        })
      }

            
              </div>
              <div className='flex justify-center gap-5'>
                  <div 
                  className={`text-xl font-semibold text-white bg-black p-2 rounded-sm  ${disabled}`}
                  onClick={()=>setPageno(pageno-1)}>
                       <button><FaArrowLeft /></button>
                  </div>
                  <div className='p-2 text-white text-xl  font-semibold'>
                        <p>{pageno}</p>
                  </div>
                  <div
                   className='text-xl font-semibold text-white bg-green-600 p-2 rounded-sm' 
                  onClick={()=>setPageno(pageno+1)}>
                       <button><FaArrowRight /></button>
                  </div>
              </div>
    </div>
  )
}

export default Searchresult
