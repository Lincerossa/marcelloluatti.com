import React from 'react'
import * as C from './components'
import * as M from './components/Maybe'

const App = ({ components }) => components?.map(({ id, component, ...props }) => {
  const Component = C[component]
  return (
    <M.WithBackground {...props} key={id}>
      <M.WithWrapper {...props}>
        <M.WithPadder {...props}>
          <Component {...props} />
        </M.WithPadder>
      </M.WithWrapper>
    </M.WithBackground>
  )
})

export default App
