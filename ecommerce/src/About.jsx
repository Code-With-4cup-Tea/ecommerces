import React from 'react'
import Herosection from './component/Herosection';

const About = () => {
  const data= {
    name:"Who Are We",
};
  return (
    <>
        <Herosection data={data}/>
    </>
  )
}

export default About