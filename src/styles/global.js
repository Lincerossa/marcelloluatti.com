import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

  html, body {
    height: auto;
    font-size: 1rem;
    color: black;
    margin: 0;
    @media (min-width: 768px){
      cursor: none;
    }
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
      color: ${theme.colors.thirdary} !important;
    }
  }
  a > * {
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

`
