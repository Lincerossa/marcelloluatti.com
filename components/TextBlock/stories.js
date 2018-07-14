import React from 'react'
import { storiesOf } from '@storybook/react'

import TextBlock from './index'
import theme from '../../styles/theme'

export default () =>
  storiesOf('TextBlock', module)
    .add('Default', () => <TextBlock><p>prova di TextBlock</p></TextBlock>)
    .add('Green', () => <TextBlock color={{text: 'white', background:"green"}}><p>prova di TextBlock green</p></TextBlock>)
    .add('Orange', () => <TextBlock color={{text: 'white', background:theme.colors.orange}}>orange</TextBlock>)
