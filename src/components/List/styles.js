import styled from 'styled-components'

export const List = styled.div.attrs({
  className: 'List',
})`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 978px){
    grid-template-columns: repeat(3,1fr);
  }
  
`

export const ListItem = styled.div`

`
