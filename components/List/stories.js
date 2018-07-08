import React from 'react'
import { storiesOf } from '@storybook/react'

import posts from '../../data/posts'
import List from './index'
import Card from '../Card'


const manyPosts = [
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
  ...posts,
]

export default () =>
  storiesOf('List', module)
    .add('Default', () => <List
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)

    .add('8 colonne', () => <List
      columns={8}
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)

    .add('2 colonne', () => <List
      columns={2}
      items={manyPosts}
      ListItem={({ item }) => <Card {...item} />}
    />)