import React from 'react'
import * as S from './styles.js'

const RichText = ({ text, children }) => {

  if(text) return (<S.RichText
    dangerouslySetInnerHTML={{__html: text}}
  />)

  if(children) return <S.RichText>{children}</S.RichText>

  return null
}

export default RichText