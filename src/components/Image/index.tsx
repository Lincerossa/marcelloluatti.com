import React, { FC } from 'react'
import * as S from './styles'
import { TImageProps } from './types'

const MyImage: FC<TImageProps> = ({ image, hasShadow }) => (
  <S.ImageWrapper>
    <img src={image.src} alt={image.alt} />
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)

export default MyImage
