import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/Productcontext';
import Featureimage from './Featureimage';




const Featuredproduct = () => {
    
//for access data from context api

const {isLoading,featureProducts} = useProductContext();//this is custom hooks

console.log(featureProducts); // we get data only those whose data has featured id

if(isLoading){
    return <div>......Loading</div> //jaba tak data milta nahi tab tak loading show hoga
}
  return (
    <>
        <Featurecontainer>
            {/* <Inner> */}
                        {/* <p>CHECK NOW</p>
                    <h2>Our Feature Services</h2> */}
                    <Product>
                    <p>CHECK NOW</p>
                    <h2>Our Feature Services</h2>
                        <div className="productdiv">
                        {
                            featureProducts.map((currElm)=>{
                                console.log(currElm);
                                return <Featureimage key={currElm.id} {...currElm}/>

                            })
                        }
                        </div>
                    </Product>
            {/* </Inner> */}
        </Featurecontainer>
    </>
  )
}

export default Featuredproduct

const Featurecontainer =styled.div`
     width:100%;
     height:45vh;
     background-color:#c2c2c23a;
    margin-top:3rem;
    padding-top:1rem;
`

// const Inner = styled.div`
//      width:60%;
//      height:38vh;
    
//      margin:0 auto;
    
// `
const Product =styled.div`
         width:60%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        gap:0.2rem;
        

       .productdiv{
            display:flex;
            width:100%;
            gap:1rem;
            /* flex-wrap:wrap; */
            /* background-color:red; */
            .img{
                /* background-color:black; */
                position:relative;

                .caption{
              position:absolute;
              top:5px;
              right:5px;
              color:white;
              font-size:1rem;
              background-color:black;
              padding:3px; 
       }
            }
            .img img{
            width:100%;
            &:hover{
            scale:101%;
        }
            
        }

        .lowdata{
            display:flex;
           justify-content:space-between;
        }

        a{
            text-decoration:none;
            color:orange;
            font-size:1rem;
        }

        
       }
        
        


       
        
       
`