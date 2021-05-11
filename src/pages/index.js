import React from "react"
import * as C from "../components"
import * as M from '../components/Maybe'
import { routes, components } from '../data'

const App = ({ components }) => components?.map(({id, component ,...props}) => {
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

export async function getStaticProps() {
  const route = routes.find((e) => e.slug === "")
  return {
    props: {
      route,
      components: components.filter(({id}) => route.componentIds.includes(id))
    }
  }
}

export default App