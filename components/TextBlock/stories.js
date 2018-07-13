import React from 'react'
import { storiesOf } from '@storybook/react'

import TextBlock from './index'

export default () =>
  storiesOf('TextBlock', module)
    .add('Default', () => <TextBlock><p>prova di TextBlock</p></TextBlock>)
    .add('Green', () => <TextBlock color="green"><p>prova di TextBlock green</p></TextBlock>)
    .add('Orange', () => <TextBlock color="orange">orange</TextBlock>)
