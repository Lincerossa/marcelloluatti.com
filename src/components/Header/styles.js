import styled from 'styled-components'


export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${ props => props.theme.colors.dark};
  color: white;
  padding: 1rem 2rem;
  z-index: 2;
`
