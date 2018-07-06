import React from 'react'
import { getPost, getSlugFromProps } from './utility'
import * as S from './style'

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