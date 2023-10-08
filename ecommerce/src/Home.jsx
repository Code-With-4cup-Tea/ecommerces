import React from 'react'
import Herosection from './component/Herosection'

const Home = () => {
  const data= {
    name:"E Shoping Store",
};
  return (
    <>
        <Herosection data={data}/>
       
    </>
  )
}

export default Home