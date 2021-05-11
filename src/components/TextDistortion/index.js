import React from "react"
import PropTypes from "prop-types"
import * as S from './styles'

const TextDistortion = ({children}) => (
  <S.TextDistortion>
    {children}
  </S.TextDistortion>
)


TextDistortion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextDistortion
