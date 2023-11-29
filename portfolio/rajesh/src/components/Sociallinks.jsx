import React from 'react'
import { FaGithub } from "react-icons/fa";

const Sociallinks = () => {
  return (
    <div className=' bg-gray-600'>
         <ul>
            <li className='w-40 h-10'>
                <a href="">
                    <p className='flex justify-start items-center gap-4'>
                        Github <FaGithub />
                    </p>
                </a>
               
            </li>
         </ul>
    </div>
  )
}

export default Sociallinks