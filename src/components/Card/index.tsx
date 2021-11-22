import React, { FC } from 'react'
import Image from '../Image'
import * as S from './styles'
import { TCardProps } from './types'

const Card: FC<TCardProps> = ({
  image, supertitle, title, tags, subtitle, layout,
}) => (
  <S.Card>
    <S.ImageWrapper layout={layout}>
      <Image image={image} />
    </S.ImageWrapper>

    <S.Description>
      <S.Supertitle>{supertitle}</S.Supertitle>
      <S.Title>{title}</S.Title>
      { tags?.length > 0
          && (
          <S.TagsWrapper>
            {
              tags?.map((tag) => <S.Tag key={tag}>{tag}</S.Tag>)
            }
          </S.TagsWrapper>
          )}
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Description>
  </S.Card>
)

export default Card
