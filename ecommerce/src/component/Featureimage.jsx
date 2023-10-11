import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Featureimage = (curElem) => {

    const {id,name,image,price,category} = curElem;
  return <NavLink to={`/singleproduct/${id}`}>
            <Card>
                <figure className='img'>
                    <img  src={image} alt={image}/>
                    <figcaption className='caption'> {category}</figcaption>
                </figure>
                <div className="lowdata">
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                    {/* <figure className='img'>
                        <img src='top2.png' alt='img'/>
                    </figure> */}
             </Card>
        </NavLink>
}

export default Featureimage

const Card = styled.div`
           

       

        /* .img{
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
            height:50%;
       } 
       
       .lowdata{
        display:flex;
        justify-content:space-between;
       
        
        
       }
            */
          
`