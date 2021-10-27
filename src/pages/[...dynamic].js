import data from '../data'
import App from '../App'

export async function getStaticPaths() {
  const { routes } = data
  return {
    paths: routes.filter((e) => e.slug !== '').map(({ slug }) => ({ params: {
      dynamic: slug.split('/'),
    } })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { dynamic } }) {
  const { routes, components } = data
  const route = routes.find((e) => e.slug === dynamic.join('/'))
  return {
    props: {
      route,
      components: route.componentIds.map((component) => components.find(({ id }) => id === component)),
    },
  }
}

export default App
