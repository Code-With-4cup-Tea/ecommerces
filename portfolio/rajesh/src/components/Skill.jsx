import React from 'react'
import js from '../images/javascript.png'
import react from '../images/react.png'
import css from '../images/css3.png'
import html from '../images/html.png'
import tailwind from '../images/tailwind.png'
import git from '../images/github.png'
import firebase from '../images/firebase.png'
const Skill = () => {

    const skilltech = [
        {
            
            id:1,
            src:react,
            title:'React-Js',
            style:'shadow-blue-600'
        },
        {
            id:2,
            src:js,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {
            id:3,
            src:tailwind,
            title:'Tailwindcss',
            style:'shadow-sky-400'
        },
        { 
            id:4,
            src:firebase,
            title:'Firebase',
            style:'shadow-yellow-400'
        },
        { 
            id:5,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:6,
            src:css,
            title:'CSS3',
            style:'shadow-blue-500'
        },
        {
            id:7,
            src:git,
            title:'Github',
            style:'shadow-gray-500'
        }

    ]
  return (
    <><div className=' md:flex  md:px-24 md:h-screen h-auto
             bg-gradient-to-b from-gray-800 to-black px-10' id='skill'>
        <div className='max-w-screen-lg max-auto p-4 flex flex-col justify-center w-full h-full
         text-white'>
                 <div>
                     <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skill</p>
                     <p className=' text-white text-base font-semibold mt-10 text-justify'>
                     These are the technologies I've worked with </p>
                 </div>
                 <div className='flex justify-center items-center flex-wrap mt-5 rounded-full
                 gap-4 md:gap-8  cursor-pointer'>
                    
                    {
                        skilltech.map((tech)=>{
                            return(
                                <div key={tech.id}
                                 className={`shadow-md hover:scale-105 duration-500 py-2 
                                rounded-full ${tech.style}`}>
                                 <img src={tech.src} alt={tech.title} className='md:w-28 w-24' />
                                 <p className='mt-4 text-center'>{tech.title}</p>
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

export default Skill