import styled from 'styled-components'


export const FocusCard = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  display: block;
  height: 100%;
  position: relative;
  padding: 2rem;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.15)
  }
`


export const Title = styled.div`
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .04em;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid;
`

export const Content = styled.div`

`