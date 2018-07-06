import React from "react"
import {  addDecorator } from "@storybook/react"
import { ThemeProvider } from 'styled-components'
import List from "../components/List/List.stories"




const themeDecorator = storyFn => (
  storyFn()
)
addDecorator(themeDecorator)

List()