import React from 'react'
// import ecomm from '../images/p3.jpg'
// import jira from '../images/p3.jpg'
import movie from '../images/p3.jpg'

const Projects = () => {
    const portfolios =[
          {
            id:1,
            src:movie
          },
          {
            id:2,
            src:movie
          },
          {
            id:3,
            src:movie
          },
    ]
  return (
    <>
        <div className=' md:flex  md:px-24 md:h-screen h-auto 
             bg-gradient-to-b from-black to-gray-800 px-10 text-white' id='project'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                 <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
                    <p className='text-white text-base font-semibold mt-10 text-justify'>Checkouts Some of my works here</p>
                 </div>
                
                 <div className='flex justify-center gap-4 items-center w-full flex-wrap'>
                    {
                      portfolios.map((Projects)=>{
                        return(
                          <div key={Projects.id}>
                       <div className='md:w-80 w-56  shadow-md shadow-gray-600 rounded-lg'>
                         <img src={Projects.src} alt="" className='rounded-md duration-200
                                    hover:scale-105 '  />
                       </div>
                       <div className='flex justify-between items-center'>
                          <button className=' px-6 py-1  duration-200 
                                   hover:scale-105 text-white bg-gradient-to-r from-yellow-400
                          to-red-600 p-2  text-base mt-2  font-semibold rounded-md cursor-pointer flex 
                           justify-center items-center '>Demo</button>
                       
                          <button className=' px-6 py-1  duration-200 hover:scale-105 
                           text-white bg-gradient-to-r from-yellow-400  to-red-600 p-2  
                           text-base mt-2 font-semibold rounded-md cursor-pointer flex  justify-center items-center '>
                             Code</button>       
                         
                        
                       </div>
                     </div>
                    
                        )
                      })
                    }
                 </div>
            </div>

        </div>
    </>
    
  )
}

export default Projects