import styled from 'styled-components'


export const Background = styled.div`
  background-color: ${props => props.background};
  color: ${props => props.color};
  * {
    color: ${props => props.color};
  }
`
