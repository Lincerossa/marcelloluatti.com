import { createGlobalStyle } from "styled-components"
import theme from './theme'

export default createGlobalStyle`

  html, body {
    height: auto;
    font-size: 1rem;
    color: ${theme.colors.black.primary};
    margin: 0;
  }

  strong {
    font-weight: 600;
  }
  h1, h2, h3, h4 {
    font-weight: 500;
    color: ${theme.colors.primary};
    position: relative;
    &:before {
      content:"";
      width: 5rem;
      border-bottom: 2px solid ${theme.colors.thirdary};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  h1 {
    font-size: 2rem;
    @media (min-width: 768px){
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    @media (min-width: 768px){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    @media (min-width: 768px){
      font-size: 1.5
    }
  }

  p, span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;

  }

  a{
    color: ${theme.colors.primary} !important;
    text-decoration: none;
    &:hover{
      color: ${theme.colors.primary} !important;
      
    }
  }
  a > * {
    color: ${theme.colors.primary} !important;
      color: ${theme.colors.primary} !important;
    }
  

  ::selection {
    color: rgb(255, 255, 255);
    background: ${theme.colors.primary};
  }

  button {
    border-radius: 0 !important;
  }
  
  .ant-modal-close-x {
    padding: 0;
    background: white;
    height: 3rem;
    width: 3rem;

    &:hover{
      background: ${theme.colors.primary};
      color: white;
      cursor: pointer;
    }

    svg {
      font-size: 1.25rem;
    }
  }



  .glitch {
    line-height: 1;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    &:before,
    &:after{
      display: block;
      content: 'Projects';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: .8;
    }
    &:after {
      color: #0ff;
      z-index: -2;
    }
    &:before {
      color: #bf1650;
      z-index: -1;
    }
    &:hover {
      &:before {
        animation: glitch-left .6s cubic-bezier(.25, .46, .45, .94) both infinite
      }
      &:after {
        animation: glitch-left-2 .6s cubic-bezier(.25, .46, .45, .94) reverse both infinite
      }
    }

    @keyframes glitch-small {
      0% {
          transform: translate(0)
      }
      33% {
          transform: translate(2px, 1px)
      }
      66% {
          transform: translate(-1px, -1px)
      }
      to {
          transform: translate(0)
      }
  }
  @keyframes glitch-medium {
      0% {
          transform: translate(0)
      }
      20% {
          transform: translate(-2px, 2px)
      }
      40% {
          transform: translate(-2px, -2px)
      }
      60% {
          transform: translate(2px, 2px)
      }
      80% {
          transform: translate(2px, -2px)
      }
      to {
          transform: translate(0)
      }
  }
  @keyframes glitch-left {
      0% {
          transform: translate(0)
      }
      33% {
          transform: translate(-5px, 3px)
      }
      66% {
          transform: translate(5px, -3px)
      }
      to {
          transform: translate(0)
      }
  }
  @keyframes glitch-left-2 {
      0% {
          transform: translate(0)
      }
      33% {
          transform: translate(-5px, -3px)
      }
      66% {
          transform: translate(5px, 2px)
      }
      to {
          transform: translate(0)
      }
  }
`
