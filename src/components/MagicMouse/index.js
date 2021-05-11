import React from "react"

import { useMouse } from '../../hooks'
import * as S from './styles'

export default () => {
  const mouseStatus = useMouse()

  return (
    <S.MagicMouseWrapper>
      <S.MagicMouse  {...mouseStatus} />
    </S.MagicMouseWrapper>
  )
}