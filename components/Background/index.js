import React from 'react'
import * as S from './styles'

const Background = ({ color, textColor, children }) => (
  <S.Background
    color={color}
    textColor={textColor}
  >
    {children}
  </S.Background>
)


export default Background
