import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {SiTrustedshops} from 'react-icons/si'
import {MdShoppingCart} from 'react-icons/md'
import{GiHamburgerMenu} from 'react-icons/gi'



const Header = ({toggle}) => {
 
  return (
     
    <Navigation >
          
          <Logo>
           <SiTrustedshops className='logoicon'/>
            <p>shoping<span>
            .in
            </span></p>
          </Logo>
            <Nave>
               <NavLink to='/'>Home</NavLink> 
               <NavLink to='/About'>About</NavLink> 
                <NavLink to='./Products'>Product</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink><button>Login</button></NavLink>
                <NavLink to='/Cart' className="carticon" >

                <MdShoppingCart/>
                <span className='cartnumber'>
                              20
                </span>
                </NavLink> 
            </Nave>

            <Mobilemenubar>
                    <GiHamburgerMenu className='bar' onClick={toggle}/>
            </Mobilemenubar>
        
       
    </Navigation>

  )
}

export default Header

const Navigation = styled.div`

          width:100%;
          height:12vh;
          background-color:#131921;
          display:flex;
          justify-content:space-between;
         
          
        .logoicon{
          font-size:3rem;
          color:#FF9900;
          @media (max-width:425px) {
              
              font-size:2rem;
               
             }
        }

        

        p{
          font-size:3rem;
          color:rgb(252, 252, 252);

          @media (max-width:425px) {
              
              font-size:2rem;
               
             }
        }
        span{
          font-size:1.5rem;
          @media (max-width:425px) {
              
              font-size:1rem;
               
             }
        }
  


`
const Logo = styled.div`
            display:flex;
            justify-content:start;
            align-items:center;
            height:12vh;  
           margin-left:10px;

           
`
const Nave = styled.div`
            display:flex;
            gap:30px;
            justify-content:center;
            align-items:center;
            margin-right:2rem;
            font-size:2rem;

            @media (max-width:768px) {
              
                display:none;
              
            }

            
           
            a{
              text-decoration:none;
              color:white;

              &:hover{
                color: #FF9900;
              }
            }

            button{
              font-size:1.5rem;
              border:none;
             padding:0 10px 0 10px;
              /* border-radius:7px; */
              border-radius:5px 5px 5px 5px;
              font-weight:400;
              cursor: pointer;
         
             
            }
            .carticon{
              display:flex;
              position:relative;

              span{
                position:absolute;
                top:-10px;
                left:1rem;
                background-color: #FF9900;
                color:white;
               border-radius:5px 5px 5px 5px;
                text-align:center;
                font-size:1.2rem;
              }
            }
`

const Mobilemenubar = styled.div`
            display:flex;
            justify-content:center;
            align-items:center;
            margin-right:1rem;
            @media (min-width:769px) {
              
              display:none;

            
          }   
          .bar{
            color:white;
            font-size:2rem;
            color:#FF9900;
            cursor: pointer;
          }
  `