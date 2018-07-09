import React from 'react'
import * as S from './styles'
import posts from '../../data/posts'

import { List, Wrapper, Padder, Background, Card } from '../../components'
import Layout from '../../layout'

const getPost = ({ slug }) => {
  return posts.find(post => post.slug === slug)
}

const getSlugFromProps = (props) => {
  return props && props.url && props.url.query && props.url.query.slug
}

export default (props) => {

  const post = getPost({slug: getSlugFromProps(props)})

  if(!post) return <div>nessun post corrisponde allo slug</div>

  const { supertitle, title, subtitle, media, content } = post

  console.log({post})
  return (
    <Layout>
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
    </Layout>
  )

}