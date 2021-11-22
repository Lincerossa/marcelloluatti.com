import React, { FC } from 'react'
import * as S from './styles'
import { TPadderProps } from './types'

const Padder: FC<TPadderProps> = ({ size, children }) => (
  <S.Padder size={size}>{children}</S.Padder>
)

export default Padder
