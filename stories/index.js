import React from "react"
import {  addDecorator } from "@storybook/react"
import { ThemeProvider } from 'styled-components'
import List from "../components/List/stories"
import Padder from "../components/Padder/stories"
import Wrapper from "../components/Wrapper/stories"




const themeDecorator = storyFn => (
  storyFn()
)
addDecorator(themeDecorator)

List()
Padder()
Wrapper()