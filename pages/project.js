import React from 'react'
import projects from '../data/projects'

import styled from 'styled-components'
import { Wrapper, Padder, Background } from '../components'
import { getSlugFromProps } from '../utility'
import globalProvider from '../hoc'

const Page = (props) => {
  const slug = getSlugFromProps(props)
  const project = projects.find(project => project.slug === slug)

  if(!project) return <div>nessun project corrisponde allo slug</div>

  const { supertitle, title, subtitle, media, content } = project

  return (
      <Background color="#e2473b" textColor="#fff">
        {media && media.url && <MediaWrapper>
          <Media src={media.url} />
          <Wrapper>
          <MediaHeader>
            <Supertitle>{supertitle}</Supertitle>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </MediaHeader>
          </Wrapper>

        </MediaWrapper>}
        <Wrapper>
          <Padder size="big">
            { content && <div>{content}</div>}
          </Padder>
        </Wrapper>
    </Background>
  )

}








const MediaWrapper = styled.div`
  height: calc(100vh - 2.5rem);
  position: relative;
  &:before{
    content: "";
    position: absolute;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: linear-gradient(to top,rgba(0,0,0,.75),transparent);
  }
`

const Media = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

const MediaHeader = styled.div`
  position: absolute;
  bottom: 3rem;
`


const Supertitle = styled.div`
  font-family: sans-serif;
  color: ${ props => props.theme.colors.orange};
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 1rem;
`

const Subtitle = styled.div`
  text-transform: uppercase;
`

export default globalProvider(Page)