import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import bannerimg from '../../images/OIP.jpg'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from '../../store/home'

const Herobaner = () => {
    // for api loading

    const [letdata,setLetdata] = useState(null)
    const {data,loading} =useFetch("/movie/upcoming");
    console.log("herobanner",data?.results?.poster_path
    )

    useEffect(()=>{
      setLetdata(data?.results)
 },[setLetdata])

letdata?.map((item)=>(
         console.log("items",item),
         console.log(item.poster_path)
))




console.log("letdata",letdata)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getApiConfiguration(data))

    },[data])

    const {url:trendings,catag} = useSelector((state)=>state.home)

    // console.log("trending",url.poster+poster_path)
    console.log("url is",trendings)
    // console.log("url",trendings)
    
   
   

    const [search,setSearch]       = useState("")

    const navigate = useNavigate()

    // for random banner image change
    // floor using for natural number not for point numbers
    
    const inputHandler = (e)=>{
           if(e.key ==="Enter" && search.length>0){
                navigate(`/search/${search}`)
              
           }
          
    }

  return (
    <div className=' relative w-full h-510 flex flex-col justify-center items-center  '  
     style={{backgroundImage:`url(${bannerimg})`, backgroundSize:'cover',
     }}>
     <div className='topban absolute w-full h-510  flex flex-col justify-center items-center' >
                  
    
        <div className=' flex justify-center items-center '>
            <h1 className='text-7xl font-semibold text-white '>Welcome.</h1>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-xl font-semibold text-textColor text-center'>
            Millons Of Movies, Tv shows and people discover. Explore Now. </p>
        </div>
        <div className=' flex justify-center items-center mt-8 md:w-[70%] w-[80%]'>
            <input type="text" placeholder='Search for movies & tv... please enter key' 
              className=' rounded-full w-full p-3 font-semibold outline-none border-none'
            onKeyUp={inputHandler}
            onChange={(e)=>setSearch(e.target.value)}
              />
            
        </div>
        </div>
      
    </div>
  )
}

export default Herobaner