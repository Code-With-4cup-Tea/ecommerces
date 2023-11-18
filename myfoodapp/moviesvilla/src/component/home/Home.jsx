import React from 'react'
import Herobaner from './Herobaner'
import { useEffect } from 'react'
import Trandingslider from './tranding/Trandingslider'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from '../../store/home'
import { fetchDataApi } from '../../utils/api'

import Wishlistpage from '../wishlist/Wishlistpage'


const Home = () => {
  const {items,cut} = useSelector((state)=> state.wishlist) 
    const dispatch = useDispatch()
     useEffect(()=>{
      fetchApiConfiguration() 
    },[])
  
    const fetchApiConfiguration = ()=>{
        fetchDataApi('/configuration')
        .then((res)=>{
          console.log("res ponse of api",res)
            const url = {
                    poster: res.images.secure_base_url+"original"
            }
         
          dispatch(getApiConfiguration(url));
        })
    }
  return (
    <div>

    <Herobaner/>
    {
      cut &&  <Wishlistpage/>
    }
   
    <div className='mt-1 p-8 w-full'>
         <Trandingslider/>
    </div>
    
    </div>
  )
}

export default Home