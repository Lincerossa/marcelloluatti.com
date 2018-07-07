import React from 'react'
import { storiesOf } from '@storybook/react'

import Wrapper from './index'

export default () =>
  storiesOf('Wrapper', module)
    .add('Default', () => <Wrapper size="small">Prova wrapping small</Wrapper>)
    .add('Wrapper medium', () => <Wrapper size="medium">Prova wrapper medium</Wrapper>)
