import React from 'react'
import * as S from './styles'

const List = ({ columns = 1, children }) => (
  <S.List columns={columns}>
    {React.Children.map(children, (child) => <S.ListItem>{child}</S.ListItem>)}
  </S.List>
)

export default List
