import React from 'react'
import { storiesOf } from '@storybook/react'

import Padder from './index'

export default () =>
  storiesOf('Padder', module)
    .add('Default', () => <Padder size="small">Prova padding small</Padder>)
    .add('Padding medium', () => <Padder size="medium">Prova padding medium</Padder>)
