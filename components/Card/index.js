import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const Card = ({ options = {}, media, supertitle, title, subtitle, content }) => {

  const { html } = content && trimHtml(content, { limit: 100 });
  const { full } = options
  
  return(
    <S.Card>
      {
        full 
          ? (
            <S.MediaWrapperFull>
              <S.Media src={media.url} alt={media.alt} title={media.title} full={full} />
            </S.MediaWrapperFull>
          )
          
          
          : (
            <S.MediaWrapper>
              <S.Media src={media.url} alt={media.alt} title={media.title} />
            </S.MediaWrapper>
          )
      }
      
      <S.Description full={full}>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Content>{html}</S.Content>
      </S.Description>
    </S.Card>
  )
}


export default Card
