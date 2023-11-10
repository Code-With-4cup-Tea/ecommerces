import React from 'react'
import Herobaner from './Herobaner'
import { useEffect } from 'react'
import Trandingslider from './tranding/trandingslider'
// import fetchUsersDetails from '../store/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from '../../store/home'
import { fetchDataApi } from '../../utils/api'
import useFetch from '../../hooks/useFetch'

const Home = () => {
     // for fetchig data form api or storing in url state in redux tool kit

     // images ko display karany ke liye hamay tin url chaiye 1. baseurl 2.second size 3. file.path
     // inichay rul main baseurl store kiya or usmay image size bhi hai jiska image dikhana hai uska file path fetch kar na hoga
    const dispatch = useDispatch()

    const {url} = useSelector((state)=>state.home)
    console.log("url",url)
    //is url main base url store hua hai image yani sura ka url 
  
    useEffect(()=>{
      fetchApiConfiguration() 
    },[])
  
    const fetchApiConfiguration = ()=>{
        fetchDataApi('/configuration')
        .then((res)=>{
          console.log("res ponse of api",res)
          
          // nichay waley url main poster display kar ke liye jo respose milla uskay images main jakey
          // secure_base_url main jana hain or roiginal size select karna

            const url = {
                    poster: res.images.secure_base_url+"original"
            }
          // upar jo poster url create kiya wo home ke url save hogaya redux toolkit
          dispatch(getApiConfiguration(url));
        })
    }
  

    const{users:userinfo} = useSelector((state)=>state.user)
    console.log(userinfo)


  return (
    <div>

    <Herobaner/>
    <div className='mt-1 p-8 w-full'>
         <Trandingslider/>
    </div>
    
    </div>
  )
}

export default Home