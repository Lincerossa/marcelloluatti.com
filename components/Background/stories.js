import React from 'react'
import { storiesOf } from '@storybook/react'

import Background from './index'

export default () =>
  storiesOf('Background', module)
    .add('Default', () => <Background color={{ background:'white'}}>white</Background>)
    .add('Green', () => <Background color={{ background:'green'}}>green</Background>)
    .add('Orange text white', () => <Background color={{ background:'orange', text: "white"}}>orange</Background>)
