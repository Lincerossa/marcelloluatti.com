import styled from 'styled-components'


export const List = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 -.5rem;
  border:2px solid violet;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    overflow: auto;
  }
`

export const ListItemWrapper = styled.div`
  flex-basis: ${props => `calc(${100/props.columns}%)`};
  margin: .5rem;
`