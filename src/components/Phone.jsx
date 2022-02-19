import React from 'react';
import styled from 'styled-components';
import phon from '../assets/phones-with-bolt-food.jpeg'
function Phone() {
  return (
  <Section>
    <div className='container'>
        <img src={phon} alt='phone' width='50%'/>
        <h1>Discover, order, and track in the app</h1>
    </div>

  </Section>
    )
}

export default Phone;

const Section = styled.section`

position:relative;
overflow:hidden;
height:100%;
    .container{
        height:10%;
        margin-bottom:3rem;
        img{
            width:60%;
            height:10%;
            object-fit:contain;
        }
        h1{
           
            width:40%;
            font-size:4rem;
            font-weight:100;
        }

    }
    @media screen and (max-width:650px ){
    
    .container{
        img{
            object-fit:contain;
            width:100%;
            height:100%;
        }
        h1{
            text-align:center;
            font-size:1.5rem;
            padding:0 5rem;
            letter-spacing:0rem;
            width:95%;
            

            
        }
    }
    
}
@media screen and (min-width:650px ) and (max-width:940px){
    .container{
        margin-top:5rem;
        img{
            object-fit:contain;
            width:87%;
            height:100%;
        }
        h1{
            text-align:center;
            font-size:1.5rem;
            margin-top:3rem;
            letter-spacing:0rem;
            width:90%;
            left:0rem;

            
        }
    }

`;