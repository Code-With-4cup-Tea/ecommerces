import React from 'react'
import {BiLogoSpotify} from 'react-icons/bi'
import {PiPaypalLogoDuotone} from 'react-icons/pi'
import {SiTata} from 'react-icons/si'
import {SiHonda} from 'react-icons/si'
import {BiLogoAudible} from 'react-icons/bi'
import {BiLogoShopify} from 'react-icons/bi'
import {PiAppleLogoFill} from 'react-icons/pi'
import styled from 'styled-components'

const Ourcompany = () => {
  return (
   <>
        <Ourcompanycontainer>
                <p>Trusted By 1000+ compaines</p>
                <Ourcompanyname>
                        <BiLogoSpotify/>
                        <PiPaypalLogoDuotone/>
                        <SiTata/>
                        <SiHonda/>
                        <BiLogoAudible/>
                        <BiLogoShopify/>
                        <PiAppleLogoFill/>
                </Ourcompanyname>
        </Ourcompanycontainer>
   </>
  )
}

export default Ourcompany

const Ourcompanycontainer = styled.div`
                width:100%;
                height:20vh;
                background-color:#c2c2c23a;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                gap:1rem;
                flex-wrap:wrap;

                p{
                    font-size:1.1rem;
                    font-weight:600;
                }



`

const Ourcompanyname = styled.div`
                display:flex;
                gap:4rem;
                font-size:2rem;
                color:#FF9900;
                &:hover{
                    color:#131921;
                }

`
