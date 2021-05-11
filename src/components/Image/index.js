import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const MyImage = ({ image, hasShadow }) => (
  <S.ImageWrapper>
    <Image {...image} layout="fill"  />
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)
 
export default MyImage

