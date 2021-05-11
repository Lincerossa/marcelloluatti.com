import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const Card = ({ options = {}, media, supertitle, title, tags, subtitle, content }) => {
  const { html } = content && trimHtml(content, { limit: 75 });
  return(
    <S.Card>
      <S.MediaWrapper >
        <S.Media src={media.url} alt={media.alt} title={media.title} />
      </S.MediaWrapper>
      
      <S.Description>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        { tags?.length > 0 &&
          <S.TagsWrapper>
            {
              tags?.map(tag => <S.Tag>{tag}</S.Tag>)
            }
          </S.TagsWrapper>
        }
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        {html && <S.Content>{html}</S.Content>}
      </S.Description>
    </S.Card>
  )
}


export default Card
