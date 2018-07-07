import styled from 'styled-components'

export const Disclaimer = styled.div`
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 2rem;
  letter-spacing: .04em;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }  
`

export const LogoWrapper = styled.div`
  text-align: center;
`

export const DisclaimerSub = styled.div`
  font-weight: 600;
  margin-bottom: .5rem;
`

export const ListGroup = styled.div`
`

export const ListTitle = styled.div``

export const ListItem = styled.div`
 
  background-color: white;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;

  &:hover{
    background-color: black;
    color: white;
  }
  
`

export const ListItemHeader = styled.div`
  border-bottom:1px solid black;
  padding: 1rem;
`

export const ListItemContent = styled.div`
  padding: 1rem;
`

