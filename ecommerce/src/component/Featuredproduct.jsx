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
                        <p>CHECK NOW</p>
                    <h2>Our Feature Services</h2>
                    <Product>
                        {
                            featureProducts.map((currElm)=>{
                                console.log(currElm);
                                return <Featureimage key={currElm.id} {...currElm}/>

                            })
                        }
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
         width:100%;
       
        display:flex;
        gap:1rem;
        padding:1rem;
       
        
        a{
            color:orange;
            text-decoration:none;
        }

        /* &:hover{
            background-color:rgb(98,84,243);
        } */
`