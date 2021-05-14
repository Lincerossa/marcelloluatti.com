import React from 'react'
import Link from 'next/link'

import Card from '../Card'
import List from '../List'
import * as S from './styles'

const ListOfCards = ({items}) => {
  return (
    <List columns={3} >
      {items.map(item => <Link key={item.slug} href="/[...dynamic]" as={`/${item.slug}`} disabled={!item.slug}><a><S.ListItem> <Card {...item} /></S.ListItem></a></Link>)}
    </List>
  )
}

export default ListOfCards