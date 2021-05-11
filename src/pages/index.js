import React from "react"
import * as C from "../components"
import * as M from '../components/Maybe'
import { routes, components } from '../data'

const App = (props) => {
  const { components } = props

  return components?.map(({id, ...props}) => {
    const Component = C[id.split("_")[0]]
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
}


export async function getStaticProps() {

  const currentRoute = routes.find((e) => e.slug === "")

  return {
    props: {
      ...currentRoute,
      currentRoute: currentRoute.slug,
      components: currentRoute.componentIds.map(id => components.find(component => component.id === id)).filter(e => e)
    }
  }
}

export default App