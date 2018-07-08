import React from 'react'
import * as S from './styles'
import { Header, Footer} from './../components'
export default ({children, options}) => (
  <S.Layout>
    <Header />
    <S.Main>
      {children}
    </S.Main>
    <Footer />
  </S.Layout>
)