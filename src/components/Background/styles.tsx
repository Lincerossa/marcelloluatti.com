import styled from 'styled-components'
import { TBackgroundProps } from './types'

export const Background = styled.div<TBackgroundProps>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  * {
    color: ${({ color }) => color};
  }
`
