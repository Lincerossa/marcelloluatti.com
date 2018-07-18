import React from 'react'
import { storiesOf } from '@storybook/react'

import FiltersBar from './index'

export default () =>
  storiesOf('FiltersBar', module)
    .add('Default', () => <FiltersBar />)
