import React from 'react'
import styled from 'styled-components'
import {SiTrustedshops} from 'react-icons/si'
import {MdShoppingCart} from 'react-icons/md'
import{RxCross2} from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Mobilemenu = ({isopen,toggle}) => {
  return (
    <>
             {isopen && <TransparentMenu onClick={toggle}/>}
                    <Menucontainer isopen={isopen}>
                            <Logo>
                                <SiTrustedshops className='logoicon'/>
                                <p>shoping<span>.in</span></p>
                            </Logo>
                    <Nave>
                            <NavLink to='/' onClick={toggle}>Home</NavLink> 
                            <NavLink to='/About' onClick={toggle}>About</NavLink> 
                            <NavLink to='./Products' onClick={toggle}>Product</NavLink>
                            <NavLink to='/Contact' onClick={toggle}>Contact</NavLink>
                            <NavLink><button>Login</button></NavLink>
                            <NavLink to='/Cart' className="carticon" >

                            <MdShoppingCart/>
                            <span className='cartnumber' >
                                        20
                            </span>
                            </NavLink> 
                            
                    </Nave>
                    <Cut>
                            <RxCross2 className='cuts' onClick={toggle}/>
                    </Cut>
                    </Menucontainer>
    </>
  )
}

export default Mobilemenu
const TransparentMenu = styled.div`
        width:100%;
        height:100vh;
        position:absolute;
        background-color:rgba(0,0,0,0.3);
        transition:0.7s ease-in;
        top:0;
        right:0;
        z-index:100;
      
`

const Menucontainer = styled.div`
        width:100%;
        height:80%;
        background-color:#131921;
        position:absolute;
        top:0;
        right:0;
        z-index:105;
        transition:0.5s ease-in;
        transform:translateY(${(props)=>(props.isopen ? "0" : "-100%")});

        

        

`
const Logo = styled.div`
            display:flex;
            justify-content:center;
            align-items:start;
            height:12vh;  
           margin-left:10px;

           .logoicon{
          font-size:2rem;
          color:#FF9900;
          margin-top:0.4rem;
         
        }

        

        p{
          font-size:2rem;
          color:rgb(252, 252, 252);

         
        }
        span{
          font-size:1.5rem;
         
        }

           
`
const Nave = styled.div`
            display:flex;
            gap:20px;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            margin-right:2rem;
            font-size:2rem;

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

const Cut = styled.div`
            position:relaive;

            .cuts{
                font-size:2rem;
                color:#FF9900;
                position:absolute;
                top:5px;
                right:10px;
                cursor: pointer;
            }
`

// const Mobilemenubar = styled.div`
//             display:flex;
//             justify-content:center;
//             align-items:center;
//             margin-right:1rem;
//             @media (min-width:769px) {
              
//               display:none;

            
//           }   
//           .bar{
//             color:white;
//             font-size:2rem;
//             color:#FF9900;
//           }
  
// `