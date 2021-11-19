import React, { FC } from 'react'
import * as S from './styles'
import { TWrapperProps } from './types'

const Wrapper: FC<TWrapperProps> = ({ children, size, hasPadding = true }) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>{children}</S.Wrapper>
)

export default Wrapper
