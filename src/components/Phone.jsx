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
margin-top:-3rem;
position:relative;
overflow:hidden;

    .container{
        text-align:center;
        margin:5rem;
        ${'' /* border:1px solid black; */}
        img{
            width:60%;
            height:100%;
            object-fit:cover;
        }
        h1{
            ${'' /* border:1px solid black; */}
            position:absolute;
            top:10rem;
            left:4rem;
            letter-spacing:0.3rem;
            width:50%;
            font-size:3rem;
            font-weight:100;
        }

    }
    @media screen and (max-width:650px ){
    
    .container{
        width:100%;
        margin-left:0rem;
        border:none;
        img{
            object-fit:contain;
            height:100%;
        }
        h1{
            display:absolute;
            top:35rem;
            padding-top:1rem;
            font-size:1.7rem;
            left:0rem;
            letter-spacing:0rem;
            width:100%;
        
            

            
        }
    }
    
}
@media screen and (min-width:650px ) and (max-width:940px){
    .container{
        ${'' /* margin-top:5rem; */}
        img{
            width:40rem;
            object-fit:contain;
        }
        h1{
            text-align:center;
            font-size:1.5rem;
            color:black;
            letter-spacing:0rem;
            width:90%;
            top:43rem;
            left:0rem;

            
        }
    }

`;