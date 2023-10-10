import React from 'react'
import { Button } from './Herosection'
import styled from 'styled-components'
import {AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <>
         <Topsection>
                <p>Ready To Get Started <br/> Talks to us today</p>
                <Button>Get Started</Button>
         </Topsection>
         <Bottomsection>
                <Bottom1>
                        <AiFillFacebook className='icons'/>
                        <FaInstagramSquare className='icons'/>
                        <AiFillGithub className='icons'/>
                        <Bottom2>
                        <p>Privacy & Policy</p>
                        <p>Term & Condition</p>
                        </Bottom2>

                </Bottom1>
                <Bottom3>
                        <p>@{new Date().getFullYear()} Eshoping . All Rights Reserved</p>
                </Bottom3>
                
         </Bottomsection>
    </>
  )
}

export default Footer

const Topsection = styled.div`
        width:60%;
        height:10vh;
        background-color:#F1F1F1;
        display:flex;
        justify-content:space-between;
        position:relative;
        align-items:center;
        margin:0 auto;
        padding:3rem;
        margin-top:2rem;
        margin-bottom:-45px;
        border-radius:7px;
`

const Bottomsection = styled.div`
        width:100%;
        height:60vh;
        background-color:#131921;
        padding:5rem 0 5rem 5rem;
        display:flex;
        flex-direction:column;
`

const Bottom1 = styled.div`
        .icons{
                font-size:2rem;
                margin-left:1rem;
        }
      
                
               
        
`

const Bottom2 = styled.div`
        
`
const Bottom3 = styled.div`
        
`