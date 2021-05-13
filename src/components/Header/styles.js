import styled from 'styled-components'


export const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  transition: .2s  all;
  transition-timing-function: ease-in;
  justify-content: space-between;
  background: ${props => props.inverted ? 'transparent' : "rgb(255,255,255,.9)"};
  box-shadow: ${props => props.inverted ? "none" : "0px 2px 8px rgba(0,0,0,0.15)"};
  ${props => props.scrollDirection === "down"
    ? 'transform: translate(0,-100%);'
    :'transform: translate(0,0%);'
  }
  ${props => props.isOpen && `
    bottom: 0;
  `}

  @media (min-width: 768px){
    bottom: auto;
  }
`

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .75rem 0;
`
export const Logo = styled.div`
  width: 50px;
  left: 1rem;
  padding: 1rem 0;
  font-size: 2rem;
  position: relative;
  @media (min-width:768px){
    width: 60px;
  }
`

export const Menu = styled.div`
  display: ${props => props.isOpen ? `
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props.theme.colors.secondary};
  ` : 'none'};

  @media (min-width: 768px){
    display: block;
    position: relative;
  }
`

export const MenuItems = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 20vh;
  transform: translate(-50%,0);

  @media (min-width: 768px){
    padding-left: 1rem;
    display: flex;
    align-items: center;
    left: auto;
    top: auto;
    position: relative;
    transform: inherit;
  }
`

export const MenuItem = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  letter-spacing: .1rem;
  font-size: 2rem;
  position: relative;
  margin-bottom: 1.5rem;

  @media (min-width: 768px){
    margin-bottom: 0;
    font-size: 1.5rem;
    margin-right: 2rem;
  }

  
  a {
    color: ${props => props.isActive ? props.theme.colors.primary : (props.inverted ? "white" : "black")} !important;
    &:hover{
      color: ${props => props.theme.colors.primary} !important;
    }
  }

  &:last-of-type{
    margin: 0;
  }

`

export const Hamburger = styled.div`
  position: absolute;
  top: .7rem;
  right: 1rem;
  color: white;
  font-size: 1.5rem;
  color: ${props => props.inverted ? "white" : props.theme.colors.primary };
  ${props => props.isOpen && "color: white"};
  @media (min-width: 768px){
    display: none;
  }
`


