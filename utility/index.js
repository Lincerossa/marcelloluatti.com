export const getSlugFromProps = (props) => {
  return props && props.url.query && props.url.query.slug
}
