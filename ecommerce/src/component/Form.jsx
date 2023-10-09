import React from 'react'
import { Button } from './Herosection'
import styled from 'styled-components'

const Form = () => {
  return (
    <>
    <Formcontainer>
   
        <form method='POST' action='https://formspree.io/f/mleyoyen'>
            
            <input type="text" placeholder='Enter Your Name' name='username' required autoComplete='off'/>
           
            <input type="email" placeholder='Enter Your Email'  name="email" required autoComplete='off'/>
            
            <textarea name="message" id="" cols="30" rows="10"  required autoComplete='off'></textarea>
            <Button type='submit' value="send">Send</Button>
        </form>
      
    </Formcontainer>
    </>
  )
}

export default Form

const Formcontainer = styled.div`
           max-width:100%;
           /* margin:0 auto; */
           display:flex;
           justify-content:center;
           align-items:center;
         
           
           
           
           form{
            width:50%;
            display:flex;
            flex-direction:column;
            padding:5rem;
            gap:0.5rem;

            input{
                font-size:1rem;
                padding:5px;
                border-radius:7px;
                
                /* border:2px solid #131921; */
            }

            textarea{
                border-radius:7px;
                
                /* border:2px solid #131921; */
                padding:1rem;
            }
           
           }
           
            

`