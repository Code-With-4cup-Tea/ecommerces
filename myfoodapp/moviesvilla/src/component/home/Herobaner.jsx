import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import bannerimg from '../../images/OIP.jpg'

const Herobaner = () => {
    
    const [search,setSearch] = useState("");
    const navigate = useNavigate()

    



    
// for check input search box must be start searching enter key or key lengh 0 se badi ho
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