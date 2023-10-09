import React from 'react'
import Herosection from './component/Herosection'
import Howwework from './component/Howwework';
import Ourcompany from './component/Ourcompany';


const Home = () => {
  const data= {
    name:"E Shoping Store",
};
  return (
    <>
        <Herosection data={data}/>
        <Howwework/>
        <Ourcompany/>

       
    </>
  )
}

export default Home