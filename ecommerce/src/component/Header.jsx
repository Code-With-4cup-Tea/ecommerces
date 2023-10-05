import React from 'react'

import styled from 'styled-components'
import {SiTrustedshops} from 'react-icons/si'
import {MdShoppingCart} from 'react-icons/md'


const Header = () => {
  return (
    <Navigation>
          <Logo>
           <SiTrustedshops className='logoicon'/>
            <p>shoping<span>
            .in
            </span></p>
          </Logo>
            <Nave>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Product</h3>
                <h3>Contact</h3>
                <button>Login</button>
                <MdShoppingCart/>
            </Nave>
    </Navigation>
  )
}

export default Header

const Navigation = styled.div`
          min-width:100%;
          height:80px;
          background-color:#131921;
          display:flex;
          justify-content:space-between;

        .logoicon{
          font-size:4rem;
          color:#FF9900
        }

        p{
          font-size:4rem;
          color:rgb(252, 252, 252);
        }
        span{
          font-size:2rem;
        }
  
`
const Logo = styled.div`
            display:flex;
            justify-content:start;
            align-items:center;
            height:80px;
            
           margin-left:10px;

`
const Nave = styled.div`
            display:flex;
            gap:30px;
            justify-content:center;
            align-items:center;
            margin-right:20px;
            font-size:2rem;
            color:white;

            button{
              font-size:2rem;
              border:none;
              padding:2px 20px;
              border-radius:7px;
            }
  
`

                
                

