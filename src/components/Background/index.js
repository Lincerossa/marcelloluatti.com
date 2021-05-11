import React from 'react'
import * as S from './styles'

const Background = ({ background, children }) => (
  <S.Background
    background={background}
  >
    {children}
  </S.Background>
)


export default Background
