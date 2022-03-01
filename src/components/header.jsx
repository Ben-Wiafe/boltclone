import React from "react";
import styled from "styled-components";
import navImg from "../assets/hero-image.jpg";
import ios from "../assets/app-store.svg";
import boltfood from "../assets/bolt-food-logo.svg";
import android from "../assets/play-store.svg";

function Header() {
  return (
    <Section>
      <div className="content">
        <div className="boltf">
          <img src={boltfood} alt="bolt food" />
        </div>
        <div className="heroText">
        <h3>The restaurants and takeaways you love, delivered fast</h3>
        </div>
        <div className="downloadStore">
          <img src={android} alt="Google playstore" />
          <img src={ios} alt="Google playstore" />
        </div>
      </div>
      <div className="download">
      <h3>The restaurants and takeaways you love, delivered fast</h3>
       <a href="https://boltfood.onelink.me/gEr4/googleplayweb001">Download Now</a> 
      </div>
    </Section>
  );
}

export default Header;

const Section = styled.section`
position:relative;
  .content{
    background: url(${navImg});
    margin: auto;
    overflow: hidden;
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    height: 86vw;
    max-width:100%;
    min-height: 260px;
    max-height: 981px;    
    
    
    .boltf{
        display:flex;
        justify-content:center;
        padding-top:2rem;
        margin-bottom:1rem;
        img{
            height:3.8rem;
        }
    }
    .heroText{
        margin-top:1.7rem;
        margin-bottom:1rem;
        text-align:center;
        padding-horizontal:1rem;
      
        h3{
        margin:auto;
        line-height:2.75rem;
        max-width:45rem;
        font-family:sans-serif;
        font-weight:600;
        font-size:2.2rem;
    }
    }
    
   .downloadStore{
       display:flex;
       align-items:center;
       justify-content:center;
       img{
          margin:10px;
           width:150px;
           object-fit:contain;
       }
   }
}
.download{
    display:none;
}

@media screen and (max-width:650px ){
    .content{
        
        height:68vw;
        .boltf{
            img{
                height:2.5rem;
            }
        }
        .heroText{
            display:none;
        }
        .downloadStore{
            display:none;
        }
    }
    .download{
 display:block;
 text-align:center;
    line-height:2.3rem;
    padding-left:1.5rem;
    padding-right:1.5rem;
    
    h3{
        font-size:1.5rem;
        font-family:sans-serif;
        font-weight:normal;
    }
    a{      
               background:#34d186;
                font-weight:700;
                text-align:center;
                border-radius:3rem;
                font-size:1rem;
                padding:1.2rem 7rem;
                line-height:4.5rem;
                color:white;
                letter-spacing:.078125rem;
                text-decoration:none;
                text-transform:uppercase;
            }
}
    }
    

@media screen and (min-width:650px ) and (max-width:940px){
    .content{
        height:68vw;
        .boltf{
            img{
                height:2.5rem;
            }
        }
        .heroText{
            display:none;
        }
        .downloadStore{
            display:none;
        }
        
        
    }
    .download{
 display:block;
 text-align:center;
    line-height:2.5rem;
    padding-left:1.5rem;
    padding-right:1.5rem;
    h3{
        font-size:1.6rem;
        font-family:sans-serif;
        font-weight:normal;
    }
    a{      
            background:#34d186;
                font-weight:700;
                text-align:center;
                border-radius:3rem;
                font-size:1rem;
                padding:1.2rem 4rem;
                line-height:4rem;
                color:white;
                letter-spacing:.078125rem;
                text-decoration:none;
                text-transform:uppercase;
            }
}
    }
`;
