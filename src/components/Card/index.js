import React from 'react'

import trimHtml from 'trim-html'
import Image from '../Image'
import * as S from './styles'

const Card = ({ image, supertitle, title, tags, subtitle, content }) => {
  const { html } = content && trimHtml(content, { limit: 75 });
  return(
    <S.Card>
      <S.MediaWrapper>
        <Image image={image} />
      </S.MediaWrapper>
      
      <S.Description>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        { tags?.length > 0 &&
          <S.TagsWrapper>
            {
              tags?.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)
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
