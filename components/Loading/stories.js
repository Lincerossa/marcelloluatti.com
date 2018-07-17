import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from './index'

export default () =>
  storiesOf('Background', module)
    .add('Default', () => <Loading /> )
