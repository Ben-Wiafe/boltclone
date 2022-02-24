import React from "react";
import styled from "styled-components";
import navImg from "../assets/hero-image.jpeg";
import ios from "../assets/pngwing.com-removebg-preview.png";
import android from "../assets/android-removebg-preview.png";

function Header() {
  return (
    <Section>
      <div className="navImage">
        <img src={navImg} alt="" />
      </div>
      <div className="content">
        <h1>
          {" "}
          <span>Bolt</span> Food
        </h1>
        <p>The restaurants and takeaways you love, delivered fast</p>
        <div className="buttons">
          <img src={android} alt="Google play store" />
          <img src={ios} alt="Apple store" />
        </div>
      </div>
      <div className="download">
        <button>Download Now</button>
      </div>
    </Section>
  );
}

export default Header;

const Section = styled.section`
position:relative;

.navImage{
    
    height:100%;
    overflow:hidden;
    
        img{ 
            width:100%;
            height:100%;
            object-fit:contain;
    }
}
.content{
    position:absolute;
    top:1rem;
    left:23rem;
    display:flex;
    gap:1.3rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;

    h1{
        font-size:4rem;
        font-weight:bold;
        color: #2F313F;
        letter-spacing:0.1rem;
    }
    span{
        color:#34d186;
    }
   
    p{
        font-size:2rem;
        color:#2F313F;
        letter-spacing:0.05rem;
        font-weight:600;
        width:80%;
        margin-bottom:0rem;

    }
    .buttons{
        display:flex;
        align-items:center;
        justify-content:center;
        marging:0rem 10rem 20rem;
        
        img{
            width:10rem;
            object-fit:contain;
            
        }
    }
    
}
.download{
        display:none;
    }
@media screen and (max-width:650px ){
    
    .navImage{
        margin-top:-2rem;
        
        img{
            object-fit:contain;
            width:100%;
            height:100%;

        }
    }
    .content{
        left:0rem;
        overflow:hidden;
        p{
          width:95%;
          font-weight:100;
          padding-top:10px;
          font-size:1.5rem;
          letter-spacing:0.1rem;
          margin-top:20rem;  
          
        }
        
        .buttons{
            display:none;
        }
        h1{
            font-size:2.7rem;
            letter-spacing:0rem;

            
        }
    }
    .download{
            display:block;
            width:100%;
            margin:3em 1.5rem;;
            margin-bottom:6rem;
            button{
                width:90%;
                background:#34d186;
                border:none;
                text-align:center;
                border-radius:13rem;
                padding:1.1rem 3rem;
                color:white;
                font-size:1.1rem;
                text-transform:uppercase;

            }
        }
}
@media screen and (min-width:650px ) and (max-width:940px){
    .download{
            display:block;
            width:49%;
            margin-left:15rem;
            margin-bottom:2rem;
            button{
                width:90%;
                background:#34d186;
                border:none;
                text-align:center;
                border-radius:13rem;
                padding:1.1rem 3rem;
                color:white;
                font-size:1.1rem;
                text-transform:uppercase;
            }
        }
    
    .navImage{
        
        img{
            object-fit:cover;
            width:100%;
            

        }
    }
    .content{
        left:3rem;
        text-align:center;
        overflow:hidden;
        p{
         text-align:center;
         width:100%;
          font-weight:100;
          padding-top:1rem;
          padding-left:19px;
          font-size:1.8rem;
          letter-spacing:0rem;
          margin-top:7rem;  
          
        }

        h1{
            font-size:2.9rem;
            letter-spacing:0rem;
            margin-bottom:27rem;
        }
        .download{
            display:block;
            width:100%;
            margin:3em 1.5rem;;
            margin-bottom:6rem;

            button{
                width:90%;
                background:#34d186;
                border:none;
                text-align:center;
                border-radius:13rem;
                padding:1.1rem 3rem;
                color:white;
                font-size:1.1rem;
                text-transform:uppercase;
            }
        }
        
        
        .buttons{
            display:none;
        }
        
`;
