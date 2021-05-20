import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
`;

export const MainLabel = styled.div`
  height: 60vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  font-size: 5rem;
  @media (min-width: 978px){
    font-size: 15rem;
    height: 100vh;
  }
`;

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
  background: ${(props) => (props.initial ? 'transparent' : 'rgb(255,255,255,.9)')};
  box-shadow: ${(props) => (props.initial ? 'none' : '0px 2px 8px rgba(0,0,0,0.15)')};
  ${(props) => (props.direction === 'down' && !props.isMenuOpen
    ? 'transform: translate(0,-100%);'
    : 'transform: translate(0,0%);')
}
  ${(props) => props.isMenuOpen && `
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

export const Menu = styled.div`
  display: ${(props) => (props.isMenuOpen ? `
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props.theme.colors.secondary};
  ` : 'none')};

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
    color: ${(props) => ((props.initial || props.isMenuOpen) ? 'white' : props.theme.colors.secondary)} !important;
    ${(props) => props.isActive && `color: ${props.theme.colors.primary}  !important`};
    &:hover{
      color: ${(props) => props.theme.colors.primary} !important;
    }
  }

  &:last-of-type{
    margin: 0;
  }

`

export const Hamburger = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1rem;
  width: 25px;
  @media (min-width: 768px){
    display: none;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => ((props.initial || props.isMenuOpen) ? 'white' : props.theme.colors.secondary)} !important;
  }
`

export const Footer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
`

export const FooterInner = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`

export const ExternalLinks = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

export const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  color: white !important;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const MouseTracker = styled.div`
  @media (min-width: 768px){
    position: absolute;
    border: 2px solid ${(props) => props.theme.colors.primary};
    height: 20px;
    border-radius: 50%;
    pointer-events: none;
    width: 20px;
    transform: translate(-50%,-50%);
  }  
`

export const MousePoint = styled.div`
  @media (min-width: 768px){
    position: fixed;
    background-color: ${(props) => props.theme.colors.primary};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 3;
    transform: translate(-50%,-50%);
  }
`

export const Logo = styled.div`
  width: 60px;
  font-size: 2rem;
  display: flex;

  @media (min-width: 768px){
    width: 90px;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => ((props.initial || props.isMenuOpen) ? 'white' : props.theme.colors.secondary)} !important;
    transition: .2s  all;
  }
  &:hover {
    svg{
      fill: ${(props) => props.theme.colors.primary}  !important;
    }
  }
`
