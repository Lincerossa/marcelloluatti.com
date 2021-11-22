import React, { FC } from 'react'
import * as S from './styles'
import { TListProps } from './types'

const List: FC<TListProps> = ({ columns = 1, children }) => (
  <S.List columns={columns}>
    {React.Children.map(children, (child) => <S.ListItem>{child}</S.ListItem>)}
  </S.List>
)

export default List
