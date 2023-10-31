import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {IoFastFoodSharp} from 'react-icons/io5'
import { categories } from './data'
import Loader from './Loader'
import {BiSolidCloudUpload} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {TbFileDescription} from 'react-icons/tb'
import {FaRupeeSign} from 'react-icons/fa'
import { storage } from '../firebase.config'
import { deleteObject, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { ref } from 'firebase/storage'
import { saveItems } from '../utils/firebaseFunction'

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
  const [imgdetail,setImgdetail]     = useState("first image")

  const uploadimage = (e)=>{
    setLoading(true);// update loading with true
    const imagedetails = e.target.files;
    console.log(imagedetails)
    setImgdetail(imagedetails.name)
    const firebasestorageRef = ref(storage,`Images/${Date.now()}-${imagedetails.name}`); // we storing image in firebase image folder with 
     // date
    const uploadTask =uploadBytesResumable(firebasestorageRef,imagedetails); //help in uploading image

    //below take three function snapshot error when every thing is correct
    uploadTask.on("state_changed",(snapshot)=>{
        const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    },
    (error)=>{
      console.log(error);
      setFields(true);
      setMsg("May be some error try again");
      setAlert("danger");
      setTimeout(()=>{
            setFields(false);
            setLoading(false)
      },4000)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
        setImage(downloadURL);
        setLoading(false);
        setFields(true);
        setMsg("image uploading sucessfully ")
        setAlert("success");
        setTimeout(() => {
          setFields(false)
        }, 4000);

      })
    })


  }

  // const delImage = ()=>{
  //   setLoading(true);
  //   const delRef = ref(storage,setImage);
  //   deleteObject(delRef).then(()=>{
  //     setImage(null);
  //     setLoading(false);
  //     setFields(true);
  //     setMsg("image deletd");
  //     setAlert("success");
  //     setTimeout(() => {
  //       setFields(false)
  //       console.log(error)
  //     }, 4000);


  //   })

  // }

  const savedata = ()=>{
    setLoading(true);
    try{
      if((!price || !image || !description || !categories || !title)){
       
        setFields(true);
        setMsg("must fill an empty box");
        setAlert("danger");
        setTimeout(()=>{
              setFields(false);
              setLoading(false)
        },4000)
      }else{
          const data = {
            id : `${Date.now()}`,
            title : title,
            imageURL: image,
            category:category,
            price:price,
            description:description,
            qty:1

          }
          saveItems(data);
          setLoading(false);
        setFields(true);
        setMsg("data uploaded sucessfully ")
        clearData()
        setAlert("success");
        
        setTimeout(() => {
          
          setFields(false)
        }, 4000);

      }

   
    }catch(error){
      console.log(error);
      setFields(true);
      setMsg("May be some error try again");
      setAlert("danger");
      setTimeout(()=>{
            setFields(false);
            setLoading(false)
      },4000)
    }
  }

  const clearData = ()=>{
      setTitle("");
      setImage(null);
      setPrice("");
      setCategory("Select Category");
      setDescription("");

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
                                        <button className='absolute bottom-0 right-0 p-2 
                                          bg-red-500 bg-opacity-[60%]  text-xl  outline-none 
                                           hover:shadow-md duration-500 transition-all 
                                           ease-in-out  w-full text-white'
                                        
                                         type='button' >{imgdetail} uploaded</button>

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
                               md:ml-auto w-full  text-lg border-none outline-none px-12 py-2' onClick={savedata}>Save Data</button>
                           </div>
                    </div>
           
              </div>
  )
}

export default CreateItem