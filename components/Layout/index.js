import React from 'react'
import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

export default ({children, options }) => {

  const basic = options && options.layout && options.layout.basic

  return(
    <S.Layout basic={basic} >
     { !basic && <Header />}
      <S.Main>
        {children}
      </S.Main>
      { !basic && <Footer />}
    </S.Layout>
  )
}