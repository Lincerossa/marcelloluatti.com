import styled from "styled-components"

export const Glitch = styled.div`
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
      content: "${props => props.text}";
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
