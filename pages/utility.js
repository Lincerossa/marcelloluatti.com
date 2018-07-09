export const getSlugFromProps = (props) => {
  return props && props.router && props.router.query && props.router.query.slug
}
