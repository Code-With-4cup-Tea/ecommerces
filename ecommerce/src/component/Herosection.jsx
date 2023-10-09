import React from 'react'
import styled from 'styled-components';

const Herosection = ({data}) => {

  
    
  return (
    <>
                <Herocontainer>
                        <Leftcontainer>
                            <p className='p1'>WELCOME TO</p>
                            <h1>{data.name}</h1>
                            <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia nemo error pariatur recusandae accusantium sint eum quas molestiae magni beatae accusamus, est quam et quia vero iure quis itaque!</p>
                             <Button> SHOW NOW</Button>
                        </Leftcontainer>
                        <Rightcontainer>
                                <img src="./top2.png" alt="" />
                        </Rightcontainer>
                </Herocontainer>
    </>
  )
}

export default Herosection

const Herocontainer = styled.section`
            width:100%;
            height:60vh;
            display:flex;
            justify-content:center;
            background-color:#c2c2c23a;
            
            @media (max-width:425px) {
                        flex-direction:column;
                        height:100vh;
                       
                
            }
           
            
           
    
`

const Leftcontainer = styled.div`
            width:50%;
           
            display:flex;
            justify-content:start;
            align-items:start;
            flex-direction:column;
            padding-left:8rem;
           
            @media (max-width:425px) {
                        width:100%;
                        padding:1rem;
                
            }
           
            .p1{
                font-size:0.7rem;
                font-weight:900;
                margin-top:4rem;

                @media (max-width:425px) {
                      
                       margin-top:5rem;
            }
                
            }

            h1{
                font-weight:900;
                font-size:2rem;
                margin-top:0.3rem;
            }

            .p2{
                text-align:justify;
                margin-top:0.5rem;
                font-weight:600;
                color:gray;

            }



    
`

const Rightcontainer = styled.div`
            width:50%;
            
            display:flex;
            justify-content:center;
            @media (max-width:425px) {
                      
                      width:100%;
           }
            
            
            img{
                width:20rem;
                height:20rem;
                margin-top:2rem;
                animation: imgUp 0.7s linear infinite alternate;

                @media (max-width:425px) {
                      
                      margin-top:0.5rem;
                     
                                        }

            }

            

            @keyframes imgUp {
                to{
                        transform: translateY(-10px);
                  }}
    
`
export const Button = styled.button`
                border:none;
                margin-top:0.5rem;
                background-color:#FF9900;
                color:white;
                font-weight:700;
                padding:10px;
                border-radius:7px;
                cursor: pointer;
    
`