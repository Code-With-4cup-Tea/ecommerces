import React from 'react'
import styled from 'styled-components'
import {RiTruckLine} from 'react-icons/ri'
import {GiCheckedShield,GiTakeMyMoney} from 'react-icons/gi'
import {GrSecure} from 'react-icons/gr'


const Howwework = () => {
  return (
    <>
        <Weworkcontainer>
                <div className="first">
                        <RiTruckLine className='icon1'/>
                        <p>Super Fast And Free Delivery</p>
                </div>
                <div className="second">
                        <div className="secondfirst">
                                <GiCheckedShield className='icon2'/>
                                <p>Non Contact Shiping</p>
                        </div>
                        <div className="secondsecond">
                                <GiTakeMyMoney className='icon3'/>
                                <p>Money Back Guaranteed</p>
                        </div>
                        
                </div>
                <div className="third">
                        <GrSecure className='icon4'/>
                        <p>Super Secure Payment System</p>
                </div>
        </Weworkcontainer>
    </>
  )
}

export default Howwework

const Weworkcontainer = styled.div`
            width:100%;
            height:40vh;
            display:flex;
           justify-content:center;
            align-items:center;
            gap:1rem;
          
            
           

            .first{
                width:20%;
                height:30vh;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background-color:#c2c2c23a;
                gap:0.5rem;
                font-weight:700;
               
                .icon1{
                    color:#FF9900;
                    font-size:2rem;
                    border-radius:50%;
                   background-color:white;
                   padding:5px;
                }
                
            }

            .second{
                width:20%;
                height:30vh;
                display:flex;
                flex-direction:column;
              
                gap:1rem;
                font-weight:700;
              
                .secondfirst{
                    height:14vh;
                    display:flex;
                    gap:0.5rem;
                    justify-content:center;
                    align-items:center;
                    background-color:#c2c2c23a;
                    .icon2{
                    color:#FF9900;
                    font-size:2rem;
                    border-radius:50%;
                   background-color:white;
                   padding:5px;
                }
                }
                .secondsecond{
                    height:14vh;
                    display:flex;
                    gap:0.5rem;
                    justify-content:center;
                    align-items:center;
                    background-color:#c2c2c23a;
                    .icon3{
                    color:#FF9900;
                    font-size:2rem;
                    border-radius:50%;
                   background-color:white;
                   padding:5px;
                }
                }
            }

            .third{
                width:20%;
                height:30vh;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background-color:#c2c2c23a;
                gap:0.5rem;
                font-weight:700;
               
                .icon4{
                    
                    font-size:2rem;
                    border-radius:50%;
                   background-color:white;
                   padding:5px;
                   color:#FF9900;
                }

            }

`