import data from '../data'
import App from '../App'

export async function getStaticProps() {
  const { routes, components } = data
  const route = routes.find((e) => !e.slug)
  return {
    props: {
      route,
      components: route.componentIds.map((component) => components.find(({ id }) => id === component)),
    },
  }
}

export default App
