import React from 'react'
import Loading from '../Loading'
import * as S from './styles'

const FiltersBar = (props) => (
  <S.FiltersBarWrapper>
    <S.InputInner>
      <input {...props} />
      {props.loading && <S.LoadingWrapper><Loading /></S.LoadingWrapper>}
    </S.InputInner>
  </S.FiltersBarWrapper>
)

export default FiltersBar
