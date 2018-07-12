import React from 'react'
import * as S from './styles'
import projects from '../../data/projects'

import { Wrapper, Padder, Background } from '../../components'
import { getSlugFromProps } from '../../utility'
import globalProvider from '../../hoc'

const Page = (props) => {
  const slug = getSlugFromProps(props)
  const project = projects.find(project => project.slug === slug)

  if(!project) return <div>nessun project corrisponde allo slug</div>

  const { supertitle, title, subtitle, media, content } = project

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

export default globalProvider(Page)