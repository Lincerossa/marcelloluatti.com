import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from './index'

export default () =>
  storiesOf('Footer', module)
    .add('Default', () => <Footer />)
