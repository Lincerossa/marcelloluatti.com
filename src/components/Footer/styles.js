import styled from 'styled-components'


export const Footer = styled.div`
  background-color: ${ props => props.theme.colors.secondary};
  color: ${ props => props.theme.colors.primary};
`

export const FooterInner = styled.div`
  padding: 1rem 0;
`
