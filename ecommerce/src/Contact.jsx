import React from 'react'
import Map from './component/Map'
import Form from './component/Form'
import styled from 'styled-components'



const Contact = () => {
 

  return (
    <>
        <Contactcontainer>
            <h1>Contact Page</h1>
            <Map/>
            <Form/>
        </Contactcontainer>
    </>
  )
}

export default Contact

const Contactcontainer  = styled.div`
              width:100%;
              display:flex;
              justify-content:center;
              justify-content:center;
              flex-direction:column;

              h1{
                text-align:center;
                margin-top:4rem;
                margin-bottom:1rem;
              }
  
`

