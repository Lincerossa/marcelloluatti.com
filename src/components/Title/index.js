import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Title = ({ children, title, noSegment, color }) => (
  <S.Wrapper>
    <S.Title noSegment={noSegment} color={color}>{title}</S.Title>
    {children}
  </S.Wrapper>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  noSegment: PropTypes.bool,
}

export default Title
