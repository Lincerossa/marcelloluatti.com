import React from 'react'
import * as S from './styles'


export default ({ columns = 4, items, ListItem }) => (
  <S.List>
    {
      items &&
      items.length > 0 &&
      items.map((item, key) => {
        return(<S.ListItemWrapper columns={columns} key={key}>
          <ListItem item={item} />
        </S.ListItemWrapper>)
      })
    }
  </S.List>
)