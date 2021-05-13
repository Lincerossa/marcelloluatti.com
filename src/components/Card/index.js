import React from 'react'
import Image from '../Image'
import * as S from './styles'

const Card = ({ image, supertitle, title, tags, subtitle }) => {
  return(
    <S.Card>
      <S.ImageWrapper>
        <Image image={image} />
      </S.ImageWrapper>
      
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
      </S.Description>
    </S.Card>
  )
}


export default Card
