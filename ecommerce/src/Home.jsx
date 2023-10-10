import React from 'react'
import Herosection from './component/Herosection'
import Howwework from './component/Howwework';
import Ourcompany from './component/Ourcompany';
import Featuredproduct from './component/Featuredproduct';




const Home = () => {
  const data= {
    name:"E Shoping Store",
};

  return (
    <> 
        <Herosection data={data}/>
        <Featuredproduct/>
        <Howwework/>
        <Ourcompany/>
       
       
    </>
  )
}

export default Home