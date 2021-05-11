import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Image from '../Image'
import TextDistortion from '../TextDistortion'


const Hero = ({ image, maintitle, title, subtitle, supertitle }) => (
  <S.HeroWrapper>
    <Image image={image} hasShadow />
    {maintitle && <S.Maintitle><TextDistortion>{maintitle}</TextDistortion></S.Maintitle>}
    <S.HeroHeader>
      <Wrapper size="large">
        {supertitle && <S.Supertitle>{supertitle}</S.Supertitle>}
        {title && <S.Title>{title}</S.Title>}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </Wrapper>
    </S.HeroHeader>
  </S.HeroWrapper>
)


export default Hero