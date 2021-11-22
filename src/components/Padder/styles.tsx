import styled from 'styled-components'
import { TPadderProps } from './types'

const SIZES = {
  small: 1,
  regular: 2,
  large: 3,
}

type PadderProps = Pick<TPadderProps, 'size'>

export const Padder = styled.div<PadderProps>`
  padding: ${(props) => `${SIZES[props.size]}rem 0`};
`
