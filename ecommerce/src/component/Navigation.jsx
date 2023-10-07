import React, { useState } from 'react'
import Header from './Header'
import Mobilemenu from './Mobilemenu'

const Navigation = () => {
    const [isopen,setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isopen)
    }
  return (
    <>  
        <Mobilemenu isopen={isopen} toggle={toggle}/>
         <Header toggle={toggle}/>
         
    </>
  )
}

export default Navigation