import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const Card = ({ options = {}, media, supertitle, title, tags, subtitle, content }) => {

  const { html } = content && trimHtml(content, { limit: 75 });
  const { full } = options
  
  return(
    <S.Card>
      <S.MediaWrapper full={full} >
        <S.Media src={media.url} alt={media.alt} title={media.title} />
      </S.MediaWrapper>
      
      <S.Description full={full}>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title full={full}>{title}</S.Title>
        { tags && tags.length > 0 &&
          <S.TagsWrapper>
            {
              tags.map(tag => <S.Tag>{tag}</S.Tag>)
            }
          </S.TagsWrapper>
        }
        {subtitle && <S.Subtitle full={full}>{subtitle}</S.Subtitle>}
        {html && <S.Content>{html}</S.Content>}
      </S.Description>
    </S.Card>
  )
}


export default Card
