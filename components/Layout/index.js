import React from 'react'
import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

export default ({children, options}) => (
  <S.Layout>
    <Header />
    <S.Main>
      {children}
    </S.Main>
    <Footer />
  </S.Layout>
)