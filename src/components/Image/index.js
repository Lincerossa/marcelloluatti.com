/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import * as S from './styles'

const MyImage = ({ image, hasShadow }) => (
  <S.ImageWrapper>
    <img {...image} />
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)

export default MyImage
