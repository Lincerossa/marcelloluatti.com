import React from 'react'
import { storiesOf } from '@storybook/react'

import Sky from './index'

export default () =>
  storiesOf('Sky', module)
    .add('Default', () =>  <Sky fixed />)
    .add('tante', () =>  <Sky stars={200} background="black" color="white" fixed />)
    .add('tantissime', () =>  <Sky stars={300} background="black" color="white" fixed />)
