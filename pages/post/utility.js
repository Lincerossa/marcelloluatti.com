import posts from '../../data/posts'

export const getPost = ({ slug }) => {
  return posts.find(post => post.slug === slug)
}

export const getSlugFromProps = (props) => {
  return props && props.url && props.url.query && props.url.query.slug
}