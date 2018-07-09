import React from 'react'
import * as S from './styles'
import posts from '../../data/posts'

import { Wrapper, Padder, Background } from '../../components'
import { getSlugFromProps } from '../utility'

export default (props) => {
  const slug = getSlugFromProps(props)
  const post = posts.find(post => post.slug === slug)

  if(!post) return <div>nessun post corrisponde allo slug</div>

  const { supertitle, title, subtitle, media, content } = post

  return (
    <Background color="#e2473b" textColor="#fff">
      {media && media.url && <S.MediaWrapper>
        <S.Media src={media.url} />
        <Wrapper>
        <S.MediaHeader>
          <S.Supertitle>{supertitle}</S.Supertitle>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.MediaHeader>
        </Wrapper>

      </S.MediaWrapper>}
      <Wrapper>
        <Padder size="big">
          { content && <div>{content}</div>}
        </Padder>
      </Wrapper>
    </Background>
  )

}