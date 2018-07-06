import React from 'react'
import * as S from './styles'
import posts from '../../data/posts'

const getPost = ({ slug }) => {
  return posts.find(post => post.slug === slug)
}

const getSlugFromProps = (props) => {
  return props && props.url && props.url.query && props.url.query.slug
}

export default (props) => {

  const post = getPost({slug: getSlugFromProps(props)})

  if(!post) return <div>nessun post corrisponde allo slug</div>

  const { title, content } = post
  return (
    <S.PostWrapper>
      { title && <h1>{title}</h1>}
      { content && <p>{content}</p>}
    </S.PostWrapper>
  )

}