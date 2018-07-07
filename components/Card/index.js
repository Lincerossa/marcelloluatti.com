import React from 'react'
import * as S from './styles'

const Card = ({ media, supertitle, title, subtitle, content }) => (
  <S.Card>
    <S.MediaWrapper>
      <S.Media src={media.url} alt={media.alt} title={media.title} />
    </S.MediaWrapper>
    <S.Description>
      <S.Supertitle>{supertitle}</S.Supertitle>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Content>{content}</S.Content>
    </S.Description>
  </S.Card>
)


export default Card
