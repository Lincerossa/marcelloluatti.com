import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const Card = ({ media, supertitle, title, subtitle, content }) => {

  const { html } = content && trimHtml(content, { limit: 100 });

  return(
    <S.Card>
      <S.MediaWrapper>
        <S.Media src={media.url} alt={media.alt} title={media.title} />
      </S.MediaWrapper>
      <S.Description>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Content>{html}</S.Content>
      </S.Description>
    </S.Card>
  )
}


export default Card
