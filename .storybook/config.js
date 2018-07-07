import { configure, setAddon } from '@storybook/react'

function loadStories() {
  require('./stories')
}

configure(loadStories, module)
