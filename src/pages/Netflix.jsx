import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
// import BackgroundImage from '../components/BackgroundImage';
import MovieLogo from '../assets/movie.webp';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function Netflix() {
  const [isScrolled,setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = ()=>{
    if(window.scrollY!==0)
      console.log('Scrolled')
    else
      console.log('nope')
    setIsScrolled(window.scrollY === 0 ? false : true)
    return ()=> (window.onscroll=null)
  }

  return (
      <>
      <Container>
      <Navbar isScrolled = {isScrolled}/>
      <div className="hero">
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
            <div className="buttons flex">
              <button onClick={()=>{navigate('/player')}} className="flex j-center a-center">
              <FaPlay/>Play
              </button>
              <button className="flex j-center a-center">
              <AiOutlineInfoCircle/>More info
              </button>
            </div>
        </div>
      </div>
      </Container>
      </>
  )
}

const Container = styled.div`
  .logo{
    height : 100vh;
    width : 100vw;
    img{
      height : 100vh;
      width : 100vw;
    }
  }

  .container{
    position : absolute;
    bottom : 5rem;
    
  }
  .buttons{
    margin : 5rem;
    gap : 2rem;
    button{
      font-size : 1.4rem;
      gap : 1rem;
      border-radius : 0.2rem;
      padding : 0.5rem;
      padding-left : 2rem;
      padding-right : 2.4rem;
      border : none;
      cursor : pointer;
      transition : 0.3s ease-in-out;
      &:hover{
        opacity : 0.8;
      }&:nth-of-type(2){
        background-color : rgba(109,109,110,0.7);
        color : white;
        svg{
          font-size : 1.8rem;
        }
      }
    }
  }

  }

`
