import React, { FC } from 'react'
import * as S from './styles'

import { TRichTextProps } from './types'

const RichText: FC<TRichTextProps> = ({ text, children }) => {
  if (text) {
    return (
      <S.RichText
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }

  if (children) return <S.RichText>{children}</S.RichText>

  return null
}

export default RichText
