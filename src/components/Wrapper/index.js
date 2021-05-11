import React from 'react'
import * as S from './styles'

const Wrapper = ({ children, size, hasPadding = true }) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>{children}</S.Wrapper>
)

export default Wrapper
