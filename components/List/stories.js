import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import List from './index'

const ListItem = ({item}) => <ListItemWrapper>ListItem: {item}</ListItemWrapper>


export default () =>
  storiesOf('List', module)
    .add('Default', () => <List columns={4} items={[1,2,3,4,5]} ListItem={ListItem} />)
    .add('Con 10', () => <List columns={10} items={[1,2,3,4,5]} ListItem={ListItem} />)
    .add('Con 12', () => (
      <List 
        columns={12} 
        items={[1,2,3,4,5,1,2,2,3,3,4,45,5,5535,545,54]} 
        ListItem={({item})=> <ListItem item={item} /> }
      />
    ))


const ListItemWrapper = styled.div`
  border: 2px solid black;
`