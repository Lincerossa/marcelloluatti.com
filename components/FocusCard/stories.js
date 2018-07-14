import React from 'react'
import { storiesOf } from '@storybook/react'

import FocusCard from './index'

const props = {
  url: "#",
  title: "titolo della card",
  content: "contenuto della card"
}


export default () =>
  storiesOf('FocusCard', module)
    .add('Default', () => <FocusCard {...props} />)