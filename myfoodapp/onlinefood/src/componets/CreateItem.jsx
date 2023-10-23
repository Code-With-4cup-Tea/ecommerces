import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {IoFastFoodSharp} from 'react-icons/io5'
import { categories } from './data'

const CreateItem = () => {
  const [price,setPrice]             = useState("")
  const [description,setDescription] = useState("")
  const [title,setTitle]             = useState("")
  const [image,setImage]             = useState(null)
  const [alert,setAlert]             = useState("dange")
  const [msg,setMsg]                 = useState("Something Wrong Try Again")
  const [loading,setLoading]         = useState(false)
  const [category,setCategory]       = useState("")
  const [fields,setFields]           = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center' >
          <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex justify-center items-center flex-col gap-4'>
              {
                  fields && (
                    <motion.p 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className={`w-full text-center p-2 rounded-lg font-semibold text-lg ${
                      alert ==="danger" ? "bg-red-600 text-white " : "bg-green-600 text-white"
                    }`}>
                        {msg}
                    </motion.p>
                  )
              }

                <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                    <IoFastFoodSharp className='text-lg text-orange-700'/>
                    <input type="text" placeholder='Enter Product Title.....' required 
                    className='w-full h-full text-lg bg-transparent font-semibold
                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                     onChange={(e)=>setTitle(e.target.value)}
                     value={title} />
                </div>

                <div className='w-full'>
                      <select onChange={(e)=>setCategory(e.target.value)}
                       className='outline-none text-base w-full border-b-2 border-orange-300
                       p-2 rounded-md cursor-pointer'>
                          <option value="other" className='bg-white'>Select Category</option>
                          {
                            categories && categories.map(item=>(
                                <option value={item.urlParamName} key={item.id}
                                className='border-0 text-base outline-none capitalize bg-white 
                                  text-orange-700 hover:text-textColor'
                                >
                                {item.name}</option>
                            ))
                          }
                      </select>

                </div>
           
           </div>
           
    </div>
  )
}

export default CreateItem