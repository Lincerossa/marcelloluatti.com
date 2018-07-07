import React from 'react'
import { storiesOf } from '@storybook/react'

import Background from './index'

export default () =>
  storiesOf('Background', module)
    .add('Default', () => <Background color="white">white</Background>)
    .add('Green', () => <Background color="green">green</Background>)
    .add('Orange', () => <Background color="orange">orange</Background>)
