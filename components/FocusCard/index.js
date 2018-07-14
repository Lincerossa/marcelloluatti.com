import React from 'react'

import trimHtml from 'trim-html'
import * as S from './styles'

const FocusCard = ({ title, content, backgroundColor, textColor }) => {

  const { html } = content && trimHtml(content, { limit: 50 });
  
  return(
    <S.FocusCard backgroundColor={backgroundColor} textColor={textColor} >
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.FocusCard>
  )
}


export default FocusCard
