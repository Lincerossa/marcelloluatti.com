import React from 'react'
import { storiesOf } from '@storybook/react'

import RichText from './index'


export default () =>
  storiesOf('RichText', module)
    .add('Default', () => <RichText><p>Lorem ipsum</p></RichText>)
    .add('Prova con altri tag', () => <RichText><h1>titolo h1</h1><p>Lorem ipsum</p></RichText>)
    .add('Prova prop text', () => <RichText text="<h1>titolo h1</h1><p>Lorem ipsum</p>"/> )
