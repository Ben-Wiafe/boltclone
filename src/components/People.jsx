import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import courier from "../assets/sign-up-courier.jpeg";
import chef from '../assets/sign-up-restaurant.jpeg';
import career from '../assets/sign-up-careers.jpeg'

function People() {
  return (
    <Section>
      <div className="courier">
        <div className="container">
          <img src={courier} alt="courier" />
          <h1>
            Earn extra money as a courier{" "}
            <span className="span">
              {" "}
              <Avatar sx={{ bgcolor: "#34d186", width: 56, height: 56 }}>
                <ArrowForwardSharpIcon />
              </Avatar>
            </span>
          </h1>
          </div>
          <div className="container">
          <img src={chef} alt="courier" />
          <h1>
            Sign up as a restaurant partner{" "}
            <span className="span">
              {" "}
              <Avatar sx={{ bgcolor: "#34d186", width: 56, height: 56 }}>
                <ArrowForwardSharpIcon />
              </Avatar>
            </span>
          </h1>
          </div>
        <div className="container">
        <img src={career} alt="courier" />
          <h1>
            Join the team building Bolt Food{" "}
            <span className="span">
              {" "}
              <Avatar sx={{ bgcolor: "#34d186", width: 56, height: 56 }}>
                <ArrowForwardSharpIcon />
              </Avatar>
            </span>
          </h1>
        </div>
        
        </div>
    </Section>
  );
}

export default People;


const Section = styled.section`
  position: relative;
  margin:1rem;
  .courier {
    ${'' /* border:1px solid black; */}
     display:flex;
     justify-content:center;
     align-items:center;
     gap:20px;
    .container {
      margin:4rem;
      img {
       max-width: 100%;
       height:auto;
       object-fit:cover;  
      }
      h1 {
        position: relative;
        bottom: 4rem;
        color: white;
        font-weight:500;
        left: 1rem;

      }
      .span{
        display:flex;
        align-items:flex-start;
        margin-right:2rem;
        justify-content:flex-end;
      }
      
    }
  
  }
  @media screen and (max-width:650px ){
    margin:0rem;
    .courier{
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:0rem;
      .container{
        margin:1rem;
        margin-top:1rem;
        img{
        width:100%;
        height:100%;
        object-fit:contain;
      }
      }
      
    }
      
    }
  }
  @media screen and (min-width: 650px) and (max-width: 940px) {
    margin:2rem;
    .courier{
      flex-direction:column;
      gap:1rem;
      .container{
        min-height:200px;
        margin:1rem;
        img{
        width:100%;
        height:50%;
        object-fit:contain;
    }
      ${'' /* .span{
        display:block;
        margin-left:27em;
      } */}
    }
  }
`;
 