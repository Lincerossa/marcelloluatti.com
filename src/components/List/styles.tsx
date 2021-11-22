import styled from 'styled-components'
import { TListProps } from './types'

type ListProps = Pick<TListProps, 'columns'>

export const List = styled.div<ListProps>`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 978px){
    grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  }
`

export const ListItem = styled.div`

`
