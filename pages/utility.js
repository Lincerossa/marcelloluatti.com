export const getSlugFromProps = (props) => {
  return props && props.url && props.url.query && props.url.query.slug
}
