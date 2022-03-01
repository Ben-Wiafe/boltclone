import React from 'react';
import styled from 'styled-components';
import phon from '../assets/phones-with-bolt-food.jpeg'
function Phone() {
  return (
  <Section>
    <div className='container'>
        <img src={phon} alt='phone'/>
        <h3>Discover, order, and track in the app</h3>
    </div>

  </Section>
    )
}

export default Phone;

const Section = styled.section`
margin:auto;
width:847px;

    .container{
        min-height:519px;
        margin-top:4rem;
        position:relative;
        img{
            object-fit:cover;
            max-width:100%;
            height:auto;
        }   
            h3{
            position:absolute;
            top:4rem;
            left:1.25rem;
            max-width:30rem;
            text-align:left;
            margin:auto;
            line-height:3.7rem;
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