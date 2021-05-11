import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './index'

export default () =>
  storiesOf('Header', module)
    .add('Default', () => <Header />)
