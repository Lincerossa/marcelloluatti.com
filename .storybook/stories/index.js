import React from "react"
import {  addDecorator } from "@storybook/react"
import { ThemeProvider } from 'styled-components'
import List from "../../components/List/stories"
import Padder from "../../components/Padder/stories"
import Wrapper from "../../components/Wrapper/stories"
import Background from "../../components/Background/stories"
import Card from "../../components/Card/stories"
import PostHero from "../../components/PostHero/stories"
import Sky from "../../components/Sky/stories"
import RichText from "../../components/RichText/stories"
import TextBlock from "../../components/TextBlock/stories"

import theme from '../../styles/theme'


const themeDecorator = storyFn => (
  <ThemeProvider theme={theme} >
    {storyFn()}
  </ThemeProvider>
)
addDecorator(themeDecorator)

List()
Padder()
Wrapper()
Background()
Card()
PostHero()
Sky()
RichText()
TextBlock()