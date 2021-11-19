import styled from 'styled-components'
import { TWrapperProps } from './types'

const SIZES = {
  small: 200,
  regular: 500,
  big: 900,
  large: 1220,
}

export const Wrapper = styled.div<TWrapperProps>`
  width: 100%;
  margin: 0 auto;
  ${({ hasPadding }) => hasPadding && 'padding: 0 1rem'};
  max-width: ${({ size }) => `${SIZES[size]}px`};
`
