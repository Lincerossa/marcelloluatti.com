import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`

export const PageInner = styled.div`
`

export const Disclaimer = styled.div`
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 2rem;
  letter-spacing: .04em;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }  
`

export const DisclaimerSub = styled.div`
  font-weight: 600;
  margin-bottom: .5rem;
`

export const ListGroup = styled.div`
  margin-bottom: 2rem;
`

export const ListTitle = styled.div``

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  margin: 0 -.5rem;
`

export const ListItem = styled.li`
  margin-bottom: .5rem;
  list-style: none;
  background-color: white;
  width: 300px;
  margin: 0 .5rem;
  border: 1px solid black;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
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

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`