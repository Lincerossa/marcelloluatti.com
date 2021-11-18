import React, {FC } from 'react'
import * as S from './styles'
import { TBackgroundProps } from './types'

const Background: FC<TBackgroundProps> = ({ background, color, children }) => (
  <S.Background
    color={color}
    background={background}
  >
    {children}
  </S.Background>
)

export default Background
