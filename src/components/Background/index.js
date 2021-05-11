import React from 'react'
import * as S from './styles'

const Background = ({ background, color, children }) => (
  <S.Background
    color={color}
    background={background}
  >
    {children}
  </S.Background>
)


export default Background
