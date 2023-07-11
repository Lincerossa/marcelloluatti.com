import React from 'react'
import * as S from './styles'

const Padder = ({ size, children }) => (
  <S.Padder size={size}>{children}</S.Padder>
)

export default Padder
