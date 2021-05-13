import styled from 'styled-components'


export const Footer = styled.div`
  background-color: ${ props => props.theme.colors.secondary};
  color: ${ props => props.theme.colors.primary};
  border-top: 1px dashed ${ props => props.theme.colors.thirdary};
`

export const FooterInner = styled.div`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
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
export const ExternalLinks = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  a {
    display: flex;
    align-items: center;
  }
`