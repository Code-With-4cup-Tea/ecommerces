import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {IoFastFoodSharp} from 'react-icons/io5'
import { categories } from './data'
import Loader from './Loader'
import {BiSolidCloudUpload} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {TbFileDescription} from 'react-icons/tb'
import {FaRupeeSign} from 'react-icons/fa'

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

  const uploadimage = ()=>{

  }

  const delImage = ()=>{

  }

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
                          <div className='group w-full h-225 md:h-420 border-2 border-gray-300 border-dotted
                                          flex justify-center items-center cursor-pointer rounded-lg'>
                              
                            {
                              loading ?( <Loader/>) : (<>

                                {
                                  !image ? (<>
                                    <label className='w-full h-full flex flex-col items-center justify-center'>
                                        <div className='w-full h-full flex flex-col items-center justify-center'>
                                              <BiSolidCloudUpload className='hover:text-orange-400 text-3xl cursor-pointer
                                              transition-all ease-in-out duration-100'/>
                                              <p className='text-2xl text-gray-500 text-center'>Click here to upload </p>

                                        </div>
                                        <input type="file" name='uploadimage' accept='image/*' className='w-0 h-0'
                                          onChange={uploadimage}
                                        />
                                    </label>
                                  </> ): 
                                  (<>
                                    <div className='relative h-full '>
                                        <img src={image} alt="uploaded image" className='w-full h-full object-cover'/>
                                        <button className='absolute bottom-3 right-3 p-3 
                                          bg-red-500 text-xl rounded-full outline-none 
                                           hover:shadow-md duration-500 transition-all 
                                           ease-in-out  '
                                        
                                         type='button' onClick={delImage}><MdDelete className='text-white'/></button>

                                    </div>
                                  </>)
                                }</>)}
                                </div>
                                <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                                    <TbFileDescription className='text-lg text-orange-700'/>
                                    <input type="text" placeholder='Enter Desription' required 
                                    className='w-full h-full text-lg bg-transparent font-semibold
                                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                                    onChange={(e)=>setDescription(e.target.value)}
                                    value={description} />
                           </div>
                           <div className='flex items-center border-b border-orange-300  py-2 w-full gap-2'>
                                    <FaRupeeSign className='text-lg text-orange-700'/>
                                    <input type="number" placeholder='Enter Product Price' required 
                                    className='w-full h-full text-lg bg-transparent font-semibold
                                    border-none outline-none placeholder:text-gray-400 text-textColor  ' 
                                    onChange={(e)=>setPrice(e.target.value)}
                                    value={price} />
                           </div>
                           <div className='w-full flex  items-center '> 
                               <button className='text-white bg-emerald-500 font-semibold rounded-lg ml-0 
                               md:ml-auto w-full  text-lg border-none outline-none px-12 py-2'>Save Data</button>
                           </div>
                    </div>
           
              </div>
  )
}

export default CreateItem